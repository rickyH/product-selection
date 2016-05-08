require('./Home.scss');
import React, { Component } from 'react';
import { Hero, CookieSetter } from 'components';
import { Grid, Col } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div className="page-home">
        <Hero
          backgroundImage="/src/static/images/hero.jpg"
          title="Setting your cookie"
          subTitle="Click an option below to set a cookie"
        />
        <Grid className="margin-tweeker grid">
          <Col md={6}>
            <CookieSetter
              title="Liverpool"
              subTitle="Set the cookie to Liverpool"
              cookieName="customerID"
              cookieValue="LIVERPOOL"
            />
          </Col>
          <Col md={6}>
            <CookieSetter
              title="London"
              subTitle="Set the cookie to London"
              cookieName="customerID"
              cookieValue="LONDON"
            />
          </Col>
        </Grid>
      </div>
    );
  }
}
