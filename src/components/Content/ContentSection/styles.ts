import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2.625rem;
`;

export const PartOfSpeech = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  font-style: italic;
  line-height: 1.75rem;
  font-family: 'Inter'; // TODO: Change font dynamically
  margin-bottom: 2.5rem;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin-left: 1.25rem;
    background-color: ${({ theme }) => theme.colors.grayLighter};
  }
`;

export const Identifier = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.25rem;
  font-family: 'Inter'; // TODO: Change font dynamically
  line-height: 1.25rem;
`;

export const Meanings = styled.ul`
  margin: 1.625rem 0 2.5rem 1.375rem;
`;

export const Definition = styled.li`
  text-indent: -3rem;
  margin-top: 0.75rem;
  margin-left: 1.375rem;
  font-size: 1.125rem;
  font-family: 'Inter'; // TODO: Change font dynamically
  line-height: 1.5rem;

  &:first-of-type {
    margin-top: 0;
  }

  &::before {
    content: '•';
    color: ${({ theme }) => theme.colors.purple};
    margin: 0 1.375rem 0 1.25rem;
  }
`;

export const RelatedWordsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.5rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RelatedWordLink = styled.a`
  color: ${({ theme }) => theme.colors.purple};
  font-size: 1.125rem;
  font-weight: 700;
  font-family: 'Inter'; // TODO: Change font dynamically
  line-height: 1.5rem;
  margin-left: 1.375rem;
  transition: all 0.2s ease-in;

  &:hover {
    text-decoration: underline;
    filter: brightness(0.9);
  }
`;
