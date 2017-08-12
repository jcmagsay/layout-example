import React from 'react';
import classNames from 'classnames';
// STYLES
import 'styles/components/_loader';

export default class Loader extends React.Component {
  constructor() {
    super();
  }

  render() {
    const loaderClasses = classNames(
      'loader',
      {
        'loader_orange': this.props.orange,
        'loader_centered': this.props.centered,
        'loader_dark': this.props.dark,
        'loader_lg': this.props.large
      }
    );
    return (
      <div className={loaderClasses}></div>
    );
  }
}
