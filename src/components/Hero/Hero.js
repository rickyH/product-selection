require('./Hero.scss');
import React, { Component, PropTypes } from 'react';

export default class Hero extends Component {

  static propTypes = {
    backgroundImage: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string
  };

  render() {
    const { title, subTitle } = this.props;
    let { backgroundImage } = this.props;
    backgroundImage = backgroundImage || '';
    return (
      <section className="hero" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className="container-wrap">
          <div className="container">
            <h3 className="hero-title">{title}</h3>
            <p className="hero-text">{subTitle}</p>
          </div>
        </div>
      </section>
    );
  }
}
