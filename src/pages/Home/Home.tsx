import * as S from "../Home/Home.Styled";
import ImgProducts from "../../assets/headset.png";
import CardBalance from "../../components/CardBalance/CardBalance";
import FullBanner from "../../components/FullBanner/FullBanner";
import Navigation from "../../components/Navigation/Navigation";
import Search from "../../components/Search/Search";
import MediumBanner from "../../components/MediumBanner/MediumBanner";
import CardProduct from "../../components/cardProduct/cardProduct";
import NavbarMobile from "../../components/NavbarMobile/NavbarMobile";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/Products/getProducts/getProducts";
import { IGetProducts } from "../../types/getProducts/getProducts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigation = useNavigate();
  const [search, setSearch] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["getProducts", search],
    queryFn: () => getProducts(search),
  });

  function handleClick(id: string) {
    navigation(`/produtos/${id}`);
  }

  const handleSearch: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      setSearch(event.currentTarget.value);
    }
  };

  return (
    <>
      <FullBanner>
        <Navigation
          customColorslinks="#ffffff"
          home="Home"
          produtos="Produtos"
          myPerfil="Meu Perfil"
        />
        <CardBalance />
      </FullBanner>
      <S.DivSearch>
        <Search onKeyDown={handleSearch} />
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
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <S.DivCardProducts>
          {data?.data.map((item: IGetProducts) => (
            <CardProduct
              key={item.id}
              image={ImgProducts}
              title={item.name}
              gems={item.price}
              onClick={() => handleClick(item.id)}
            />
          ))}
        </S.DivCardProducts>
      )}
      <NavbarMobile />
    </>
  );
};

export default Home;
