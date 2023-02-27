import styled from "@emotion/styled";

export const HeaderComponent = styled.header`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.trivelOrange[9]};
  padding: 5px 20px;

  .container {
    height: 100%;
    ${({ theme }) => theme.other.flexUtil("row", "space-between", "center")};

    nav {
      ${({ theme }) => theme.other.flexUtil("row", "space-between", "center")};

      a {
        color: white;
        margin: 0 10px;
        position: relative;
        font-weight: 500;
        text-decoration: none;
        transition: 0.2s;

        &.search {
          font-size: 20px;
          margin-bottom: -5px;
        }

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
      }

      button {
        margin-left: 10px;
        cursor: pointer;
      }

      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    button:not(nav button) {
      display: none;

      @media screen and (max-width: 768px) {
        display: initial;
      }
    }
  }
`;
