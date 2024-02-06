import * as S from "./ProfileCardJewelsStyle"
import joiaAmarela from "../../assets/joiaamarela.png"
import joiaRoxa from "../../assets/joiaroxa.png"
import joiaAzul from "../../assets/joiaazul.png"


const ProfileCardJewels = () =>{
    

    return(
        <S.Container>
            <div>
                <S.Title>Minhas jóias</S.Title>
            </div>
           <S.JewelsList>
            <S.JewelsContainer>
                <div>
                    <img src={joiaAmarela} alt="" />
                </div>
                
                <S.JewelsTexts>
                    <S.JewelTitle> Joia da mente</S.JewelTitle>
                    <S.JewelQtd>2 jóias</S.JewelQtd>
                    <S.JewelDetails>
                    O poder dessa joia está na possibilidade de transformar ideias em palavras,
                    com assertividade na transmissão e receptividade das informações.
                    </S.JewelDetails>
                </S.JewelsTexts>
            </S.JewelsContainer>
            <S.JewelsContainer>
            <div>
                    <S.JewelPic src={joiaRoxa} alt="" />
                </div>
                <S.JewelsTexts>
                    <S.JewelTitle> Joia do poder</S.JewelTitle>
                    <S.JewelQtd>1 jóia</S.JewelQtd>
                    <S.JewelDetails>
                    Esta poderosa joia traz consigo alto nível de energia e empatia para lidar com colegas de trabalho, aquele que a possui demonstra a capacidade de lidar com diversos perfis, bem como proatividade e compartilhamento de informações.
                    </S.JewelDetails>
                </S.JewelsTexts>
            </S.JewelsContainer>
            <S.JewelsContainer>
            <div>
                    <img src={joiaAzul} alt="" />
                </div>
                <S.JewelsTexts>
                    <S.JewelTitle> Joia do espaço</S.JewelTitle>
                    <S.JewelQtd>3 jóias</S.JewelQtd>
                    <S.JewelDetails>
                    Esta joia traz consigo a capacidade de se adaptar e estimula o interesse por mudanças,
                    variedades de experiências e novas ideias.
                    </S.JewelDetails>
                </S.JewelsTexts>
            </S.JewelsContainer>
           </S.JewelsList>
            

        </S.Container>
    )
}

export default ProfileCardJewels