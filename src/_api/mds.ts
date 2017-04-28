// ===============================================
// This file is autogenerated - Please do not edit
// Tracks base typescript-fetch mustache 01/02/17
// ===============================================
/**
 * Connect API
 * mbed Cloud Connect API allows web applications to communicate with devices. You can subscribe to device resources and read/write values to them. mbed Cloud Connect makes connectivity to devices easy by queuing requests and caching resource values.
 *
 * OpenAPI spec version: 2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable */
/* tslint:disable:no-implicit-any */

import superagent = require('superagent');
import { ApiBase } from "../common/apiBase";
import { SDKError } from "../common/sdkError";

export interface AsyncID {
    /**
     * Asynchronous response unique ID.
     */
    "async-response-id"?: string;
}

export interface AsyncIDResponse {
    /**
     * HTTP status code, for example 200 for OK.
     */
    "status"?: number;
    /**
     * Requested data, base64 encoded.
     */
    "payload"?: string;
    /**
     * Determines how long this value will be valid in cache, in seconds. 0 means that value is not stored in cache.
     */
    "max-age"?: string;
    /**
     * Optional error message, describing the error.
     */
    "error"?: string;
    /**
     * Asynchronous response unique ID.
     */
    "id"?: string;
    /**
     * Content type
     */
    "ct"?: string;
}

export interface Endpoint {
    /**
     * Possible values ACTIVE, STALE.
     */
    "status"?: string;
    /**
     * Determines whether the device is in queue mode.  <br/><br/><b>Queue mode</b><br/> When an endpoint is in Queue mode, messages sent to the endpoint do not wake up the physical device. The messages are queued  and delivered when the device wakes up and connects to mbed Cloud Connect itself. You can also use the Queue mode when  the device is behind a NAT and cannot be reached directly by mbed Cloud Connect. 
     */
    "q"?: boolean;
    /**
     * Type of endpoint. (Free text)
     */
    "type"?: string;
    /**
     * Unique mbed Cloud Device ID representing the endpoint.
     */
    "name"?: string;
}

export interface EndpointData {
    /**
     * Queue mode (default value is false).
     */
    "q"?: boolean;
    /**
     * Endpoint type.
     */
    "ept"?: string;
    /**
     * In case of a self-provided endpoint name that is used to initiate the device registration, mbed Cloud provides a new Device ID to be used from that point on. The new mbed-Cloud-provided Device ID is forwarded as the 'ep' property and the original self-provided one as the optional 'original-ep' property in a registration notification. The name and ID can then be mapped accordingly. mbed Cloud saves the original endpoint name in Device Catalog for future device registrations so there is no need to do the mapping again.  
     */
    "original-ep"?: string;
    "resources"?: Array<ResourcesData>;
    /**
     * Unique mbed Cloud Device ID.
     */
    "ep"?: string;
}

export interface NotificationData {
    /**
     * Timestamp.
     */
    "timestamp"?: string;
    /**
     * Base64 encoded payload.
     */
    "payload"?: string;
    /**
     * URI path.
     */
    "path"?: string;
    /**
     * Max age value is an integer number of seconds between 0 and 2^32-1 but the actual maximum cache time is limited to 3 days. A default value of 60 seconds is assumed in the absence of the option. 
     */
    "max-age"?: string;
    /**
     * mbed Cloud Device ID.
     */
    "ep"?: string;
    /**
     * Content type.
     */
    "ct"?: string;
}

export interface NotificationMessage {
    "async-responses"?: Array<AsyncIDResponse>;
    "de-registrations"?: Array<string>;
    "reg-updates"?: Array<EndpointData>;
    "registrations"?: Array<EndpointData>;
    "notifications"?: Array<NotificationData>;
    "registrations-expired"?: Array<string>;
}

export interface Presubscription {
    /**
     * The Device ID
     */
    "endpoint-name"?: string;
    "endpoint-type"?: string;
    "resource-path"?: Array<ResourcePath>;
}

export interface PresubscriptionArray extends Array<Presubscription> {
}

