import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    @media (width < 650px) {
        width: 300px;
    }

    
`

export const Box = styled.div`
    width: 100%;
    min-width: 320px;
    max-width: 1700px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 25px;

    @media (width < 1090px) {
        flex-direction: column;
    }


  
`
export const GridItems = styled.div`
  
  @media (width < 650px) {
        display: flex;
    }
  @media (width < 1090px) {
        display: flex;
    }



`

