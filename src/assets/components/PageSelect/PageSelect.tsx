import React, {useState, useEffect} from "react";
//import {Link} from 'react-router-dom';

import "./styles.scss"

interface PageSelectProps {
    totalClients: string;
    space: number;
    atual: number;
}

const PageSelect: React.FC<PageSelectProps> = (props) => {
    const [totalPaginas, setTotalPaginas] = useState<number>(0);
    const [paginaAtual, setPaginaAtual] = useState<number>(0);
    const [paginas, setPaginas] = useState<number[]>([]);

    useEffect(() => {
        const totalDePaginas = Math.ceil(Number(props.totalClients)/props.space);
        const pages = [];
        for (let i = 1; i <= totalDePaginas; i++) pages.push(i);
        setTotalPaginas(totalDePaginas);
        setPaginaAtual(props.atual);
        setPaginas(pages)
    }, [props]);

    return (
        <footer>
            <div className="back btn">
                <span className="">Anterior</span>
            </div>
            <div className="pages">
                {paginas.map(pagina=>
                    <span className={paginaAtual===pagina?"active":""}>{pagina}</span>
                )}
            </div>
            <div className="next btn">
                <span className="">Próximo</span>
            </div>
        </footer>
    );
}

export default PageSelect;