import styled from "@emotion/styled";

export const HeaderComponent = styled.header`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.trivelOrange[9]};
  padding: 0 20px;
  z-index: 99;

  .container {
    height: 100%;
    ${({ theme }) => theme.other.flexUtil("row", "space-between", "center")};

    .logo {
      height: 100%;
      ${({ theme }) => theme.other.flexUtil("row", "space-between", "center")};

      img:last-of-type {
        margin-top: auto;
        margin-left: 30px;
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
