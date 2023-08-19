import { Tabs } from 'antd';
// import './tabs.scss'
// import { createJobTabsFace } from '../../utils/interfaces/createJobTabs';


export default function Taps(props) {
    return (
        <>
            <div className='tabs'>
                <Tabs defaultActiveKey="1" items={props.items} />
            </div>
        </>
    )
}