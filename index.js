module.exports.encipher = (plaintext, railkey, spaceCharacter = '') => {
    if (railkey < 2 || railkey >= plaintext.length) return plaintext;
    plaintext = plaintext.toUpperCase().replaceAll(' ', spaceCharacter);
    while ((plaintext.length) % railkey > 0) plaintext += '~';
    plaintext = plaintext.split('');
    let c = [];
    let currSet = 0;
    let sets = [];
    for (let i = 0; i < railkey; i++) sets.push([]);
    for (let i = 0; i < plaintext.length; i++) {
        if (currSet >= railkey) currSet = 0;
        sets[currSet].push(plaintext[i]);
        currSet++;
    }
    for (let i = 0; i < sets.length; i++) {
        c.push(...sets[i]);
    }
    return c.join('');
};

module.exports.decipher = (ciphertext, railkey, spaceCharacter) => {
    ciphertext = 'HLODEORLWL';

    // jump = ciphertext.length / railkey???

    if (railkey < 2 || railkey >= ciphertext.length) return ciphertext;
};