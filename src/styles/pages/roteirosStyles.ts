import styled from "@emotion/styled";

export const ItinerariesPage = styled.main`
  min-height: calc(100vh - 111.69px);
  background: url("/assets/images/page_banner_bg.svg") no-repeat;
  background-size: 100%;
  padding: 20px;
  position: relative;

  .container {
    h1 {
      color: ${({ theme }) => theme.colors.trivelOrange[9]};
      margin-bottom: 30px;

      strong {
        font-weight: inherit;
      }
    }

    .cards {
      ${({ theme }) => theme.other.flexUtil("row wrap", "center")};
      gap: 20px;
    }
  }
`;
