import * as S from "../Products/Products.Styled";
import CardProductsRedeems from "../../components/CardProductsRedeems/CardProductsRedeems";
import Navigation from "../../components/Navigation/Navigation";
import CardSuccessfullyRescued from "../../components/CardSuccessfullyRescued/CardSuccessfullyRescued";
import { useState } from "react";
import ModalConfirmationRescued from "../../components/ModalConfirmationRescued/ModalConfirmationRescued";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProductsId } from "../../services/Products/getProducts/getProductsId";
import { useParams } from "react-router-dom";
import { getUser } from "../../services/getUser/getUser";
import { ProductRescued } from "../../services/Products/productrescued/ProductRescued";

const Products = () => {
  const { id } = useParams();
  const [cards, setCards] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const { data: products } = useQuery({
    queryKey: ["getProductsId"],
    queryFn: () => getProductsId(id as string),
  });
  const { data: user } = useQuery({
    queryKey: ["getUser"],
    queryFn: getUser,
  });

  const productsId = products?.id;
  const userId = user?.id;

  const mutation = useMutation({
    mutationFn: () => ProductRescued(productsId, userId),
    onSuccess: async () => {
      setCards("rescued");
    },
    onError: async () => {
      alert("Você não tem saldo suficiente para realizar o resgate!");
    },
  });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleRescue = async () => {
    try {
      await mutation.mutateAsync();
    } catch (error) {
      console.error("Erro ao resgatar produto:", error);
    } finally {
      closeModal();
    }
  };

  const response = mutation.data;

  return (
    <>
      <ModalConfirmationRescued
        isOpen={modalOpen}
        price={products?.price}
        rescued={handleRescue}
        closeModal={closeModal}
        onCloseModal={closeModal}
        nameProduct={products?.name}
      />
      <S.DivNavigate>
        <Navigation
          customColorslinks="#292929"
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
          <CardSuccessfullyRescued
            nameProduct={products?.name}
            priceProducts={products?.price}
            balance={response?.credits}
          />
        </S.DivAnimate>
      ) : (
        <CardProductsRedeems onClick={openModal} />
      )}
    </>
  );
};

export default Products;
