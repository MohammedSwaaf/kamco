import React from 'react'
import { Layout, Button, Col, Form, Switch, Row, Radio, Input, Select } from "antd";
import './index.scss'
import MobileNumber from '../countryPhoneInput';
import arrow from '../../assets/images/arrow.svg'
const { Content } = Layout;
const { Option } = Select;

export default function CreateCustomers() {
   
    return (
        <>

            <Content className='createCustomer lightBox' >
                
                <h3 style={{marginTop: '0'}}>Create Customers</h3><hr />

                <Form
                    // ref={this.formFilterRef}
                    name="basic"
                    // onFinish={this.handleSearch}
                    // onFinishFailed={this.onSearchFailed}
                    autoComplete="off"
                >
                    <Row className="statusRow" gutter={[24, 24]}>

                        <Col xs={24} lg={8}>
                            <label htmlFor="">First name </label>
                            <Form.Item name="firstName">
                                <Input className='formInput' placeholder="Enter customer first name" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={8}>
                            <label htmlFor="">Last name </label>
                            <Form.Item name="lastName">
                                <Input className='formInput' placeholder="Enter customer last name" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={8}>
                            <label htmlFor="">Mobile number </label>
                            <Form.Item name="mobileNumber">
                            <MobileNumber />
                            </Form.Item>
                        </Col>

                        <Col xs={24} lg={8}>
                            <label htmlFor="">Title </label>
                            <Form.Item name="title">
                                <Select className='titleSelect' placeholder='Select account type' suffixIcon={<img src={arrow} alt='Arrow Down' />}>
                                    {[].map((title, key) => {
                                        return <Option value={'title.id'} key={key} >{'title.name'}</Option>
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={8}>
                            <label htmlFor="">Gender </label>
                            <Form.Item name="gender">
                                <Radio.Group>
                                    <Radio value="1" >Male</Radio>
                                    <Radio value="2">Female</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={8}>
                            <label htmlFor="">Status </label>
                            <Form.Item name="switch" valuePropName="checked" className='statusActivity'>
                                <span className='active'>Active</span> <Switch defaultChecked /> <span className='inactive'>Inactive</span>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className="statusRow" style={{ justifyContent: 'end' }}>
                        <Col>
                            <Form.Item>
                                <Button
                                    className='btnSubmit'
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Create Account
                                </Button>
                            </Form.Item>
                        </Col>

                    </Row>
                </Form>
                





            </Content>
        </>
    )
}
