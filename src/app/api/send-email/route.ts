import { NextResponse } from "next/server";


export const POST = async (request: Request) => {
    try {

        const {name, email, message} = await request.json();
        console.log({name, email, message})
        return NextResponse.json({ message: {name, email, message} }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}