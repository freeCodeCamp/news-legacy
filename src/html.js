import React from 'react';

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
          <meta charSet='utf-8' />
          <meta content='ie=edge' httpEquiv='x-ua-compatible' />
          <meta
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
            name='viewport'
          />
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
