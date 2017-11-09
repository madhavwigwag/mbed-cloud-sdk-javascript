/* tslint:disable:array-type */
/* tslint:disable:no-namespace */
/* tslint:disable:no-string-literal */
/* tslint:disable:max-classes-per-file */
/* tslint:disable:no-trailing-whitespace */

// ===============================================
// This file is autogenerated - Please do not edit
// Tracks base typescript-fetch mustache 01/02/17
// ===============================================

/**
 * Connect CA API
 * Connect CA API provides methods to create and get Developer certificate. Also Connect CA provides server-credentials for Bootstarp and LWM2M Server.
 *
 * OpenAPI spec version: 3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import superagent = require("superagent");
import { ApiBase } from "../common/apiBase";
import { SDKError } from "../common/sdkError";

export interface DeveloperCertificateRequestData {
    /**
     * The name of the developer certificate, must be unique.
     */
    "name": string;
    /**
     * A description for the developer certificate.
     */
    "description"?: string;
}

export interface DeveloperCertificateResponseData {
    /**
     * The content of the `security.c` file that is flashed into the device to provide the security credentials
     */
    "security_file_content"?: string;
    /**
     * Description for the developer certificate.
     */
    "description"?: string;
    /**
     * The name of the developer certificate.
     */
    "name"?: string;
    /**
     * The PEM format X.509 developer certificate.
     */
    "developer_certificate"?: string;
    /**
     * The URI to which the client needs to connect to.
     */
    "server_uri"?: string;
    /**
     * Creation UTC time RFC3339.
     */
    "created_at"?: string;
    /**
     * Entity name, always `trusted-cert`.
     */
    "object"?: string;
    /**
     * The PEM format developer private key associated to the certificate.
     */
    "developer_private_key"?: string;
    /**
     * The PEM format X.509 server certificate that is used to validate the server certificate that is received during the TLS/DTLS handshake.
     */
    "server_certificate"?: string;
    /**
     * API resource entity version.
     */
    "etag"?: string;
    /**
     * The mUUID that uniquely identifies the developer certificate.
     */
    "id"?: string;
    /**
     * The account to which the developer certificate belongs.
     */
    "account_id"?: string;
}

export interface ServerCredentialsResponseData {
    /**
     * The server URI to which the client needs to connect to.
     */
    "server_uri"?: string;
    /**
     * Creation UTC time RFC3339.
     */
    "created_at"?: string;
    /**
     * The entity name, always `server-credentials`.
     */
    "object"?: string;
    /**
     * The PEM format X.509 server certificate that is used to validate the server certificate that is received during the TLS/DTLS handshake.
     */
    "server_certificate"?: string;
    /**
     * API resource entity version.
     */
    "etag"?: string;
    /**
     * The mUUID that uniquely identifies the entity.
     */
    "id"?: string;
}

/**
 * DeveloperCertificateApi
 */
export class DeveloperCertificateApi extends ApiBase {

    /**
     * Fetch an existing developer certificate to connect to the bootstrap server.
     * This REST API is intended to be used by customers to fetch an existing developer certificate (a certificate that can be flashed into multiple devices to connect to bootstrap server). 
     * @param id A unique identifier for the developer certificate. 
     * @param authorization Bearer {Access Token}. 
     */
    public v3DeveloperCertificatesIdGet(id: string, authorization: string, callback?: (error: any, data?: DeveloperCertificateResponseData, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "id" is set
        if (id === null || id === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'id' missing."));
            }
            return;
        }
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'authorization' missing."));
            }
            return;
        }

        const headerParams: any = {};
        if (authorization !== undefined) {
            headerParams["Authorization"] = authorization;
        }

        const queryParameters: any = {};

        // tslint:disable-next-line:prefer-const
        let useFormData = false;
        const formParams: any = {};

        // Determine the Content-Type header
        const contentTypes: Array<string> = [
        ];

        // Determine the Accept header
        const acceptTypes: Array<string> = [
            "application/json"
        ];

        return this.request<DeveloperCertificateResponseData>({
            url: "/v3/developer-certificates/{id}".replace("{" + "id" + "}", String(id)),
            method: "GET",
            headers: headerParams,
            query: queryParameters,
            formParams: formParams,
            useFormData: useFormData,
            contentTypes: contentTypes,
            acceptTypes: acceptTypes,
        }, callback);
    }
    /**
     * Create a new developer certificate to connect to the bootstrap server.
     * This REST API is intended to be used by customers to get a developer certificate (a certificate that can be flashed into multiple devices to connect to bootstrap server).  Limitations:    - One developer certificate allows up to 100 devices to connect to bootstrap server.   - Only 10 developer certificates are allowed per account. 
     * @param authorization Bearer {Access Token}. 
     * @param body 
     */
    public v3DeveloperCertificatesPost(authorization: string, body: DeveloperCertificateRequestData, callback?: (error: any, data?: DeveloperCertificateResponseData, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'authorization' missing."));
            }
            return;
        }
        // verify required parameter "body" is set
        if (body === null || body === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'body' missing."));
            }
            return;
        }

        const headerParams: any = {};
        if (authorization !== undefined) {
            headerParams["Authorization"] = authorization;
        }

        const queryParameters: any = {};

        // tslint:disable-next-line:prefer-const
        let useFormData = false;
        const formParams: any = {};

        // Determine the Content-Type header
        const contentTypes: Array<string> = [
        ];

        // Determine the Accept header
        const acceptTypes: Array<string> = [
            "application/json"
        ];

        return this.request<DeveloperCertificateResponseData>({
            url: "/v3/developer-certificates",
            method: "POST",
            headers: headerParams,
            query: queryParameters,
            formParams: formParams,
            useFormData: useFormData,
            contentTypes: contentTypes,
            acceptTypes: acceptTypes,
            body: body,
        }, callback);
    }
}
/**
 * ExternalAPIApi
 */
export class ExternalAPIApi extends ApiBase {

    /**
     * Fetch an existing developer certificate to connect to the bootstrap server.
     * This REST API is intended to be used by customers to fetch an existing developer certificate (a certificate that can be flashed into multiple devices to connect to bootstrap server). 
     * @param id A unique identifier for the developer certificate. 
     * @param authorization Bearer {Access Token}. 
     */
    public v3DeveloperCertificatesIdGet(id: string, authorization: string, callback?: (error: any, data?: DeveloperCertificateResponseData, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "id" is set
        if (id === null || id === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'id' missing."));
            }
            return;
        }
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'authorization' missing."));
            }
            return;
        }

        const headerParams: any = {};
        if (authorization !== undefined) {
            headerParams["Authorization"] = authorization;
        }

        const queryParameters: any = {};

        // tslint:disable-next-line:prefer-const
        let useFormData = false;
        const formParams: any = {};

        // Determine the Content-Type header
        const contentTypes: Array<string> = [
        ];

        // Determine the Accept header
        const acceptTypes: Array<string> = [
            "application/json"
        ];

        return this.request<DeveloperCertificateResponseData>({
            url: "/v3/developer-certificates/{id}".replace("{" + "id" + "}", String(id)),
            method: "GET",
            headers: headerParams,
            query: queryParameters,
            formParams: formParams,
            useFormData: useFormData,
            contentTypes: contentTypes,
            acceptTypes: acceptTypes,
        }, callback);
    }
    /**
     * Create a new developer certificate to connect to the bootstrap server.
     * This REST API is intended to be used by customers to get a developer certificate (a certificate that can be flashed into multiple devices to connect to bootstrap server).  Limitations:    - One developer certificate allows up to 100 devices to connect to bootstrap server.   - Only 10 developer certificates are allowed per account. 
     * @param authorization Bearer {Access Token}. 
     * @param body 
     */
    public v3DeveloperCertificatesPost(authorization: string, body: DeveloperCertificateRequestData, callback?: (error: any, data?: DeveloperCertificateResponseData, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'authorization' missing."));
            }
            return;
        }
        // verify required parameter "body" is set
        if (body === null || body === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'body' missing."));
            }
            return;
        }

        const headerParams: any = {};
        if (authorization !== undefined) {
            headerParams["Authorization"] = authorization;
        }

        const queryParameters: any = {};

        // tslint:disable-next-line:prefer-const
        let useFormData = false;
        const formParams: any = {};

        // Determine the Content-Type header
        const contentTypes: Array<string> = [
        ];

        // Determine the Accept header
        const acceptTypes: Array<string> = [
            "application/json"
        ];

        return this.request<DeveloperCertificateResponseData>({
            url: "/v3/developer-certificates",
            method: "POST",
            headers: headerParams,
            query: queryParameters,
            formParams: formParams,
            useFormData: useFormData,
            contentTypes: contentTypes,
            acceptTypes: acceptTypes,
            body: body,
        }, callback);
    }
    /**
     * Fetch bootstrap server credentials.
     * This REST API is intended to be used by customers to fetch bootstrap server credentials that they need to use with their clients to connect to bootstrap server. 
     * @param authorization Bearer {Access Token}. 
     */
    public v3ServerCredentialsBootstrapGet(authorization: string, callback?: (error: any, data?: ServerCredentialsResponseData, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'authorization' missing."));
            }
            return;
        }

        const headerParams: any = {};
        if (authorization !== undefined) {
            headerParams["Authorization"] = authorization;
        }

        const queryParameters: any = {};

        // tslint:disable-next-line:prefer-const
        let useFormData = false;
        const formParams: any = {};

        // Determine the Content-Type header
        const contentTypes: Array<string> = [
        ];

        // Determine the Accept header
        const acceptTypes: Array<string> = [
            "application/json"
        ];

        return this.request<ServerCredentialsResponseData>({
            url: "/v3/server-credentials/bootstrap",
            method: "GET",
            headers: headerParams,
            query: queryParameters,
            formParams: formParams,
            useFormData: useFormData,
            contentTypes: contentTypes,
            acceptTypes: acceptTypes,
        }, callback);
    }
    /**
     * Fetch LWM2M server credentials.
     * This REST API is intended to be used by customers to fetch LWM2M server credentials that they need to use with their clients to connect to LWM2M server. 
     * @param authorization Bearer {Access Token}. 
     */
    public v3ServerCredentialsLwm2mGet(authorization: string, callback?: (error: any, data?: ServerCredentialsResponseData, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'authorization' missing."));
            }
            return;
        }

        const headerParams: any = {};
        if (authorization !== undefined) {
            headerParams["Authorization"] = authorization;
        }

        const queryParameters: any = {};

        // tslint:disable-next-line:prefer-const
        let useFormData = false;
        const formParams: any = {};

        // Determine the Content-Type header
        const contentTypes: Array<string> = [
        ];

        // Determine the Accept header
        const acceptTypes: Array<string> = [
            "application/json"
        ];

        return this.request<ServerCredentialsResponseData>({
            url: "/v3/server-credentials/lwm2m",
            method: "GET",
            headers: headerParams,
            query: queryParameters,
            formParams: formParams,
            useFormData: useFormData,
            contentTypes: contentTypes,
            acceptTypes: acceptTypes,
        }, callback);
    }
}
/**
 * ServerCredentialsApi
 */
