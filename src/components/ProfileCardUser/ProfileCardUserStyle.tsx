import styled from "styled-components";

export const Container = styled.div `
    height: 35rem;
    width: 31rem;
    border-radius: 3rem;
    background-color: #ffffff;
    box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
    padding-left: 4rem;
    padding-top: 3.75rem;

    @media screen and (max-width: 728px) {
        padding-left: 0;
        padding-top: 2.75rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 3rem 3rem 0 0;
  }
`

export const Title = styled.h2`
    font-weight: bold;
    font-size: 1.5rem;
    font-family: Sora;
    color: #212121;

`


export const Image = styled.img`
    width: 8.5rem;
    height: 8.5rem;
    border-radius: 50%;
    border: 4px solid #DCB6F8;
    margin-top: 3.75rem;

    @media screen and (max-width: 728px){
        margin-top: 1.75rem;
    }
`
export const DetailsContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const Details = styled.div`
    width: 85%;
    height: 4.5rem;
    box-shadow: 1px 0 5px rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    border: 1px solid #EEEEEE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;

    @media screen and (max-width: 728px){
        width: 20rem;

    }
`

export const Label = styled.p`
    font-family: Poppins;
    color: #9E9E9E;
    font-size: 12px;

`
export const UserText = styled.p`
    font-family: Sora;
    color: #212121;
    font-size: 18px;
`