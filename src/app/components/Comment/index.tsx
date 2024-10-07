import { Comment } from "@/app/types/postType"
import Image from "next/image"
import styles from "./comment.module.css"

export const Comments =({ comment }:{ comment: Comment }) =>{
    return (
        <div className={styles.comment}>
            <Image 
            src={comment.author.avatar}
            width={32}
            height={32}
            alt={`Avatar do ${comment.author.name}`}
            />
            <strong>
                @{comment.author.name}
            </strong>
            <p>
                {comment.text}
            </p>
        </div>
    )
}