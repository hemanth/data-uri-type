'use strict';
module.exports = function (dataURI) {
  return new Promise((resolve, reject) => {
    if (!dataURI.indexOf('data:') === 0) {
      return reject('Expected a dataURI');
    }
    resolve(dataURI.match(/^data:([\w/]+)(?:;base64)?,/)[1]);
  });
};
