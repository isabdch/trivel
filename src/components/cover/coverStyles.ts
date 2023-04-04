import styled from "@emotion/styled";

export const CoverComponent = styled.div`
  height: 300px;
  position: relative;

  &.itinerary {
    border-bottom: 3px solid ${({ theme }) => theme.colors.trivelOrange[6]};
  }

  &.general {
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, #00000000 48%, white 82%);
      position: absolute;
      inset: 0;
    }
  }

  img {
    object-fit: cover;
  }
`;
