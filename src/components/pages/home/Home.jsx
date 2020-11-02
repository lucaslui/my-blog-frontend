import React from 'react'
import axios from 'axios'
import { baseApiUrl } from '/global'

import Stat from './Stat'

import Image from '../../assets/imgs/home.jpg';

import './css/Home.css'

class Home extends React.Component {
    render() {
        return (
            <>
                <div className="home">
                    <img src={Image} alt="Welcome" className="home-image" />
                    <main>
                        <h3 className="title"> Ultimas Postagens </h3>
                    </main>
                </div>
            </>
        );
    }
}

export default Home;