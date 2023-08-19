import expand from '../../assets/images/add-square.svg';
import { Menu } from 'antd';
import { standardMenusArray } from '../../utils/arrays';
import './index.scss';

export default function StandardMenus() {
    
    return (
        <>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                theme=''
                expandIcon={<img src={expand} alt='+' />}
                style={{
                    height: '100%',
                    borderRight: 0,
                }}
                items={standardMenusArray}
            />
        </>
    )
}
