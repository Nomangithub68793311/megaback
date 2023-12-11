import mongoose  from 'mongoose'
const mongouri ="mongodb+srv://ranaDatabase:ahmedimran96yoo@cluster0.xer9vl6.mongodb.net/megadata?retryWrites=true&w=majority"


// const mongouri='mongodb://hockeyJob:hockJob345WE@ac-mx3bdn2-shard-00-00.uugspp0.mongodb.net:27017,ac-mx3bdn2-shard-00-01.uugspp0.mongodb.net:27017,ac-mx3bdn2-shard-00-02.uugspp0.mongodb.net:27017/myfirstDatabase?ssl=true&replicaSet=atlas-nxhsix-shard-0&authSource=admin&retryWrites=true&w=majority'
const connectDB = () => {

    mongoose.connect(mongouri
    ).then((result) => {
        console.log('mongo connected');
    })
        .catch((err) => { console.log(err) });
}

export default connectDB




