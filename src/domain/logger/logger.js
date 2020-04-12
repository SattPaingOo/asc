import { LOGGER_DEBUG_MODE } from '../../config/application-prop';

const DEBUG_MODE = LOGGER_DEBUG_MODE
/*eslint no-console: ["error", { allow: ["log", "warn", "error", "info"] }] */
export default {
    logJSON: function(msg) {
        if (DEBUG_MODE) {
            console.log(JSON.stringify(msg))
        }
    },

    //error 
    error: function(msg) {
        if(DEBUG_MODE) {
            console.error('Error : ' + msg);           
        }
    },

    //warn
    warn: function(msg) {
        if (DEBUG_MODE) {
            console.warn('Warn : ' + msg)      
        }
    },

    //info
    info: function(msg) {
        if (DEBUG_MODE) {
            console.info('Info : ' + msg)
        }
    }
    
}

