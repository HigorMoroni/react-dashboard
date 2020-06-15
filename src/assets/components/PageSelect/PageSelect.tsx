import React from "react";
//import {Link} from 'react-router-dom';

import "./styles.scss"


function PageSelect() {
    return (
        <footer>
            <div className="back btn">
                <span className="">Anterior</span>
            </div>
            <div className="pages">
                <span className="active">1</span>
                <span>2</span>
            </div>
            <div className="next btn">
                <span className="">Próximo</span>
            </div>
        </footer>
    );
}

export default PageSelect;