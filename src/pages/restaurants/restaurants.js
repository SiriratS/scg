import PlaceService from '../../services/place-service.js'

const placeService = new PlaceService();

async function search(params) {
  let result = await placeService.getFromLocal(params);

  if(result) {
    const response = JSON.parse(result);
    return response;
  }

  const response = await placeService.search(params)
  placeService.setToLocal(params, response.data);

  return response.data;
}

export default {
    name: 'restaurants',
    data: () => {
      return {
        nextPageToken: null,
        results: [],
        busy: false,
        imgUrl: placeService.getPhotoEndPoint()
      }
    },
    methods: {
      loadMore: function() {
        if(!this.nextPageToken) {
          return;
        }

        this.busy = true;

        search({
          query: 'บางแสน',
          types: 'restaurant',
          pagetoken: this.nextPageToken
        }).then(result => {
          this.nextPageToken = result.next_page_token;
          this.results = this.results.concat(result.results); 
          this.busy = false;            
        }); 
      }
    },
    mounted (){
        search({
          query: 'บางแสน',
          types: 'restaurant'
        }).then(result => {
          this.nextPageToken = result.next_page_token;
          this.results = result.results;             
        }); 
    }   
}