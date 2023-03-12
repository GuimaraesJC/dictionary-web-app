import * as S from './styles';

function ContentSection() {
  return (
    <S.Wrapper>
      <S.PartOfSpeech>noun</S.PartOfSpeech>
      <S.Identifier>Meaning</S.Identifier>
      <S.Meanings>
        <S.Definition>
          (etc.) A set of keys used to operate a typewriter, computer etc.
        </S.Definition>
        <S.Definition>
          A component of many instruments including the piano, organ,
          and harpsichord consisting of usually black and white keys
          that cause different tones to be produced when struck.
        </S.Definition>
        <S.Definition>
          A device with keys of a musical keyboard, used to control electronic
          sound-producing devices which may be built into or separate from the
          keyboard device.
        </S.Definition>
      </S.Meanings>
      <S.RelatedWordsContainer>
        <S.Identifier>Synonyms</S.Identifier>
        <S.LinksContainer>
          <S.RelatedWordLink>electronic keyboard</S.RelatedWordLink>
          <S.RelatedWordLink>electronic</S.RelatedWordLink>
          <S.RelatedWordLink>keyboard</S.RelatedWordLink>
        </S.LinksContainer>
      </S.RelatedWordsContainer>
      <S.RelatedWordsContainer>
        <S.Identifier>Antonyms</S.Identifier>
        <S.LinksContainer>
          <S.RelatedWordLink>electronic keyboard</S.RelatedWordLink>
          <S.RelatedWordLink>electronic</S.RelatedWordLink>
          <S.RelatedWordLink>keyboard</S.RelatedWordLink>
        </S.LinksContainer>
      </S.RelatedWordsContainer>
    </S.Wrapper>
  );
}

export default ContentSection;
