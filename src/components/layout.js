import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from '../constants';
import SEO from './seo';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${fonts.roboto};
    background-color: ${colors.cream};
    max-width: 1400px;
    min-width: 320px;
    a {
      color: ${colors.salmon};
      text-decoration: none;
      :hover {
        color: ${colors.olive}
      }
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
			<SEO />
			<GlobalStyle />
			{children}
		</React.Fragment>
	);
};

export default Layout;
