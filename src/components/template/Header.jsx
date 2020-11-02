/*eslint-disable*/
import React from 'react';

import './css/Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <header className="header">
                    <button className="toggle" onClick={this.props.toggleSidebar}>
                        <i className={`fas ${this.props.sidebarOpened ? "fa-angle-double-left" : "fa-angle-double-right"}`}/>
                    </button>
                    <h1 className="title"> Espaço de conhecimento em internet das coisas </h1>
                    <p> Tendo como lema o ensino de projetos em internet das coisas de uma forma um tanto quanto diferente, prática e objetiva. </p>
                </header>
            </>
        );
    }
}

export default Header;
