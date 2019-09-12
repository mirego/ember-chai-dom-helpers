/* eslint-env node */

'use strict';

const getURLFor = require('ember-source-channel-url');

module.exports = function() {
  return Promise.all([
    getURLFor('release'),
    getURLFor('beta'),
    getURLFor('canary')
  ]).then(urls => {
    return {
      useYarn: true,
      scenarios: [
        {
          name: 'ember-lts-3.4',
          npm: {
            dependencies: {
              'ember-source': '^3.4.0'
            }
          }
        },
        {
          name: 'ember-lts-3.8',
          npm: {
            dependencies: {
              'ember-source': '^3.8.0'
            }
          }
        },
        {
          name: 'ember-release',
          npm: {
            dependencies: {
              'ember-source': urls[0]
            }
          }
        },
        {
          name: 'ember-beta',
          npm: {
            dependencies: {
              'ember-source': urls[1]
            }
          }
        },
        {
          name: 'ember-canary',
          allowedToFail: true,
          npm: {
            dependencies: {
              'ember-source': urls[2]
            }
          }
        }
      ]
    };
  });
};
