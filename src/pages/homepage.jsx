import { useState, useEffect } from "react";
import Poem from "../components/poem";
import { Row, Container } from "reactstrap";
import Header from "../components/Header";

const Homepage = () => {
    const[data, setData] = useState(null);

    const options = {
        method: 'GET'
    };

    const url = 'https://localhost:3443/poems';

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
    }, [data]);
    
    return (
        <>
            <Header />
            <Container fluid>
                <h1 className="display-1 mb-5" style={{color: '#b56576'}}>Featured Poem</h1>
                <Row xs='1'>
                {data ?
                    data.map((poem) => {
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
        </>
    )

//    if (data) {
//         for (let d of data) {
//             return (
//                 <>
//                     <h1>{d.title}</h1>
//                     <p>{d.content}</p>
//                 </>
//             )
//         }
//     } else {
//         return (
//             <p>Loading...</p>
//         )
//     } 
// }
}

export default Homepage;