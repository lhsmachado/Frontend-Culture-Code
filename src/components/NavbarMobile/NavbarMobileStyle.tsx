import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: none;

    @media screen and (max-width: 728px) {
        display: flex;
        position: fixed ;
        bottom: 0;
        width:100vw;
        height: 5rem;
        box-shadow: 0px -5px 5px 0px rgba(224, 224, 224, 0.3);
        background: rgb(252, 252, 252);
  }
`

export const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
    .product{
   align-self: self-start;
  }
   
`

export const Links = styled(Link)`
  text-decoration: none;
  
`;

export const ContainerImage = styled.div`
  
  display: flex;
  flex-direction: column;
  .productBorder{
    background-color: rgb(229, 229, 229);;
    border-radius: 100%;
    padding: 1rem;
    margin-top: -1rem;
  }
  color: rgb(117, 117, 117);
  
`

export const Icon = styled.img`
  height: 1.5rem;

  
`

export const Title = styled.h3`
  font-family: Sora;
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.2px;
  text-align: left;
  margin-top: 0.5rem;
`