// ===============================================
// This file is autogenerated - Please do not edit
// Tracks base typescript-fetch mustache 01/02/17
// ===============================================
/**
 * Firmware Catalog API
 * This is the API Documentation for the mbed firmware catalog service which is part of the update service.
 *
 * OpenAPI spec version: 0.1
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

export interface FirmwareImage {
    /**
     * The binary file of firmware image.
     */
    "datafile": string;
    /**
     * The description of the object.
     */
    "description": string;
    /**
     * The time the object was created.
     */
    "created_at": Date;
    /**
     * The API resource entity.
     */
    "object": string;
    /**
     * The time the object was updated.
     */
    "updated_at": Date;
    /**
     * The entity instance signature.
     */
    "etag": Date;
    /**
     * Checksum generated for the datafile.
     */
    "datafile_checksum": string;
    /**
     * The ID of the firmware image.
     */
    "id": string;
    /**
     * The name of the object.
     */
    "name": string;
}

export interface FirmwareImagePage {
    "object"?: string;
    "has_more"?: boolean;
    "total_count"?: number;
    "after"?: string;
    "limit"?: number;
    "data"?: Array<FirmwareImage>;
    "order"?: string;
}

export interface FirmwareManifest {
    "datafile": string;
    /**
     * The description of the object.
     */
    "description": string;
    /**
     * The version of the firmware manifest (as a timestamp).
     */
    "timestamp": Date;
    /**
     * The time the object was created.
     */
    "created_at": Date;
    /**
     * The API resource entity.
     */
    "object": string;
    /**
     * The time the object was updated.
     */
    "updated_at": Date;
    /**
     * The contents of the manifest.
     */
    "manifest_contents": any;
    /**
     * The entity instance signature.
     */
    "etag": Date;
    /**
     * The class of device.
     */
    "device_class": string;
    /**
     * The ID of the firmware manifest.
     */
    "id": string;
    /**
     * The name of the object.
     */
    "name": string;
}

export interface FirmwareManifestPage {
    "object"?: string;
    "has_more"?: boolean;
    "total_count"?: number;
    "after"?: string;
    "limit"?: number;
    "data"?: Array<FirmwareManifest>;
    "order"?: string;
}

/**
 * DefaultApi
 */
export class DefaultApi extends ApiBase {

