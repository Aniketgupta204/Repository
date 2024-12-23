const ContentToken = require('./managers/content_token/ContentToken.manager');

// Assuming you have a configuration object with the NACL_SECRET
const config = {
    dotEnv: {
        NACL_SECRET: 'your_base64_encoded_secret_key_here'
    }
};

const contentToken = new ContentToken({ config });

// Example JSON object to encrypt
const dataToEncrypt = { userId: 123, message: "Hello, World!" };

// Encrypt the data
const encryptedData = contentToken.encrypt(dataToEncrypt);
console.log("Encrypted Data:", encryptedData);

// Decrypt the data
const decryptedData = contentToken.decrypt(encryptedData);
console.log("Decrypted Data:", decryptedData);