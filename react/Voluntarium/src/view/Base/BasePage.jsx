import { Component, Fragment } from "react";
import "./BasePage.css";
import { Link, Outlet } from "react-router-dom";
import ArrayMenu from "./../../static/Menu";

export default class BasePage extends Component {
    render() {
        return (
            <Fragment>
                <div className="d-flex flex-row">
                    <Menu />
                    <Outlet />
                </div>
            </Fragment>
        )
    }
}

const MenuContainer = (props) => {
    const { menu, avatar } = props;
    return <div id="menu_container">
        <div className="menu_avatar border rounded-circle m-4">
            <img src={avatar?.img ?? "https://th.bing.com/th/id/R.945f33b643f2ceffcdae90fb57c61854?rik=XcI0SYBgSefoCA&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon-bw%2fanonymous-avatar-icon-19.png&ehk=5n%2buJG66CeLQZsmhaMt8gag5rXuM3TdebAL6W35K1E4%3d&risl=&pid=ImgRaw&r=0"} width="150" height="150" alt="foto perfil" />
        </div>
        {menu.map(item => <MenuItem item={item} />)}
    </div>
}

const MenuItem = (props) => {
    const { item } = props;
    return <div className="menu_item">
        <div>{item.name}</div>
        <ul>
            {item.submenu.map(subitem => <MenuSubItem subitem={subitem} />)}
        </ul>
    </div>
}

const MenuSubItem = (props) => {
    const { subitem } = props;
    return <Link to={subitem.path}><li>{subitem.name}</li></Link>;
}

class Menu extends Component {
    render() {
        return (
            <Fragment>
                <MenuContainer
                    menu={ArrayMenu}
                />
            </Fragment>
        )
    }
}

// class Menu extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <div id="menu_container">
//                     <div className="menu_avatar border rounded-circle m-4">
//                         <img src="https://th.bing.com/th/id/R.945f33b643f2ceffcdae90fb57c61854?rik=XcI0SYBgSefoCA&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon-bw%2fanonymous-avatar-icon-19.png&ehk=5n%2buJG66CeLQZsmhaMt8gag5rXuM3TdebAL6W35K1E4%3d&risl=&pid=ImgRaw&r=0" width="150" height="150" alt="foto perfil" />
//                     </div>
//                     <div className="menu_item">
//                         <div>Principal</div>
//                         <ul>
//                             <li>Submenu</li>
//                             <li>Submenu</li>
//                             <li>Submenu</li>
//                             <li>Submenu</li>
//                             <li>Submenu</li>
//                             <li>Submenu</li>
//                         </ul>
//                     </div>
//                 </div>
//             </Fragment>
//         )
//     }
// }