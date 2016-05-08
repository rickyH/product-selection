require('./Selection.scss');
import React, { Component, PropTypes } from 'react';

export default class Selection extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    clickEvent: PropTypes.func,
    uniqueId: PropTypes.string.isRequired
  };

  handleClick = (event) => {
    /* Prevent a double click when the event from the label is passed */
    if (event.target.tagName !== 'INPUT') {
      const { clickEvent } = this.props;
      if (clickEvent) {
        clickEvent(this.props);
      }
    }
  }

  render() {
    const { selected } = this.props;
    let { className } = this.props;
    className = className || '';

    if (selected) {
      className += ' selection-selected';
    }

    return (
      <label className={`selection ${className}`} onClick={this.handleClick}>
        <span className="selection-name">{this.props.children}</span>
        <input type="checkbox" value="new_to_sky" />
      </label>
    );
  }
}
