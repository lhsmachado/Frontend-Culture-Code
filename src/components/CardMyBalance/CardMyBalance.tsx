import * as S from "../CardMyBalance/CardMyBalance.Styled";
import ImdDiamont from "../../assets/diamondIcon.svg";

import { Link } from "react-router-dom";

interface ICardMyBalance {
  imagem: string;
  balance: number | undefined;
}

const CardMyBalance = ({ imagem , balance }: ICardMyBalance) => {
  return (
    <S.Container>
      <S.DivLink>
        <Link to={"/home"}>
          <img src={imagem} alt="" />
        </Link>
      </S.DivLink>
      <S.DivBalance>
        <S.TextBalance>Meu saldo:</S.TextBalance>

        <S.Balance>{balance}</S.Balance>
        <img src={ImdDiamont} alt="imagem" />
      </S.DivBalance>
    </S.Container>
  );
};

export default CardMyBalance;
