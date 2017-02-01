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

export interface ConnectionOptions {
    /**
    * API Key for your mbed Cloud account
    */
    apiKey: string;
    /**
    * URL for mbed Cloud API
    */
    host?: string;
}

/**
 * Possible optional fields to request when listing
 */
export type IncludeEnum = "totalCount";
export type OrderEnum = "ASC" | "DESC";
export interface ListOptions {
    /*
     * how many objects to retrieve in the page
     */
    limit?: number;
    /*
     * ASC or DESC
     */
    order?: OrderEnum;
    /*
     * the ID of the the item after which to retrieve the next page
     */
    after?: string;
    /*
     * Optional fields to include
     */
    include?: IncludeEnum[];
    /**
     * The filter attributes of the filter
     */
    attributes?: { [key: string]: string };
}

export interface ListResponse<T> {
    /**
    * Whether there are more results to display
    */
    hasMore?: boolean;
    /**
    * Total number of records
    */
    totalCount?: number;
    /**
    * Entity id for fetch after it
    */
    after?: string;
    /**
    * The number of results to return
    */
    limit?: number;
    /**
    * Order of returned records
    */
    order?: OrderEnum;
    /**
    * Devices
    */
    data?: T[];
}