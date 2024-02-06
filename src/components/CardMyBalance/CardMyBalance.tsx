import * as S from "../CardMyBalance/CardMyBalance.Styled";
import ImdDiamont from "../../assets/diamondIcon.svg";
import ImgLeft from "../../assets/left-small.png";
import { Link } from "react-router-dom";

const CardMyBalance = () => {
  return (
    <S.Container>
      <S.DivLink>
        <Link to={"/home"}>
          <img src={ImgLeft} alt="" />
        </Link>
      </S.DivLink>
      <S.DivBalance>
        <S.TextBalance>Meu saldo:</S.TextBalance>

        <S.Number>8</S.Number>
        <img src={ImdDiamont} alt="imagem" />
      </S.DivBalance>
    </S.Container>
  );
};

export default CardMyBalance;
