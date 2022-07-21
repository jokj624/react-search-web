import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import dayjs from 'dayjs';

const ImageCard = ({data}) => {
	let shortDesc = '';
	const imageSrc = data.links && data.links[0].href;
	const title = data.data && data.data[0].title;
	const description = data.data && data.data[0].description;
	const dateCreated = data.data && dayjs(data.data[0].date_created).format('YYYY-MM-DD');
	const center = data.data && data.data[0].center;
	
	if (description) shortDesc = description.slice(0, 80) + '...'; 
	
	return (
		<Card style={{ width: '18rem', margin: '5px' }}>
			<Card.Img variant="top" src={imageSrc} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>
					{shortDesc}
				</Card.Text>
			</Card.Body>
			<ListGroup className="list-group-flush">
				<ListGroup.Item>{dateCreated}</ListGroup.Item>
				<ListGroup.Item>{center}</ListGroup.Item>
			</ListGroup>
		</Card>
	);
};

export default ImageCard;