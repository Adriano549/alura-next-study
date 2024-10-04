'use client'
import { forwardRef, useImperativeHandle, useRef } from "react"
import styles from './modal.module.css'

export interface ModalHandles {
    openModal: () => void;
    closeModal: () => void;
}

interface ForwardRefProps{
    children: React.ReactNode;
}

export const Modal = forwardRef<ModalHandles,ForwardRefProps>(({children}, ref) =>{

    const dialogRef = useRef<HTMLDialogElement>(null)

    const closeModal = () =>{
        dialogRef.current?.close()
    }

    const openModal = () =>{
        dialogRef.current?.showModal();
    }

    useImperativeHandle(ref, () => ({
        openModal,
        closeModal
    }));

    return (
        <dialog className={styles.dialog} ref={dialogRef}>
            <header className={styles.header}>
                <button onClick={() => closeModal()}>
                    x
                </button>
            </header>
            {children}
        </dialog>
    )
})