import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #root, body, html {
  	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.colors.graydark};
	font-family: 'Noto Sans KR';
  }
`;

export default GlobalStyle;