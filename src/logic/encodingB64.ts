export function Utf8toB64 (str: string): string {
  return window.btoa(unescape(encodeURIComponent(str)))
}

export function B64ToUtf8 (str: string): string {
  return decodeURIComponent(escape(window.atob(str)))
}
