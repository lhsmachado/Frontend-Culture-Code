import * as S from "../Search/Search.Styled";
import ImgSearch from "../../assets/search.png";
import ImgGroup from "../../assets/Group.svg";

interface ISearchProps {
  onKeyDown: any;
}

const Search = ({ onKeyDown }: ISearchProps) => {
  return (
    <S.Container>
      <S.ImgSearch src={ImgSearch} alt="" />
      <S.Input
        type="text"
        placeholder="O que você está buscando?"
        onKeyDown={onKeyDown}
      />
      <S.ImgGroup src={ImgGroup} alt="" />
    </S.Container>
  );
};

export default Search;
