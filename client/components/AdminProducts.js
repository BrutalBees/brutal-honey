import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, updateProduct, deleteProduct, addProduct } from '../store/products';
import { Form, Popconfirm, Typography } from 'antd';
import { StyledButton } from './styles';
import AdminProductsTable from './AdminProductsTable';

const AdminProducts = () => {

  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [data, setData] = useState(allProducts); 
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [editingId, setEditingId] = useState(""); 
  useEffect(() => { setData(allProducts) }, [allProducts]); 
  useEffect(() => { dispatch(fetchProducts()) }, [dispatch]);

  const [form] = Form.useForm();
  const isEditing = (product) => product.id === editingId; 

  const handleAdd = () => {
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

  const handleEdit = (product) => { 
    form.setFieldsValue({
      ...product
    });
    setEditingId(product.id); 
  };

  const handleSave = async (productId) => {
    try {
      const updatedFields = await form.validateFields(); 
      productId === "newProduct" ?
      dispatch(addProduct(updatedFields)) 
      :
      dispatch(updateProduct(productId, updatedFields)); 
      setEditingId("");
    } catch (error) {
      console.log("Validate Failed:", error);
    }
  };

  const handleDelete = (productId) => {
    try {
      productId === "newProduct" ?
      setData(data.filter(product => product.id !== "newProduct")) 
      :
      dispatch(deleteProduct(productId)); 
      setEditingId("");
    } catch (error) {
      console.log("Error deleting product:", error)
    }
  };

  const handleChange = (pagination, filteredInfo, sortedInfo) => {
    setFilteredInfo(filteredInfo);
    setSortedInfo(sortedInfo);
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const handleCancel = () => {
    setEditingId(""); 
  };

  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      inputType: "text",
      key: 'productName',
      width: "14%",
      editable: true,
      sorter: (a, b) => {
        if (a.productName.toLowerCase() < b.productName.toLowerCase()) return -1;
        if (a.productName.toLowerCase() > b.productName.toLowerCase()) return 1;
        return 0;
      },
      sortOrder: sortedInfo.columnKey === 'productName' ? sortedInfo.order : null,
    },
    {
      title: "Price",
      dataIndex: "price",
      inputType: "number",
      key: 'price',
      width: "8%",
      editable: true,
      sorter: (a, b) => a.price - b.price,
      sortOrder: sortedInfo.columnKey === 'price' ? sortedInfo.order : null,
    },
    {
      title: "Category",
      dataIndex: "category",
      inputType: "select",
      key: "category",
      inputOptions: ["Raw", "Organic", "Manuka"],
      width: "8%",
      editable: true,
      sorter: (a, b) => {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        return 0;
      },
      sortOrder: sortedInfo.columnKey === 'category' ? sortedInfo.order : null,
      filters: [
        {
          text: 'Raw',
          value: 'Raw',
        },
        {
          text: 'Organic',
          value: 'Organic',
        },
        {
          text: 'Manuka',
          value: 'Manuka',
        }
      ],
      filteredValue: filteredInfo.category || null,
      onFilter: (value, product) => product.category === value,
    },
    {
      title: "Description",
      dataIndex: "description",
      inputType: "text",
      key: "description",
      width: "55%",
      editable: true,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: "15%",
      render: (_, product) => {  
        return isEditing(product) ? 
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
        : 
        (
          <Typography.Link
            disabled={editingId !== ""} 
            onClick={() => handleEdit(product)}
          >
            Edit
          </Typography.Link>
        );
      }
    }
  ];

  const mergedColumns = columns.map((column) => {
    if (!column.editable) return column; 
    return { 
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

  return (
    <Form form={form} component={false}>
      <div style={{ display: "flex", justifyContent: "flex-start", gap: 10}}>
        <StyledButton onClick={handleAdd}>
          Add Product
        </StyledButton>
        <StyledButton onClick={clearAll}>Clear All</StyledButton>
      </div>
      <AdminProductsTable
        data={data}
        mergedColumns={mergedColumns}
        handleCancel={handleCancel}
        handleChange={handleChange}
      />
    </Form>
  );
};

export default AdminProducts;
