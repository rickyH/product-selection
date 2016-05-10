require('./Home.scss');
import React, { Component } from 'react';
import { Hero, CookieSetter } from 'components';
import { Grid, Col } from 'react-bootstrap';

/* The Home Page of the app */
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
              subTitle="Set the cookie to a valid Liverpool customerID"
              cookieName="customerID"
              cookieValue="36893900"
            />
          </Col>
          <Col md={6}>
            <CookieSetter
              title="London"
              subTitle="Set the cookie to a valid London customerID"
              cookieName="customerID"
              cookieValue="26387500"
            />
          </Col>
        </Grid>
      </div>
    );
  }
}
