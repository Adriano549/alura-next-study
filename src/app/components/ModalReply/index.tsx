'use client'
import { useRef } from "react";
import { Modal, ModalHandles } from "../Modal";
import styles from './replymodal.module.css'
import { SubmitButton } from "../SubmitButton";
import {  Comments } from "../Comment";
import { postReply } from "@/actions";
import { Comment } from "@/app/types/postType";
import { Textarea } from "../Textarea";



export const ReplyModal = ({ comment }: { comment: Comment }) => {
    const modalRef = useRef<ModalHandles>(null);
    const openModal = () => {
        modalRef.current?.openModal();
    };
    const action = postReply.bind(null, comment)
    return (<>
        <Modal ref={modalRef}>
            <form action={action}>
                <div className={styles.body}>
                    <Comments comment={comment} />
                </div>
                <div className={styles.divider}></div>
                <Textarea required rows={8} name="text" placeholder="Digite aqui..." children={undefined} />
                <div className={styles.footer}>
                    <SubmitButton>
                        Responder
                    </SubmitButton>
                </div>
            </form>
        </Modal>
        <button className={styles.btn} onClick={openModal}>
            Responder
        </button>
    </>)
}