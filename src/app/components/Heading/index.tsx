import { ReactNode } from 'react';
import styles from './heading.module.css'

interface HeadingProps {
    children: ReactNode; // Define que o children pode ser qualquer coisa renderizável em React
}

export const Heading = ({ children }: HeadingProps) => {
    return <h1 className={styles.heading}>{children}</h1>
}