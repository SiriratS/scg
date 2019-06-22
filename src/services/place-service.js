import GooglePlaceAdapter from './adapter/google-place.js'

export default class PlaceService {
  API_KEY = '[YOUR_KEY]'
  LOCATION_KEY = 'PLACE';
  
search(params) {
    return GooglePlaceAdapter
        .get('textsearch/json', {
          params: {
            key: this.API_KEY,
            query: params.query,
            types: params.types,
            pagetoken: params.pagetoken
          }
        });
  }

  matchKey(params) {
    let lookUpKey = this.LOCATION_KEY;
    Object.keys(params).forEach((key) => lookUpKey = params[key] ? lookUpKey + '|' + params[key] : lookUpKey )

    return lookUpKey;
  }

  setToLocal(params, response) {
    const SET_KEY = this.matchKey(params);   
    return localStorage.setItem(SET_KEY, JSON.stringify(response))  
  }

  getFromLocal(params) {
    const GET_KEY = this.matchKey(params);
    return localStorage.getItem(GET_KEY);
  }
}