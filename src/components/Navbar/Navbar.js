import React, {Component} from "react";
import "./Navbar.css";
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import navbarItems from "../NavbarItems";
import { Link  } from "react-router-dom";
import {
    FaBars,
    FaRegHeart,
    FaRegUser
} from "react-icons/fa";
import {HiOutlineLocationMarker, HiOutlineTruck} from "react-icons/hi";
class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <header>
                <nav>
                    <div className="mobile-menu-icon">
                        <FaBars size={'25'} onClick={this.props.toggle} />
                    </div>
                    <div className={'header-columns'}>
                        <div id={'slogan'}>
                            <span>H O M E</span>
                            <br/>
                            <span>D E S I G N</span>
                        </div>
                        <div className={'header-rows'}>
                            <input
                                className={'search-input'}
                                type={'search'}
                                placeholder={'¿Qué estás buscando?'}
                            />
                            <div className="menu-items">
                                {navbarItems.map((item, index) => (
                                    <Link className="link" to={item.link} key={index}>
                                        {item.title}
                                        {
                                            item.icon &&
                                            <item.icon
                                                style={{color: item.colorIcon, width: "30px", height: "30px", margin: "1rem"}}
                                            />
                                        }
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="icons">
                        <Link to="/user">
                            <FaRegUser size={'20'} className={"icons-item"}/>
                        </Link>
                        <FaRegHeart size={'20'}  className={"icons-item"} />
                        <HiOutlineLocationMarker size={'20'}  className={"icons-item"} />
                        <div className="icon-btn">
                            <span className="notify-badge">1</span>
                            <HiOutlineTruck  size={'25'} className={"icons-item persistence"} onClick={this.showModal}/>
                        </div>
                        <ShoppingCart show={this.state.show} handleClose={this.hideModal}>
                            <p>"Mi carrito de compras"</p>
                        </ShoppingCart>
                    </div>
                </nav>
                <div id={'pre-top'}>
                    COMPRA HOY Y OBTÉN 5% ADICIONAL SOLO COMO CLIENTE PREMIER
                </div>
            </header>
        );
    }
}

export default Navbar;
