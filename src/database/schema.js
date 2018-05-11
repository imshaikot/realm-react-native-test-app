
export const Product = {
  name: 'Product',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    supplier: 'Supplier',
    images: 'Image[]',
    price: 'Price',
    category: 'Category',
    audit: 'Audit',
    deleted: 'bool',
  },
};
export const Supplier = {
  name: 'Supplier',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    fullName: 'string?',
  },
};

export const Price = {
  name: 'Price',
  primaryKey: 'id',
  properties: {
    id: 'string',
    currency: 'string?',
    value: 'double?',
    baseCurrencyValue: 'double?',
  },
};

export const Image = {
  name: 'Image',
  primaryKey: 'id',
  properties: {
    id: 'string',
    fileName: 'string',
    orientation: 'int',
    imageType: 'string',
  },
};

export const Category = {
  name: 'Category',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
  },
};


// export const User = {
//   name: 'User',
//   primaryKey: 'id',
//   properties: {
//     id: 'string',
//     firstName: 'string',
//     lastName: 'string',
//     phoneNumber: 'string?',
//     companyName: 'string?',
//     email: 'string',
//     preferredLanguage: 'string?',
//   },
// };

// export const Audit = {
//   name: 'Audit',
//   primaryKey: 'id',
//   properties: {
//     id: 'string',
//     createdBy: 'User',
//   },
// };
