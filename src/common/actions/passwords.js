import * as Store from 'common/stores';
import * as Action from 'common/actions';
import * as Service from 'common/services';

export const initPasswordStorage = () => Service.initPasswordStorage();

export const createPassword = ({ title, password }) => Service.createPassword({
    title,
    password: Action.encrypt(password)
});

export const removePassword = (item) => Service.removePassword(item);

export const loadPasswords = (item) => Service.loadPasswords();

export const getPassword = ({ password }) => Action.decrypt(password);