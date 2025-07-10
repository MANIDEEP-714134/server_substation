// dataModel.js
const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
  "meter_26": "Number",
"Voltage_V1N_meter_26": Number,
"Voltage_V2N_meter_26": Number,
"Voltage_V3N_meter_26": Number,
"Voltage_V12_meter_26": Number,
"Voltage_V23_meter_26": Number,
"Voltage_V31_meter_26": Number,
"Current_I1_meter_26": Number,
"Current_I2_meter_26": Number,
"Current_I3_meter_26": Number,
"Total_KW_meter_26": Number,
"Total_KVA_meter_26": Number,
"Total_KVAR_meter_26": Number,
"Avg_PF_meter_26": Number,
"Frequency_meter_26": Number,
"TotalNet_KWH_meter_26": Number,
"TotalNet_KVAH_meter_26": Number,
"TotalNet_KVARH_meter_26": Number,
"Neutral_Current_meter_26": Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sensor', sensorDataSchema);