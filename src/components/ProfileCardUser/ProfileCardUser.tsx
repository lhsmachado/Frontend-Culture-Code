import * as S from "./ProfileCardUserStyle"
import userImg from "../../assets/imguser.png"
const ProfileCard = () =>{

    return(
        <S.Container>
            <div>
                <S.Title>Meus dados</S.Title>
            </div>
            <div>
                <S.Image src={userImg} alt="" />
            </div>
            <S.DetailsContainer>
                <S.Details>
                    <S.Label>Nome</S.Label>
                    <S.UserText>Ana Ester Alves </S.UserText>
                </S.Details>
                <S.Details>
                    <S.Label>Email</S.Label>
                    <S.UserText>ana.ester@izap.com.br </S.UserText>
                </S.Details>
            </S.DetailsContainer>

        </S.Container>
    )
}

export default ProfileCard