import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const CardComponent = styled(motion.div)`
  width: 100%;
  /* max-width: 300px; */
  background: ${({ theme }) => theme.white};
  box-shadow: 1px 1px 10px 0.1px ${({ theme }) => theme.colors.gray[3]};
  ${({ theme }) => theme.other.flexUtil("column")};
  border-radius: 10px;

  .img {
    width: 100%;
    height: 150px;
    position: relative;
    pointer-events: none;

    img {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      object-fit: cover;
    }
  }

  .card__body {
    ${({ theme }) => theme.other.flexUtil("column", "", "flex-start")};
    flex: 1;
    padding: 20px;
    
    .title {
      width: 100%;
      ${({ theme }) => theme.other.flexUtil("row", "space-between", "center")};
    }

    p {
      color: ${({ theme }) => theme.colors.gray[7]};
      margin: 15px 0;
      font-size: 14px;
      display: -webkit-box;
      line-clamp: 4;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    button {
      margin-top: auto;
    }
  }
`;
