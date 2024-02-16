import * as S from "./ProfileMenuStyled";
import userIcon from "../../assets/userIcon.svg";
import cupomIcon from "../../assets/cupomIcon.svg";
import diamondIcon from "../../assets/userIcon.svg";
import logoutIcon from "../../assets/logout-box-lineIcon.svg";

type OnChangeType = (value: string) => void;
type props = {
  onChange: OnChangeType;
};

const ProfileMenu = ({ onChange }: props) => {
  const handleButtonClick = (selected: string) => {
    onChange(selected);
  };

  return (
    <S.ContainerMenu>
      <S.ButtonMenu onClick={() => handleButtonClick("profile")}>
        <S.ImageContainer>
          <img src={userIcon} alt="" />
        </S.ImageContainer>
        <h4>Meus Dados</h4>
      </S.ButtonMenu>
      <S.ButtonMenu
        className="border"
        onClick={() => handleButtonClick("senha")}
      >
        <S.ImageContainer>
          <img src={cupomIcon} alt="" />
        </S.ImageContainer>
        <h4>Alterar senha</h4>
      </S.ButtonMenu>
      <S.ButtonMenu
        className="border"
        onClick={() => handleButtonClick("resgates")}
      >
        <S.ImageContainer>
          <img src={cupomIcon} alt="" />
        </S.ImageContainer>
        <h4>Meus Resgates</h4>
      </S.ButtonMenu>
      <S.ButtonMenu
        className="border"
        onClick={() => handleButtonClick("joias")}
      >
        <S.ImageContainer>
          <img src={diamondIcon} alt="" />
        </S.ImageContainer>
        <h4>Minhas jóias</h4>
      </S.ButtonMenu>
      <S.ButtonMenu
        className="border"
        onClick={() => handleButtonClick("sair")}
      >
        <S.ImageContainer>
          <img src={logoutIcon} alt="" />
        </S.ImageContainer>
        <h4>Sair</h4>
      </S.ButtonMenu>
    </S.ContainerMenu>
  );
};

export default ProfileMenu;
