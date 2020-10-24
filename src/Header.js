import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

    //state, dispatch
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/" exact>
                <img 
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt="logo"
                />
            </Link>

            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header">
                <div className="header__option">
                    <span className="header__optionLineOn">
                        Hello Guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOn">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOn">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                       Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {/* '?' parecido com @ do php */}
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header