import styled from "styled-components";

export const Grid = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;

    @media (width < 1159px) {
    flex-direction: column;
    justify-content: center;

  }
`
export const GridItems = styled.div`
@media (width < 1159px) {
    display: flex;
    justify-content: center;
  }

`
export const Body = styled.body`
    width: 100vw;
    height: 100vh;

    padding: 24px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    gap: 10%;

    @media (width < 1159px) {
    display: flex;
    gap: 0;
    box-sizing: border-box;

  }
`
