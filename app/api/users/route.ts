import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
    return NextResponse.json({ data : { message: 'hello'} })
}
export const POST = async (request: NextRequest) => {}