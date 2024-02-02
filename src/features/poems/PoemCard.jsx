import { 
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
} from "reactstrap";
import './PoemCard.css'
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PoemCard = ({ poem }) => {
    return (
        <Link style={{textDecoration: 'none'}} to={`${poem._id}`}>
            <Card
                key={poem._id}
                className="poem-card text-center mx-auto"
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
                    {/* <pre>
                        <CardText>
                            {poem.content}
                        </CardText>
                    </pre> */}
                </CardBody>
            </Card>
        </Link>
        
    )
}

export default PoemCard;