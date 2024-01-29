import * as S from "../CardPerfil/CardPerfil.Styled";

import ImgUser from "../../assets/imguser.png";

const CardPerfil = () => {
  return (
    <S.Container>
      <div>
        <S.ImgUser src={ImgUser} alt="" />
      </div>
      <div>
        <S.TitleNameUser>
          Olá, <strong>Alex</strong>
        </S.TitleNameUser>
      </div>
    </S.Container>
  );
};

export default CardPerfil;
