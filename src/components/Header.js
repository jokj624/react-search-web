import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/nasa_logo.png';

const Header = () => {
	return (
		<Root>
			<Logo src={logo} />
		</Root>
	);
}

export default Header;

const Root = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 20%;
`;

const Logo = styled.img`
	width: 30%;
	height: 65%;
`