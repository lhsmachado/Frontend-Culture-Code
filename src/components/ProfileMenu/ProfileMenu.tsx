import * as S from "./ProfileMenuStyled"

const ProfileMenu = () =>{
    return(
        <S.ContainerMenu>
            <S.ButtonMenu>
                <S.ImageContainer><img src="src\assets\userIcon.svg" alt="" /></S.ImageContainer>
                <h4>Meus Dados</h4>
            </S.ButtonMenu>
            <S.ButtonMenu className="teste">
            <S.ImageContainer><img src="src\assets\cupomIcon.svg" alt="" /></S.ImageContainer>
            <h4 >Meus Resgates</h4>
            </S.ButtonMenu>
            <S.ButtonMenu className="teste">
            <S.ImageContainer><img src="src\assets\diamondIcon.svg" alt="" /></S.ImageContainer>
            <h4 >Minhas jóias</h4>
            </S.ButtonMenu >
            <S.ButtonMenu className="teste">
            <S.ImageContainer><img src="src\assets\logout-box-lineIcon.svg" alt="" /></S.ImageContainer>
            <h4 >Sair</h4>
            </S.ButtonMenu>
        </S.ContainerMenu>
    )
}

export default ProfileMenu