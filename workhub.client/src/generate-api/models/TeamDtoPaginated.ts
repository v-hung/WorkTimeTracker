/**
 * WorkHub.Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TeamDto } from '../models/TeamDto';
import { HttpFile } from '../http/http';

export class TeamDtoPaginated {
    'data': Array<TeamDto>;
    'currentPage': number;
    'totalPages': number;
    'totalCount': number;
    'pageSize': number;
    'hasPreviousPage': boolean;
    'hasNextPage': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<TeamDto>",
            "format": ""
        },
        {
            "name": "currentPage",
            "baseName": "currentPage",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "hasPreviousPage",
            "baseName": "hasPreviousPage",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasNextPage",
            "baseName": "hasNextPage",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TeamDtoPaginated.attributeTypeMap;
    }

    public constructor() {
    }
}
