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

import pg = require("polygoat");
import { EventEmitter } from "events";
import { ResourceType } from "./types";
import { DevicesApi } from "./index";
import { Resource as apiResourceType } from "../_api/mds";

/**
 * Resource
 */
export class Resource extends EventEmitter {

    /**
     * Resource notification event
     * @event
     */
    static EVENT_NOTIFICATION: string = "notification";

    constructor(options: ResourceType, private _api?: DevicesApi) {
        super();
        for(var key in options) {
            this[key] = options[key];
        }

        this.on("newListener", (eventName, listener) => {
            if (eventName === Resource.EVENT_NOTIFICATION) {
                this.addSubscription((error, asyncID) => {
                    if (this._api.polling) {
                        // record this resource at this path for notifications
                        this._api._resourceSubs[this.deviceId + this.path] = this;
                    } else {
                        // return the asyncID for use with webhooks
                        this.emit(Resource.EVENT_NOTIFICATION, asyncID);
                    }
                });
            }
        });

        this.on("removeListener", (eventName, listener) => {
            if (eventName === Resource.EVENT_NOTIFICATION) {
                if (this.listenerCount(Resource.EVENT_NOTIFICATION) === 0) {
                    // no-one is listening :(
                    delete this._api._resourceSubs[this.deviceId + this.path];
                    this.deleteSubscription();
                }
            }
        });
    }

    static map(from: apiResourceType, deviceId: string, api: DevicesApi): Resource {
        let type:ResourceType = {
            contentType:    from.type,
            observable:     from.obs,
            type:           from.rt,
            path:           from.uri,
            deviceId:       deviceId
        };

        return new Resource(type, api);
    }

    /**
     * Gets the value of a resource
     * @param options.cacheOnly If true, the response will come only from the cache
     * @param options.noResponse If true, If true, mbed Device Connector will not wait for a response
     * @returns Promise of resource value when long polling or an asyncId
     */
    public getValue(options?: { cacheOnly?: boolean, noResponse?: boolean }): Promise<string>;
    /**
     * Gets the value of a resource
     * @param options.cacheOnly If true, the response will come only from the cache
     * @param options.noResponse If true, If true, mbed Device Connector will not wait for a response
     * @param callback A function that is passed the arguments (error, value) where value is the resource value when long polling or an asyncId
     */
    public getValue(options?: { cacheOnly?: boolean, noResponse?: boolean }, callback?: (err: any, data?: string) => any);
    public getValue(options?: any, callback?: (err: any, data?: string) => any): Promise<string> {
        options = options || {};
        if (typeof options === "function") {
            callback = options;
            options = {};
        }
        let { cacheOnly, noResponse } = options;
        return this._api.getResourceValue({
            id:            this.deviceId,
            path:          this.path,
            cacheOnly:     cacheOnly,
            noResponse:    noResponse
        }, callback);
    }

    /**
     * Sets the value of a resource
     * @param options.value The value of the resource
     * @param options.noResponse If true, mbed Device Connector will not wait for a response
     * @returns Promise containing any error
     */
    public setValue(options: { value: string, noResponse?: boolean }): Promise<string>;
    /**
     * Sets the value of a resource
     * @param options.value The value of the resource
     * @param options.noResponse If true, mbed Device Connector will not wait for a response
     * @param callback A function that is passed any error
     */
    public setValue(options: { value: string, noResponse?: boolean }, callback?: (err: any, data?: string) => any);
    public setValue(options: { value: string, noResponse?: boolean }, callback?: (err: any, data?: string) => any): Promise<string> {
        let { value, noResponse } = options;
        return this._api.setResourceValue({
            id:            this.deviceId,
            path:          this.path,
            value:         value,
            noResponse:    noResponse
        }, callback);
    }

    /**
     * Execute a function on a resource
     * @param options.fn The function to trigger
     * @param options.noResponse If true, mbed Device Connector will not wait for a response
     * @returns Promise containing any error
     */
    public execute(options?: { fn?: string, noResponse?: boolean }): Promise<string>;
    /**
     * Execute a function on a resource
     * @param options.fn The function to trigger
     * @param options.noResponse If true, mbed Device Connector will not wait for a response
     * @param callback A function that is passed any error
     */
    public execute(options: { fn?: string, noResponse?: boolean }, callback?: (err: any, data?: string) => any);
    public execute(options?: any, callback?: (err: any, data?: string) => any): Promise<string> {
        options = options || {};
        if (typeof options === "function") {
            callback = options;
            options = {};
        }
        let { fn, noResponse } = options;
        return this._api.executeResource({
            id:            this.deviceId,
            path:          this.path,
            fn:            fn,
            noResponse:    noResponse
        }, callback);
    }

    /**
     * Gets the status of a resource's subscription
     * @returns Promise containing resource subscription status
     */
    public getSubscription(): Promise<boolean>;
    /**
     * Gets the status of a resource's subscription
     * @param callback A function that is passed (error, subscribed) where subscribed is true or false
     */
    public getSubscription(callback: (err: any, data?: boolean) => any);
    public getSubscription(callback?: (err: any, data?: boolean) => any): Promise<boolean> {
        return pg(done => {
            if (!this.observable) done(null, null);
            this._api.getResourceSubscription({
                id:            this.deviceId,
                path:          this.path
            }, done);
        }, callback);
    }

    /**
     * Subscribe to a resource
     * @returns Promise containing any error
     */
    private addSubscription(): Promise<void>;
    /**
     * Subscribe to a resource
     * @param callback A function that is passed any error
     */
    private addSubscription(callback?: (err: any, data?: void) => any);
    private addSubscription(callback?: (err: any, data?: void) => any): Promise<void> {
        return this._api.addResourceSubscription({
            id:            this.deviceId,
            path:          this.path
        }, callback);
    }

    /**
     * Deletes a resource's subscription
     * @returns Promise containing any error
     */
    private deleteSubscription(): Promise<void>;
    /**
     * Deletes a resource's subscription
     * @param callback A function that is passed any error
     */
    private deleteSubscription(callback?: (err: any, data?: void) => any);
    private deleteSubscription(callback?: (err: any, data?: void) => any): Promise<void> {
        return this._api.deleteResourceSubscription({
            id:            this.deviceId,
            path:          this.path
        }, callback);
    }
}
export interface Resource extends ResourceType {}