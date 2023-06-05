import { lineBreak } from '../src/index';

describe('Testing line break function', () => {
  it('The return should be of type string', () => {
    const returnType = typeof lineBreak('Frist test', 0);
    expect(returnType).toBe('string');
  });

  it('The return should be the phrase "The number of columns should be greater than one." if the number of columns is less than 1', () => {
    const result = lineBreak('Frist test', 0);
    expect(result).toBe('The number of columns should be greater than one.');
  });

  it('The return should be the phrase "Um pequeno jabuti\nxereta viu dez\ncegonhas felizes.". if the sentence is "Um pequeno jabuti xereta viu dez cegonhas felizes." with 20 columns', () => {
    const result = lineBreak('Um pequeno jabuti xereta viu dez cegonhas felizes.', 20);
    expect(result).toBe('Um pequeno jabuti\nxereta viu dez\ncegonhas felizes.');
  });

  it('The return of this phrase "Um pequeno jabuti xereta viu dez cegonhas felizes." with 20 columns it should have 3 rows', () => {
    const result = lineBreak('Um pequeno jabuti xereta viu dez cegonhas felizes.', 20).split('\n').length;
    expect(result).toBe(3);
  });
});