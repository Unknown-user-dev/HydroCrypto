const crypto = require('crypto');
const fs = require('fs');
class CryptoUtilities {
    generateRSAKeyPair() {
        const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem',
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
            },
        });
        fs.createWriteStream('public-key.pub').write(publicKey);
        fs.createWriteStream('private-key.pem').write(privateKey);
        return { publicKey, privateKey };

    }

    generateEncryptionKey() {
        return crypto.randomBytes(32).toString('hex');
    }

    encryptData(data, key) {
        const cipher = crypto.createCipher('aes-256-cbc', key);
        let encrypted = cipher.update(data, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    decryptData(encryptedData, key) {
        const decipher = crypto.createDecipher('aes-256-cbc', key);
        let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }

    signData(data, privateKey) {
        const sign = crypto.createSign('SHA256');
        sign.update(data);
        return sign.sign(privateKey, 'hex');
    }

    verifySignature(data, signature, publicKey) {
        const verify = crypto.createVerify('SHA256');
        verify.update(data);
        return verify.verify(publicKey, signature, 'hex');
    }
}

module.exports = new CryptoUtilities();
