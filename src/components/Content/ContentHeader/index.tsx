import * as S from './styles';

function ContentHeader() {
  return (
    <S.Wrapper>
      <S.WordContainer>
        <S.Word>Keyboard</S.Word>
        <S.Phonetic>/ˈkiːbɔːd/</S.Phonetic>
      </S.WordContainer>
      <S.PlayButton />
    </S.Wrapper>
  );
}

export default ContentHeader;
