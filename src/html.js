import React from 'react';
import preloads from './head/preloads';
import metaAndStyleSheets from './head';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.log(e);
  }
}

class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{ __html: stylesStr }}
          id='gatsby-inlined-css'
        />
      );
    }
    // these props are comping from gatsby, we do not need to worry about them
    /* eslint-disable react/prop-types */
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          {preloads}
          {metaAndStyleSheets}
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            id='___gatsby'
            key={'body'}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
    /* eslint-enable react/prop-types */
  }
}

HTML.displayName = 'HTML';

module.exports = HTML;
