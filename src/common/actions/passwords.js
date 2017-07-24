import * as Stores from 'common/stores';
import * as Action from 'common/actions';

export const createPassword = ({ title, password }) => Stores.passwords.registerNewPassword({
    title,
    password: Action.encrypt(password)
});