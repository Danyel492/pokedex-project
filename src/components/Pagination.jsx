import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

export const Pagination = (props) => {
    const { page, totalPages, onLeftClick, onRightClick } = props;
    return (
        <div className="pagination-container">
            <button onClick={onLeftClick}>
                <div><FontAwesomeIcon icon={faAnglesLeft} /></div>
            </button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>
                <div><FontAwesomeIcon icon={faAnglesRight} /></div>
            </button>
        </div>
    );
};