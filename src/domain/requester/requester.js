import axios from 'axios'
import LOG from '../logger/logger'
import * as appProp from '../../config/application-prop'
// import store from '@/domain/store'
// import router from '@/router'

const createRequester = function(serviceApiUrl,timeoutReq){
    LOG.info('BaseUrl : ' + serviceApiUrl + ':' + timeoutReq)
    // axios client
    const client = axios.create({
        baseURL: serviceApiUrl,
        timeout: timeoutReq
    })
    let requestArray = []

    //post request to server
    const post = function (path, reqObj, success, error) {
        //LOG.info('Path :' + path + ':' + reqObj)
        if (reqObj === null){
            reqObj = {}
        }
        //to avoid dupplicate reqeust
        if (requestArray.indexOf('post' + ':' + path + ':' + JSON.stringify(reqObj)) !== -1) {
            return
        } else {
            requestArray.push('post' + ':' + path + ':' + JSON.stringify(reqObj))
        }
        doRequest('post', path, reqObj, success, error)
    }

    const get = function (path, reqObj, success, error){

        if(reqObj === null) {
            reqObj = {}
        }

         //to avoid dupplicate reqeust
        if (requestArray.indexOf('get' + ':' + path + ':' + JSON.stringify(reqObj)) !== -1) {
            return
        } else {
            requestArray.push('get' + ':' + path + ':' + JSON.stringify(reqObj))
        }

        doRequest('get', path, reqObj, success, error)
    }

    const del = function (path, reqObj, success, error) {
        if(reqObj === null) {
            reqObj = {}
        }

        //to avoid dupplicate reqeust
        if (requestArray.indexOf('del' + ':' + path + ':' + JSON.stringify(reqObj)) !== -1) {
            return
        } else {
            requestArray.push('del' + ':' + path + ':' + JSON.stringify(reqObj))
        }

        doRequest('delete', path, reqObj, success, error)
    }

    const put = function (path, reqObj, success, error) {
        if(reqObj === null) {
            reqObj = {}
        }

        //to avoid dupplicate reqeust
        if (requestArray.indexOf('put' + ':' + path + ':' + JSON.stringify(reqObj)) !== -1) {
            return
        } else {
            requestArray.push('put' + ':' + path + ':' + JSON.stringify(reqObj))
        }

        doRequest('put', path, reqObj, success, error)
    }

    const doRequest = function (method, path, reqObj, success, error) {

        if(method === 'get' && ((navigator.userAgent.indexOf('MSIE') !== -1) || (!!document.documentMode === true))) {
            // add no-cache option
            client.defaults.headers.common['Cache-Control'] = 'no-cache, no-store'
            // Pragma is for backwards compatibility HTTP/1.0 general header
            client.defaults.headers.common['Pragma'] = 'no-cache'
            client.defaults.headers.common['Expires'] = -1
        }

        //Set request language
        client.defaults.headers.common['Accept-Language'] = 'en' //'en' is example

        //Add token to request header
        let token = null //token is example

        // if(store.getters['login/getToken']) {
        //     //LOG.info(store.getters['login/getToken'])
        //     token = 'Bearer '+ store.getters['login/getToken']
        // }

        if (token && (typeof token === 'string' || token instanceof String)){
            //Authorization 
            client.defaults.headers.common['Authorization'] = token
        } else {
            client.defaults.headers.common['Authorization'] = ''
        }

        client[method](path, reqObj)
            .then(function (res) {
                spliceRequestArray(method + ':' + path + ':' + JSON.stringify(reqObj))
                //res.data data structure is base on backend response object
                if (res.data.hasError) {
                    throw new Error(res.data.message || 'Request Error Message')
                }
                success(res);
            })
            .catch(function(err) {
                spliceRequestArray(method + ':' + path + ':' + JSON.stringify(reqObj))

                if (err && err.response && err.response.status === 401) {
                    //unauthorize request
                    LOG.error('unauthorize request')
                    // router.push("/logout")
                    // store.commit('login/LOG_OUT')
                    //error(err)
                }
                console.log(err)
            })
    }

    const spliceRequestArray = function (value) {
        for (let i = 0; i < requestArray.length ; i++) {
            if(requestArray[i] === value) {
                requestArray.splice(i, 1)
            }
        }
    }

    return {
        post: post,
        put: put,
        get: get,
        del: del
    }

}

export const apiService = createRequester(appProp.ATOLAS_SERVICE_API_URL, appProp.TIMEOUT_REQUESTER)