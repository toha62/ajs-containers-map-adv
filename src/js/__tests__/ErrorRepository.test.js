import ErrorRepository from '../ErrorRepository';

const errorRepository = new ErrorRepository();

errorRepository.storage.set(0, 'Unnown type of character');
errorRepository.storage.set(1, 'A character with the same name already exists');
errorRepository.storage.set(2, 'Name should be no more than ten characters');

test.each([
  [0, 'Unnown type of character'],
  [1, 'A character with the same name already exists'],
  [2, 'Name should be no more than ten characters'],
])('Error with code %n should be %s', (code, errorText) => {
  expect(errorRepository.translate(code)).toBe(errorText);
});

test('should return "Unknown error", when code not found', () => {
  expect(errorRepository.translate(10)).toBe('Unknown error');
});
