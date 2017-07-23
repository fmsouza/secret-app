import * as Stores from '../stores';
import * as Action from './index';

export const createPassword = ({ title, password }) => Stores.passwords.registerNewPassword({
    title,
    password: Action.encrypt(password)
});