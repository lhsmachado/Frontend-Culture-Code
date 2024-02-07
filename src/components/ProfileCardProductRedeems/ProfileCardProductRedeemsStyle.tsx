import styled from "styled-components";

export const Container = styled.div `
    height: auto;
    width: 42rem;
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
export const ProductList = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
`

export const RedeemDate = styled.h3`
    font-family: Sora;
    font-size: 16px;
    color: #757575;
`

export const ProductCard = styled.div `
    display: flex;
    flex-direction: column;
    width: 18.875rem;
    max-height: 20rem;
`
export const ProductImage = styled.img`
    width: 16rem;
    height: 11rem;
`

export const ProductName = styled.h3`
    font-family: Sora;
    font-size: 14px;
    font-weight: 600;
    color: #212121;
    margin-top: 1rem;
`
export const ProductPrice = styled.h5`
    color: #9E9E9E;
    font-family: Sora;
    font-size: 14px;
    font-weight: 400;
`