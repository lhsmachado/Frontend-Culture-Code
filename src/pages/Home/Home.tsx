import CardBalance from "../../components/CardBalance/CardBalance";
import FullBanner from "../../components/FullBanner/FullBanner";
import Navigation from "../../components/Navigation/Navigation";

const Home = () => {
  return (
    <>
      <FullBanner>
        <Navigation />
        <CardBalance />
      </FullBanner>
    </>
  );
};

export default Home;
