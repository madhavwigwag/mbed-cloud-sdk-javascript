"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = require("../../../schema/schema");
exports.subtenantUserInvitationSchema = function () {
    return Object.assign(new schema_1.Schema(), {
        name: "SubtenantUserInvitation",
        fields: [
            {
                name: "accountId",
                apiName: "account_id",
                type: "string",
            },
            {
                name: "createdAt",
                apiName: "created_at",
                type: "Date",
            },
            {
                name: "email",
                apiName: "email",
                type: "string",
            },
            {
                name: "expiration",
                apiName: "expiration",
                type: "Date",
            },
            {
                name: "loginProfiles",
                apiName: "login_profiles",
                type: "Array<LoginProfile>",
            },
            {
                name: "updatedAt",
                apiName: "updated_at",
                type: "Date",
            },
            {
                name: "userId",
                apiName: "user_id",
                type: "string",
            },
        ],
        methods: [
            {
                name: "create",
                returnType: "Promise<SubtenantUserInvitation>",
                parameters: [
                    {
                        name: "request",
                        position: 0,
                        type: "Object",
                        subParams: [
                            {
                                name: "email",
                                type: "string",
                            },
                            {
                                name: "loginProfiles",
                                type: "Array<LoginProfile>",
                            },
                            {
                                name: "validForDays",
                                type: "number",
                            },
                        ],
                    },
                    {
                        name: "accountId",
                        position: 1,
                        type: "string",
                    },
                ],
            },
            {
                name: "delete",
                returnType: "Promise<void>",
                parameters: [
                    {
                        name: "accountId",
                        position: 0,
                        type: "string",
                    },
                    {
                        name: "subtenantUserInvitationId",
                        position: 1,
                        type: "string",
                    },
                ],
            },
            {
                name: "read",
                returnType: "Promise<SubtenantUserInvitation>",
                parameters: [
                    {
                        name: "accountId",
                        position: 0,
                        type: "string",
                    },
                    {
                        name: "subtenantUserInvitationId",
                        position: 1,
                        type: "string",
                    },
                ],
            },
        ],
    });
};
//# sourceMappingURL=subtenantUserInvitationSchema.js.map