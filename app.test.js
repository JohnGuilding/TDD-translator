const { expect } = require("@jest/globals");

// VALID
it ('should return hello', () => {
    const result = translateToEnglish('Bounjour');
    expect(result).toBe('hello');
})

it ('should return hola', () => {
    const result = translateToSpanish('Hello');
    expect(result).toBe('hola');
})

it ('should return bonjour', () => {
    const result = translateToFrench('salve');
    expect(result).toBe('bonjour');
})

it ('should return salve', () => {
    const result = translateToLatin('hola');
    expect(result).toBe('salve');
})

// INVALID
it ('should return invalid input', () => {
    const result = translateToEnglish('ola');
    expect(result).toBe('invalid input');
})

it ('should return invalid input', () => {
    const result = translateToFrench(h33h3m09);
    expect(result).toBe('invalid input');
})

it ('should return invalid input', () => {
    const result = translateToLatin('lorem ipsum');
    expect(result).toBe('invalid input');
})

// NULL
it ('should return invalid input', () => {
    const result = translateToSpanish('');
    expect(result).toBe('invalid input');
})