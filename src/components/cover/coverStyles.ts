import styled from "@emotion/styled";

export const CoverComponent = styled.div<{ src: string }>`
  height: 300px;
  position: relative;
  background: url(${(props) => props.src}) no-repeat bottom;
  background-size: cover;
  padding: 20px;

  &::after,
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
  }

  &::after {
    background: url("/assets/images/page_banner_bg.svg") no-repeat;
    background-size: 100%;
  }

  &::before {
    background: linear-gradient(180deg, #00000000 70%, white 100%);
    background-size: cover;
  }
`;
