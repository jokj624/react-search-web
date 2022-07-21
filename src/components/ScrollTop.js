import React, { useCallback } from 'react';
import styled from 'styled-components';
import arrow from '../assets/images/arrow.png';

const ScrollTop = () => {
	const moveToTop = useCallback(() => {
		document.documentElement.scrollTop = 0;
	}, []);

	return <ScrollImg src={arrow} width="5px" height="5px" onClick={moveToTop} />;
};

export default ScrollTop;

const ScrollImg = styled.img`
	position: fixed;
	bottom: 2%;
	right: 2%;
	width: 30px;
	height: 30px;
`;