import { IUserDataState } from "../interfaces/userDataState";
import {createReducer, on} from "@ngrx/store";
import * as actions from "./actions"

export const initialState: IUserDataState = {
    userAuth: {},
    userProfile: {}
}

export const reducer = createReducer(
    initialState,
    on(actions.getCurrentUserAuth, (state: IUserDataState   )  => ({...state, userAuth: state.userAuth})),
    on(actions.getCurrentUserProfile, (state: IUserDataState) => ({...state})),
    on(actions.getCurrentUserProfileSuccess, (state: IUserDataState, action) => ({...state, userProfile: action.userProfile}))
);
