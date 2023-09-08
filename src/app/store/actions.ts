import {createAction, props} from "@ngrx/store";
import {IUserProfile} from "../interfaces/profile";
import {IUser} from "../interfaces/user";

export const getCurrentUserAuth = createAction(
    '[User Profile] Get Auth');
export const getCurrentUserAuthSuccess = createAction(
    '[User Profile] Get Auth success',
    props<{userAuth: IUser}>()
);

export const getCurrentUserProfile = createAction(
    '[User Profile] Get Profile');

export const getCurrentUserProfileSuccess = createAction(
    '[User Profile] Get Profile success',
    props<{ userProfile: IUserProfile }>()
);
