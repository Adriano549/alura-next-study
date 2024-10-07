
import { Comment } from "@/app/types/postType"
import { Comments } from "../Comment"
import styles from "./commentlist.module.css"
import { Replies } from "../Replies"
import { ReplyModal } from "../ModalReply"

export const CommentList = ({ comments = [] }: { comments: Comment[] }) => {
    return (
        <section className={styles.comments}>
            <h2>Comentários</h2>
            <ul>
                {comments.map((comment: Comment) =>
                    <li key={comment.id}>
                        <Comments comment={comment} />
                        <ReplyModal comment={comment}/>
                        <Replies comment={comment}/> 
                    </li>
                )}
            </ul>
        </section>
    )
}