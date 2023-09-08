import { createSelector } from "@ngrx/store";
import { IUserDataState } from "../interfaces/userDataState";

export const selectFeature = ( state: IUserDataState ) => state;

export const userAuthSelector = createSelector(
    selectFeature,
    (state) => state.userAuth
)

export const userProfileSelector = createSelector(
    selectFeature,
    (state) => state.userProfile
)
