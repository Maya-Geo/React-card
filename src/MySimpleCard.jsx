import Title from "./Title"
import Describe from "./Describe"
import Image from "./Image"
import img from './img.jpg';

import React, { Component } from 'react';

class MySimpleCard extends Component {
    render() {
        return (
         <div className = "mysimpleCard">

            <div className="head">
                <Title title ="Simple React Card"/>
                <Describe
                describes = " React is a declarative, efficient, and flexible JavaScript library for building user interfaces. "/>
         </div>
                <Image imgUrl = {img}/>
            </div>
        );
    }
}

export default MySimpleCard;