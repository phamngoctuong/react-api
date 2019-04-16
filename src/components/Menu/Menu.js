import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
var menus = [
    {
        name: "Trang chủ",
        to: "/",
        exact: true
    },
    {
        name: "Quả lý sản phẩm",
        to: "/product-list",
        exact: false
    },
];
var MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match})=> {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                )
            }
        }
        >
        </Route>
    )
};
class Menu extends Component {
    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index)=>{
                return(
                <MenuLink 
                    key={index} 
                    to={menu.to} 
                    label={menu.name} 
                    activeOnlyWhenExact={menu.exact}
                >
                </MenuLink>
                )
            })
        }
        return result;
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {this.showMenus(menus)}
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Menu;