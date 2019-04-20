import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product-list"className="nav-link">Quản lý sản phẩm</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Menu;