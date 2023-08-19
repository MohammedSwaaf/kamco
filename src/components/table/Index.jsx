import React, { useState, useEffect } from 'react'
import { Layout, theme, Table } from 'antd';
import { customersColumns } from '../../utils/coulmns';
import { customersList } from '../../utils/arrays';
import searchIcon from '../../assets/images/SearchTable2.svg'
import grid from '../../assets/images/grid-5.svg'
import exportIcon from '../../assets/images/export.svg'
import upload from '../../assets/images/document-upload.svg'
import './index.scss'
import { statusColor } from '../../utils/statusColors'
const { Content } = Layout;

export default function CustomersList() {
    const [allCustomers, setAllCustomers] = useState([]);
    const [paginating, setPaginating] = useState({
        current: 1,
        pageSize: 6,
        total: customersList.length
    })

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    useEffect(() => {
        customersData();
    }, [])

    const changePagination = (values) => {
        setPaginating((prevState) => ({
            ...prevState,
            current: values?.current,
            pageSize: values.pageSize
        }))
    }
    const customersData = () => {
        const data = Array.isArray(customersList) && customersList.map((customer) => {
            return ({
                ...customer,
                status: statusColor(customer.status),
                mobileNumbers: <><img src={`https://flagcdn.com/${customer.isoCode?.toLowerCase()}.svg`}
                    width="30" style={{ marginRight: '0.6 rem', verticalAlign: 'middle' }}
                    alt='Country flag' /> <span>{customer.mobileNumbers}</span></>
            })
        })
        setAllCustomers(data);
    }
    return (
        <>
            <Content
                style={{
                    margin: 0,
                    minHeight: 280,
                    backgroundColor: colorBgContainer
                }}
                className='lightBox'
            >
                <div style={{position: 'relative'}}>
                    <div className="topSection">
                        <span className='leftSection'>
                            <span>Customers list</span>
                        </span>
                        <span className='rightSection'>
                            <img src={searchIcon} alt="searchIcon" />
                            <img src={grid} alt="grid" />
                            <img src={exportIcon} alt="exportIcon" />
                            <img src={upload} alt="upload" />
                        </span>
                    </div>
                    <Table
                        pagination={paginating}
                        onChange={changePagination}
                        columns={customersColumns}
                        direction='rtl'
                        dataSource={allCustomers}
                        loading={false}
                        scroll={{ x: 'max-content' }}
                    />
                    <span className='paginationText'>{`Showing ${(paginating.current * paginating.pageSize) - (5)} to ${((paginating.current * paginating.pageSize))} of ${paginating.total}  `}</span>
                </div>
            </Content>
        </>
    )
}
