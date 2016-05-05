import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils';
import chai from 'chai';
import HelloWorld from './HelloWorld';

const should = chai.should();
const expect = chai.expect;

describe('Component - Hello World', () => {
  let renderedComponent = null;
  let renderedElement = null;

  it('Element should render', () => {
    renderedComponent = renderIntoDocument(<HelloWorld />);
    renderedElement = ReactDOM.findDOMNode(renderedComponent);
    should.exist(renderedComponent);
    should.exist(renderedElement);
  });

  it('Class name should be passed through', () => {
    const testClassName = 'hello-mars';
    renderedComponent = renderIntoDocument(<HelloWorld className={testClassName} />);
    renderedElement = ReactDOM.findDOMNode(renderedComponent);
    expect(renderedElement.className).to.contain(testClassName);
    expect(renderedElement.className).to.equal(`${testClassName} hello-world`);
  });

  it('Count should equal 0 by default', () => {
    renderedComponent = renderIntoDocument(<HelloWorld />);
    renderedElement = ReactDOM.findDOMNode(renderedComponent);
    const countSpan = findRenderedDOMComponentWithTag(renderedComponent, 'span');
    expect(countSpan.innerHTML).to.equal('0');
  });

  it('Count prop must be an int, if it isn\'t then the value should set to 0', () => {
    renderedComponent = renderIntoDocument(<HelloWorld count="5" />);
    renderedElement = ReactDOM.findDOMNode(renderedComponent);
    const countSpan = findRenderedDOMComponentWithTag(renderedComponent, 'span');
    expect(countSpan.innerHTML).to.equal('0');

    renderedComponent = renderIntoDocument(<HelloWorld count="a" />);
    renderedElement = ReactDOM.findDOMNode(renderedComponent);
    const countSpan2 = findRenderedDOMComponentWithTag(renderedComponent, 'span');
    expect(countSpan2.innerHTML).to.equal('0');

    renderedComponent = renderIntoDocument(<HelloWorld count={2.6} />);
    renderedElement = ReactDOM.findDOMNode(renderedComponent);
    const countSpan3 = findRenderedDOMComponentWithTag(renderedComponent, 'span');
    expect(countSpan3.innerHTML).to.equal('2');
  });

  it('Count should set correctly by props', () => {
    renderedComponent = renderIntoDocument(<HelloWorld count={5} />);
    renderedElement = ReactDOM.findDOMNode(renderedComponent);
    const countSpan = findRenderedDOMComponentWithTag(renderedComponent, 'span');
    expect(countSpan.innerHTML).to.equal('5');
  });

  it('Clicking the element should incremenet the count', () => {
    renderedComponent = renderIntoDocument(<HelloWorld count={5} />);
    renderedElement = ReactDOM.findDOMNode(renderedComponent);
    const countSpan = findRenderedDOMComponentWithTag(renderedComponent, 'span');
    Simulate.click(renderedElement);
    expect(countSpan.innerHTML).to.equal('6');
  });
});
