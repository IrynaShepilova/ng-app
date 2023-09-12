import {IUser} from "./user";
import {IUserProfile} from "./profile";

export interface IUserDataState {
    userAuth: IUser;
    userProfile: IUserProfile;
}

export interface AppState {
    userData: IUserDataState;
}
