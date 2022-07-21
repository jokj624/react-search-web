import React from 'react';
import styled from 'styled-components';
import { Alert } from 'react-bootstrap';

const Error = ({ error }) => {
	return (
		<ErrorBox>
			{ error.response && error.response.data &&
			<Alert variant="danger">
				<Alert.Heading>에러가 발생했습니다!</Alert.Heading>
				<p>
					이용에 불편을 드려 죄송합니다.
					<br />
					Error : {error.response.data.reason}
				</p>
			</Alert>
			 }
		</ErrorBox>
	);
};

export default Error;

const ErrorBox = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 20px;
`;