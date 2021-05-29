import axios from 'axios';
import { WRITE_BOARD, SELECT_BOARD, UPDATE_BOARD, DELETE_BOARD } from './types';

export function writeBoard(dataTosubmit) {
    const request = axios
        .post('/api/board/write', dataTosubmit)
        .then((response) => response.data);

    return {
        type: WRITE_BOARD,
        payload: request,
    };
}

export function selectBoardList(dataTosubmit) {
    const request = axios
        .post('/api/board/selectlist', dataTosubmit)
        .then((response) => response.data);

    return {
        type: SELECT_BOARD_LIST,
        payload: request,
    };
}

export function selectBoard(dataTosubmit) {
    const request = axios
        .post('/api/board/select', dataTosubmit)
        .then((response) => response.data);

    return {
        type: SELECT_BOARD,
        payload: request,
    };
}

export function updateBoard(dataTosubmit) {
    const request = axios
        .post('/api/board/update', dataTosubmit)
        .then((response) => response.data);

    return {
        type: UPDATE_BOARD,
        payload: request,
    };
}

export function deleteBoard(dataTosubmit) {
    const request = axios
        .post('/api/board/delete', dataTosubmit)
        .then((response) => response.data);

    return {
        type: DELETE_BOARD,
        payload: request,
    };
}