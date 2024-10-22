const checkFirstLetters = require('./index');
test('сравнение первых букв слов', () => {
    expect(checkFirstLetters('Apple', 'Apricot')).toBe(true);
});

test('сравнение первой буквы в разных словах', () => {
    expect(checkFirstLetters('Apple', 'Banana')).toBe(false);
});

test('сравнение первых букв с разными регистрами', () => {
    expect(checkFirstLetters('apple', 'Apricot')).toBe(true);
});

test('проверка с пустыми строками', () => {
    expect(checkFirstLetters('A', '')).toBe(false);
    expect(checkFirstLetters('', 'B')).toBe(false);
});


  
