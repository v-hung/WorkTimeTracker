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

import { UserDto } from '../models/UserDto';
import { HttpFile } from '../http/http';

export class TimesheetDto {
    'startTime': Date;
    'endTime'?: Date;
    'workMinutes'?: number;
    'userId'?: string | null;
    'user'?: UserDto;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "workMinutes",
            "baseName": "workMinutes",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "UserDto",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TimesheetDto.attributeTypeMap;
    }

    public constructor() {
    }
}
