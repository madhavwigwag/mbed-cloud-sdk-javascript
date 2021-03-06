/*
 * Pelion Device Management JavaScript SDK
 * Copyright Arm Limited 2017
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

import { ConfigOptions } from "../../common/config";
import { AccountAdminApi, DeveloperApi } from "../_api/iam";
import { EndpointsBase } from "../common/endpointsBase";

export class Endpoints extends EndpointsBase {
    public developer: DeveloperApi;
    public admin: AccountAdminApi;

    constructor(options?: ConfigOptions) {
        super();
        this.developer = new DeveloperApi(options, this.responseHandler.bind(this));
        this.admin = new AccountAdminApi(options, this.responseHandler.bind(this));
    }
}
