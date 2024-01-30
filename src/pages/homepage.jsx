import { useState, useEffect } from "react";
import Header from "../components/Header";
import FeaturedPoem from "../components/FeaturedPoem";

const Homepage = () => {
    const[data, setData] = useState(null);

    const options = {
        method: 'GET'
    };

    const url = 'http://localhost:3000/poems';

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(url, options);
                const result = await response.text();
                const jsonResult = JSON.parse(result);
                setData(jsonResult);
            }
            catch(err) {
                console.error(err);
            }
        }
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <>
            <Header />
            <FeaturedPoem poems={data} />
        </>
    )
}

export default Homepage;