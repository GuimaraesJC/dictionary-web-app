import styled from 'styled-components';

export const Input = styled.input`
  margin-top: 3.25rem;
  width: 100%;
  height: 4rem;
  border: none;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.grayLightest};
  outline: 0;
  color: ${({ theme }) => theme.colors.grayDarker};
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Inter'; // TODO: Change font dynamically
  padding: 1.25rem 1.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayDarker};
    opacity: 0.25;
  }

  &:active,
  &:focus-visible {
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }

  &.error {
    border: 1px solid ${({ theme }) => theme.colors.red};
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.red};
  font-size: 1.25rem;
  font-family: 'Inter'; // TODO: Change font dynamically
  margin-top: 0.5rem;
`;
