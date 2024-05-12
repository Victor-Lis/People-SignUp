export function dateFormat(value: string): string | null {
  return value.replace(/^(\d{2})(\d{2})(\d{4})$/, "$1/$2/$3");
}
