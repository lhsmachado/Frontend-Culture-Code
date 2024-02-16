import * as S from "./NavbarMobileStyle"
import home from "../../assets/homeIconMobile.svg"
import product from "../../assets/productIconMobile.svg"
import perfil from "../../assets/perfilIconMobile.svg"
import { useLocation } from "react-router-dom"

const NavbarMobile = () =>{
    const url = useLocation();
    const location = url.pathname
    console.log(location)
    return(
    <S.Container>
        <S.Navbar>
            <S.Links to={"/home"}>
                <S.ContainerImage>
                    <S.Icon src={home}/>
                    <S.Title>Home</S.Title>
                </S.ContainerImage>
            </S.Links>
            <S.Links to={"/produtos"} className="product">
                <S.ContainerImage >
                    <S.Icon src={product} className="productBorder"/>
                    <S.Title>Produtos</S.Title>
                </S.ContainerImage>
            </S.Links>
            <S.Links to={"/perfil"}>
                <S.ContainerImage>
                    <S.Icon src={perfil}/>
                    <S.Title>Perfil</S.Title>
                </S.ContainerImage>
            </S.Links>
        </S.Navbar>
    </S.Container>
    )
}

export default NavbarMobile