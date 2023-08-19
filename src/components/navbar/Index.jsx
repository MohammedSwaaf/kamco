import React, {useState} from 'react'
import { Layout } from 'antd';
import { CloseOutlined,MenuOutlined } from '@ant-design/icons';
import companyLogo from '../../assets/images/Kamco-logo.svg'
import border from '../../assets/images/border.svg'
import settings from '../../assets/images/settings.svg'
import notification from '../../assets/images/notification.svg'
import avatar from '../../assets/images/avatar.png'
import './index.scss'
import SearchBar from '../searchBar/Index';
import DropdownList from '../dropdown/Index';
import {accountMenuItems} from '../../utils/arrays'
import searchIcon from '../../assets/images/search.svg';


const { Header } = Layout;

export default function Navbar() {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const toggleNavbar = () => setToggleCollapse(!toggleCollapse);
    return (
        <>
            <Header className="navbar navbarResponsive">
                <div className="navbarLeft">
                    <img className="logoIcon" src={companyLogo} alt='Kamco' />
                    <img className="logoBorder" src={border} alt="|" />
                    <span className='pageTitle'>Customers</span>
                </div>
                <div className={toggleCollapse?'navbarRight visible':'navbarRight'}>
                        <CloseOutlined className='navbarClose' onClick={toggleNavbar} />
                        <SearchBar customClass="searchBarDark borderLg customStyles heightLg" placeholder='Search' icon={searchIcon} />
                        <div className="contentWrapper">
                            <div className='navActions'>
                                <span className='navAction'><img src={settings} alt='Settings' /></span>
                                <span className='navAction'><img src={notification} alt='Notification' /></span>
                            </div>
                            <div className="navSeparator"><img src={border} alt='|' /></div>
                            <div className="accountMenu">
                                <img src={avatar} alt="Avatar" className="avatar" />
                                <DropdownList customStyles="navbarDropdown" title={`Jacob Gillespie`} items={accountMenuItems} />
                            </div>
                        </div>
                </div>
                <MenuOutlined className='navbarOpen' onClick={toggleNavbar}/>
            </Header>
        </>
    )
}
