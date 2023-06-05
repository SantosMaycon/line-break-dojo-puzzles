export function lineBreak(phrase: string, numberOfColumns: number): string {
  if (numberOfColumns < 1)
    return 'The number of columns should be greater than one.';

  const listOfPhrase = phrase.split(' ');
  
  const newPhrase: string[] = [];
  let count: string;

  listOfPhrase.forEach((phrase, index) => {
    if ((count + phrase).length > numberOfColumns) {
      newPhrase.push(count.concat('\n'));
      count = phrase;

      if (listOfPhrase.length === index + 1) {
        newPhrase.push(count);
      }
    } else {
      if (index === 0) {
        count = phrase;
      } else {
        count = count.concat(' ' + phrase);
      }

      if (listOfPhrase.length === index + 1) {
        newPhrase.push(count);
      }
    }
  });

  return newPhrase.join('');
}
