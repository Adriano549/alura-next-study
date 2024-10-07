import { ResetProps } from '@/app/types/childrenType'
import styles from './iconButton.module.css'



export const IconButton = ({children, ...rest}: ResetProps)=>{
    return(
        <button {...rest} className={styles.btn}> 
            {children}
        </button>
    )
}