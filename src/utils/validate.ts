export function validateString(input: string) {
  const regex = /[\d|\W]/g;
  return (
    typeof input === 'string' &&
    !regex.test(input) &&
    input.length > 0 &&
    input.length < 16
  );
}
