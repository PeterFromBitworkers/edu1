let rot13 = (message) => {
    
    const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
    const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm ';
    let encoded = '';
    
    for (let i=0; i < message.length; i++) {
        const index = input.indexOf(message[i]);
        encoded += output[index];
    }

    return encoded;
}


const prompt = require("prompt-sync")();

const message = prompt("What is the message");

let output = rot13(message)

console.log(output)