import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 1.25rem;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 1.25rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.gray};
    transition: .4s;
    border-radius: 1rem;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 0.875rem;
    width: 0.875rem;
    left: 0.25rem;
    bottom: 0.188rem;
    background-color: white;
    transition: .4s;
    border-radius: 1rem;
  }

  input:checked + .slider {
    background-color: ${({ theme }) => theme.colors.purple};
  }

  input:checked + .slider:before {
    transform: translateX(1.125rem);
  }
`;
