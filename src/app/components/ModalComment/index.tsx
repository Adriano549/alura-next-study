'use client'
import { useRef } from "react"
import { Chat } from "../icons/Chat"
import { IconButton } from "../iconsButton"
import { Modal, ModalHandles } from "../Modal"
import { Subheading } from "../Subheading"
import { SubmitButton } from "../SubmitButton"
import styles from "./commentmodal.module.css"

interface ModalCommentProps {
    action: (formData: FormData) => Promise<void>; // Atualiza o tipo para FormData
}


export const ModalComment = ({ action }: ModalCommentProps) => {
    const modalRef = useRef<ModalHandles>(null)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget; // Obtém o formulário
        const formData = new FormData(form); // Cria FormData a partir do formulário
        await action(formData); // Chama a função action com FormData
        modalRef.current?.closeModal(); // Fecha o modal
    };

    return (
        <>
            <Modal ref={modalRef}>
                <form onSubmit={handleSubmit}>
                    <Subheading>Deixe seu comentário sobre o post:</Subheading>
                    <textarea required rows={8} name='text' placeholder="Digite aqui..." />
                    <div className={styles.footer}>
                        <SubmitButton>
                            Comentar
                        </SubmitButton>
                    </div>

                </form>
            </Modal>
            <IconButton onClick={() => modalRef.current?.openModal()}>
                <Chat />
            </IconButton>
        </>
    )
}