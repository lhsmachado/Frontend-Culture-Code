import { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import ProfileCardJewels from "../../components/ProfileCardJewels/ProfileCardJewels";
import ProfileCardProductRedeems from "../../components/ProfileCardProductRedeems/ProfileCardProductRedeems";
import ProfileCard from "../../components/ProfileCardUser/ProfileCardUser";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import userImg from "../../assets/imguser.png";
import returnArrow from "../../assets/arrowLeft.svg";
import * as S from "./PerfilStyle";
import ProfileCardChangePassword from "../../components/ProfileCardChangePassword/ProfileCardChangePassword";

const Perfil = () => {
  const [selecteCard, setSelectCard] = useState("");
  const screen = window.innerWidth;
  console.log(screen);
  const handleChange = (value: string) => {
    setSelectCard(value);
  };

  const cardToRender = () => {
    switch (selecteCard) {
      case "profile":
        return <ProfileCard />;
      case "resgates":
        return <ProfileCardProductRedeems />;
      case "joias":
        return <ProfileCardJewels />;
      case "senha":
        return <ProfileCardChangePassword />;
      case "":
        return <></>;
    }
  };

  const cardToRenderMobile = () => {
    switch (selecteCard) {
      case "profile":
        return <ProfileCard />;
      case "resgates":
        return <ProfileCardProductRedeems />;
      case "joias":
        return <ProfileCardJewels />;
        case "senha":
        return <ProfileCardChangePassword />;
      case "":
        return <ProfileMenu onChange={handleChange} />;
    }
  };

  return (
    <>
      {screen > 720 ? (
        <S.ContainerPage>
          <div>
            <Navigation
              customColorslinks="#000000"
              home="Home"
              produtos="Produtos"
              myPerfil="Meu Perfil"
            />
          </div>
          <S.ContainerBody>
            <ProfileMenu onChange={handleChange} />
            {cardToRender()}
          </S.ContainerBody>
        </S.ContainerPage>
      ) : (
        <>
          <S.ContainerPage>
            {selecteCard == "" ? (
              <S.PictureContainer>
                <S.ProfilePicture src={userImg} />
                <S.ProfileName>Alex</S.ProfileName>
              </S.PictureContainer>
            ) : (
              <S.ReturnBar>
                <S.ReturnArrow
                  src={returnArrow}
                  onClick={() => setSelectCard("")}
                />
                <S.HeaderText>Meu Perfil</S.HeaderText>
                <div></div>
              </S.ReturnBar>
            )}

            <S.ContainerBody>{cardToRenderMobile()}</S.ContainerBody>
          </S.ContainerPage>
        </>
      )}
    </>
  );
};

export default Perfil;
