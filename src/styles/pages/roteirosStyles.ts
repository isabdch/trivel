import styled from "@emotion/styled";

export const ItinerariesPage = styled.main`
  min-height: calc(100vh - 111.69px);
  background: url("/assets/images/new_palms.svg") no-repeat center;
  background-size: cover;
  padding: 20px;

  .container {
    h1 {
      color: ${({ theme }) => theme.colors.trivelOrange[9]};
      margin-bottom: 30px;

      strong {
        /* color: black;
        font-size: clamp(18px, 3vw, 26px); */
        font-weight: inherit;
      }
    }

    .cards {
      ${({ theme }) => theme.other.flexUtil("row wrap", "center")};
      gap: 20px;
    }
  }
`;
