
import db from "../../../../../../prisma/db";

export async function GET(_request:Request, { params }: { params: { id: string } }){
    console.log(params, "parametro");
    
    const parentId = parseInt(params.id, 10);
    console.log(parentId);
    

    if(!parentId){
        throw new Error('Invalid parent ID',);
    }


    const replies = await db.comment.findMany({
        where:{
            parentId: parentId
        },
        include:{
            author:true
        }
    })

    return Response.json(replies)
}