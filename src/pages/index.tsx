import type { NextPage } from 'next'
import Head from 'next/head'
import Avatar from '../components/Avatar'
import Botao from '../components/Botao'
import IconeRedeSociais from '../components/IconeRedeSociais'
import Letreiro from '../components/Letreiro'

import {Box, GridItems, Container} from '../styles/styled'

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


      <Container>

        <Box>

          <GridItems>
            <Avatar linkImagem='https://www.programador360.com.br/wp-content/uploads/2022/08/top-art-languages.png' />
          </GridItems>

          <GridItems>
            <Letreiro texto='Ola sou Dario Reis e esse e meu' titulo='Portífolio' />
          </GridItems>

          <GridItems>
            <IconeRedeSociais link='https://img.icons8.com/clouds/50/null/instagram-new--v3.png' />
            <IconeRedeSociais link='https://img.icons8.com/clouds/50/null/facebook-f.png' />
            <IconeRedeSociais link='https://img.icons8.com/clouds/50/null/twitter-squared.png' />
            <IconeRedeSociais link='https://img.icons8.com/clouds/50/null/linkedin.png' />
            <IconeRedeSociais link='https://img.icons8.com/clouds/50/null/github.png' />
          </GridItems>

        </Box>

        <div>
          <Botao texto="Vamos Nessa?" />
        </div>

      </Container>
    </>
  )
}

export default Home
