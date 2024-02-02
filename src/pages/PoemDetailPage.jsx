import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectPoemById } from "../features/poems/poemsSlice";
import PoemDetail from "../features/poems/PoemDetail";
import { useSelector } from "react-redux";
import Error from "../components/Error";
import Loading from "../components/Loading";

const PoemDetailPage = () => {
    const { poemId } = useParams();
    const poem = useSelector(selectPoemById(poemId));
    console.log('poem:', poem);

    const isLoading = useSelector((state) => state.poems.isLoading);
    const errMsg = useSelector((state) => state.poems.errMsg);
    let content = null;

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
                <PoemDetail poem={poem} />
            </>
        );
    }

    return (
        <Container>
            <Row>
                {content}
            </Row>
        </Container>
    );
};

export default PoemDetailPage;