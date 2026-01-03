import { getIssue } from "@/lib/dal"
import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic";
export const GET = async ( request: NextRequest, {params}: {params: Promise<{id: string}>}) => {
    try{
        const { id } = await params
        const issue = await getIssue(+id)
        return NextResponse.json({ data: {issue}})
    }catch(error){
        console.log(error)
        return NextResponse.json({ error : ''}, { status: 500})
    }
}