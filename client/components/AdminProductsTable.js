import React from 'react';
import { StyledTable } from './styles';
import { Form, Input, InputNumber, Select } from 'antd';

const EditableCell = ({
  product,
  editing,
  dataIndex,
  title,
  inputType,
  inputOptions,
  children,
  ...restProps 
}) => {
  
  const inputElement = () => {
    if (inputType === "number") return (<InputNumber />)
    if (inputType === "select") return (
        <Select>
          {inputOptions.map(option => <Select.Option value={option}>{option}</Select.Option>)}
        </Select>
  )
    return (<Input />)
  };
  return (
    <td {...restProps}>
      {editing ? ( 
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`
            }
          ]}
        >
          {inputElement()}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const AdminProductsTable = (props) => {
  const {data, mergedColumns, handleCancel, handleChange} = props;
  return (
    <StyledTable
      rowKey={'id'}
      components={{
        body: {
          cell: EditableCell
        }
      }}
      bordered
      dataSource={data} 
      columns={mergedColumns}
      rowClassName="editable-row"
      pagination={{
        onChange: handleCancel,
        defaultPageSize: 5,
        position: ["none", "bottomCenter"]
      }}
      onChange={handleChange}
    />
  );
};

export default AdminProductsTable;
