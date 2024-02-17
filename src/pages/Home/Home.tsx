import * as S from "../Home/Home.Styled";
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
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

const Home = () => {
  const navigation = useNavigate();
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState<number>(1);

  const limit = 10;

  const { data, isLoading } = useQuery({
    queryKey: ["getProducts", search, page],
    queryFn: () => getProducts(search, page, limit),
  });

  
  function handleClick(id: string) {
    navigation(`/produtos/${id}`);
  }

  useEffect(() => {
    if (data) {
      setTotalPages(data.pages);
    }
  }, [page, data]);

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
              image={item.image}
              title={item.name}
              gems={item.price}
              onClick={() => handleClick(item.id)}
            />
          ))}
        </S.DivCardProducts>
      )}
      {data?.data.length === 0 && <p>Nenhum produto encontrado.</p>}
      <Pagination
        page={page}
        count={totalPages}
        color="primary"
        shape="rounded"
        onChange={(_, newPage) => setPage(newPage)}
      />
      <NavbarMobile />
    </>
  );
};

export default Home;
