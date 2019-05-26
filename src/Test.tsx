import * as React from 'react';

// types
interface IProps {
  /**
   * class attribute of test component
   */
  className: string;
  /**
   * content of the component
   */
  children: React.ReactNode;
}
interface IState {
  /**
   * class attribute of test component
   */
  className: string;
}

// styles
import './styles.scss';

class Test extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      className: props.className
    };
  }

  onClick = (className: string) => () => {
    this.setState({ className });
  };

  render() {
    const { className } = this.state;
    const { children } = this.props;
    return (
      <div className={className}>
        <button onClick={this.onClick('test')}>Red</button>
        <button onClick={this.onClick('test-bold')}>Blue</button>
        <button onClick={this.onClick('test2')}>Green</button>
        <div className="content">{children}</div>
      </div>
    );
  }
}

export default Test;
