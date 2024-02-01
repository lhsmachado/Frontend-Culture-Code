import styled from "styled-components";

export const Container = styled.div`
    width: 270px;
    height: 320px;
    display: flex;
    flex-direction: column;
    button{
        margin-left: 5%;
        border-radius: 8px;
    }

`

export const Image = styled.img`
    width: 270px;
    height: 175px;
    border-radius: 16px;
    border: 1px solid #eeeeee;
`

export const Title = styled.h3`
    font-family: Sora;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: 0.2px;
    color: #212121;
    margin-left: 5%;
    margin-top: 5%;
`

export const SubTitle = styled.h4`
    font-family: Sora;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; 
    letter-spacing: 0.2px;
    color: #b1afaf;
    margin-left: 5%;
    margin-bottom: 5%;
`