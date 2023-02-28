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

    button:not(nav button) {
      display: none;

      @media screen and (max-width: 768px) {
        display: initial;
      }
    }
  }
`;
