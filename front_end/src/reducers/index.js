import { combineReducers} from 'redux';
import bannerReducer from './banner.reducer';
import aboutReducer from './about.reducer';

const rootReducer = combineReducers({
    banner: bannerReducer,
    about: aboutReducer,
});

export default rootReducer;