//npm install react-responsive-carousel --save

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import curiosidade1 from './c1.png'
import curiosidade2 from './c2.png'
import curiosidade3 from './c3.png'
import curiosidade4 from './c4.png'


class DemoCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={curiosidade1} />
                </div>
                <div>
                    <img src={curiosidade2}/>
                </div>
                <div>
                    <img src={curiosidade3} />
                </div>
                <div>
                    <img src={curiosidade4} />
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel