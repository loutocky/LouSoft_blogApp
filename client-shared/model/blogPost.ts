/**
 * Endevel blog app
 * This is an API solution for a test task given by Endevel.
 *
 * OpenAPI spec version: v1
 * Contact: contact@snippets.local
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface BlogPost { 
    readonly id?: number;
    title: string;
    detail: string;
    readonly thumbnail?: string;
    tags: Array<number>;
}