import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <ul>
            <li>
                <NavLink to="/welcome">Home</NavLink>
            </li>
            <li>
                <NavLink to="/products">Products</NavLink>
            </li>
        </ul>
    );
};

export default Header;
