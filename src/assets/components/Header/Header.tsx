import React from "react";
import {AiOutlineSearch as Search, AiOutlineBell as Bell, AiOutlineDown as Arrow} from 'react-icons/ai';
import {Link} from 'react-router-dom';

import "./styles.scss";


interface HeaderProps {
    userImage?: string;
    autoFocus: boolean;
    func: Function;
}

const Header: React.FC<HeaderProps> = ({userImage, autoFocus, func}) => {
    const inputProps = {
        type: "text",
        name: "search",
        id: "search",
        placeholder: "Busque por clientes",
        autoFocus: false,
        onChange: func,
      };
    if (autoFocus) inputProps.autoFocus = true;
    return (
        <header>
            <Link to="/search">
                <div className="search-area">
                    <Search className="icon"/>
                    <input {...inputProps}/>
                </div>
            </Link>
            <div className="user-area">
                <Link to="/" className="notification">
                    <Bell className="icon"/><circle/>
                </Link>
                <Link to="/">
                    <div className="user-image">
                        <img src={userImage} alt="User"/>
                    </div>
                    <Arrow className="icon arrow"/>
                </Link>
            </div>
        </header>
    );
}

export default Header;