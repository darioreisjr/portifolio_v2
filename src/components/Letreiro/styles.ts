import styled, { keyframes } from 'styled-components'


export const Container = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`

export const Subtitulo = styled.p`
    color: #FFFFFF;
    font-size: 1.6rem;
    font-weight: 100;
    font-family: 'Roboto', sans-serif;
    margin: 0;
`
const fadeIn = keyframes`
    0% {
        width: 0;
        }
    70% {
     width: 100%;
        }
`

export const Titulo = styled.h1`
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 5rem;
    margin: 0;
    position: relative;

        &::before{
            content: attr(data-text);
            position: absolute;
            width: 0%;
            height: 100%;
            color: #2cc3ff;
            --webkit-text-stroke: 0vw #383d52;
            border-right: 2px solid #2cc3ff;
            overflow: hidden;
            animation: 6s ${fadeIn} linear infinite;
        }

        

`

