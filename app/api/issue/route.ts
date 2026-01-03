import { issues } from "@/db/schema"
import { db } from "@/db"
import { getCurrentUser, getIssue, getIssues } from "@/lib/dal"
import { NextRequest, NextResponse } from "next/server"


export const GET = async ( request: NextRequest) => {
    try{
        const issues = await getIssues()
        return NextResponse.json({ data: {issues}})
    }catch(error){
        console.log(error)
        return NextResponse.json({ error : ''}, { status: 500})
    }
}

export const POST = async ( request: NextRequest) => {
    try{
        const user = await getCurrentUser()

        const body = await request.json()
        const newIssue = await db.insert(issues).values({...body, userId: user?.id}).returning()
        return NextResponse.json({ data: { message: 'Issue created successfully', issue: newIssue[0] }})
    }catch(error){
        console.log(error)
        return NextResponse.json({ error : ''}, { status: 500})
    }
}