import { Col, Row } from "reactstrap";
import Poem from "./Poem";
import { selectAllPoems } from "./poemsSlice";
import { useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const PoemsList = () => {
    const poems = useSelector(selectAllPoems);
    console.log('poems', poems);
    const isLoading = useSelector((state) => state.poems.isLoading);
    const errMsg = useSelector((state) => state.poems.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }

    return (
        <Row className="ms-auto">
            {poems.map((poem) => {
                return (
                    <Col
                        md='5'
                        className="m-4"
                        key={poem._id}
                    >
                        <Poem poem={poem} />
                    </Col>
                )
            })}
        </Row>
    )
};

export default PoemsList;