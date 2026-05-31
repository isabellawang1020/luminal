// Public asset path helper for GitHub Pages subpath deployment.
// Converts absolute paths like '/models/foo.glb' to use Vite's configured base URL.
// Example: a('/models/foo.glb') => '/luminal/models/foo.glb' in production,
//                              => '/models/foo.glb' in dev.
export const a = (p: string): string => {
  const base = import.meta.env.BASE_URL;
  if (p.startsWith('/')) {
    return base + p.slice(1);
  }
  return base + p;
};
