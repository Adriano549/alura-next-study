import { ReactNode } from 'react'
import styles from './button.module.css'

interface ButtonProps{
    children: ReactNode
}

export const Button = ({children}:ButtonProps) => {
    return <button className={styles.btn}>
        {children}
    </button>
}