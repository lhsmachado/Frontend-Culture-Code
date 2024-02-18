import * as S from "./NavbarMobileStyle"
import home from "../../assets/homeIconMobile.svg"
import product from "../../assets/productIconMobile.svg"
import perfil from "../../assets/perfilIconMobile.svg"
import perfilSelected from "../../assets/userIcon.svg"
import homeSelected from "../../assets/homeIconMobileSelected.svg"
import productSelected from "../../assets/productIconMobileSelected.svg"
import { useLocation } from "react-router-dom"

const NavbarMobile = () =>{
    const url = useLocation();
    const location = url.pathname
    console.log(location)
    return(
    <S.Container>
        <S.Navbar>
            <S.Links to={"/home"}>
                <S.ContainerImage customColors={location =="/home"? "#502B6B" : "#757575"}>
                    <S.Icon src={location =="/home"? homeSelected : home}/>
                    <S.Title>Home</S.Title>
                </S.ContainerImage>
            </S.Links>
            <S.Links to={"/produtos"} className="product">
                <S.ContainerImage customColors={location =="/produtos"? "#502B6B" : "#757575"}>
                    <S.Icon src={location =="/produtos"? productSelected :product} className={location == "/produtos"? "productBorderSelected" : "productBorder"}/>
                    <S.Title>Produtos</S.Title>
                </S.ContainerImage>
            </S.Links>
            <S.Links to={"/perfil"}>
                <S.ContainerImage customColors={location =="/perfil"? "#502B6B" : "#757575"}>
                    <S.Icon src={location =="/perfil"? perfilSelected :perfil}/>
                    <S.Title>Perfil</S.Title>
                </S.ContainerImage>
            </S.Links>
        </S.Navbar>
    </S.Container>
    )
}

export default NavbarMobile