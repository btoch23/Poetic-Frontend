import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from '../../app/shared/baseUrl';

export const fetchPoems = createAsyncThunk(
    'poems/fetchPoems',
    async () => {
        const response = await fetch (baseUrl + 'poems');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    poemsArray: [],
    isLoading: true,
    errMsg: ''
};

const poemsSlice = createSlice({
    name: 'poems',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPoems.pending, (state) => {
                state.isLoading = true;
        })
            .addCase(fetchPoems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMsg = '';
                state.poemsArray = action.payload;
        })
            .addCase(fetchPoems.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : 'Fetch Failed';
        })
    }
})

export const poemsReducer = poemsSlice.reducer;

export const selectAllPoems = (state) => {
    return state.poems.poemsArray;
};

export const selectPoemsById = (id) => (state) => {
    return state.poems.poemsArray.find(
        (poem) => poem._id === parseInt(id)
    );
};

export const selectFeaturedPoem = (state) => {
    return {
        featuredItem: state.poems.poemsArray.find(
            (poem) => poem.featured
        ),
        isLoading: state.poems.isLoading,
        errMsg: state.poems.errMsg
    };
};