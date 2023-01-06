import Head from 'next/head'
import styles from '../styles/NavBar.module.css'

interface IMenuItemMobile {
    icone: string
    titulo: string
}

export default function MenuItemMobile(props: IMenuItemMobile) {
    return (
        <>
            <Head>
                <link rel="icon" href="./darioreisportifolio.ico" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
                />
            </Head>
            <button>
                <span >
                    <i className="material-symbols-outlined" > {props.icone} </i>
                    <span className={styles.mobileTexto} > {props.titulo} </span>
                </span>
            </button>
        </>
    )
}
