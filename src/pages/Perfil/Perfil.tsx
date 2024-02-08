import { useState } from "react"
import Navigation from "../../components/Navigation/Navigation"
import ProfileCardJewels from "../../components/ProfileCardJewels/ProfileCardJewels"
import ProfileCardProductRedeems from "../../components/ProfileCardProductRedeems/ProfileCardProductRedeems"
import ProfileCard from "../../components/ProfileCardUser/ProfileCardUser"
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu"
import * as S from "./PerfilStyle"

const Perfil = () => {
    const [selecteCard, setSelectCard] = useState('')
    
    const handleChange = (value:string) =>{
        setSelectCard(value)
        console.log(value)
    }

    const cardToRender = () => {
        switch(selecteCard){
            case 'profile':
                return(<ProfileCard /> );
            case 'resgates':
                return(<ProfileCardProductRedeems />);
            case 'joias':
                return(<ProfileCardJewels />);
            case '':
                return(<></>)
        }

    }

    return(
        <S.ContainerPage>
            <div>
            <Navigation 
            customColorslinks="#000000"
            home="Home"
            produtos="Produtos"
            myPerfil="Meu Perfil"/>
            </div>
            <S.ContainerBody>
                <ProfileMenu onChange={handleChange}/>
                {cardToRender()}

            </S.ContainerBody>
            
        </S.ContainerPage>
    )
}

export default Perfil