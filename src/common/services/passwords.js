import { SQLite } from 'expo';
import * as Store from 'common/stores';

const db = SQLite.openDatabase({ name: 'secret.db' });

export const initPasswordStorage = () => db.transaction(
    tx => tx.executeSql('create table if not exists passwords (id integer primary key not null, title text, password text)')
);

export const removePassword = (item) => db.transaction(
    tx => tx.executeSql(`delete from passwords where id = ${item.id}`),
    console.error,
    () => Store.passwords.removePassword(item)
);

export const loadPasswords = () => db.transaction(
    tx => tx.executeSql(`select * from passwords`, [], (error, { rows: { _array } }) => Store.passwords.registerPasswords(_array))
);

export const createPassword = ({ title, password }) => {
    const passwords = Store.passwords.list;
    const lastId = (passwords.length > 0) ? passwords[passwords.length-1].id : 0;
    const id = lastId + 1;
    return db.transaction(
        tx => tx.executeSql(`insert into passwords (id, title, password) values (?, ?, ?)`, [id, title, password]),
        console.error,
        () => Store.passwords.registerNewPassword({ id, title, password })
    );
};