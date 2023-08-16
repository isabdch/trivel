import styled from "@emotion/styled";

export const ItinerariesPage = styled.main`
  min-height: calc(100vh - 111.69px);
  background: url("/assets/images/page_banner_bg.svg") no-repeat;
  background-size: 100%;
  padding: 20px;
  padding-bottom: 60px;
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
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-gap: 25px;
    }
  }
`;
