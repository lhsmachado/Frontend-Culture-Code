import * as S from "../CardPerfil/CardPerfil.Styled";
import ImgUser from "../../assets/imguser.png";
import { getUser } from "../../services/getUser/getUser";
import { useQuery } from "@tanstack/react-query";

interface ICardPerfil {
  customColors: string;
  custonColorsStrong: string;
}

const CardPerfil = ({ customColors, custonColorsStrong }: ICardPerfil) => {
  const { data } = useQuery({
    queryKey: ["getUser"],
    queryFn: getUser,
  });

  return (
    <S.Container>
      <div>
        <S.ImgUser src={ImgUser} alt="" />
      </div>
      <div>
        <S.TitleNameUser customColors={customColors}>
          Olá,{" "}
          <S.TitleNameStrong customColors={custonColorsStrong}>
            {data?.firstName}
          </S.TitleNameStrong>
        </S.TitleNameUser>
      </div>
    </S.Container>
  );
};

export default CardPerfil;
