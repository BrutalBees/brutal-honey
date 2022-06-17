import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/products';
import { updateSingleProduct } from '../store/singleProduct';
import { Form, Input, InputNumber, Popconfirm, Select, Table, Typography } from 'antd';

// Editable Cell Component
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
  const inputElement = () => {
    if (inputType === "number") return (<InputNumber />)
    if (inputType === "select") return (
        <Select>
          {inputOptions.map(option => <Select.Option value={option}>{option}</Select.Option>)}
          {/* <Select.Option value="Option1-1">Option1-1</Select.Option>
          <Select.Option value="Option1-2">Option1-2</Select.Option> */}
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

// AdminProducts Component
const AdminProducts = () => {
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isEditing = (product) => product.id === editingId; // checks if the current product is being edited

  // Hooks
  const [data, setData] = useState(allProducts); // stores the allProducts data in the state
  const [editingId, setEditingId] = useState(""); // state: { data, editingId}
  useEffect(() => { setData(allProducts) }, [allProducts]); // sets allProducts again in the state when the component re-renders
  useEffect(() => { dispatch(fetchProducts()) }, [dispatch]);

  // OnClick Handles
  const edit = (product) => { // edit sets the fields of the form
    form.setFieldsValue({
      productName: "",
      price: "",
      category: "",
      description: "",
      ...product
    });
    setEditingId(product.id); // and sets the editingId in state
  };

  const cancel = () => {
    setEditingId(""); //sets the EditingId as empty if cancel edit
  };

  const save = async (id) => {
    try {
      const row = await form.validateFields(); // antdesign instance method that validates the values in a form and returns the object of values
      const newData = [...data]; // make a copy of the old data as newData
      const index = newData.findIndex((item) => id === item.id); // finds the item with a id that matches the id that was edited

      if (index > -1) { // if the item was found
        const item = newData[index];
        // newData.splice(index, 1, {...item, ...row}); // adds the row to the current item at that index
        // setData(newData);
        // setEditingId("");
        debugger
        const productUpdate = {...item, ...row};
        debugger
        dispatch(updateSingleProduct(productUpdate.id, productUpdate));
        debugger
        setEditingId("");

      } else { // if there is no item at that index
        newData.push(row); // just add the row
        setData(newData);
        setEditingId("");
      }
    } catch (error) {
      console.log("Validate Failed:", error);
    }
  };

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    setEditingId("");
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
      inputOptions: ["raw", "organic", "manuka"],
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
            onClick={() => save(product.id)}
            style={{ marginRight: 5 }}>
            Save
          </Typography.Link>
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(product.id)}>
            <a style={{ marginRight: 5 }}>Delete</a>
          </Popconfirm>
          <Typography.Link onClick={cancel}>
            Cancel
          </Typography.Link>
        </span>)
        : // if its not being edited show the Edit button
        (
          <Typography.Link
            disabled={editingId !== ""} //disable this link if something is being edited currently
            onClick={() => edit(product)}
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
      <Table
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
          onChange: cancel
        }}
      />
    </Form>
  );
};

export default AdminProducts;
