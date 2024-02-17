import styled from "styled-components";

export const Title = styled.h4`
  padding: 2% 0 0 0;
  color: #212121;
  text-align: center;
  font-family: Sora;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: 0.2px;
`;

export const DivInput = styled.div`
  margin: 10% 0 0 0;
`;

export const DivNumerInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const NumberImput = styled.h4`
  color: #212121;
  text-align: center;
  font-family: Sora;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.2px;
`;

export const Input = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: #502b6b;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #502b6b;
    background: #fff;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }
`;

export const DivButton = styled.div`
  margin: 15% 0 0 0;
`;
