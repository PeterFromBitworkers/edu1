let rot13 = (message) => {
    
    const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let encoded = '';
    
    for (let i=0; i < message.length; i++) {
        const index = input.indexOf(message[i]);
        encoded += output[index];
    }

    return encoded;
}

let input = "hello"
let output = rot13(input)
console.log(output)