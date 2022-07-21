import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
	return (
		<LoadingBox>
			<Spinner animation="border" role="status" variant="light" />
		</LoadingBox>
	);
};

export default Loading;

const LoadingBox = styled.div`
	display: flex;
	justify-content: center;
`;