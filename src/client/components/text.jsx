import React, {Component} from 'react';
import classNames from 'classnames';
// STYLES
import 'styles/components/text';

export default class Text extends Component {
  constructor () {
    super();
  }

  render() {
    const { align, children, className, color, tag, type, weight, underlined } = this.props;
    const TagVariant = tag || 'div';
    const textClasses = classNames(
      'text',
      {
        [`text--${align}`]: align,
        [`text--${color}`]: color,
        [`text--${type}`]: type,
        [`text--${weight}`]: weight,
        [`text--underlined`]: underlined
      },
      className
    )

    return (
      <TagVariant className={textClasses}>
        {children}
      </TagVariant>
    );
  }
}
