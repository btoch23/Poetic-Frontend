import { 
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText, 
    Col, 
} from "reactstrap";
import './Poem.css'

/* eslint-disable react/prop-types */
const Poem = ({ poem }) => {
    return (
        <Col className="mb-3">
            <Card
            key={poem._id}
            className="poem-card text-center mx-auto"
            style={{
                padding: '.5rem',
                height: '100%',
                borderRadius: '1rem',
                width: '75%'
            }}
            >
                <CardBody>
                    <CardTitle tag='h4'>
                        {poem.title}
                    </CardTitle>
                    <CardSubtitle 
                        className="mb-3 text-muted" 
                        tag="h5"
                    >
                        by <span style={{color: '#b56576'}}>{poem.author}</span>
                    </CardSubtitle>
                    <pre>
                        <CardText>
                            {poem.content}
                        </CardText>
                    </pre>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Poem;