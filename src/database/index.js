import Realm from 'realm';
import {
  authUser,
  authPassword,
  serverUrl,
  dbPath,
} from './user';
import {
  Product,
  Supplier,
  Price,
  Image,
  Category,
} from './schema';

export default {
  realm: null,
  init: () => Realm.Sync.User.login(serverUrl, authUser, authPassword)
    .then((user) => {
      this.realm = new Realm({
        sync: {
          user,
          url: `${serverUrl}~${dbPath}`,
        },
        schema: [Product, Supplier, Price, Image, Category],
      });
    }).catch((error) => {
      // an auth error has occurred
      console.error(error);
    }),
};
