import * as S from "./ProfileMenuStyled";
import userIcon from "../../assets/userIcon.svg";
import userIconSelected from "../../assets/userIconSelected.svg";
import cupomIcon from "../../assets/cupomIcon.svg";
import cupomIconSelected from "../../assets/cupomIconSelected.svg";
import diamondIconSelected from "../../assets/diamondIconSelected.svg";
import diamondIcon from "../../assets/diamondIcon.svg";
import logoutIcon from "../../assets/logout-box-lineIcon.svg";
import passwordIcon from "../../assets/passwordIcon.svg";
import passwordIconSelected from "../../assets/passwordIconSelected.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type OnChangeType = (value: string) => void;
type props = {
  onChange: OnChangeType;
};

const ProfileMenu = ({ onChange }: props) => {
  const [selected, setSelected] = useState("");

  const handleButtonClick = (selected: string) => {
    onChange(selected);
    setSelected(selected);
  };
  const navigation = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigation("/");
  };

  return (
    <S.ContainerMenu>
      <S.ButtonMenu onClick={() => handleButtonClick("profile")}>
        <S.ImageContainer
          customColors={selected == "profile" ? "#502B6B" : "#F3E3FF"}
        >
          <img
            src={selected == "profile" ? userIconSelected : userIcon}
            alt=""
          />
        </S.ImageContainer>
        <h4>Meus Dados</h4>
      </S.ButtonMenu>
      <S.ButtonMenu
        className="border"
        onClick={() => handleButtonClick("senha")}
      >
        <S.ImageContainer
          customColors={selected == "senha" ? "#502B6B" : "#F3E3FF"}
        >
          <img
            src={selected == "senha" ? passwordIconSelected : passwordIcon}
            alt=""
          />
        </S.ImageContainer>
        <h4>Alterar senha</h4>
      </S.ButtonMenu>
      <S.ButtonMenu
        className="border"
        onClick={() => handleButtonClick("resgates")}
      >
        <S.ImageContainer
          customColors={selected == "resgates" ? "#502B6B" : "#F3E3FF"}
        >
          <img
            src={selected == "resgates" ? cupomIconSelected : cupomIcon}
            alt=""
          />
        </S.ImageContainer>
        <h4>Meus Resgates</h4>
      </S.ButtonMenu>
      <S.ButtonMenu
        className="border"
        onClick={() => handleButtonClick("joias")}
      >
        <S.ImageContainer
          customColors={selected == "joias" ? "#502B6B" : "#F3E3FF"}
        >
          <img
            src={selected == "joias" ? diamondIconSelected : diamondIcon}
            alt=""
          />
        </S.ImageContainer>
        <h4>Minhas jóias</h4>
      </S.ButtonMenu>
      <S.ButtonMenu className="border" onClick={() => handleLogout()}>
        <S.ImageContainer
          customColors={selected == "sair" ? "#502B6B" : "#F3E3FF"}
        >
          <img src={logoutIcon} alt="" />
        </S.ImageContainer>
        <h4>Sair</h4>
      </S.ButtonMenu>
    </S.ContainerMenu>
  );
};

export default ProfileMenu;
