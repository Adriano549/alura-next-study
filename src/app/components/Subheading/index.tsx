import { ChildrenProps } from "@/app/types/childrenType"
import styles from "./subheading.module.css"

export const Subheading =({children}: ChildrenProps) =>{
    return <h2 className={styles.subheading}>{children}</h2>
}