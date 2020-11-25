const translateToEnglish = (input) => {
    // console.log('English translation');
    const translation = input.toLowerCase();
    let output = '';
    console.log(translation);
    switch (translation) {
        case 'hola':
            output = 'hello';
            break;
        case 'bonjour':
            output = 'hello';
            break;
        case 'salve':
            output = 'hello';
            break;
        case 'bonjour':
            output = 'hello';
            break;
        default:
            output = 'invalid input'
            break;
    }
    // console.log(output);
    return output;
}

const translateToSpanish = (input) => {
    console.log('Spanish translation');
}

const translateToFrench = (input) => {
    console.log('French translation');
}

const translateToLatin = (input) => {
    console.log('Latin translation');
}

export { translateToEnglish, translateToSpanish, translateToFrench, translateToLatin}