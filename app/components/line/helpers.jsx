import React from 'react';

import _ from 'lodash';

export function getTokenizedLine(tokens, contexts) {
  /*eslint react/display-name: "off"*/
  return new Promise(function(resolve) {
    const tokenizedLine = _.map(tokens, (token, idx) => {
      for (let i = contexts.length - 1; i >= 0; i--) {
        let context = contexts[i];
        let { match } = context;
        let regex;

        try {
          regex = new RegExp(match);
        } catch (e) {
          regex = null;
        }

        if (regex !== null && regex.test(token)) {
          return (<span key={idx} className={context.scope}>{token} </span>);
        }
      }
    });

    resolve(tokenizedLine);
  });
}

export function getContexts(syntax) {
  return  _(syntax.contexts).values().flatten().filter((context) => {
    let { match, scope } = context;

    return (!_.isUndefined(match) && !_.isUndefined(scope));
  }).value();
}
