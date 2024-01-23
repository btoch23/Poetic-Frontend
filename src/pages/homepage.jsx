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
        fetch(url, options)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(err => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    
    return (
        <>
            <Header />
            <Container>
                <Row>
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