    /** 
     * Create firmware image
     * @param datafile The firmware image file to upload.
     * @param name The name of the object.
     * @param description The description of the object.
     */
    firmwareImageCreate (datafile: any, name: string, description?: string, callback?: (error:any, data?:FirmwareImage, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "datafile" is set
        if (datafile === null || datafile === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'datafile' missing."));
            }
            return;
        }
        // verify required parameter "name" is set
        if (name === null || name === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'name' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};
        if (datafile !== undefined) {
            formParams['datafile'] = datafile;
        }
        useFormData = true;

        if (description !== undefined) {
            formParams['description'] = description;
        }

        if (name !== undefined) {
            formParams['name'] = name;
        }


        return this.request({
            url: '/v3/firmware-images/',
            method: 'POST',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Delete firmware image
     * @param imageId The ID of the firmware image.
     */
    firmwareImageDestroy (imageId: number, callback?: (error:any, data?:any, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "imageId" is set
        if (imageId === null || imageId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'imageId' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/firmware-images/{image_id}/'.replace('{' + 'image_id' + '}', String(imageId)),
            method: 'DELETE',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * List all firmware images
     * @param limit How many objects to retrieve in the page.
     * @param order ASC or DESC
     * @param after The ID of the the item after which to retrieve the next page.
     * @param filter URL encoded query string parameter to filter returned data. The result will be paged into pages of 50.  ##### Filtering &#x60;&#x60;&#x60;?filter&#x3D;{URL encoded query string}&#x60;&#x60;&#x60;  The query string is made up of key/value pairs separated by ampersands. So for a query of &#x60;&#x60;&#x60;key1&#x3D;value1&amp;amp;key2&#x3D;value2&amp;amp;key3&#x3D;value3&#x60;&#x60;&#x60; this would be encoded as follows: &#x60;&#x60;&#x60;?filter&#x3D;key1%3Dvalue1%26key2%3Dvalue2%26key3%3Dvalue3&#x60;&#x60;&#x60; The examples below show the queries in *unencoded* form.  ###### By firmware image properties (all properties are filterable): For example: &#x60;&#x60;&#x60;name&#x3D;{value}&#x60;&#x60;&#x60; ###### On date-time fields: Date-time fields should be specified in UTC RFC3339 format &#x60;&#x60;&#x60;YYYY-MM-DDThh:mm:ss.msZ&#x60;&#x60;&#x60;. There are three permitted variations:  * UTC RFC3339 with milliseconds e.g. 2016-11-30T16:25:12.1234Z * UTC RFC3339 without milliseconds e.g. 2016-11-30T16:25:12Z * UTC RFC3339 shortened - without milliseconds and punctuation e.g. 20161130T162512Z  Date-time filtering supports three operators:  * equality * greater than or equal to &amp;ndash; field name suffixed with &#x60;&#x60;&#x60;__gte&#x60;&#x60;&#x60; * less than or equal to &amp;ndash; field name suffixed with &#x60;&#x60;&#x60;__lte&#x60;&#x60;&#x60;  Lower and upper limits to a date-time range may be specified by including both the &#x60;&#x60;&#x60;__gte&#x60;&#x60;&#x60; and &#x60;&#x60;&#x60;__lte&#x60;&#x60;&#x60; forms in the filter.  &#x60;&#x60;&#x60;{field name}[|__lte|__gte]&#x3D;{UTC RFC3339 date-time}&#x60;&#x60;&#x60;  ##### Multi-field example &#x60;&#x60;&#x60;name&#x3D;MyName&amp;amp;bootstrapped&amp;amp;created_at__gte&#x3D;2016-11-30T16:25:12.1234Z&amp;amp;created_at__lte&#x3D;2016-12-30T00:00:00Z&#x60;&#x60;&#x60;  Encoded: &#x60;&#x60;&#x60;?filter&#x3D;name%3DMyName%26created_at__gte%3D2016-11-30T16%3A25%3A12.1234Z%26created_at__lte%3D2016-11-30T00%3A00%3A00Z&#x60;&#x60;&#x60;
     * @param include Comma separated list of data fields to return. Currently supported: total_count
     */
    firmwareImageList (limit?: number, order?: string, after?: string, filter?: string, include?: string, callback?: (error:any, data?:FirmwareImagePage, response?: superagent.Response) => any): superagent.SuperAgentRequest {

        let headerParams: any = {};

        let queryParameters: any = {};
        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }
        if (order !== undefined) {
            queryParameters['order'] = order;
        }
        if (after !== undefined) {
            queryParameters['after'] = after;
        }
        if (filter !== undefined) {
            queryParameters['filter'] = filter;
        }
        if (include !== undefined) {
            queryParameters['include'] = include;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/firmware-images/',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Retrieve firmware image
     * @param imageId The ID of the firmware image.
     */
    firmwareImageRetrieve (imageId: number, callback?: (error:any, data?:FirmwareImage, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "imageId" is set
        if (imageId === null || imageId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'imageId' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/firmware-images/{image_id}/'.replace('{' + 'image_id' + '}', String(imageId)),
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Create firmware manifest
     * @param datafile The manifest file to create. The size of the file is account specific and enforced by the api gateway.
     * @param name The name of the object.
     * @param description The description of the object.
     */
    firmwareManifestCreate (datafile: any, name: string, description?: string, callback?: (error:any, data?:FirmwareManifest, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "datafile" is set
        if (datafile === null || datafile === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'datafile' missing."));
            }
            return;
        }
        // verify required parameter "name" is set
        if (name === null || name === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'name' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};
        if (datafile !== undefined) {
            formParams['datafile'] = datafile;
        }
        useFormData = true;

        if (description !== undefined) {
            formParams['description'] = description;
        }

        if (name !== undefined) {
            formParams['name'] = name;
        }


        return this.request({
            url: '/v3/firmware-manifests/',
            method: 'POST',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Delete firmware manifest
     * @param manifestId The ID of the firmware manifest.
     */
    firmwareManifestDestroy (manifestId: number, callback?: (error:any, data?:any, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "manifestId" is set
        if (manifestId === null || manifestId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'manifestId' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/firmware-manifests/{manifest_id}/'.replace('{' + 'manifest_id' + '}', String(manifestId)),
            method: 'DELETE',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * List all firmware manifests
     * @param limit How many objects to retrieve in the page.
     * @param order ASC or DESC
     * @param after The ID of the the item after which to retrieve the next page.
     * @param filter URL encoded query string parameter to filter returned data  ##### Filtering &#x60;&#x60;&#x60;?filter&#x3D;{URL encoded query string}&#x60;&#x60;&#x60;  The query string is made up of key/value pairs separated by ampersands. So for a query of &#x60;&#x60;&#x60;key1&#x3D;value1&amp;amp;key2&#x3D;value2&amp;amp;key3&#x3D;value3&#x60;&#x60;&#x60; this would be encoded as follows: &#x60;&#x60;&#x60;?filter&#x3D;key1%3Dvalue1%26key2%3Dvalue2%26key3%3Dvalue3&#x60;&#x60;&#x60; The examples below show the queries in *unencoded* form.  ##### By manifest ID: &#x60;&#x60;&#x60;manifest_id&#x3D;{id}&#x60;&#x60;&#x60;  ##### By firmware manifest properties (all properties are filterable):  &#x60;&#x60;&#x60;device_class&#x3D;{value}&#x60;&#x60;&#x60;  ###### On date-time fields: Date-time fields should be specified in UTC RFC3339 format &#x60;&#x60;&#x60;YYYY-MM-DDThh:mm:ss.msZ&#x60;&#x60;&#x60;. There are three permitted variations:  * UTC RFC3339 with milliseconds e.g. 2016-11-30T16:25:12.1234Z * UTC RFC3339 without milliseconds e.g. 2016-11-30T16:25:12Z * UTC RFC3339 shortened - without milliseconds and punctuation e.g. 20161130T162512Z  Date-time filtering supports three operators:  * equality * greater than or equal to &amp;ndash; field name suffixed with &#x60;&#x60;&#x60;__gte&#x60;&#x60;&#x60; * less than or equal to &amp;ndash; field name suffixed with &#x60;&#x60;&#x60;__lte&#x60;&#x60;&#x60;  Lower and upper limits to a date-time range may be specified by including both the &#x60;&#x60;&#x60;__gte&#x60;&#x60;&#x60; and &#x60;&#x60;&#x60;__lte&#x60;&#x60;&#x60; forms in the filter.  &#x60;&#x60;&#x60;{field name}[|__lte|__gte]&#x3D;{UTC RFC3339 date-time}&#x60;&#x60;&#x60;  ##### Multi-field example &#x60;&#x60;&#x60;device_class&#x3D;1234&amp;amp;d&amp;amp;created_at__gte&#x3D;2016-11-30T16:25:12.1234Z&amp;amp;created_at__lte&#x3D;2016-12-30T00:00:00Z&#x60;&#x60;&#x60;  Encoded: &#x60;&#x60;&#x60;?filter&#x3D;device_class%3D1234%26created_at__gte%3D2016-11-30T16%3A25%3A12.1234Z%26created_at__lte%3D2016-11-30T00%3A00%3A00Z&#x60;&#x60;&#x60;
     * @param include Comma separated list of data fields to return. Currently supported: total_count
     */
    firmwareManifestList (limit?: number, order?: string, after?: string, filter?: string, include?: string, callback?: (error:any, data?:FirmwareManifestPage, response?: superagent.Response) => any): superagent.SuperAgentRequest {

        let headerParams: any = {};

        let queryParameters: any = {};
        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }
        if (order !== undefined) {
            queryParameters['order'] = order;
        }
        if (after !== undefined) {
            queryParameters['after'] = after;
        }
        if (filter !== undefined) {
            queryParameters['filter'] = filter;
        }
        if (include !== undefined) {
            queryParameters['include'] = include;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/firmware-manifests/',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * Retrieve firmware manifest
     * @param manifestId The ID of the firmware manifest.
     */
    firmwareManifestRetrieve (manifestId: number, callback?: (error:any, data?:FirmwareManifest, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "manifestId" is set
        if (manifestId === null || manifestId === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'manifestId' missing."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/firmware-manifests/{manifest_id}/'.replace('{' + 'manifest_id' + '}', String(manifestId)),
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
}

