import * as S from "../CardPerfil/CardPerfil.Styled";
import ImgUser from "../../assets/imguser.png";
import { getUser } from "../../services/user/getUser/getUser";
import { useQuery } from "@tanstack/react-query";

interface ICardPerfil {
  customColors: string;
  custonColorsStrong: string;
}

const CardPerfil = ({ customColors, custonColorsStrong }: ICardPerfil) => {
  const { data: user } = useQuery({
    queryKey: ["getUser"],
    queryFn: getUser,
  });

  return (
    <S.Container>
      <div>
        <S.ImgUser src={user?.profileImg || ImgUser} alt="" />
      </div>
      <div>
        <S.TitleNameUser customColors={customColors}>
          Olá,{" "}
          <S.TitleNameStrong customColors={custonColorsStrong}>
            {user?.firstName}
          </S.TitleNameStrong>
        </S.TitleNameUser>
      </div>
    </S.Container>
  );
};

export default CardPerfil;
