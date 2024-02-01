import * as S from "../Home/Home.Styled";
import CardBalance from "../../components/CardBalance/CardBalance";
import FullBanner from "../../components/FullBanner/FullBanner";
import Navigation from "../../components/Navigation/Navigation";
import Search from "../../components/Search/Search";
import MediumBanner from "../../components/MediumBanner/MediumBanner";

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
        <MediumBanner/>
      </S.DivMediumBanner>
    </>
  );
};

export default Home;
