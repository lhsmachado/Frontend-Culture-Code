import * as S from "./ProfileCardProductRedeemsStyle"
import { IProfileRedeemCard } from "../../types/ProfilePage/productRedeems"


type IProductsRedeems = {
    data?: IProfileRedeemCard[]
}

const ProfileCardProductRedeems = ({data}:IProductsRedeems) =>{
    return(
        <S.Container>
            <div>
                <S.Title>Meus resgates</S.Title>
            </div>
            <S.ProductList>
                {data? data.map((item:IProfileRedeemCard)=>
                (
                    <S.ProductCard>
                        <div>
                        <S.ProductImage src={item.image} />
                        </div>
                        <div>   
                            <S.ProductName >{item.name}</S.ProductName >
                            <S.ProductPrice>{item.price} jóias</S.ProductPrice>
                        </div>
                    </S.ProductCard>
                ))
            : <></>
            }
            </S.ProductList>

        </S.Container>
    )
}

export default ProfileCardProductRedeems