import { connectDB } from "../lib/config/db"
import { NextResponse } from "next/server"
import TodoModel from "../lib/config/models/TodoModel"

const loadDB = async () => {
    await connectDB()
}
loadDB()
export async function GET(request) {
    const todos = await TodoModel.find({});
    return NextResponse.json({todos:todos})
}

export async function POST(request) {
    const {title, description} = await request.json();
    await TodoModel.create({
        title,
        description
    })
    return NextResponse.json({message:"Todo Created"})
}

export const config = {
    unstable_runtimeJS: false
  }

export async function DELETE(request) {
    const mongoId = await request.nextUrl.searchParams.get("mongoId")
    await TodoModel.findByIdAndDelete(mongoId)
    return NextResponse.json({message:"Todo Deleted"})
}

export async function PUT(request) {
    const mongoId = await request.nextUrl.searchParams.get("mongoId")
    await TodoModel.findByIdAndUpdate(mongoId, {
        $set: {
            isCompleted: true
        }
    })
    return NextResponse.json({message:"Todo Completed"})
}