import * as S from '../Search/Search.Styled'
import ImgSearch from '../../assets/search.png'
import ImgGroup from '../../assets/Group.svg'

const Search = () => {
  return (
    <S.Container>
        <S.ImgSearch src={ImgSearch} alt="" />
        <S.Input type="text" placeholder='O que você está buscando?' />
        <S.ImgGroup src={ImgGroup} alt="" />
    </S.Container>
  )
}

export default Search