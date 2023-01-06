import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/NavBar.module.css'
import MenuItem from './MenuItem'
import MenuItemMobile from './MenuItemMobile'
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
        <link rel="icon" href="./darioreisportifolio.ico" />
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
          <MenuItem icone='home' titulo='Home' />
          <MenuItem icone='tag' titulo='Sobre Mim' />
          <MenuItem icone='Track_Changes' titulo='Conhecimentos' />
          <MenuItem icone='code' titulo='Projetos' />
          <MenuItem icone='person' titulo='Contato' />
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

        <MenuItemMobile icone='home' titulo='Home' />
        <MenuItemMobile icone='tag' titulo='Sobre Mim' />
        <MenuItemMobile icone='Track_Changes' titulo='Conhecimentos' />
        <MenuItemMobile icone='code' titulo='Projetos' />
        <MenuItemMobile icone='person' titulo='Contato' />

      </nav>
    </>
  )


}







