import React, {useState} from "react";
//import {Link} from 'react-router-dom';

import "./styles.scss"

interface PageSelectProps {
    space?: number;
}

const PageSelect: React.FC<PageSelectProps> = ({space}) => {
    const [totalPaginas, setTotalPaginas] = useState<number>(0);
    const [paginaAtual, setPaginaAtual] = useState<number>(0);
    const [proximasPaginas, setProximasPaginas] = useState<number[]>([]);
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