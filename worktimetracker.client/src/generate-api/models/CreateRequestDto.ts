/**
 * WorkTimeTracker.Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestStatus } from '../models/RequestStatus';
import { RequestType } from '../models/RequestType';
import { HttpFile } from '../http/http';

export class CreateRequestDto {
    'id': number;
    'requestType': RequestType;
    'reason': string;
    'status': RequestStatus;
    'createdAt': Date;
    'userId'?: string;
    'approvedById'?: string;
    'timesheetId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "requestType",
            "baseName": "requestType",
            "type": "RequestType",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "RequestStatus",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "approvedById",
            "baseName": "approvedById",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "timesheetId",
            "baseName": "timesheetId",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return CreateRequestDto.attributeTypeMap;
    }

    public constructor() {
    }
}


