# 🌐 Hydro Crypto

## 📝 Features

### Crypto
- [x] Generate RSA key pair 
- [x] Encrypt and Decrypt data
- [x] Generate encryption key
- [x] Sign data
- [x] Verify Signature

### Preview
```
Encryption key generated : 89c5b1f98e8462723e49a06f593b3969472a01c39f93cb20a6040986996a44dd
Key figures : 2aed63c860353e2829755403d71daf81
Deciphered data : Hello World!
Digital signature : a08ecc6253eaa7f91f805a713b7325b666c84b148520f941d911f9e24942f74127a15cf041de1f0f6fa4a06fcfdde4ad72d3fe578936f40435a1c6d6aefa9f46b1727c30e003ba82e03e32e915ea969236872ba07506142584cee386e0d1d6d2587cc1c94d3da9cb
3a0f1c89853f5f2577a1994d2f3a3897ad2f41d663820a51dd723e5696065a532b6ae75c4e02940fc3a454bb748809d9c61eff5452fd0dc79a548e39d42596aa39049a75caa71f415ccddcdaa751a57812675393cdd7b5523f0cc13a5492ddbe40d06a1695add8ef0af01071eac0bc2374e7d8654e6047435da848f4c0fbe75ff3c16bd5b4b8d89b1395172c76d1d9425c536c012bc8bc34
The signature is valid ? true
```

## Stuff I used to make this
 - FS [NPMJS](https://www.npmjs.com/package/fs)
 - Crypto [NPMJS](https://www.npmjs.com/package/crypto)
  
## ⚙️ How to use
1. Fork this repository
2. Import module
```js
const hydrocrypto = require('hydrocrypto');
const fs = require('fs')
```
3. All fonc :
```js
// Generate RSA key pair and save to files
cryptoUtils.generateRSAKeyPair();

// Encrypt and decrypt data
const plaintext = 'Hello World!';

// Generate encryption key
const encryptionKey = cryptoUtils.generateEncryptionKey();
console.log('Encryption key generated :', encryptionKey);

// Encrypt data
const encryptedData = cryptoUtils.encryptData(plaintext, encryptionKey);
console.log('Key figures :', encryptedData);

// Decrypt data
const decryptedData = cryptoUtils.decryptData(encryptedData, encryptionKey);
console.log('Deciphered data :', decryptedData);

// Sign and verify data
const keypub = fs.readFileSync('public-key.pub', 'utf-8');
const keypriv = fs.readFileSync('private-key.pem', 'utf-8');

// Sign data
const signature = cryptoUtils.signData(plaintext, keypriv);
console.log('Digital signature :', signature);

// Verify signature
const isSignatureValid = cryptoUtils.verifySignature(plaintext, signature, keypub);
console.log('The signature is valid ?', isSignatureValid);
```
