import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; 

import { Form, Input, Icon, Button } from  'antd';

import LinkChooser from './LinkChooser';

const LinkChooserHorizontalForm = Form.create({ name: 'horizontal_login' })(LinkChooser);

function App() {
  return (
    <LinkChooserHorizontalForm />
  );
}

export default App;