export interface Resource {
    /**
     * Resource type.
     */
    "rt"?: string;
    /**
     * The content type of the resource. <br/><br/><b>Important</b><br/> You are encouraged to use the resource types listed in the [LWM2M specification](http://technical.openmobilealliance.org/Technical/technical-information/omna/lightweight-m2m-lwm2m-object-registry). 
     */
    "type"?: string;
    /**
     * The URL of the resource.
     */
    "uri"?: string;
    /**
     * Observable determines whether you can subscribe to changes for this resource. It can have values \"true\" or \"false\". 
     */
    "obs"?: boolean;
}

export interface ResourcePath {
}

export interface ResourcesData {
    /**
     * Resource's URI path.
     */
    "path"?: string;
    /**
     * Resource type.
     */
    "rf"?: string;
    /**
     * Content type.
     */
    "ct"?: string;
    /**
     * Whether the resource is observable or not (true/false).
     */
    "obs"?: boolean;
    /**
     * Interface description.
     */
    "if"?: string;
}

export interface Webhook {
    /**
     * The URL to which the notifications are sent. We recommend that you serve this URL over HTTPS.
     */
    "url"?: string;
    /**
     * Headers (key/value) that are sent with the notification. Optional.
     */
    "headers"?: any;
}

/**
 * DefaultApi
 */
export class DefaultApi extends ApiBase {

