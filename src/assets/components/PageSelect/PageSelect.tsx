import React, {useState, useEffect} from "react";
//import {Link} from 'react-router-dom';

import "./styles.scss"

interface PageSelectProps {
    totalClients: string;
    space: number;
    atual: number;
}

const PageSelect: React.FC<PageSelectProps> = (props) => {
    const [paginaAtual, setPaginaAtual] = useState<number>(0);
    const [paginas, setPaginas] = useState<number[]>([]);

    useEffect(() => {
        let totalDePaginas = Number(props.totalClients);
        if (props.space > 0) totalDePaginas = Math.ceil(Number(props.totalClients)/props.space);
        const pages = [];
        for (let i = 1; i <= totalDePaginas; i++) pages.push(i);
        setPaginaAtual(props.atual);
        setPaginas(pages)
    }, [props]);

    return (
        <footer>
            <div className="back btn">
                <span className="">Anterior</span>
            </div>
            <div className="pages">
                {paginas.map(pagina=> {
                    if (
                        pagina===paginaAtual-1 ||
                        pagina===paginaAtual ||
                        pagina===paginaAtual+1 ||
                        (paginaAtual===1&&pagina===3)
                    ) return <span className={paginaAtual===pagina?"active":""}>{pagina}</span>
                    else if (pagina===paginas.length) return <span>...</span>
                    else return ''
                })}
            </div>
            <div className="next btn">
                <span className="">Próximo</span>
            </div>
        </footer>
    );
}

export default PageSelect;