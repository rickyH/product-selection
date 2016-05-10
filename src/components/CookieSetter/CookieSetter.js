require('./CookieSetter.scss');
import React, { Component, PropTypes } from 'react';
import cookie from 'react-cookie';

/* A Component for setting a cookie */
export default class CookieSetter extends Component {
  static propTypes = {
    noStyle: PropTypes.bool,
    className: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    cookieName: PropTypes.string.isRequired,
    cookieValue: PropTypes.string.isRequired
  };

  handleClick = () => {
    cookie.save(this.props.cookieName, this.props.cookieValue);
    alert(`The cookie ${this.props.cookieName} has been saved with ${this.props.cookieValue}`);
  }

  render() {
    const { title, subTitle } = this.props;
    let { className } = this.props;
    className = className || '';
    return (
      <div className={`cookie-setter ${className}`} onClick={this.handleClick}>
        <div className="tile-inner">
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
      </div>
    );
  }
}
