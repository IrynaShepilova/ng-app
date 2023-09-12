import { createSelector } from "@ngrx/store";
import { AppState, IUserDataState } from "../interfaces/userDataState";

export const selectFeature = (state: AppState) => state.userData;

export const userAuthSelector = createSelector(
    selectFeature,
    (state) => state.userAuth
)

export const userProfileSelector = createSelector(
    selectFeature,
    (state) => state.userProfile
)
