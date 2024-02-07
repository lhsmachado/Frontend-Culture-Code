import * as S from "./ProfileCardProductRedeemsStyle"
import product from "../../assets/headset.png"

const ProfileCardProductRedeems = () =>{
    return(
        <S.Container>
            <div>
                <S.Title>Meus resgates</S.Title>
            </div>
            <div>
                <S.RedeemDate>22 de dezembro</S.RedeemDate>
            </div>
            <S.ProductList>
                <S.ProductCard>
                    <div>
                    <S.ProductImage src={product} />
                    </div>
                    <div>   
                        <S.ProductName > Headphone W820BT Bluetooth over-ear edifier   </S.ProductName >
                        <S.ProductPrice> 2 jóias </S.ProductPrice>
                    </div>
                    
                </S.ProductCard>
                <S.ProductCard>
                    <div>
                    <S.ProductImage src={product} />
                    </div>
                    <div>   
                        <S.ProductName > Headphone W820BT Bluetooth over-ear edifier   </S.ProductName >
                        <S.ProductPrice> 2 jóias </S.ProductPrice>
                    </div>
                    
                </S.ProductCard>
            </S.ProductList>

        </S.Container>
    )
}

export default ProfileCardProductRedeems