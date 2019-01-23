/**
 * @class ExampleComponent
 */

import * as React from "react";

import styles from "./styles.css";
import { WebkitLineClampProperty } from "csstype";
import Measure from "react-measure";

export type Props = {
  children: object;
  line: number;
  showMore: boolean;
  showMoreText: string;
  showLessText: string;
};

type State = {
  allVisible: boolean;
  textClamped: boolean;
};

export default class ClampText extends React.Component<Props> {
  static defaultProps = {
    line: 3,
    showMore: true,
    showMoreText: "Show More",
    showLessText: "Show Less"
  };

  state: State = {
    allVisible: false,
    textClamped: false
  };

  textRef: HTMLDivElement;

  setRef = (ref: Element) => {
    this.textRef = ref as HTMLDivElement;
  };

  handleResize = () => {
    this.updateTextClampedState();
  };

  updateTextClampedState = () => {
    const ref = this.textRef;
    const textClamped =
      (ref && ref.offsetHeight < ref.scrollHeight) || this.state.allVisible;
    this.setState({ textClamped });
  };

  isShowMoreVisible(): boolean {
    return this.props.showMore && this.state.textClamped;
  }

  handleShowMore = () =>
    this.setState(
      (prevState: State) => ({ allVisible: !prevState.allVisible }),
      this.updateTextClampedState
    );

  getShowMoreText(): string {
    const { showMoreText, showLessText } = this.props;
    return this.state.allVisible ? showLessText : showMoreText;
  }

  render() {
    const { children, line } = this.props;
    const { allVisible } = this.state;

    const lineClamp: WebkitLineClampProperty = allVisible ? "inherit" : line;
    const style = { WebkitLineClamp: lineClamp };

    return (
      <React.Fragment>
        <Measure bounds onResize={this.handleResize} innerRef={this.setRef}>
          {({ measureRef }) => (
            <div className={styles.clampText} style={style} ref={measureRef}>
              {children}
            </div>
          )}
        </Measure>
        {this.isShowMoreVisible() && (
          <a href="#" onClick={this.handleShowMore}>
            {this.getShowMoreText()}
          </a>
        )}
      </React.Fragment>
    );
  }
}
