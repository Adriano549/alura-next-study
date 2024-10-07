'use client'
import { useEffect, useState } from 'react'
import styles from './replies.module.css'
import { Comments } from '../Comment'
import { Comment } from '@/app/types/postType'
import { ReplyModal } from '../ModalReply'

export const Replies = ({comment}: {comment:Comment}) => {
    const [showReplies, setShowReplies] = useState(false)

    const[replies, setReplies] = useState([])

    async function fetchData(){
        try{
            console.log('Comment ID:', comment.id);
            const response =await fetch(`/api/comment/${comment.id}/replies`)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json()
            setReplies(data)
        }catch(error){
            console.error('Fetch error:', error);
        }
       
    }

    useEffect(() =>{
        if (showReplies){
            fetchData()
        }
    }, [showReplies])

    return (<div className={styles.container}>
        <div className={styles.replies}>
            <button 
                className={styles.btn} 
                onClick={() => setShowReplies(!showReplies)}
            >
                {showReplies ? 'Ocultar' : 'Ver'} respostas
            </button>
            {showReplies && <ul>
                {replies.map((reply: Comment) => <li key={reply.id}>
                    <Comments comment={reply}/>
                    <ReplyModal comment={reply}/>
                </li>
                )}
            </ul>}
        </div>
    </div>)
}