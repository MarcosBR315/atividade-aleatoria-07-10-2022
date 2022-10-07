import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: lightblue;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
`;

export const Li = styled.li`
  margin: 3px;
`;