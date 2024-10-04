'use client'
import { useRef } from "react"
import { Chat } from "../icons/Chat"
import { IconButton } from "../iconsButton"
import { Modal, ModalHandles } from "../Modal"

export const ModalComment = () =>{
    const modalRef = useRef<ModalHandles>(null)
    return(
        <>
        <Modal ref={modalRef}>
            <form>
                <textarea name='text'>

                </textarea>
            </form>
        </Modal>
        <IconButton onClick={() => modalRef.current?.openModal()}>
            <Chat/>
        </IconButton>
        </>
    )
}