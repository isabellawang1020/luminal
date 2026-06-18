export interface PreloadProgress {
  loaded: number;
  total: number;
  fraction: number;
}

export class ResourcePreloader {
  private urls: string[];
  private concurrency: number;
  private completedCount = 0;
  private completedBytes = 0;

  constructor(urls: string[], concurrency = 10) {
    this.urls = [...new Set(urls)].filter(Boolean);
    this.concurrency = concurrency;
  }

  async preload(onProgress: (p: PreloadProgress) => void): Promise<void> {
    const fileCount = this.urls.length;
    let estimatedTotal = fileCount * 500_000;
    let resolvedTotal = 0;
    let resolvedCount = 0;

    onProgress({ loaded: 0, total: estimatedTotal, fraction: 0 });

    let idx = 0;
    const workers = Array.from({ length: this.concurrency }, async () => {
      while (true) {
        const i = idx++;
        if (i >= this.urls.length) break;
        const url = this.urls[i];
        try {
          const resp = await fetch(url);
          const contentLen = parseInt(resp.headers.get('content-length') ?? '0', 10);

          if (contentLen > 0) {
            resolvedTotal += contentLen;
            resolvedCount++;
            if (resolvedCount >= Math.min(fileCount / 2, 10)) {
              estimatedTotal = Math.round(resolvedTotal / resolvedCount * fileCount);
            }
          }

          this.completedCount++;

          let fileBytes = 0;
          if (resp.body) {
            const reader = resp.body.getReader();
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              fileBytes += value.length;
            }
          } else {
            const buf = await resp.arrayBuffer();
            fileBytes = buf.byteLength;
          }

          this.completedBytes += fileBytes;

          const fraction = Math.min(
            fileCount > 0 ? this.completedCount / fileCount : 1,
            0.99,
          );
          onProgress({
            loaded: this.completedBytes,
            total: Math.max(estimatedTotal, this.completedBytes),
            fraction,
          });
        } catch (e) {
          console.warn('[ResourcePreloader] failed:', url, e);
          this.completedCount++;
          const fraction = Math.min(this.completedCount / fileCount, 0.99);
          onProgress({
            loaded: this.completedBytes,
            total: estimatedTotal,
            fraction,
          });
        }
      }
    });

    await Promise.all(workers);
    onProgress({ loaded: this.completedBytes, total: this.completedBytes, fraction: 1 });
  }
}
