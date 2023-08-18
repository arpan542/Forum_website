import mongoose from 'mongoose';

const Connection = async (username, password) => {
    //const URL=`mongodb://${username}:${password}@ac-ncsdx4f-shard-00-00.pnqxrcx.mongodb.net:27017,ac-ncsdx4f-shard-00-01.pnqxrcx.mongodb.net:27017,ac-ncsdx4f-shard-00-02.pnqxrcx.mongodb.net:27017/?ssl=true&replicaSet=atlas-lf2cpn-shard-0&authSource=admin&retryWrites=true&w=majority`;
    const URL=`mongodb://127.0.0.1:27017/user`
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;