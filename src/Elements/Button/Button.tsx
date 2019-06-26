import cx from 'classnames';
import * as React from 'react';

//Style
import './button.scss';

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
   * if the button is disabled or not
   */
  disabled?: boolean;
  /**
   * label of the component
   */
  label?: string;
  /**
   * position of the label
   */
  labelPosition?: 'right' | 'left'
  /**
   * on click event handler function
   */
  onClick: Function;
  /**
   * the size of the button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * color of the button
   */
  color?: string
}

export default class Button extends React.Component<IProps, {}> {

  handleClick = (e: React.MouseEvent) => {
    const { onClick } = this.props;
    if (onClick) onClick(e);
  }

  render() {
    const {
      className,
      children,
      visible,
      icon,
      iconPosition,
      disabled,
      label,
      labelPosition,
      size,
      color
    } = this.props;
    const baseClasses = cx(
      className,
      visible,
      icon,
      `icon-position-${iconPosition}`,
      disabled,
      size,
      color
    );
    return (
      <div className={baseClasses}>
        {(label && labelPosition === 'left') && <label>{label}</label>}
        <button disabled={disabled} onClick={this.handleClick}>{children}</button>
        {(label && (labelPosition === 'right' || !labelPosition)) && <label>{label}</label>}
      </div>
    )
  }
}