import crypto from 'crypto';

const secret = 'aesSecret1234567'; // Must be 16/24/32 bytes

export default {
  encrypt(text) {
    const cipher = crypto.createCipheriv('aes-128-cbc', secret, secret);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  },
  decrypt(encrypted) {
    const decipher = crypto.createDecipheriv('aes-128-cbc', secret, secret);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
};
