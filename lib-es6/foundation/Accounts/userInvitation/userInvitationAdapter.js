import { LoginProfileAdapter } from "../..";
import { Adapter } from "../../../common/adapter";
/**
 *UserInvitation adapter
 */
export class UserInvitationAdapter extends Adapter {
    /**
     * fromApi
     * @param data - data
     * @param instance - instance
     */
    static fromApi(data, instance) {
        if (!data) {
            return null;
        }
        let loginProfiles = [];
        if (data.login_profiles) {
            loginProfiles = data.login_profiles.map(i => LoginProfileAdapter.fromApi(i));
        }
        const mappedEntity = UserInvitationAdapter.assignDefined(instance || {}, {
            _discriminator: "USER_INVITATION",
            accountId: data.account_id,
            createdAt: data.created_at,
            email: data.email,
            expiration: data.expiration,
            groups: data.groups,
            id: data.id,
            loginProfiles,
            updatedAt: data.updated_at,
            userId: data.user_id,
        });
        return mappedEntity;
    }
}
//# sourceMappingURL=userInvitationAdapter.js.map