import styled from 'styled-components';
import { ReactComponent as PlayIcon } from 'assets/images/icon-play.svg';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WordContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Word = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  line-height: 4.75rem;
  font-family: 'Inter'; // TODO: Change font dynamically
`;

export const Phonetic = styled.h2`
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-family: 'Inter'; // TODO: Change font dynamically (verify)
  color: ${({ theme }) => theme.colors.purple};
  margin-top: 0.5rem;
`;

export const PlayButton = styled(PlayIcon)`
  cursor: pointer;

   &:hover * {
    opacity: 1;

    path {
      fill: ${({ theme }) => theme.colors.white};
    }
   }
`;
