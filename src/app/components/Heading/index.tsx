import styles from './heading.module.css'
import { ChildrenProps } from '@/app/types/childrenType';

export const Heading = ({ children }: ChildrenProps) => {
    return <h1 className={styles.heading}>{children}</h1>
}