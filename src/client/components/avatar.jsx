import React, {Component} from 'react';
import classNames from 'classnames';
import 'styles/components/avatar';

export default class Avatar extends Component {
  constructor () {
    super();
  }

  render() {
    const avatarClasses = classNames(
      {
        [`avatar--${this.props.size}`]: this.props.size
      }
    );

    return (
      <div className={avatarClasses}>
        <img
          className="avatar__image"
          src={this.props.img}
          alt={this.props.altTxt}
        />
      </div>
    );
  }
}
