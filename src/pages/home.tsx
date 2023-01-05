import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/NavBar'


const Inicio: NextPage = () => {

    return (
        <>
            <Head>
                <title>Dario Reis - Portifolio</title>
                <meta name="description" content="Portifolio para expor meus projetos versão número 2" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
                />
            </Head>
            <NavBar/>
        </>
    )
}

export default Inicio
