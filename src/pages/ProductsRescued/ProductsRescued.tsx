import * as S from "./ProductsRescued.Styled";
import ImgPhone from "../../assets/headset.png";
import CardMyBalance from "../../components/CardMyBalance/CardMyBalance";
import Navigation from "../../components/Navigation/Navigation";
import CardProduct from "../../components/cardProduct/cardProduct";
import Search from "../../components/Search/Search";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../services/Products/getProducts/getProducts";
import { IGetProducts } from "../../types/getProducts/getProducts";
import { getUser } from "../../services/getUser/getUser";

const ProductsRescued = () => {
  const navigation = useNavigate();

  const { data: products, isLoading } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });

  const { data: user, isLoading: loading } = useQuery({
    queryKey: ["getUser"],
    queryFn: getUser,
  });

  function handleClick(id: string) {
    navigation(`/produtos/${id}`);
  }

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
        <Search />
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
              image={ImgPhone}
              title={item.name}
              gems={item.price}
              onClick={() => handleClick(item.id)}
            />
          ))}
        </S.DivCardProducts>
      )}
    </div>
  );
};

export default ProductsRescued;
