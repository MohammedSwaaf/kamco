import React from 'react';
import { Dropdown, Space } from 'antd';
import arrowDown from '../../assets/images/arrow-down.svg'

export default function DropdownList(props) {
    const items = props.items
  return (
    <>
        <Dropdown
        menu={{
            items, 
        }}
        className={props.customStyles}
        icon={arrowDown}
        trigger={['click']}
    >
        <span style={{cursor: 'pointer'}}>
        <Space>
            {props.title}
            <img src={arrowDown} alt='arrow' />
        </Space>
        </span>
    </Dropdown>
    </>
  )
}
