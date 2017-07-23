import Crypto, { AES } from 'crypto-js';

// {string} SECRET_KEY -  Constant secret key for data encryption in the localstorage
const SECRET_KEY = 'udbas87dras9d67atsm0da78nbt20873t20n8723dm230tdn87bqt087dqd0asm';

/**
 * Takes a string as input to be encrypted
 * @param {string} message - Content string
 * return {string}
 */
export const encrypt = (message) => AES.encrypt(message, SECRET_KEY);

/**
 * Takes a encrypted string as input to be decrypted.
 * @param {string} message - Content string
 * @return {string}
 */
export const decrypt = (message) => AES.decrypt(message, SECRET_KEY).toString(Crypto.enc.Utf8);
