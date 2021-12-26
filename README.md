# edu1
eductational test environment

## how to setup system to work with git
* emailaddy
* passwordsafe
* setup github addy
* install vsc
* install git
* setup username / email on git
* install code .
* setup rsa keys
* use vsc timeline to compare commits
* markdown principles
* github principles
* cheatseet for markdown and git

## NodeJS using prompt-sync
Getting user input from NodeJS using prompt-sync module
First, you need to install the prompt-sync module using NPM or Yarn as follows:

```bash
npm install prompt-sync
# or
yarn add prompt-sync
```

Then, you just need to require() the prompt-sync module and use the prompt() method like in the browser.
Take a look at the code below:

```js
const prompt = require("prompt-sync")();

const input = prompt("What is your name? ");

console.log(`Oh, so your name is ${input}`);
```
Since the method is synchronous, your Node instance will wait for the input before executing the next line. For more information, you can visit the prompt-sync module documentation

NEEDED:
* import
* const / let
* functions
* arrays
* for loop


