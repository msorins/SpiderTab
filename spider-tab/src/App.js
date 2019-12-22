import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Form, Input } from 'antd';
import LinkChooser from './LinkChooser';

const LinkChooserHorizontalForm = Form.create({
  name: 'horizontal_login', mapPropsToFields(props) {
    var websites = JSON.parse(window.localStorage.getItem('spider-web-list'));

    var keysList = [];
    var namesDict = {};
    for(var i = 0; i < websites.length; i += 1) {
        keysList.push(i);
        namesDict[`names[${i}]`] = Form.createFormField({
          value: websites[i]
        });
    }

    return {
      keys: Form.createFormField({
        value: keysList
      }),
      ...namesDict
    };
  }
})(LinkChooser);


function App() {
  return (
    <LinkChooserHorizontalForm />
  );
}

export default App;
