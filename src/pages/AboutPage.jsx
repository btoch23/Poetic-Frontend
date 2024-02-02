import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";

const AboutPage = () => {
    const gitUrl = 'https://github.com/btoch23';

    return (
        <Container>
            <Row className="mb-5 mx-auto d-flex justify-content-center">
                <Col sm='6'>
                    <Card>
                        <CardHeader 
                            className="text-white" 
                            style={{backgroundColor: '#355070'}}
                        >
                            <h3>What We&apos;re All About</h3>
                        </CardHeader>
                        <CardBody>
                            <p className="mb-4">
                                <b>Poetic</b> was created in 2023 by <a style={styles.link} href={gitUrl} target="_blank" rel="noreferrer">Brian Tochterman</a> as 
                                part of a portfolio project for NuCamp&apos;s back-end bootcamp. Envisioned as a space for writers, especially poets, 
                                to share their work and encourage their peers, the front-end was built out in 2024 using React. Browse our ever-expanding 
                                collection of poetry and leave a kind comment when something moves you!
                            </p>
                            <dl className="row">
                                <dt className='col-6'>Front-End Stack</dt>
                                <dd className='col-6'>JavaScript and React</dd>
                                <dt className='col-6'>Back-End Stack</dt>
                                <dd className='col-6'>NodeJS, Express, and MongoDB</dd>
                                <dt className='col-6'>Libraries and Toolsets</dt>
                                <dd className='col-6'>Bootstrap, Redux, React Router</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

const styles = {
    link: {
        color: '#e56b6f', 
        textDecoration: 'none'
    }
}

export default AboutPage;