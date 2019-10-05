'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on dashcore-p2p Module {0}'
};

module.exports = require('@csio.company/dashcore-lib').errors.extend(spec);
