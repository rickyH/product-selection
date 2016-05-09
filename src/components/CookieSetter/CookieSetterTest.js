import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils';
import chai from 'chai';
import CookieSetter from './CookieSetter';
import cookie from 'react-cookie';

const should = chai.should();
const expect = chai.expect;

describe('Component - Cookie Setter', () => {
  let renderedComponent = null;
  let renderedElement = null;

  it('Element should render', () => {
    renderedComponent = renderIntoDocument(<CookieSetter cookieName="test" cookieValue="cookie" />);
    renderedElement = ReactDOM.findDOMNode(renderedComponent);
    should.exist(renderedComponent);
    should.exist(renderedElement);
  });

  it('Class name should be passed through', () => {
    const testClassName = 'im-a-cookie-setter';
    renderedComponent = renderIntoDocument(
      <CookieSetter cookieName="test" cookieValue="cookie" className={testClassName} />
    );
    renderedElement = ReactDOM.findDOMNode(renderedComponent);
    expect(renderedElement.className).to.contain(testClassName);
    expect(renderedElement.className).to.equal(`cookie-setter ${testClassName}`);
  });

  it('The title is applied to a h2 element', () => {
    const titleName = 'CookieTitle';
    renderedComponent = renderIntoDocument(
      <CookieSetter
        title={titleName}
        cookieName="test"
        cookieValue="cookie"
      />
    );
    renderedElement = ReactDOM.findDOMNode(renderedComponent);
    const h2 = findRenderedDOMComponentWithTag(renderedComponent, 'h2');
    should.exist(h2);
    expect(h2.innerHTML).to.equal(titleName);
  });

  it('The subTitle is applied to a p element', () => {
    const subTitleName = 'CookieBody';
    renderedComponent = renderIntoDocument(
      <CookieSetter
        subTitle={subTitleName}
        cookieName="test"
        cookieValue="cookie"
      />
    );
    renderedElement = ReactDOM.findDOMNode(renderedComponent);
    const pTag = findRenderedDOMComponentWithTag(renderedComponent, 'p');
    should.exist(pTag);
    expect(pTag.innerHTML).to.equal(subTitleName);
  });

  it('Clicking the cookie component sets a cookie', () => {
    const cookieText = 'cookie-value';
    renderedComponent = renderIntoDocument(
      <CookieSetter
        cookieName="test-cookie"
        cookieValue={cookieText}
      />
    );
    renderedElement = ReactDOM.findDOMNode(renderedComponent);
    Simulate.click(renderedElement);
    const cookieValue = cookie.load('test-cookie');
    expect(cookieValue).to.equal(cookieText);
  });
});
