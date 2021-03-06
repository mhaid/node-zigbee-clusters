'use strict';

const Cluster = require('../Cluster');
const { ZCLDataTypes } = require('../zclTypes');

const ATTRIBUTES = {
  measuredValue: { id: 0, type: ZCLDataTypes.uint16 },
};

const COMMANDS = {};

class TemperatureMeasurement extends Cluster {

  static get ID() {
    return 1026; // 0x0402
  }

  static get NAME() {
    return 'temperatureMeasurement';
  }

  static get ATTRIBUTES() {
    return ATTRIBUTES;
  }

  static get COMMANDS() {
    return COMMANDS;
  }

}

Cluster.addCluster(TemperatureMeasurement);

module.exports = TemperatureMeasurement;
