import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState, authFeautureKey } from "./auth.reducer";


export const selectAuthState = createFeatureSelector<AuthState>(authFeautureKey)

export const selectAuthUser = createSelector(
    selectAuthState,
    (state) => state.authUser
);