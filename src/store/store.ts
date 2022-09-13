import { createStore, applyMiddleware, AnyAction } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import rootReducer from './../redux/reducers/rootReducer';

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type StoreType = ReturnType<typeof rootReducer>
export type AppDispatchType = ThunkDispatch<StoreType, [], AnyAction>