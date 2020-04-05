export function validateUserName(input: string) {
  const regex = /[a-zA-Z_ ]+( [a-zA-Z_ ]+)*$/g;
  return (
    typeof input === 'string' &&
    regex.test(input) &&
    input.length > 0 &&
    input.length < 16
  );
}
