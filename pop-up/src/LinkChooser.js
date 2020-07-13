import React from 'react';
import { Form, Input, Icon, Button } from 'antd';

class LinkChooser extends React.Component {
  componentDidMount() {
  }

  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });

    this.persistToLocalStorage()
  };

  add = () => {
    const { form } = this.props;
    console.log(JSON.stringify(this.props));
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(keys.length);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });

  };

  persistToLocalStorage = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { keys, names } = values;
        console.log('Saving to local storage:', keys.map(key => names[key]));

        window.localStorage.setItem('spider-web-list', JSON.stringify(keys.map(key => names[key])));
      }
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.persistToLocalStorage()
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;

    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => (
      <Form.Item
      >
        {getFieldDecorator(`names[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Enter the link you want to be opened",
            },
          ],
        })(<Input placeholder="url" style={{ width: '85%', marginLeft: '4%', height: '20' }} />)}
        {/* <FastForwardFilled /> */}
        <Icon
            type="zoom-in"
            onClick={() => this.remove(k)}
            style={{ marginLeft: 7, 'fontSize': 18 }}
          />
         <Icon
            className="dynamic-delete-button"
            type="zoom-out"
            onClick={() => this.remove(k)}
            style={{ marginLeft: 7, marginRight: 6, 'fontSize': 18 }}
          /> 
        {keys.length > 1 ? (
          <span>
            <span style={{'width': '10px', 'fontSize': 25}}>|</span>
            <Icon
            className="dynamic-delete-button"
            type="delete"
            onClick={() => this.remove(k)}
            style={{ marginLeft: 7, 'fontSize': 18}}
          />
          </span>
        ) : null}
      </Form.Item>
    ));

    return (
      <Form onSubmit={this.handleSubmit} onChange={this.handleSubmit}>
        <div style={{height: 7}}></div>
        {formItems}
        <Form.Item>
          <Button type="dashed" onClick={this.add} style={{ width: '94%', marginLeft: '2%' }}>
            <Icon type="plus" /> Add field
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default LinkChooser;