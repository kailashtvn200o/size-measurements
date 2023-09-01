import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { FaHome, FaShoppingBag, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };
    return (
        <>

            <div className="dropdown">
                <i className='bx bx-menu' onClick={handleDropdownClick}></i>
                {isDropdownOpen && (
                    <div className="dropdown-content">
                        <div> <a href="#" className="dropdown-item1">      <FaHome />Home</a></div>
                        <div><a href="#" className="dropdown-item2">   <FaShoppingBag />MyOrder</a></div>
                        <div> <a href="#" className="dropdown-item3"> <FaShoppingCart />MyCart</a></div>
                        <div> <a href="#" className="dropdown-item4">    <FaUserAlt />Profile</a></div>
                    </div>

                )}
            </div>
            <div className='fronttxt'>THOONI</div>
            <ul className="social-icons">

                <li>

                    <a href="#home">

                        <FaHome />
                        <span className='icontxt'>  Home</span>
                    </a>
                </li>

                <li>

                    <a href="#MyOrder">

                        <FaShoppingBag />
                        <span className='icontxt'>MyOrders</span>
                    </a>
                </li>
                <li>

                    <a href="#MyCart">

                        <FaShoppingCart />
                        <span className='icontxt'>MyCart</span>
                    </a>
                </li>
                <li>

                    <a href="#MyProfile">

                        <FaUserAlt />
                        <span className='icontxt'>My Profile</span>
                    </a>
                </li>


            </ul>
        </>
    )
}

