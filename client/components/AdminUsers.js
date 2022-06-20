import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/users';
import { Space } from 'antd';
import { StyledTable, StyledButton } from './styles';


const AdminUsers = () => {
  // Hooks
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const [data, setData] = useState(users);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  useEffect(() => { dispatch(fetchUsers()) }, [dispatch]);
  useEffect(() => { setData(users) }, [users]);

  // Handler functions
  const handleChange = (pagination, filteredInfo, sortedInfo) => {
    setFilteredInfo(filteredInfo);
    setSortedInfo(sortedInfo);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  // Columns
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: (a, b) => {
        if (a.firstName < b.firstName) return -1;
        if (a.firstName > b.firstName) return 1;
        return 0;
      },
      sortOrder: sortedInfo.columnKey === 'firstName' ? sortedInfo.order : null,
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: (a, b) => {
        if (a.lastName < b.lastName) return -1;
        if (a.lastName > b.lastName) return 1;
        return 0;
      },
      sortOrder: sortedInfo.columnKey === 'lastName' ? sortedInfo.order : null,
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => {
        if (a.email < b.email) return -1;
        if (a.email > b.email) return 1;
        return 0;
      },
      sortOrder: sortedInfo.columnKey === 'email' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Account Type',
      dataIndex: 'isAdmin',
      key: 'isAdmin',
      render: text => text ? "Admin" : "User",
      sorter: (a, b) => {
        if (a.isAdmin > b.isAdmin) return -1;
        if (a.isAdmin < b.isAdmin) return 1;
        return 0;
      },
      sortOrder: sortedInfo.columnKey === 'isAdmin' ?
      sortedInfo.order: null,
      filters: [
        {
          text: 'Admin',
          value: true,
        },
        {
          text: 'User',
          value: false,
        },
      ],
      filteredValue: filteredInfo.isAdmin || null,
      onFilter: (value, userRecord) => userRecord.isAdmin === value,
    }
  ];

  return (
    <div>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        <StyledButton onClick={clearFilters}>Clear Filters</StyledButton>
        <StyledButton onClick={clearAll}>Clear All</StyledButton>
        </Space>
      <StyledTable
        rowKey={'id'}
        columns={columns}
        dataSource={data}
        onChange={handleChange}
        pagination={{
          defaultPageSize: 5,
          position: ["none", "bottomCenter"]
        }}
      />
    </div>
  );
};

export default AdminUsers;
