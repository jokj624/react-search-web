import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { useGetSearchData } from '../hooks/useGetSearchData';
import Loading from './Loading';
import Error from './Error';
import ImageList from './ImageList';
import NoResult from './NoResult';

const SearchBar = () => {
	const [keyword, setKeyword] = useState('nasa');
	const [input, setInput] = useState('');
	
	const handleInput = useCallback((e) => {
		setInput(e.target.value);
	}, []);

	const onSubmit = useCallback((e) => {
		e.preventDefault();
		setKeyword(input);
	}, [input]);

	const onKeyPressSubmit = useCallback((e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			setKeyword(input);
		}
	}, [input]);

	const { data, isLoading, isError, setSize } = useGetSearchData(keyword);

	return (
		<OuterBox>
			<InputGroup className="mb-3">
				<InnerBox>
					<FormBox>
						<Form.Control
							value={input}
							onChange={handleInput}
							onKeyPress={onKeyPressSubmit}
							placeholder="Search example 'nasa' "
							aria-label="검색어"
							aria-describedby="basic-addon2"
						/>
					</FormBox>
					<Button variant="outline-secondary" id="button-addon2" onClick={onSubmit}>
						검색
					</Button>
				</InnerBox>
			</InputGroup>
			{!data && isLoading && <Loading />}
			{!data && isError && <Error error={isError} />}
			{!isError && data && data[0].collection.items.length <= 0 && <NoResult />}
			{data &&
				data[0].collection &&
				data[0].collection.items.length > 0 &&
				data.map((item, index) => {
					return <ImageList key={index} data={item} />;
				})}
			{data && data[0].collection && data[0].collection.items.length > 0 && (
				<ButtonBox>
					<Button variant="outline-light" onClick={() => setSize((prev) => prev + 1)}>
						More Load!
					</Button>
				</ButtonBox>
			)}
		</OuterBox>
	);
};

export default SearchBar;

const OuterBox = styled.div`
	width: 100%;
`;

const InnerBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 30px;
`;

const FormBox = styled.div`
	width: 50%;
	margin: 10px;
`;

const ButtonBox = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	margin-top: 20px;
`;