export class ServerCredentialsApi extends ApiBase {

    /**
     * Fetch bootstrap server credentials.
     * This REST API is intended to be used by customers to fetch bootstrap server credentials that they need to use with their clients to connect to bootstrap server. 
     * @param authorization Bearer {Access Token}. 
     */
    public v3ServerCredentialsBootstrapGet(authorization: string, callback?: (error: any, data?: ServerCredentialsResponseData, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'authorization' missing."));
            }
            return;
        }

        const headerParams: any = {};
        if (authorization !== undefined) {
            headerParams["Authorization"] = authorization;
        }

        const queryParameters: any = {};

        // tslint:disable-next-line:prefer-const
        let useFormData = false;
        const formParams: any = {};

        // Determine the Content-Type header
        const contentTypes: Array<string> = [
        ];

        // Determine the Accept header
        const acceptTypes: Array<string> = [
            "application/json"
        ];

        return this.request<ServerCredentialsResponseData>({
            url: "/v3/server-credentials/bootstrap",
            method: "GET",
            headers: headerParams,
            query: queryParameters,
            formParams: formParams,
            useFormData: useFormData,
            contentTypes: contentTypes,
            acceptTypes: acceptTypes,
        }, callback);
    }
    /**
     * Fetch LWM2M server credentials.
     * This REST API is intended to be used by customers to fetch LWM2M server credentials that they need to use with their clients to connect to LWM2M server. 
     * @param authorization Bearer {Access Token}. 
     */
    public v3ServerCredentialsLwm2mGet(authorization: string, callback?: (error: any, data?: ServerCredentialsResponseData, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'authorization' missing."));
            }
            return;
        }

        const headerParams: any = {};
        if (authorization !== undefined) {
            headerParams["Authorization"] = authorization;
        }

        const queryParameters: any = {};

        // tslint:disable-next-line:prefer-const
        let useFormData = false;
        const formParams: any = {};

        // Determine the Content-Type header
        const contentTypes: Array<string> = [
        ];

        // Determine the Accept header
        const acceptTypes: Array<string> = [
            "application/json"
        ];

        return this.request<ServerCredentialsResponseData>({
            url: "/v3/server-credentials/lwm2m",
            method: "GET",
            headers: headerParams,
            query: queryParameters,
            formParams: formParams,
            useFormData: useFormData,
            contentTypes: contentTypes,
            acceptTypes: acceptTypes,
        }, callback);
    }
}
