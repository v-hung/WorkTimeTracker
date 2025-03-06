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

import { HttpFile } from '../http/http';

export class CreateEditWorkTimeCommand {
    'id'?: number;
    'title': string;
    'startTimeMorning'?: string;
    'endTimeMorning'?: string;
    'startTimeAfternoon'?: string;
    'endTimeAfternoon'?: string;
    'allowedLateMinutes'?: number;

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
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "startTimeMorning",
            "baseName": "startTimeMorning",
            "type": "string",
            "format": "date-span"
        },
        {
            "name": "endTimeMorning",
            "baseName": "endTimeMorning",
            "type": "string",
            "format": "date-span"
        },
        {
            "name": "startTimeAfternoon",
            "baseName": "startTimeAfternoon",
            "type": "string",
            "format": "date-span"
        },
        {
            "name": "endTimeAfternoon",
            "baseName": "endTimeAfternoon",
            "type": "string",
            "format": "date-span"
        },
        {
            "name": "allowedLateMinutes",
            "baseName": "allowedLateMinutes",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return CreateEditWorkTimeCommand.attributeTypeMap;
    }

    public constructor() {
    }
}
