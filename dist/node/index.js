"use strict";
/*
* mbed Cloud JavaScript SDK
* Copyright ARM Limited 2017
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//import config = require('./helpers/node_config');
var access_1 = require("./access");
var development_1 = require("./development");
var devices_1 = require("./devices");
var update_1 = require("./update");
module.exports = {
    //	config: config,
    Access: access_1.Access,
    //    Assets: Assets,
    //    Billing: Billing,
    Development: development_1.Development,
    Devices: devices_1.Devices,
    //    Logging: Logging, // device logs from ??
    //    Manufacturing: Manufacturing, //production_line_certificates, provisioining_certificates, factory_tool
    //    Statistics: Statistics,
    Update: update_1.Update //firmware_catalog, deployment_service
};