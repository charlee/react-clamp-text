/**
 * @class ExampleComponent
 */

import * as React from "react";

import classNames from "classnames";
import styles from "./styles.css";
import { WebkitLineClampProperty } from "csstype";
import Measure from "react-measure";

export type Props = {
  children: any;
  line: number;
  showMore: boolean;
  showMoreText: string;
  showLessText: string;
  className: string;
  classes: { [key: string]: object };
};

type State = {
  allVisible: boolean;
  textClamped: boolean;
};

export default class ClampText extends React.Component<Props> {
  static defaultProps = {
    /** Number of lines after clampping. */
    line: 3,

    /** Whether to show "Show More" link. */
    showMore: true,

    /** Customize the text for the "Show More" link. */
    showMoreText: "Show More",

    /** Customize the text for the "Show Less" link. */
    showLessText: "Show Less",

    /** Customize the style of the text. */
    className: "",

    /** Customize the style of the text and the "Show More" link. */
    classes: {},
  };

  state: State = {
    allVisible: false,
    textClamped: false
  };

  /**
   * Reference to the text element to allow clamp state detection.
   */
  textRef: HTMLDivElement;

  setRef = (ref: Element) => {
    this.textRef = ref as HTMLDivElement;
  };

  /**
   * When text element size changes, recalculate the clamp state.
   */
  handleResize = () => {
    this.updateTextClampedState();
  };

  /**
   * Detect the clamp state of the text to decide
   * whether to show or hide the "Show More" link.
   */
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
    const { children, line, className, classes } = this.props;
    const { allVisible } = this.state;

    const lineClamp: WebkitLineClampProperty = allVisible ? "inherit" : line;
    const style = { WebkitLineClamp: lineClamp, ...classes.text };

    return (
      <React.Fragment>
        <Measure bounds onResize={this.handleResize} innerRef={this.setRef}>
          {({ measureRef }) => (
            <div
              className={classNames(styles.clampText, className)}
              style={style}
              ref={measureRef}
            >
              {children}
            </div>
          )}
        </Measure>
        {this.isShowMoreVisible() && (
          <a href="#" onClick={this.handleShowMore} style={classes.button}>
            {this.getShowMoreText()}
          </a>
        )}
      </React.Fragment>
    );
  }
}
