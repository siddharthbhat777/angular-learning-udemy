import { createSelector } from "@ngrx/store";

export const selectCount = (state: { counter: number }) => state.counter; // getting specific data or changing data format, and making it more dynamic.
export const selectDoubleCount = createSelector( // alternative to create new data
    selectCount,
    (state) => state * 2
);