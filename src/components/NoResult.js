import React from 'react';
import styled from 'styled-components';
import { Alert } from 'react-bootstrap';

const NoResult = () => {
	return (
		<NoResultBox>
			<Alert variant="success">
				<Alert.Heading>데이터가 없습니다!</Alert.Heading>
				<p>다른 검색어로 다시 시도해보세요.</p>
			</Alert>
		</NoResultBox>
	);
};

export default NoResult;

const NoResultBox = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 20px;
`;