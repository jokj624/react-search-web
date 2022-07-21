import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageCard from './ImageCard';

const ImageList = ({ data }) => {
	return (
		<Container style={{ display: 'flex', justifyContent: 'center' }}>
			<Row style={{ display: 'flex', justifyContent: 'center' }}>
				{data.collection &&
					data.collection.items &&
					data.collection.items.map((item) => (
						<Col key={item.href} style={{ display: 'flex', justifyContent: 'center' }}>
							<ImageCard key={item.href} data={item} />
						</Col>
					))}
			</Row>
		</Container>
	);
};

export default ImageList;