import styled from "styled-components";

export const Container = styled.div `
    height: auto;
    width: 31rem;
    border-radius: 3rem;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding-left: 4rem;
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
`
export const Title = styled.h2`
    font-weight: bold;
    font-size: 1.5rem;
    font-family: Sora;
    color: #212121;

`
export const JewelsList = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 2rem;
`

export const JewelsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    img{
        padding: 0.5rem;
        border: 1px solid #EEEEEE;
        border-radius: 1rem;
    }
`

export const JewelsTexts = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

`

export const JewelTitle = styled.h2 `
    color: #212121;
    font-size: 20px;
    font-family: Sora;
    font-weight: bold;
`
export const JewelQtd = styled.h5 `
    font-family: Sora;
    font-weight: 400;
    font-size: 14px;
    color: #9e9e9e;
    
`

export const JewelDetails = styled.p `
    font-family: Sora;
    font-size: 16px;
    color: #616161;
    text-align: start;
    margin-top: 0.5rem;
`