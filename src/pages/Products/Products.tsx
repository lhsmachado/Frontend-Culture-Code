import * as S from "../Products/Products.Styled";
import CardProductsRedeems from "../../components/CardProductsRedeems/CardProductsRedeems";
import Navigation from "../../components/Navigation/Navigation";
import CardSuccessfullyRescued from "../../components/CardSuccessfullyRescued/CardSuccessfullyRescued";
import { useState } from "react";
import ModalConfirmationRescued from "../../components/ModalConfirmationRescued/ModalConfirmationRescued";
import { useQuery } from "@tanstack/react-query";
import { getProductsId } from "../../services/getProducts/getProductsId";
import { useParams } from "react-router-dom";

const Products = () => {
  const {id} = useParams()
  const [cards, setCards] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const {data:products}= useQuery({queryKey:["getProductsId"] , queryFn: () => getProductsId(id as string)})

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const cardRestadado = () => {
    setCards("rescued");
    closeModal();
  };

  return (
    <>
      <ModalConfirmationRescued
        isOpen={modalOpen}
        price={products?.price}
        rescued={cardRestadado}
        closeModal={closeModal}
        onCloseModal={closeModal}
        nameProduct={products?.name}
        
      />
      <S.DivNavigate>
        <Navigation
          customColorslinks="#000000"
          home="Home"
          produtos="Produtos"
          myPerfil="Meu Perfil"
        />
      </S.DivNavigate>

      {cards === "rescued" ? (
        <S.DivAnimate
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CardSuccessfullyRescued />
        </S.DivAnimate>
      ) : (
        <CardProductsRedeems onClick={openModal} />
      )}
    </>
  );
};

export default Products;
