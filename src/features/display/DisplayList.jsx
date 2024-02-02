import { Row } from "reactstrap";
import { selectFeaturedPoem } from "../poems/poemsSlice";
import { useSelector } from "react-redux";
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import PoemCard from "../poems/PoemCard";

const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedPoem(state)
    ]);
    console.log('display items:', items);

    return (
        <>
            <h1 className="display-1 mb-5">Featured Poem</h1>
            <Row className="w-75 mx-auto" sm='1'>
                {items.map((item, idx) => {
                    const { featuredItem, isLoading, errMsg } = item;
                    if (isLoading) {
                        return <Loading key={idx} />;
                    }
                    if (errMsg) {
                        return <Error key={idx} />;
                    }
                    return (
                        featuredItem && (
                            <PoemCard poem={featuredItem} key={idx} />
                        )
                    )
                })}
            </Row>
        </>
        
    )
};

export default DisplayList;