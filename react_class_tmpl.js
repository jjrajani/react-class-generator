module.exports = function(class_name) {
  return (
`import React, { Component } from 'react';
import ${class_name.charAt(0).toUpperCase() + class_name.slice(1) + 'Store'} from './${class_name.charAt(0).toUpperCase() + class_name.slice(1) + 'Store'}';

export default class ${class_name.charAt(0).toUpperCase() + class_name.slice(1)} extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='${class_name}'>
        ${class_name} componenet created!!
      </div>
    );
  }

}`

  );
};
