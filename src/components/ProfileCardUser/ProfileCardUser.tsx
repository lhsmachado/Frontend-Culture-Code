import * as S from "./ProfileCardUserStyle";
import userImg from "../../assets/imguser.png";

type IProfileCard = {
  image?: string;
  name?: string;
  email?: string;
};
const ProfileCard = ({ image, name, email }: IProfileCard) => {
  return (
    <S.Container>
      <div>
        <S.Title>Meus dados</S.Title>
      </div>
      <div>
        <S.Image src={image ? image : userImg} alt="" />
      </div>
      <S.DetailsContainer>
        <S.Details>
          <S.Label>Nome</S.Label>
          <S.UserText>{name ? name : ""} </S.UserText>
        </S.Details>
        <S.Details>
          <S.Label>Email</S.Label>
          <S.UserText>{email ? email : ""} </S.UserText>
        </S.Details>
      </S.DetailsContainer>
    </S.Container>
  );
};

export default ProfileCard;
