import { 
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText, 
    Col, 
    Button
} from "reactstrap";
import './Poem.css'

/* eslint-disable react/prop-types */
const Poem = ({ poem }) => {
    return (
        <Col className="mb-3">
            <Card
            className="text-start"
            style={{
                padding: '.5rem',
                height: '100%',
                borderRadius: '1rem',
                maxWidth: '20rem'
            }}
            >
                <CardBody>
                    <CardTitle tag='h5'>
                        {poem.title}
                    </CardTitle>
                    <CardSubtitle 
                        className="mb-2 text-muted" 
                        tag="h6"
                    >
                        by {poem.author}
                    </CardSubtitle>
                    <CardText>
                        {poem.content}
                    </CardText>
                    <Button 
                        size="sm" 
                        outline 
                        style={{
                            borderColor: '#6d597a',
                            backgroundColor: '#6d597a',
                            color: '#fff'
                        }}
                    >
                        Comment
                    </Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Poem;