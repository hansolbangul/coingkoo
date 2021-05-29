import { WRITE_BOARD, SELECT_BOARD, UPDATE_BOARD, DELETE_BOARD, SELECT_BOARD_LIST } from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case WRITE_BOARD:
            return { ...state, writeSuccess: action.payload };
            break;

        case SELECT_BOARD:
            return { ...state, boardData: action.payload };
            break;

        case SELECT_BOARD_LIST:
                return { ...state, boardData: action.payload };
                break;

        case UPDATE_BOARD:
            return { ...state, boardData: action.payload };
            break;
            
        case DELETE_BOARD:
            return { ...state, deleteSuccess: action.payload };
            break;

        default:
            return state;
    }
}
