import { ActionReducerMap } from "@ngrx/store";
import { authFeautureKey, authReducer } from "./auth/auth.reducer";

export interface AppState {
    [authFeautureKey]: any;
}

export const actionReducerMap: ActionReducerMap<AppState> = {
    [authFeautureKey]: authReducer,

}