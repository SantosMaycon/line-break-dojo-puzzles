export function lineBreak(phrase: string, numberOfColumns: number): string {
  if (numberOfColumns < 1)
    return 'The number of columns should be greater than one.';

  const listOfWords = phrase.split(' ');

  let result = '';
  let line = '';

  for (const word of listOfWords) {
    if ((line + word).length < numberOfColumns) {
      line += word + ' ';
    } else {
      result += line.trim() + '\n';
      line = word + ' ';
    }
  }

  return result + line.trim();
}
