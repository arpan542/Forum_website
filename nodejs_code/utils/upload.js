import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const storage = new GridFsStorage({
   // url: `mongodb://${username}:${password}@ac-ncsdx4f-shard-00-00.pnqxrcx.mongodb.net:27017,ac-ncsdx4f-shard-00-01.pnqxrcx.mongodb.net:27017,ac-ncsdx4f-shard-00-02.pnqxrcx.mongodb.net:27017/?ssl=true&replicaSet=atlas-lf2cpn-shard-0&authSource=admin&retryWrites=true&w=majority`,
   url:`mongodb://127.0.0.1:27017/user`,
   options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 