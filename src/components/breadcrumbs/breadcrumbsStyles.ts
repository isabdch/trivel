import styled from "@emotion/styled";

export const BreadcrumbsComponent = styled.div`
  background: ${({ theme }) => theme.colors.hotGray[1]};
  color: ${({ theme }) => theme.colors.hotGray[9]};
  padding: 5px 20px;
  font-size: 14px;

  .container {
    a {
      color: inherit;
      text-decoration: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &.active {
        font-weight: 600;
      }
    }
  }
`;
