import cx from 'classnames';
import * as React from 'react';

//Style
import './label.scss';

// types
interface IProps {
  /**
   * class attribute of the component
   */
  className?: string;
  /**
   * content of the component
   */
  children?: React.ReactNode;
  /**
   * declare if the button is visible or not
   */
  visible?: boolean;
  /**
   * icon to be shown on the button
   */
  icon?: string;
  /**
   * icon positions
   */
  iconPosition?: 'left' | 'right';
  /**
   * label text
   */
  text?: string;
  /**
   * the label is for
   */
  htmlFor?: string;
}

export default class Label extends React.Component<IProps, {}> {

  render() {
    const {
      className,
      children,
      visible,
      icon,
      iconPosition,
      text,
      htmlFor
    } = this.props;
    const baseClasses = cx(
      className,
      visible,
      icon,
      `icon-position-${iconPosition}`,
    );
    return (
      <label className={baseClasses} htmlFor={htmlFor}>
          {children}
          {text && {text}}
      </label>
    )
  }
}
