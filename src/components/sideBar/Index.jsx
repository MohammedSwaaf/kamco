import React, { useState } from 'react';
import { Layout } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import SearchBar from '../searchBar/Index';
import searchIcon from '../../assets/images/SearchSideBar.svg';
import sidebarIcon from '../../assets/images/sidebar.png';
import './index.scss';
import Taps from '../tabs';
import StandardMenus from '../menus/standardMenus';
const { Sider } = Layout;

const items = [
    {
        key: '1',
        label: 'Standard',
        children: <StandardMenus />,
    },
    {
        key: '2',
        label: 'Favorite',
        children: `Content of Tab Pane 2`,
    }
];

export default function SideBar() {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const toggleSidebar = () => setToggleCollapse(!toggleCollapse) 
    return (
        <>
            <Sider className={toggleCollapse?'sideBar visible' : 'sideBar'}>
                <img className='sidebarOpen' src={sidebarIcon} alt='Sidebar' onClick={toggleSidebar} />
                <CloseOutlined className='sidebarClose' onClick={toggleSidebar} />
                <SearchBar customClass="borderLg customStyles" placeholder='Menu search' icon={searchIcon} />
                <Taps items={items} />
            </Sider>
        </>
    )
}
