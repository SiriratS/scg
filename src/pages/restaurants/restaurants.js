import PlaceService from '../../services/place-service.js'

const API_KEY = 'AIzaSyAEx2ZxpGI9MuwRTTCKPCo5kYKOUMggO38'

const placeService = new PlaceService();

export default {
    name: 'restaurants',
    data: () => {
      return {
        nextPageToken: null,
        results: [],
        busy: false,
        imgUrl: 'https://maps.googleapis.com/maps/api/place/photo?sensor=false&maxheight=300&maxwidth=300&key=' + API_KEY + '&photoreference='
      }
    },
    methods: {
      loadMore: function() {
        if(!this.nextPageToken) {
          return;
        }

        this.busy = true;

        // GooglePlaceAdapter
        //   .get('textsearch/json', {
        //     params: {
        //       key: API_KEY,
        //       query: 'บางแสน',
        //       types: 'restaurant',
        //       pagetoken: this.nextPageToken  
        //     }
        //   })
        //   .then(response => { 
        //     this.nextPageToken = response.data.next_page_token ? response.data.next_page_token : null
        //     this.results = this.results.concat(response.data.results)
        //     this.busy = false;
        //   })
        //   .catch(err => err)
      }
    },
    mounted (){
        let result = placeService.getFromLocal({
          query: 'บางแสน',
          types: 'restaurant'
        });

        if(result) {
          const response = JSON.parse(result);
          this.nextPageToken = response.data.next_page_token;
          this.results = response.data.results;  
          return;
        }

        placeService.search({
          query: 'บางแสน',
          types: 'restaurant'
        })
        .then(response => {
          placeService.setToLocal(
            {
              query: 'บางแสน',
              types: 'restaurant'
            },
            response
          );
          this.nextPageToken = response.data.next_page_token;
          this.results = response.data.results;     
        });      
    }   
}