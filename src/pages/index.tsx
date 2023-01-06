import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import avatar from '../../public/avatarPerfil.png'
import Link from 'next/link'
import { IconeFacebook, IconeGithub, IconeInstagram, IconeLinkedin, IconeTwitter } from '../components/Icones'


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Dario Reis</title>
        <meta name="description" content="Portifolio para expor meus projetos versão número 2" />
        <link rel="icon" href="./darioreisportifolio.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <section className={styles.container}>
            <div className={styles.containerImagem}>
              <Image
                src={avatar}
                alt="avatar"
                width={500}
                className={styles.imagem}
              />
            </div>
            <div className={styles.containerTitulo}>
              <p className='animate__animated animate__bounce'>
                Olá sou Dario Reis e esse e meu
              </p>

              <h1 data-text="Portífolio">
                Portífolio
              </h1>
            </div>
          </section>

          <section className={styles.containerButtom}>
            <Link href='/home'>
              <button>
                Vamos Nessa?
              </button>
            </Link>

          </section>

          <section className={styles.containerIconesRedeSociais}>
            <Link href='https://www.instagram.com/darioreisjr/' target='_blank'>
              {IconeInstagram}
            </Link>
            <Link href='https://twitter.com/darioreisjr' target='_blank'>
              {IconeTwitter}
            </Link>
            <Link href='https://www.facebook.com/darioreisjr/' target='_blank'>
              {IconeFacebook}
            </Link>
            <Link href='https://www.linkedin.com/in/darioreisjr/' target='_blank'>
              {IconeLinkedin}
            </Link>
            <Link href='https://github.com/darioreisjr' target='_blank'>
              {IconeGithub}
            </Link>
          </section>

        </main>

      </div>
    </>
  )
}

export default Home
