'use server'
import { Comment, Post } from "@/app/types/postType";
import db from "../../prisma/db";
import { revalidatePath } from "next/cache";


export async function incrementThumsUp(post: Post) {
    await db.post.update({
        where: {
            id: post.id
        },
        data: {
            likes: {
                increment: 1
            }
        }
    })
    revalidatePath('/')
    revalidatePath(`/${post.slug}`)
}

export async function postComment(post: Post, formData: FormData) {
    const author = await db.user.findFirst({
        where: {
            username: 'anabeatriz_dev'
        }
    })

    if (!author) {
        throw new Error('Author not found');
    }

    const text = formData.get('text');

    if (typeof text !== 'string') {
        throw new Error('Text must be a string');
    }


    await db.comment.create({
        data: {
            text,
            authorId: author.id,
            postId: post.id
        }
    })
    revalidatePath('/')
    revalidatePath(`/${post.slug}`)
}
export interface ExtendedComment extends Comment {
    postId?: number; // Adiciona uma nova propriedade opcional
}
export async function postReply(parent: ExtendedComment, formData: FormData) {
    const author = await db.user.findFirst({
        where: {
            username: 'anabeatriz_dev'
        }
    })

    if (!author) {
        throw new Error('Author not found');
    }

    const text = formData.get('text');

    if (typeof text !== 'string') {
        throw new Error('Text must be a string');
    }
    console.log(parent);


    const postId = parent.postId;

    if (!postId) {
        throw new Error('Parent post not found or invalid');
    }

    const post = await db.post.findFirst({
        where: {
            id: postId
        }
    })

    if (!post) {
        throw new Error('Post not found');
    }

    await db.comment.create({
        data: {
            text,
            authorId: author.id,
            postId: post.id,
            parentId: parent.parentId ?? parent.id
        }
    })
    
    revalidatePath(`/${post.slug}`)
}