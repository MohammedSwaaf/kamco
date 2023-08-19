import React from 'react';
import { Layout } from 'antd';
import Navbar from '../components/navbar/Index';
import CreateCustomers from '../components/createCustomer/Index';
import Table from '../components/table/Index';
import SideBar from '../components/sideBar/Index';
import './index.scss';

const Page = () => {
  
  return (
    <Layout className='Layout' style={{position: 'relative'}}>
      <Navbar />
      <Layout>
        <SideBar />
        <Layout
          style={{
            padding: '24px',
          }}
          className='MainSection'
        >
          <CreateCustomers />
          <Table />
        </Layout>
        
      </Layout>
      
    </Layout>
  );
};
export default Page;