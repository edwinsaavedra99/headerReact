import './ShoppingCart.css';
import {FaTimes} from "react-icons/fa";
import React from "react";

const ShoppingCart = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className={"modal-text"}>{children}</div>
                <div className="icon-modal">
                    <FaTimes className="close-icon-modal" onClick={handleClose} />
                </div>
            </section>
        </div>
    );
};

export default ShoppingCart;