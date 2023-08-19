import React from 'react'
import { countries } from '../../utils/arrays';
import { Select, Input } from "antd";
import arrowBlack from '../../assets/images/arrowBlack.svg';
import './index.scss'
const { Option } = Select;
export default function MobileNumber() {
    const kuwaitIndex = countries.findIndex(country => country.dialCode === '+965');
    const defaultCountry = countries[kuwaitIndex];
    const renderOption = (country) => (
        <>
            <img
                src={`https://flagcdn.com/${country.isoCode.toLowerCase()}.svg`}
                width="30"
                alt='Country flag'
                style={{ marginRight: '8px' }}
            />
            <span>{country.dialCode}</span>
        </>
    );
    return (
        <>
            <div className='mobileNumber'>
                <Select placeholder='Select account type' bordered={false} defaultValue={{ key: defaultCountry.isoCode, label: renderOption(defaultCountry) }}
                    suffixIcon={<img src={arrowBlack} alt='ArrowDown' />}>
                    {countries.map((country, key) => {
                        return <Option value={key} key={key}>
                                <img src={`https://flagcdn.com/${country?.isoCode?.toLocaleLowerCase()}.svg`} width="30" alt='Country flag' style={{ marginRight: '8px' }} />
                                <span>{country.dialCode}</span>
                            </Option>
                    })}
                </Select>
                <div className="NumberInput">
                    <span style={{ borderRight: '2px solid #949494', height: '10px' }}></span>
                    <span><Input bordered={false} placeholder="Enter customer mobile" /></span>
                </div>
            </div>

        </>
    )
}
