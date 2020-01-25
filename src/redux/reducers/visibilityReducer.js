import { STATUS_ACTIVE, SHOW_ACTIVE, SHOW_INACTIVE, STATUS_INACTIVE } from "../actions/actions";

function visibilityReducer(visibility = STATUS_ACTIVE, actions){
    switch (actions.type){
        case SHOW_ACTIVE:
            return STATUS_ACTIVE
        case SHOW_INACTIVE:
            return STATUS_INACTIVE
        default:
            return visibility
    }
}
export default visibilityReducer;