const mongoose=require('mongoose')//this js is for mongoose
const mongoURI='mongodb+srv://chatapp:0m4hUOdBXHxLSC6D@cluster0.lc0hu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


const connectDB=async ()=>{
    try{
        await mongoose.connect(mongoURI,{});
        console.log('MongoDB Connected...');

    }
    catch(err)
    {
            console.log({err});
            console.error(err.message);
		// Exit process with failure
		process.exit(1);
    }
}

module.exports=connectDB;