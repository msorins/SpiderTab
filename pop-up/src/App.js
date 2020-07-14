import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import { Form, Input } from 'antd';
import LinkChooser from './LinkChooser';

const LinkChooserHorizontalForm = Form.create({
  name: 'horizontal_login', mapPropsToFields(props) {
    var websites = JSON.parse(window.localStorage.getItem('spider-web-list'));
    var widthList = JSON.parse(window.localStorage.getItem('spider-web-list-width')) || [];

    var keysList = [];
    var namesDict = {};

    if (websites != null) {
      for (var i = 0; i < websites.length; i += 1) {
        if(widthList.length < websites.length) {
          widthList.push(1)
        }

        keysList.push(i);
        namesDict[`names[${i}]`] = Form.createFormField({
          value: websites[i]
        });
      }
    } else {
      keysList.push(0);
      namesDict['names[0]'] = Form.createFormField({
        value: 'https://producthunt.com'
      });
    }

    // Add the widthList to form data
    namesDict['widthList'] = Form.createFormField({
      value: widthList
    })

    console.log("--> namesDict: ", namesDict)
    return {
      keys: Form.createFormField({
        value: keysList
      }),
      ...namesDict,
    };
  }
})(LinkChooser);


function App() {
  return (
    <LinkChooserHorizontalForm />
  );
}

export default App;
