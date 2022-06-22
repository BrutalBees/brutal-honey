import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/users';
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
        if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
        if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
        return 0;
      },
      sortOrder: sortedInfo.columnKey === 'firstName' ? sortedInfo.order : null,
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: (a, b) => {
        if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
        if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
        return 0;
      },
      sortOrder: sortedInfo.columnKey === 'lastName' ? sortedInfo.order : null,
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => {
        if (a.email.toLowerCase() < b.email.toLowerCase()) return -1;
        if (a.email.toLowerCase() > b.email.toLowerCase()) return 1;
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
      <div style={{ display: "flex", justifyContent: "flex-start", gap: 10}}>
        <StyledButton onClick={clearAll}>Clear All</StyledButton>
      </div>
      <StyledTable
        rowKey={'id'}
        columns={columns}
        dataSource={data}
        onChange={handleChange}
        pagination={{
          defaultPageSize: 8,
          position: ["none", "bottomCenter"]
        }}
      />
    </div>
  );
};

export default AdminUsers;
