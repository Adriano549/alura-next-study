// not-found.js
import Link from 'next/link';
import styles from './error/not-found.module.css'; // Importe seu CSS Module
import Image from 'next/image';
import errorImage from './error/erro404.png'
import { ArrowBack } from './components/icons/ArrowBack';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <Image src={errorImage} alt='Robo' className={styles.robot}></Image>
            <h1 className={styles.title}>OPS! Página não encontrada.</h1>
            <p className={styles.message}>
                Você pode voltar ao feed e continuar buscando projetos incríveis!
            </p>
            <Link href="/">
            Voltar ao Feed  <ArrowBack color='#81FE88' />
            </Link>
        </div>
    );
}
