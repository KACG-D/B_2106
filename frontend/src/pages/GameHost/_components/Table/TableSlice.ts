import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../store';

export type Sutehai = {
        pai: string,
        isRiichi: boolean,
}

interface TableState {
    sutehaiList: Sutehai[][];
}

const initialState: TableState = {
    sutehaiList: [[], [], [], []],
};

interface DahaiState {
    playerId: number;
    pai: string;
    isRiichi: boolean;
}

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        dahai: (state, action: PayloadAction<DahaiState>) => {
            const payload = action.payload;

            state.sutehaiList[payload.playerId].push({
                pai: payload.pai,
                isRiichi: payload.isRiichi,
            });

            return state
        },
    },
});

export const { dahai } = tableSlice.actions;

export const selectTableState = (state: RootState): TableState =>
    state.table;

export default tableSlice.reducer;
