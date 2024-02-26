import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://imdeveloper100:imdeveloper100@cluster0.mmvmirp.mongodb.net/todo-app')
    console.log("DB Connected Successfully")
}