import React from "react";
import {MdDashboard as Painel} from 'react-icons/md';
import {BsGearFill as Config, BsChatFill as Suporte} from 'react-icons/bs';
import {Link} from 'react-router-dom';

import Logo from '../../image/logo.png'

import "./styles.scss"


function SideMenu() {
    return (
        <section id="sideMenu">
            <div className="logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <nav>
                <Link to="/" className="active">
                    <Painel className="icon"/>
                    <span>Painel</span>
                </Link>
                <Link to="/configuracoes">
                    <Config className="icon"/>
                    <span>Configurações</span>
                </Link>
                <Link to="/suporte" className="last">
                    <Suporte className="icon"/>
                    <span>Suporte</span>
                </Link>
            </nav>
        </section>
    );
}

export default SideMenu;