import styled from "styled-components";

export const ContainerPage = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 728px) {
    background-color: #502B6B;
    margin-bottom: 5rem;

  }
  padding: 0;
`

export const ContainerBody = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 6rem;
    margin-left: 7%;
    gap: 7rem;



    @media screen and (max-width: 728px) {
        background-color: #ffffff;
        margin-left: 0;
        margin-top: 1rem;
        border-radius: 32px 32px 0 0;
  }
`

export const PictureContainer = styled.div `
     margin-top: 5.5rem;
     display: flex;
     flex-direction: column;
     align-items: center;

`
export const ProfilePicture = styled.img `
    width: 8.5rem;
    height: 8.5rem;
    border-radius: 50%;
    background-color: aliceblue;
    border: 3px solid rgb(220, 182, 248);
`

export const ProfileName = styled.h3`
    font-family: Sora;
    font-size: 20px;
    font-weight: 700;
    line-height: 116%;
    letter-spacing: 0.2px;
    margin-top: 2.5rem;
    color: #ffffff;
`

export const ReturnBar = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    justify-content: space-between;


`

export const ReturnArrow = styled.img`
    margin-left: 1rem;
`

export const HeaderText = styled.h2`
    color: #ffffff;
    font-family: Sora;
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.2px;
    align-self: center;
   
`