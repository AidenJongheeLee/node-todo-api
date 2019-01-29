const { MongoClient, ObjectID } = require('mongodb');

const connectDB = async () => {
  const client = await MongoClient.connect(
    'mongodb://localhost:12345/TodoApp',
    { useNewUrlParser: true }
  ).catch(err => {
    return console.log('Unable to connect to MongoDB server', err);
  });
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // const result = await db.collection('Todos').findOneAndUpdate(
  //   { _id: new ObjectID('5c4fe5e995d95c3765973161') },
  //   {
  //     $set: {
  //       completed: true
  //     }
  //   },
  //   {
  //     returnOriginal: false
  //   }
  // );
  // console.log(result);

  const result = await db.collection('Users').findOneAndUpdate(
    { _id: new ObjectID('5c4fda35883704378812e545') },
    {
      $set: {
        name: 'Aiden'
      },
      $inc: {
        age: 1
      }
    },
    {
      returnOriginal: false
    }
  );
  console.log(result);

  client.close();
};

connectDB();
