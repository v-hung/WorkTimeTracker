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

import { TimesheetMinimalDto } from '../models/TimesheetMinimalDto';
import { HttpFile } from '../http/http';

export class TimesheetMinimalDtoTimesheetResponse {
    'serverTime': Date;
    'timesheet': TimesheetMinimalDto;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "serverTime",
            "baseName": "serverTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "timesheet",
            "baseName": "timesheet",
            "type": "TimesheetMinimalDto",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TimesheetMinimalDtoTimesheetResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
