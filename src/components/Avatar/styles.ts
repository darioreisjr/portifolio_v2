import styled from 'styled-components'

export const Container = styled.div`
    margin: 10px;
    width: 500px;

    @media (width < 650px) {
      width: 300px;
  }
`

export const Imagem = styled.img`
    width: 100%;
    animation: float 3s ease-in-out infinite;

    @keyframes float {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateY(-25px);
  }

  100% {
    transform: translateY(0);
  }
}
`

