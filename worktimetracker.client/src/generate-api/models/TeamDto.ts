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

import { UserMinimalDto } from '../models/UserMinimalDto';
import { HttpFile } from '../http/http';

export class TeamDto {
    'id': number;
    'name': string;
    'description'?: string | null;
    'completedProjects': number;
    'activeProjects': number;
    'manager'?: UserMinimalDto;
    'members'?: Array<UserMinimalDto> | null;

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
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "completedProjects",
            "baseName": "completedProjects",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "activeProjects",
            "baseName": "activeProjects",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "manager",
            "baseName": "manager",
            "type": "UserMinimalDto",
            "format": ""
        },
        {
            "name": "members",
            "baseName": "members",
            "type": "Array<UserMinimalDto>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TeamDto.attributeTypeMap;
    }

    public constructor() {
    }
}
