import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  Simulate
} from 'react-addons-test-utils';
import chai from 'chai';
import Selection from './Selection';

const should = chai.should();
const expect = chai.expect;

describe('Component - Selection', () => {
  let renderedComponent = null;
  let renderedElement = null;

  it('Element should render', () => {
    renderedComponent = renderIntoDocument(
      <Selection name="name" value="value" uniqueId="uniqueId">children</Selection>
    );
    renderedElement = ReactDOM.findDOMNode(renderedComponent);
    should.exist(renderedComponent);
    should.exist(renderedElement);
  });

  it('Clicking the selection should return click handle', () => {
    const clickHandle = (val) => {
      expect(val).to.be.true; // eslint-disable-line
    };

    renderedComponent = renderIntoDocument(
      <Selection
        name="name"
        value="value"
        uniqueId="uniqueId"
        clickEvent={() => {
          clickHandle(true);
        }}
      >
        children
      </Selection>
    );
    renderedElement = ReactDOM.findDOMNode(renderedComponent);
    Simulate.click(renderedElement);
  });
});
