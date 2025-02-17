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

import { UserDetailDto } from '../models/UserDetailDto';
import { UserPosition } from '../models/UserPosition';
import { UserStatus } from '../models/UserStatus';
import { HttpFile } from '../http/http';

export class UserCreateUpdateRequest {
    'fullName': string;
    'image'?: string | null;
    'userPosition': UserPosition;
    'isFirstLogin': boolean;
    'leaveHours': number;
    'userStatus': UserStatus;
    'createdAt': Date;
    'updatedAt'?: Date | null;
    'createdBy'?: string | null;
    'lastModifiedBy'?: string | null;
    'workTimeId'?: number | null;
    'userDetail'?: UserDetailDto;
    'supervisorId'?: string | null;
    'teamId'?: number | null;
    'managerTeamIds': Array<number>;
    'managerProjectIds': Array<number>;
    'roleNames': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fullName",
            "baseName": "fullName",
            "type": "string",
            "format": ""
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string",
            "format": ""
        },
        {
            "name": "userPosition",
            "baseName": "userPosition",
            "type": "UserPosition",
            "format": ""
        },
        {
            "name": "isFirstLogin",
            "baseName": "isFirstLogin",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "leaveHours",
            "baseName": "leaveHours",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "userStatus",
            "baseName": "userStatus",
            "type": "UserStatus",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastModifiedBy",
            "baseName": "lastModifiedBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "workTimeId",
            "baseName": "workTimeId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "userDetail",
            "baseName": "userDetail",
            "type": "UserDetailDto",
            "format": ""
        },
        {
            "name": "supervisorId",
            "baseName": "supervisorId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "teamId",
            "baseName": "teamId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "managerTeamIds",
            "baseName": "managerTeamIds",
            "type": "Array<number>",
            "format": "int32"
        },
        {
            "name": "managerProjectIds",
            "baseName": "managerProjectIds",
            "type": "Array<number>",
            "format": "int32"
        },
        {
            "name": "roleNames",
            "baseName": "roleNames",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserCreateUpdateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


