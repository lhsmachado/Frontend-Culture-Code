import * as S from "../Home/Home.Styled";
import ImgProducts from "../../assets/headset.png";
import CardBalance from "../../components/CardBalance/CardBalance";
import FullBanner from "../../components/FullBanner/FullBanner";
import Navigation from "../../components/Navigation/Navigation";
import Search from "../../components/Search/Search";
import MediumBanner from "../../components/MediumBanner/MediumBanner";
import CardProduct from "../../components/CardProduct/CardProduct";

const Home = () => {
  return (
    <>
      <FullBanner>
        <Navigation />
        <CardBalance />
      </FullBanner>
      <S.DivSearch>
        <Search />
      </S.DivSearch>
      <S.DivMediumBanner>
        <MediumBanner />
      </S.DivMediumBanner>

      <S.DivTitle>
        <S.Title>Produtos para você</S.Title>
      </S.DivTitle>
      <S.DivTitleResponsive>
        <S.TitleResponsive>Para você</S.TitleResponsive>
        <S.LinkviewProducts to={"/"}>{`Ver tudo >`} </S.LinkviewProducts>
      </S.DivTitleResponsive>

      <S.DivCardProducts>
        <CardProduct
          image={ImgProducts}
          title="Headphone WB20BT Bluetooth"
          gems={50}
        />
        <CardProduct
          image={ImgProducts}
          title="Headphone WB20BT Bluetooth"
          gems={50}
        />
        <CardProduct
          image={ImgProducts}
          title="Headphone WB20BT Bluetooth"
          gems={50}
        />
        <CardProduct
          image={ImgProducts}
          title="Headphone WB20BT Bluetooth"
          gems={50}
        />
        <CardProduct
          image={ImgProducts}
          title="Headphone WB20BT Bluetooth"
          gems={50}
        />
        <CardProduct
          image={ImgProducts}
          title="Headphone WB20BT Bluetooth"
          gems={50}
        />
        <CardProduct
          image={ImgProducts}
          title="Headphone WB20BT Bluetooth"
          gems={50}
        />
        <CardProduct
          image={ImgProducts}
          title="Headphone WB20BT Bluetooth"
          gems={50}
        />
        <CardProduct
          image={ImgProducts}
          title="Headphone WB20BT Bluetooth"
          gems={50}
        />
      </S.DivCardProducts>
    </>
  );
};

export default Home;
