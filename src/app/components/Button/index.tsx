import styles from './button.module.css'
import { ChildrenProps } from '@/app/types/childrenType'

export const Button = ({children}:ChildrenProps) => {
    return <button className={styles.btn}>
        {children}
    </button>
}