import { combineReducers, createStore } from "redux";
import { authReducer } from "./AuthState";
import { projectsReducer } from "./ProjectsState";



const reducers = combineReducers({
    projectsState: projectsReducer,
    authState: authReducer
});

const store = createStore(reducers)

export default store;