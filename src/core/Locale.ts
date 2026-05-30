/**
 * 语言状态管理（单例）。
 *
 * 只保留两个语言：zh（中文，默认）和 en（英文）。
 * 外部在语言改变时调用 setLang()，订阅者在 onChange 回调更新 UI。
 */
export type Lang = 'zh' | 'en';

type OnChangeCallback = (lang: Lang) => void;

class LocaleManager {
  private _lang: Lang = 'zh';
  private listeners: OnChangeCallback[] = [];

  get current(): Lang {
    return this._lang;
  }

  setLang(lang: Lang): void {
    if (this._lang === lang) return;
    this._lang = lang;
    for (const cb of this.listeners) cb(lang);
  }

  onChange(cb: OnChangeCallback): void {
    this.listeners.push(cb);
  }

  /**
   * 取当前语言对应的文本。
   * t('中文', 'English') 返回当前语言的文本。
   */
  t(zh: string, en?: string): string {
    return this._lang === 'zh' ? zh : (en ?? zh);
  }
}

export const Locale = new LocaleManager();
