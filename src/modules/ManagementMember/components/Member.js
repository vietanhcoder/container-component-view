import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

import { Table, Card, Button, Input, Modal } from 'antd';
import { SearchOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const initialState = {
  data: [],
  pagination: {
    page: 1,
    results: 10,
    total: 200,
  },
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA_START':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case 'CHANGE_PAGINATION':
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: action.payload.page,
          results: action.payload.results,
        },
      };
    default:
      return state;
  }
};

const Member = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { results, page } = state.pagination;

  const handleDelete = () => {
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'picture',
      render: (picture) => <img src={picture.thumbnail} title="Avatar" alt="Avatar" />,
      width: '5%',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (name) => `${name.first} ${name.last}`,
      width: '20%',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      width: '10%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '35%',
    },
    {
      title: 'Action',
      key: 'action',
      width: '30%',
      render: () => {
        return (
          <div className="table__action">
            <Button type="primary">Update</Button>
            <Button type="primary" className="btn-success">
              View
            </Button>
            <Button type="primary" danger onClick={handleDelete}>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({ type: 'FETCH_DATA_START' });
      const res = await axios.get(`https://randomuser.me/api?results=${results}&page=${page}`);
      const data = res.data.results;
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    };
    fetchUsers();
  }, [results, page]);

  const handleTableChange = (pagination) => {
    const payload = {
      page: pagination.current,
      results: pagination.results,
    };
    dispatch({ type: 'CHANGE_PAGINATION', payload });
  };

  return (
    <Card title="Member">
      <div className="manage__search">
        <Input size="large" prefix={<SearchOutlined />} onChange={(e) => console.log(e.target)} />
      </div>
      <Table
        columns={columns}
        rowKey={(record) => record.login.uuid}
        dataSource={state.data}
        pagination={state.pagination}
        loading={state.loading}
        onChange={handleTableChange}
      />
    </Card>
  );
};

export default Member;
