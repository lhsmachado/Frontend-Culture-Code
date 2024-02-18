import * as S from "../Home/Home.Styled";
import CardBalance from "../../components/CardBalance/CardBalance";
import FullBanner from "../../components/FullBanner/FullBanner";
import Navigation from "../../components/Navigation/Navigation";
import Search from "../../components/Search/Search";
import MediumBanner from "../../components/MediumBanner/MediumBanner";
import CardProduct from "../../components/cardProduct/cardProduct";
import NavbarMobile from "../../components/NavbarMobile/NavbarMobile";
import { getProducts } from "../../services/Products/getProducts/getProducts";
import { IGetProducts } from "../../types/getProducts/getProducts";
import ModalPrice from "../../components/ModalPrice/ModalPrice";
import { useQuery } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigation = useNavigate();
  const [search, setSearch] = useState("");

  const [modal, setModal] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const [price, setPrice] = useState<number | undefined>(undefined);

  const { data, isLoading } = useQuery({
    queryKey: ["getProducts", search, price],
    queryFn: () => getProducts({ name: search, price }),
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

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
    setInputValue(1);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(parseInt(value, 10));
  };

  const handleModalButton = () => {
    setPrice(inputValue);
    closeModal();
  };

  return (
    <>
      <ModalPrice
        isOpen={modal}
        onChange={handleSliderChange}
        onClick={handleModalButton}
        onCloseModal={closeModal}
        sliderValue={inputValue}
      />

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
        <Search onKeyDown={handleSearch} onClick={openModal} />
      </S.DivSearch>
      <S.DivMediumBanner>
        <MediumBanner />
      </S.DivMediumBanner>

      <S.DivTitle>
        <S.Title>Produtos para você</S.Title>
        <S.Links to={"/produtos"}>Ver tudo</S.Links>
      </S.DivTitle>
      <S.DivTitleResponsive>
        <S.TitleResponsive>Para você</S.TitleResponsive>
        <S.LinkviewProducts to={"/produtos"}>
          {`Ver tudo >`}{" "}
        </S.LinkviewProducts>
      </S.DivTitleResponsive>
      {isLoading ? (
        <S.LoagingProducts>Carregando...</S.LoagingProducts>
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
      <S.DivPagination>
        {data?.data.length === 0 && <p>Nenhum produto encontrado.</p>}
      </S.DivPagination>
      <NavbarMobile />
    </>
  );
};

export default Home;
