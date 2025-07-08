// dataModel.js
const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
  meter_id: { type: Number, required: true },
  voltage_v1n: Number,
  voltage_v2n: Number,
  voltage_v3n: Number,
  voltage_v12: Number,
  voltage_v23: Number,
  voltage_v31: Number,
  current_i1: Number,
  current_i2: Number,
  current_i3: Number,
  total_kw: Number,
  total_kva: Number,
  total_kvar: Number,
  avg_pf: Number,
  frequency: Number,
  totalnet_kwh: Number,
  totalnet_kvah: Number,
  totalnet_kvarh: Number,
  neutral_current: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sensor', sensorDataSchema);
