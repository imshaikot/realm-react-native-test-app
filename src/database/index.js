import Realm from 'realm';
import {
  authUser,
  authPassword,
  serverUrl,
  dbPath,
} from './user';
import { Product, Supplier, Category, Image, Price } from './schema';

export default new Promise((resolve, reject) => Realm
  .Sync.User.login(`http://${serverUrl}`, authUser, authPassword)
  .then((user) => {
    resolve(new Realm({
      sync: {
        user,
        url: `realm://${serverUrl}${dbPath}`,
      },
      schema: [Product, Supplier, Category, Image, Price], // Object.getOwnPropertyNames(Schemas).filter(each => each !== 'default').map(each => Schemas[each]),
    }));
  }).catch(reject));
