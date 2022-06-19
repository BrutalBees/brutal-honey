import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchProducts, updateProduct, deleteProduct, addProduct } from '../store/products';
import { Button, Form, Input, InputNumber, Popconfirm, Select, Table, Typography } from 'antd';

// Styled Components
const StyledButton = styled(Button)`
  justify-content: center;
  background-color: rgb(245, 219, 139);
  color: black;
  border: solid rgb(245, 219, 139) 1px;
  margin-bottom: 10px;
  &:hover {
    color: rgb(245, 219, 139);
    background-color: white;
    border: solid rgb(245, 219, 139) 1px;
  }
`;

const StyledTable = styled(Table)`
  .ant-pagination-item-active {
    border-color: #f5db8b;
  };
  .ant-pagination-item-active a {
    color: #f5db8b;
  };
  a:hover {
    color: #f5db8b;
  };
  .ant-pagination-item:hover {
    border-color: #f5db8b;
  };
  .ant-pagination-prev:hover .ant-pagination-item-link, .ant-pagination-next:hover .ant-pagination-item-link {
    color: #f5db8b;
    border-color: #f5db8b;
  }
`;

// Editable Cell Function
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  inputOptions,
  product,
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

// AdminProducts Component
const AdminProducts = () => {

  // Hooks
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [data, setData] = useState(allProducts); // stores the allProducts data in the state
  const [editingId, setEditingId] = useState(""); // state: { data, editingId}
  useEffect(() => { setData(allProducts) }, [allProducts]); // sets allProducts again in the state when allProducts updates
  useEffect(() => { dispatch(fetchProducts()) }, [dispatch]);

  const [form] = Form.useForm();
  const isEditing = (product) => product.id === editingId; // checks if the current product is being edited

  // Handler Functions
  const handleAdd = () => {
    // const tempId = allProducts.length + 500;
    const emptyRow = {
      id: "newProduct",
      productName: "",
      price: "",
      category: "",
      description: ""
    };
    setData([emptyRow, ...data]);
    setEditingId(emptyRow.id);
  };

  const handleEdit = (product) => { // sets the props of the product as fields of the form
    form.setFieldsValue({
      ...product
    });
    setEditingId(product.id); // and sets the editingId in state
  };

  const handleSave = async (productId) => {
    try {
      const updatedFields = await form.validateFields(); // returns an object of the updated values in the form
      productId === "newProduct" ?
      dispatch(addProduct(updatedFields)) // if its a new row then dispatch addProduct
      :
      dispatch(updateProduct(productId, updatedFields)); // if its an updated row then dispatch updatedProduct
      setEditingId("");
    } catch (error) {
      console.log("Validate Failed:", error);
    }
  };

  const handleDelete = (productId) => {
    try {
      productId === "newProduct" ?
      setData(data.filter(product => product.id !== "newProduct")) // if deleting a new Row, just remove it from the state
      :
      dispatch(deleteProduct(productId)); // if deleting a product form database, dispatch deleteProduct
      setEditingId("");
    } catch (error) {
      console.log("Error deleting product:", error)
    }
  };

  const handleCancel = () => {
    setEditingId(""); //sets the EditingId as empty if edit cancelled
  };

  // Creates columns
  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      inputType: "text",
      width: "14%",
      editable: true
    },
    {
      title: "Price",
      dataIndex: "price",
      inputType: "number",
      width: "8%",
      editable: true
    },
    {
      title: "Category",
      dataIndex: "category",
      inputType: "select",
      inputOptions: ["Raw", "Organic", "Manuka"],
      width: "8%",
      editable: true
    },
    {
      title: "Description",
      dataIndex: "description",
      inputType: "text",
      width: "55%",
      editable: true
    },
    {
      title: "Actions",
      dataIndex: "actions",
      width: "15%",
      render: (_, product) => {  // renders the Save Delete Cancel or Edit buttons
        return isEditing(product) ? // if the product is being edited then show the Save and Cancel buttons
        (<span>
          <Typography.Link
            onClick={() => handleSave(product.id)}
            style={{ marginRight: 5 }}>
            Save
          </Typography.Link>
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(product.id)}>
            <a style={{ marginRight: 5 }}>Delete</a>
          </Popconfirm>
          <Typography.Link onClick={handleCancel}>
            Cancel
          </Typography.Link>
        </span>)
        : // if its not being edited show the Edit button
        (
          <Typography.Link
            disabled={editingId !== ""} //disable this link if something is being edited currently
            onClick={() => handleEdit(product)}
          >
            Edit
          </Typography.Link>
        );
      }
    }
  ];

  // Creates cells
  const mergedColumns = columns.map((column) => {
    if (!column.editable) return column; // the column is not editable return it
    return { // if its editable
      ...column,
      onCell: (product) => ({
        product,
        inputType: column.inputType,
        inputOptions: column.inputOptions ? column.inputOptions : [],
        dataIndex: column.dataIndex,
        title: column.title,
        editing: isEditing(product)
      })
    };
  });

  // Form returned from AdminProduct Component
  return (
    <Form form={form} component={false}>
      <div style={{ display: "flex", justifyContent: "space-between"}}>
        <h3>PRODUCTS</h3>
        <StyledButton onClick={handleAdd}>
          Add Product
        </StyledButton>
      </div>
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
    </Form>
  );
};

export default AdminProducts;
