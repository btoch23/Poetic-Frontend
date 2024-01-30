/* eslint-disable react/prop-types */
import { Container, Row } from "reactstrap";
import Poem from "./poem";

const FeaturedPoem = ({ poems }) => {
    return (
        <Container fluid>
            <h1 className="display-1 mb-5" style={{color: '#b56576'}}>Featured Poem</h1>
            <Row xs='1'>
                {poems ?
                    poems.map((poem) => {
                        if (poem.featured) {
                            return (
                                <Poem 
                                    poem={poem}
                                    key={poem.id}
                                />
                            )
                        }
                    })
                    : <h1>Loading...</h1>
                }
            </Row>
        </Container>
    )
}

export default FeaturedPoem;