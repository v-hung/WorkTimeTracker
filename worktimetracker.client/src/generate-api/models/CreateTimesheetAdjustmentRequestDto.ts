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

import { RequestType } from '../models/RequestType';
import { HttpFile } from '../http/http';

export class CreateTimesheetAdjustmentRequestDto {
    'date': Date;
    'requestType': RequestType;
    'reason': string;
    'approvedId'?: string;
    'checkIn': Date;
    'checkOut': Date;
    'breakStartDate'?: Date | null;
    'breakEndDate'?: Date | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "date",
            "baseName": "date",
            "type": "Date",
            "format": "date-time"
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
            "name": "approvedId",
            "baseName": "approvedId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "checkIn",
            "baseName": "checkIn",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "checkOut",
            "baseName": "checkOut",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "breakStartDate",
            "baseName": "breakStartDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "breakEndDate",
            "baseName": "breakEndDate",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return CreateTimesheetAdjustmentRequestDto.attributeTypeMap;
    }

    public constructor() {
    }
}


