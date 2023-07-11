import { Space, Table, Tag, Select  } from 'antd';
import * as React from 'react';

interface optionType {
    value: String,
    label: String
}

const data: optionType[] = [
    {
        value: '1',
        label: 'Not Identified',
    },
    {
        value: '2',
        label: 'Closed',
    },
    {
        value: '3',
        label: 'Communicated',
    },
    {
        value: '4',
        label: 'Identified',
    },
    {
        value: '5',
        label: 'Resolved',
    },
    {
        value: '6',
        label: 'Cancelled',
    },
]

const Search: React.FC = () => {
    return <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={data}
    />
}

export default Search;

