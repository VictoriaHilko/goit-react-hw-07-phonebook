import { configureStore } from "@reduxjs/toolkit";
import { persistedContactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";


export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);