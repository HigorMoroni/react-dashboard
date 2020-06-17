import React from "react";

import "./styles.scss";


interface CardsProps {
    infos: string[];
}

const Cards: React.FC<CardsProps> = ({infos}) => {
    return (
        <>
            <div className="row">
                <div className="card">
                    <h3>{infos[0]}</h3>
                    <span>{infos[1]}</span>
                </div>
                <div className="card">
                    <h3>{infos[2]}</h3>
                    <span>{infos[3]}</span>
                </div>
            </div>
            <div className="row">
                <div className="card">
                    <h3>{infos[4]}</h3>
                    <span>{infos[5]}</span>
                </div>
                <div className="card">
                    <h3>{infos[6]}</h3>
                    <span>{infos[7]}</span>
                </div>
            </div>
        </>
    );
}

export default Cards;