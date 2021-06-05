import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from '../constants';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${fonts.roboto};
    background-color: ${colors.background};
    max-width: 1400px;
    min-width: 320px;
    a {
      color: ${colors.orange};
      text-decoration: none;
    }
    p {
      font-family: ${fonts.poppins};
      font-size: 14px;
    }
  }
`;
export const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<GlobalStyle />
			{children}
		</React.Fragment>
	);
};

export default Layout;
