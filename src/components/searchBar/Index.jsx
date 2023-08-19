import React from 'react'
import { Input } from 'antd';
import './index.scss';
export default function SearchBar(props) {
    return (
        <>
            <Input prefix={<img src={props.icon} alt='Search Icon' /> } placeholder={props.placeholder} className={props.customClass ? `${props.customClass} searchBar` : 'searchBar'} />
        </>
    )
}
