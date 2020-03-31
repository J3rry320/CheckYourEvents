export function createArray(length: number) {
  return Array(length)
    .fill(null)
    .map((x, i) => i);
}
