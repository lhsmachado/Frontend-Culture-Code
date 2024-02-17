import * as S from "./ProductsRescued.Styled";
import CardMyBalance from "../../components/CardMyBalance/CardMyBalance";
import Navigation from "../../components/Navigation/Navigation";
import CardProduct from "../../components/cardProduct/cardProduct";
import Search from "../../components/Search/Search";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../services/Products/getProducts/getProducts";
import { IGetProducts } from "../../types/getProducts/getProducts";
import { getUser } from "../../services/getUser/getUser";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

const ProductsRescued = () => {
  const navigation = useNavigate();
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState<number>(1);

  const limit = 8;

  const { data: products, isLoading } = useQuery({
    queryKey: ["getProducts", search, page],
    queryFn: () => getProducts(search, page, limit),
  });

  const { data: user, isLoading: loading } = useQuery({
    queryKey: ["getUser"],
    queryFn: getUser,
  });

  function handleClick(id: string) {
    navigation(`/produtos/${id}`);
  }

  useEffect(() => {
    if (products) {
      setTotalPages(products.pages);
    }
  }, [page, products]);
  const handleSearch: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      setSearch(event.currentTarget.value);
    }
  };

  return (
    <div>
      <S.DivNavigate>
        <Navigation
          home="Home"
          produtos="Produtos"
          myPerfil="Meu Perfil"
          customColorslinks="#292929"
        />
      </S.DivNavigate>

      <S.DivTitle>
        <S.Title>Produtos para você resgatar</S.Title>
      </S.DivTitle>
      <S.DivSearch>
        <Search onKeyDown={handleSearch} />
      </S.DivSearch>
      <S.DivCardBalance>
        {loading ? (
          <S.TitleLoadingBance>Carregando Saldo...</S.TitleLoadingBance>
        ) : (
          <S.DivSubBalance>
            <CardMyBalance balance={user?.credits} imagem="" />
          </S.DivSubBalance>
        )}
      </S.DivCardBalance>

      {isLoading ? (
        <S.TitleLoadingCardProducts>Carregando...</S.TitleLoadingCardProducts>
      ) : (
        <S.DivCardProducts>
          {products?.data.map((item: IGetProducts) => (
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
      <Pagination
        page={page}
        count={totalPages}
        color="primary"
        shape="rounded"
        onChange={(_, newPage) => setPage(newPage)}
      />
    </div>
  );
};

export default ProductsRescued;
