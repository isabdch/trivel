import styled from "@emotion/styled";

export const MenuComponent = styled.nav`
  ${({ theme }) => theme.other.flexUtil("row", "space-between", "center")};

  a {
    color: white;
    margin: 0 10px;
    position: relative;
    font-weight: 500;
    text-decoration: none;
    transition: 0.2s;

    &:not(.search) {
      &.active::after,
      &::after {
        position: absolute;
        content: "";
        ${({ theme }) => theme.other.sizeUtil("0%", "2px")};
        background: white;
        left: 0;
        bottom: -5px;
        transition: 0.3s;
      }

      &.active::after,
      &:hover::after {
        width: 100%;
      }
    }

    &.search {
      font-size: 20px;
      margin-bottom: -5px;
    }
  }

  button {
    margin-left: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    ${({ theme }) => theme.other.sizeUtil("100%", "calc(100% - 80px)")};
    ${({ theme }) => theme.other.flexUtil("column", "flex-start", "center")};
    max-width: 300px;
    background: ${({ theme }) => theme.colors.trivelOrange[5]};
    padding: 20px;
    position: fixed;
    bottom: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.2s;
    overflow-y: auto;

    &.active {
      transform: translateX(0);
    }

    a {
      margin: 15px 0;
      font-weight: 600;

      &:not(.search) {
        &::before {
          content: "TRÍVEL";
          color: ${({ theme }) => theme.colors.trivelOrange[5]};
          font-size: 32px;
          font-weight: 900;
          letter-spacing: 8px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }
      }

      svg {
        margin-bottom: -5px;
      }
    }

    button {
      margin: auto 0 50px 0;
    }
  }

  @media screen and (max-height: 550px) {
    button {
      margin: auto 0 20px 0;
    }
  }
`;
