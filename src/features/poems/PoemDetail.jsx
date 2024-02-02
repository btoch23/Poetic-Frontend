/* eslint-disable react/prop-types */
import { Card, CardText, CardBody, Col, CardTitle, CardSubtitle } from "reactstrap";
import './PoemCard.css';

const PoemDetail = ({ poem }) => {
    return (
        <Col className="m-1">
            <Card style={{padding: '0rem 5rem'}}className="poem-card text-center">
                <CardBody>
                    <CardTitle tag='h2'>
                            {poem.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-3 text-muted"
                        tag='h5'
                    >
                        by <span style={{color: '#b56576'}}>{poem.author}</span>
                    </CardSubtitle>
                    <pre>
                        <CardText className="lead">
                            {poem.content}
                        </CardText>
                    </pre>
                </CardBody>
            </Card>
        </Col>
    )
};

export default PoemDetail;