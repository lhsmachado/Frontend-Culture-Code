import * as S from "../CardBalance/CardBalance.Styled";
import Jewelry from "../Jewelry/Jewelry";

import ImgCalendar from "../../assets/calendar-line.svg";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/user/getUser/getUser";

const CardBalance = () => {
  const { data } = useQuery({ queryKey: ["getUser"], queryFn: getUser });
  return (
    <S.Container>
      <div>
        <S.TitleBalance>Meu saldo</S.TitleBalance>
        <S.TitleBalanceNumber>{data?.credits}</S.TitleBalanceNumber>
      </div>
      <div>
        <S.TitleJewelry>jóias</S.TitleJewelry>
        <Jewelry />
      </div>
      <S.DivNotification>
        <S.ImgCalendar src={ImgCalendar} alt="calendario" />
        <S.TextInformation>2º Ciclo de Gestão de Desempenho</S.TextInformation>
      </S.DivNotification>
      <div>
        <S.TextValidation>Vence em: 06 de julho de 2023</S.TextValidation>
      </div>
    </S.Container>
  );
};

export default CardBalance;
