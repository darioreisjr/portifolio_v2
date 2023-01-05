import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/NavBar.module.css'
import MenuMobile from './MenuMobile'


export default function NavBar() {
  const [menu, setMenu] = useState(styles.menuMobile)

  function toggleMenu() {
    if (menu === styles.menuMobile) {
      const abrirMenu = styles.menuMobileActive
      setMenu(abrirMenu)
    } else {
      setMenu(styles.menuMobile)
    }

  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>

      <aside className={styles.sidebar}>
        <header className={styles.sidebarHeader}>
          <img className={styles.logoImagem} src="https://pbs.twimg.com/media/D-XV1gXWkAAqNeG.jpg" alt="avatar" />
        </header>
        <nav>
          <button>
            <span>
              <i className="material-symbols-outlined" >home</i>
              <span>Home</span>
            </span>
          </button>

          <button>
            <span>
              <i className="material-symbols-outlined" >tag</i>
              <span>Explorar</span>
            </span>
          </button>

          <button>
            <span>
              <i className="material-symbols-outlined" >email</i>
              <span>mensagem</span>
            </span>
          </button>

          <button>
            <span>
              <i className="material-symbols-outlined" >person</i>
              <span>Profile</span>
            </span>
          </button>

        </nav>
      </aside>

      <button onClick={toggleMenu} className={styles.buttonMobile}>
        <i className='material-symbols-outlined' >menu</i>
        <span>Menu</span>
      </button>
      <nav className={menu}>
        <button onClick={toggleMenu}>
          <span>
            <i className='material-symbols-outlined' >close</i>
          </span>
        </button>

        <button>
          <span >
            <i className="material-symbols-outlined" >home</i>
            <span className={styles.mobileTexto} >Home</span>
          </span>
        </button>

        <button>
          <span>
            <i className="material-symbols-outlined" >tag</i>
            <span className={styles.mobileTexto}>Explorar</span>
          </span>
        </button>

        <button>
          <span>
            <i className="material-symbols-outlined" >email</i>
            <span className={styles.mobileTexto}>mensagem</span>
          </span>
        </button>

        <button>
          <span>
            <i className="material-symbols-outlined" >person</i>
            <span className={styles.mobileTexto}>Profile</span>
          </span>
        </button>
      </nav>
    </>
  )


}







