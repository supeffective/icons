export function cn(...args: Array<string | number | boolean | null | undefined>): string {
  return args
    .filter(Boolean)
    .map((c) => String(c).trim())
    .join(' ')
    .trim()
}
