const { MongoClient, ObjectID } = require('mongodb');

const fetchDB = async () => {
  const client = await MongoClient.connect(
    'mongodb://localhost:12345/TodoApp',
    { useNewUrlParser: true }
  ).catch(err => {
    return console.log('Unable to connect to MongoDB server', err);
  });
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // const conut = await db
  //   .collection('Todos')
  //   .find({})
  //   .count();
  // console.log(`Todos count ${count}`);

  const users = await db
    .collection('Users')
    .find({ name: 'Aiden' })
    .toArray();
  console.log(JSON.stringify(users, undefined, 2));

  // client.close();
};

fetchDB();

// MongoClient.connect(
//   'mongodb://localhost:12345/TodoApp',
//   { useNewUrlParser: true },
//   (err, client) => {
//     if (err) {
//       return console.log('Unable to connect to MongoDB server');
//     }
//     console.log('Connected to MongoDB server');
//     const db = client.db('TodoApp');

//     db.collection('Todos')
//       .find({})
//       .toArray()
//       .then(
//         docs => {
//           console.log('Todos');
//           console.log(JSON.stringify(docs, undefined, 2));
//         },
//         err => {
//           console.log('Unable to fetch todos', err);
//         }
//       );

//     // client.close();
//   }
// );
