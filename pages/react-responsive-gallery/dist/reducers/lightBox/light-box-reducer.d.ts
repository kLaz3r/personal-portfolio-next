import { LightboxActionType } from "./light-box-actions-type";
declare type State = {
    photoIndex: number;
    isOpen: boolean;
};
declare const initialState: {
    photoIndex: number;
    isOpen: boolean;
};
declare type ActionType = {
    type: LightboxActionType.LIGHT_BOX_OPEN;
} | {
    type: LightboxActionType.LIGHT_BOX_CLOSE;
} | {
    type: LightboxActionType.LIGHT_BOX_OPEN_BY_PHOTO_INDEX;
    payload: number;
} | {
    type: LightboxActionType.LIGHT_BOX_MOVE_PHOTO_BY_INDEX;
    payload: number;
};
declare const lightBoxReducer: (state: typeof initialState, action: ActionType) => State;
export { lightBoxReducer, initialState };
