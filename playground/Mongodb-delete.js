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
  // delete Many
  // const deleteMany = await db.collection('Todos').deleteMany({ text: 'Eat lunch.' });
  // console.log(deleteMany);

  // delete one
  // const result = await db.collection('Todos').deleteOne({ text: 'Eat lunch' });
  // console.log(result);

  // findone and delete
  // const results = await db.collection('Todos').findOneAndDelete({ completed: false });
  // console.log(results);

  // delete duplicate name Aiden
  // const result = await db.collection('Users').deleteMany({ name: 'Aiden' });
  // console.log(result);

  const result = await db
    .collection('Users')
    .findOneAndDelete({ _id: new ObjectID('5c4fdb209f17e3378ef268da') });
  console.log(result);

  client.close();
};

connectDB();
