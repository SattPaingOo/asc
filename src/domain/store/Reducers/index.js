import ChangeLanguageReducer from './ChangeLanguage/ChangeLanguage';
import AuthReducer from './Auth/Auth';
import {combineReducers} from 'redux';

const allreducers = combineReducers(
    {
        language: ChangeLanguageReducer,
        auth : AuthReducer
    }
)

export default allreducers;