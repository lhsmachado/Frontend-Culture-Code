import * as S from "./ProfileCardJewelsStyle";
import { IProfileJewel } from "../../types/ProfilePage/jewels";
import diamondIcon from "../../assets/diamondIcon.svg"

type IProfileJewels = {
  data?: IProfileJewel[];
  credits?: number;
};

const ProfileCardJewels = ({ data, credits }: IProfileJewels) => {
    console.log(credits)
    return(
        <S.Container>
            <div>
                <S.Title>Minhas jóias</S.Title>

            </div>
            <S.BalanceContainer>
                <S.BalanceText>Meu saldo: </S.BalanceText>
                <S.BalanceCredits>{credits}</S.BalanceCredits>
                <S.BalanceImage src={diamondIcon} />
            </S.BalanceContainer>
           <S.JewelsList>
           {data? data.map((item:IProfileJewel)=>
                (
                    <S.JewelsContainer>
                    <div>
                        <S.JewelPic src={item.image} alt="" />
                    </div>
                    
                    <S.JewelsTexts>
                        <S.JewelTitle> {item.type}</S.JewelTitle>
                        <S.JewelQtd>{item.count} {Number(item.count) > 1 ?"jóias" : "jóia"}</S.JewelQtd>
                        <S.JewelDetails>{item.habilities}</S.JewelDetails>
                    </S.JewelsTexts>
                </S.JewelsContainer> 
                ))
            : <></>
            }
           </S.JewelsList>
            </ S.Container>
    )}

export default ProfileCardJewels;
