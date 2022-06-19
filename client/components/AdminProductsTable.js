import React from 'react';
import { StyledTable } from './styles';
import { Form, Input, InputNumber, Select } from 'antd';

// Editable Cell Function
const EditableCell = ({
  productOrUser,
  editing,
  dataIndex,
  title,
  inputType,
  inputOptions,
  index,
  children,
  ...restProps
}) => {
  // Returns inputElement to render based on inputType
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
      {editing ? ( //editing is a boolean indicating whether cell is currently being edited
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
  const {data, mergedColumns, handleCancel} = props;
  return (
    <StyledTable
      rowKey={'id'}
      components={{
        body: {
          cell: EditableCell
        }
      }}
      bordered
      dataSource={data} // dataSource for the table
      columns={mergedColumns}
      rowClassName="editable-row"
      pagination={{
        onChange: handleCancel,
        defaultPageSize: 5,
        position: ["none", "bottomCenter"]
      }}
    />
  );
};

export default AdminProductsTable;
