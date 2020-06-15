import React, {useEffect, useState} from "react";
import {AiOutlineSearch as Search, AiOutlineBell as Bell, AiOutlineDown as Arrow} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import api from '../../../services/api';

import "./styles.scss";

interface User {
    name: string;
    photo_url: string;
}

const Header = () => {
    const [user, setUser] = useState<User[]>([]);
    useEffect(() => {
        api.get('profile/1').then(response => {
            setUser(response.data)
        })
    }, []);

    return (
        <header>
            <Link to="/search">
                <div className="search-area">
                    <Search className="icon"/>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Busque por clientes"
                    />
                </div>
            </Link>
            <div className="user-area">
                <Link to="/" className="notification">
                    <Bell className="icon"/><circle/>
                </Link>
                <Link to="/">
                    <div className="user-image">

                    </div>
                    <Arrow className="icon arrow"/>
                </Link>
            </div>
        </header>
    );
}

export default Header;