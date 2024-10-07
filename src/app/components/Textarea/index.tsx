import { ResetProps } from "@/app/types/childrenType"
import styles from "./textarea.module.css"



export const Textarea =({children, ...reset}: ResetProps) =>{
    return (
        <textarea className={styles.textarea} {...reset}>
            {children}
        </textarea>
    )
}