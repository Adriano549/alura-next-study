import styles from './iconButton.module.css'

interface IconButtonPros{
    children: React.ReactNode;
    [x: string]: any;  // para aceitar qualquer prop extra do componente
}

export const IconButton = ({children, ...rest}: IconButtonPros)=>{
    return(
        <button {...rest} className={styles.btn}> 
            {children}
        </button>
    )
}