    /** 
     * Delete callback URL
     * Deletes the callback URL.
     */
    v2NotificationCallbackDelete (callback?: (error:any, data?:any, response?: superagent.Response) => any): superagent.SuperAgentRequest {

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/notification/callback',
            method: 'DELETE',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Check callback URL
     * Shows the current callback URL if it exists.
     */
    v2NotificationCallbackGet (callback?: (error:any, data?:Webhook, response?: superagent.Response) => any): superagent.SuperAgentRequest {

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/notification/callback',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
}

/**
 * EndpointsApi
 */
export class EndpointsApi extends ApiBase {

    /** 
     * List the resources on an endpoint
     * The list of resources is cached by mbed Cloud Connect, so this call does not create a message to the device. 
     * @param deviceId A unique mbed Cloud device ID for an endpoint. Note that the ID needs to be an exact match. You cannot use wildcards here. 
     */
    v2EndpointsDeviceIdGet (deviceId: string, callback?: (error:any, data?:Array<Resource>, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "deviceId" is set
        if (deviceId === null || deviceId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'deviceId' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/endpoints/{device-id}'.replace('{' + 'device-id' + '}', String(deviceId)),
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * List endpoints. The number of endpoints is currently limited to 200.
     * Endpoints are physical devices running mbed Cloud Client. 
     * @param type Filter endpoints by endpoint-type.
     */
    v2EndpointsGet (type?: string, callback?: (error:any, data?:Array<Endpoint>, response?: superagent.Response) => any): superagent.SuperAgentRequest {

        let headerParams: any = {};

        let queryParameters: any = {};
        if (type !== undefined) {
            queryParameters['type'] = type;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/endpoints',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
}

/**
 * NotificationsApi
 */
export class NotificationsApi extends ApiBase {

    /** 
     * Register a callback URL
     * Register a URL to which the server should deliver notifications of the subscribed resource changes. To get notifications pushed you need to also place the subscriptions.  The maximum length of URL, header keys and values, all combined, is 400 characters.  Notifications are delivered as PUT messages to the HTTP server defined by the client with a subscription server message.  The given URL should be accessible and respond to the PUT request with response code of 200 or 204. mbed Cloud Connect  tests the callback URL with an empty payload when the URL is registered. For more information on callback notification, see [NotificationData](api-references#notificationdata).  **Note**: Only one callback URL per an API key can be active. If you register a new URL while another one is already active,  it replaces the active one. There can be only one notification channel at a time. If the Long Poll notification is already present  you need to delete it before setting the callback URL.  **Expiration of a callback URL:**   A callback can expire when mbed DS cannot deliver a notification due to a connection timeout or  error response (4xx or 5xx). After each delivery failure, mbed DS sets an exponential back off time and makes a retry attempt  after that. The first retry delay is 1 second, then 2s, 4s, 8s, ..., 2min, 2min. The maximum retry delay is 2 minutes.  The callback URL will be removed if all retries fail withing 60 minutes. 
     * @param webhook A json object that contains the optional headers and the URL to which the notifications need to be sent. 
     */
    v2NotificationCallbackPut (webhook: Webhook, callback?: (error:any, data?:any, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "webhook" is set
        if (webhook === null || webhook === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'webhook' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/notification/callback',
            method: 'PUT',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
            body: webhook,
        }, callback);
    }
    /** 
     * Delete notification Long Poll channel
     * To delete a notification Long Poll channel. This is required to change the channel from Long Poll to a callback. 
     */
    v2NotificationPullDelete (callback?: (error:any, data?:any, response?: superagent.Response) => any): superagent.SuperAgentRequest {

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/notification/pull',
            method: 'DELETE',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Get notifications using Long Poll
     * In this case, notifications are delivered through HTTP long-poll requests. The HTTP request is kept open  until an event notification or a batch of event notifications are delivered to the client or the request times out  (response code 204). In both cases, the client should open a new polling connection after the previous one closes.  You must have a persistent connection (Connection keep-alive header in the request) to avoid excess  TLS handshakes.  **Note:** If it is not possible to have a public facing callback URL, for example when developing on your local machine,  you can use Long Polling to check for new messages. However, to reduce network traffic and to increase performance  we recommend that you use callback URLs (webhooks) whenever possible. There can be only one notification channel at a time.  If the callback URL notification channel is already present you need to delete it before creating a Long Poll channel. 
     */
    v2NotificationPullGet (callback?: (error:any, data?:NotificationMessage, response?: superagent.Response) => any): superagent.SuperAgentRequest {

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/notification/pull',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
}

/**
 * ResourcesApi
 */
export class ResourcesApi extends ApiBase {

    /** 
     * Delete a resource
     * A request to delete a resource must be handled by both mbed Cloud Client and mbed Cloud Connect. The resource is not deleted from mbed Cloud Connect until the delete is handled by mbed Cloud Client.  All resource APIs are asynchronous. These APIs respond only if the device is turned on and connected to mbed Cloud Connect. 
     * @param deviceId A unique mbed Cloud device ID for the endpoint. Note that the ID must be an exact match. You cannot use wildcards here. 
     * @param resourcePath The URL of the resource. 
     * @param noResp **Non-confirmable requests**  All resource APIs have the parameter noResp. If you make a request with &#x60;noResp&#x3D;true&#x60;, mbed Cloud Connect makes a CoAP non-confirmable request to the device. Such requests are not guaranteed to arrive in the device, and you do not get back an async-response-id.  If calls with this parameter enabled succeed, they return with the status code 204 No Content. If the underlying protocol does not support non-confirmable requests, or if the endpoint is registered in queue mode, the response is status code 409 Conflict. 
     */
    v2EndpointsDeviceIdResourcePathDelete (deviceId: string, resourcePath: string, noResp?: boolean, callback?: (error:any, data?:AsyncID, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "deviceId" is set
        if (deviceId === null || deviceId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'deviceId' missing."));
            }
            return;
        }
        // verify required parameter "resourcePath" is set
        if (resourcePath === null || resourcePath === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'resourcePath' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};
        if (noResp !== undefined) {
            queryParameters['noResp'] = noResp;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/endpoints/{device-id}/{resourcePath}'.replace('{' + 'device-id' + '}', String(deviceId)).replace('{' + 'resourcePath' + '}', String(resourcePath)),
            method: 'DELETE',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Read from a resource
     * Requests the resource value and when the response is available, a json AsycResponse  object (AsyncIDResponse object) is received in the notification channel. Note that you can also  receive notifications when a resource changes. The preferred way to get resource values is to use subscribe  and callback methods.  All resource APIs are asynchronous. These APIs will only respond  if the device is turned on and connected to mbed Cloud Connect. 
     * @param deviceId Unique mbed Cloud device ID for the endpoint. Note that the ID needs to be an exact match. You cannot use wildcards here. 
     * @param resourcePath The URL of the resource. 
     * @param cacheOnly If true, the response comes only from the cache. Default: false. 
     * @param noResp **Non-confirmable requests**   All resource APIs have the parameter &#x60;noResp&#x60;. If a request is made with &#x60;noResp&#x3D;true&#x60;, mbed Cloud Connect makes a CoAP  non-confirmable request to the device. Such requests are not guaranteed to arrive in the device, and you do not get back  an async-response-id.  If calls with this parameter enabled succeed, they return with the status code 204 No Content. If the underlying protocol  does not support non-confirmable requests, or if the endpoint is registered in queue mode, the response is status code  409 Conflict. 
     */
    v2EndpointsDeviceIdResourcePathGet (deviceId: string, resourcePath: string, cacheOnly?: boolean, noResp?: boolean, callback?: (error:any, data?:AsyncID, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "deviceId" is set
        if (deviceId === null || deviceId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'deviceId' missing."));
            }
            return;
        }
        // verify required parameter "resourcePath" is set
        if (resourcePath === null || resourcePath === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'resourcePath' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};
        if (cacheOnly !== undefined) {
            queryParameters['cacheOnly'] = cacheOnly;
        }
        if (noResp !== undefined) {
            queryParameters['noResp'] = noResp;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/endpoints/{device-id}/{resourcePath}'.replace('{' + 'device-id' + '}', String(deviceId)).replace('{' + 'resourcePath' + '}', String(resourcePath)),
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Execute a function on a resource
     * With this API, you can execute a function on an existing resource.  All resource APIs are asynchronous. These APIs respond only if the device is turned on and connected to mbed Cloud Connect. 
     * @param deviceId A unique mbed Cloud device ID for the endpoint. Note that the ID must be an exact match. You cannot use wildcards here. 
     * @param resourcePath The URL of the resource.
     * @param resourceFunction This value is not needed. Most of the time resources do not accept a function but they have their own functions predefined. You can use this to trigger them.  If a function is included, the body of this request is passed as a char* to the function in mbed Cloud Client. 
     * @param noResp **Non-confirmable requests**  All resource APIs have the parameter noResp. If you make a request with &#x60;noResp&#x3D;true&#x60;, mbed Cloud Connect makes a CoAP non-confirmable request to the device. Such requests are not guaranteed to arrive in the device, and you do not get back an async-response-id.  If calls with this parameter enabled succeed, they return with the status code 204 No Content. If the underlying protocol does not support non-confirmable requests, or if the endpoint is registered in queue mode, the response is status code 409 Conflict. 
     */
    v2EndpointsDeviceIdResourcePathPost (deviceId: string, resourcePath: string, resourceFunction?: string, noResp?: boolean, callback?: (error:any, data?:AsyncID, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "deviceId" is set
        if (deviceId === null || deviceId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'deviceId' missing."));
            }
            return;
        }
        // verify required parameter "resourcePath" is set
        if (resourcePath === null || resourcePath === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'resourcePath' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};
        if (noResp !== undefined) {
            queryParameters['noResp'] = noResp;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/endpoints/{device-id}/{resourcePath}'.replace('{' + 'device-id' + '}', String(deviceId)).replace('{' + 'resourcePath' + '}', String(resourcePath)),
            method: 'POST',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
            body: resourceFunction,
        }, callback);
    }
    /** 
     * Write to a resource
     * With this API, you can write new values to existing resources, or create new  resources on the device. The resource-path does not have to exist - it can be  created by the call. The maximum length of resource-path is 255 characters.  This API can also be used to transfer files to the device. mbed Cloud Connect LWM2M server implements the Option 1 from RFC7959. The maximum block size is 1024 bytes. The block size versus transferred file size is something to note in low quality networks. The customer application needs to know what type of file is transferred (for example txt) and the payload can be encrypted by the customer. The maximum size of payload is 1048576 bytes.  All resource APIs are asynchronous. These APIs respond only if the device is turned on and connected to mbed Cloud Connect. 
     * @param deviceId A unique mbed Cloud device ID for the endpoint. Note that the ID must be an exact match. You cannot use wildcards here. 
     * @param resourcePath Resource URL.
     * @param resourceValue The value to be set to the resource. (Check accceptable content-types) 
     * @param noResp **Non-confirmable requests**  All resource APIs have the parameter noResp. If you make a request with &#x60;noResp&#x3D;true&#x60;, mbed Cloud Connect makes a CoAP non-confirmable request to the device. Such requests are not guaranteed to arrive in the device, and you do not get back an async-response-id.  If calls with this parameter enabled succeed, they return with the status code 204 No Content. If the underlying protocol does not support non-confirmable requests, or if the endpoint is registered in queue mode, the response is status code 409 Conflict. 
     */
    v2EndpointsDeviceIdResourcePathPut (deviceId: string, resourcePath: string, resourceValue: string, noResp?: boolean, callback?: (error:any, data?:AsyncID, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "deviceId" is set
        if (deviceId === null || deviceId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'deviceId' missing."));
            }
            return;
        }
        // verify required parameter "resourcePath" is set
        if (resourcePath === null || resourcePath === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'resourcePath' missing."));
            }
            return;
        }
        // verify required parameter "resourceValue" is set
        if (resourceValue === null || resourceValue === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'resourceValue' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};
        if (noResp !== undefined) {
            queryParameters['noResp'] = noResp;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/endpoints/{device-id}/{resourcePath}'.replace('{' + 'device-id' + '}', String(deviceId)).replace('{' + 'resourcePath' + '}', String(resourcePath)),
            method: 'PUT',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
            body: resourceValue,
        }, callback);
    }
}

/**
 * SubscriptionsApi
 */
export class SubscriptionsApi extends ApiBase {

    /** 
     * Remove all subscriptions
     * Removes subscriptions from every endpoint and resource. Note that this does not remove pre-subscriptions.
     */
    v2SubscriptionsDelete (callback?: (error:any, data?:any, response?: superagent.Response) => any): superagent.SuperAgentRequest {

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/subscriptions',
            method: 'DELETE',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Delete subscriptions from an endpoint
     * Deletes all resource subscriptions in a single endpoint.
     * @param deviceId A unique mbed Cloud device ID for the endpoint. Note that the ID must be an exact match. You cannot use wildcards here. 
     */
    v2SubscriptionsDeviceIdDelete (deviceId: string, callback?: (error:any, data?:any, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "deviceId" is set
        if (deviceId === null || deviceId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'deviceId' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/subscriptions/{device-id}'.replace('{' + 'device-id' + '}', String(deviceId)),
            method: 'DELETE',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Read endpoints subscriptions
     * Lists all subscribed resources from a single endpoint.
     * @param deviceId A unique mbed Cloud device ID for the endpoint. Note that ID must be an exact match. You cannot use wildcards here. 
     */
    v2SubscriptionsDeviceIdGet (deviceId: string, callback?: (error:any, data?:any, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "deviceId" is set
        if (deviceId === null || deviceId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'deviceId' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/subscriptions/{device-id}'.replace('{' + 'device-id' + '}', String(deviceId)),
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Remove a subscription
     * To remove an existing subscription from a resource path. 
     * @param deviceId A unique mbed Cloud device ID for the endpoint. Note that the ID must be an exact match. You cannot use wildcards here. 
     * @param resourcePath The URL of the resource. 
     */
    v2SubscriptionsDeviceIdResourcePathDelete (deviceId: string, resourcePath: string, callback?: (error:any, data?:any, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "deviceId" is set
        if (deviceId === null || deviceId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'deviceId' missing."));
            }
            return;
        }
        // verify required parameter "resourcePath" is set
        if (resourcePath === null || resourcePath === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'resourcePath' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/subscriptions/{device-id}/{resourcePath}'.replace('{' + 'device-id' + '}', String(deviceId)).replace('{' + 'resourcePath' + '}', String(resourcePath)),
            method: 'DELETE',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Read subscription status
     * @param deviceId A unique mbed Cloud device ID for the endpoint. Note that the ID must be an exact match. You cannot use wildcards here. 
     * @param resourcePath The URL of the resource. 
     */
    v2SubscriptionsDeviceIdResourcePathGet (deviceId: string, resourcePath: string, callback?: (error:any, data?:any, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "deviceId" is set
        if (deviceId === null || deviceId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'deviceId' missing."));
            }
            return;
        }
        // verify required parameter "resourcePath" is set
        if (resourcePath === null || resourcePath === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'resourcePath' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/subscriptions/{device-id}/{resourcePath}'.replace('{' + 'device-id' + '}', String(deviceId)).replace('{' + 'resourcePath' + '}', String(resourcePath)),
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Subscribe to a resource path
     * The mbed Cloud Connect eventing model consists of observable resources.  This means that endpoints can deliver updated resource content, periodically or with a more sophisticated  solution-dependent logic. The OMA LWM2M resource model including objects, object instances,  resources and resource instances is also supported.  Applications can subscribe to objects, object instances or individual resources to make the device  to provide value change notifications to mbed Cloud Connect service. An application needs to call a &#x60;/notification/callback&#x60; method to get mbed Cloud Connect to push a notification of the resource changes.  You can also use &#x60;/subscriptions&#x60; to set a pre-subscription. 
     * @param deviceId A unique mbed Cloud device ID for the endpoint. Note that the ID must be an exact match. You cannot use wildcards here. 
     * @param resourcePath The URL of the resource. 
     */
    v2SubscriptionsDeviceIdResourcePathPut (deviceId: string, resourcePath: string, callback?: (error:any, data?:any, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "deviceId" is set
        if (deviceId === null || deviceId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'deviceId' missing."));
            }
            return;
        }
        // verify required parameter "resourcePath" is set
        if (resourcePath === null || resourcePath === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'resourcePath' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/subscriptions/{device-id}/{resourcePath}'.replace('{' + 'device-id' + '}', String(deviceId)).replace('{' + 'resourcePath' + '}', String(resourcePath)),
            method: 'PUT',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Get pre-subscriptions
     * You can retrieve the pre-subscription data by using a GET operation. The server returns with the same JSON structure  as described above. If there are no pre-subscribed resources, it returns with an empty array. 
     */
    v2SubscriptionsGet (callback?: (error:any, data?:any, response?: superagent.Response) => any): superagent.SuperAgentRequest {

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/subscriptions',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Set pre-subscriptions
     * Pre-subscription is a set of rules and patterns put by the application. When an endpoint registers  and its ID, type and registered resources match the pre-subscription data, mbed Cloud Connect sends  subscription requests to the device automatically. The pattern may include the endpoint ID  (optionally having an &#x60;\\*&#x60; character at the end), endpoint type, a list of resources or expressions  with an &#x60;\\*&#x60; character at the end. Subscriptions based on pre-subscriptions are done when device registers or does register update. To remove the pre-subscription data, put an empty array as a rule.  &#x60;&#x60;&#x60; Example payload: [  {    endpoint-name: \&quot;node-001\&quot;,    resource-path: [\&quot;/dev\&quot;]  },  {    endpoint-type: \&quot;Light\&quot;,    resource-path: [\&quot;/sen/_*\&quot;]  },  {    endpoint-name: \&quot;node*\&quot;  },  {    endpoint-type: \&quot;Sensor\&quot;  },  {     resource-path: [\&quot;/dev/temp\&quot;,\&quot;/dev/hum\&quot;]  } ] &#x60;&#x60;&#x60; 
     * @param presubsription Array of pre-subscriptions.
     */
    v2SubscriptionsPut (presubsription: PresubscriptionArray, callback?: (error:any, data?:any, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "presubsription" is set
        if (presubsription === null || presubsription === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'presubsription' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v2/subscriptions',
            method: 'PUT',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
            body: presubsription,
        }, callback);
    }
}

