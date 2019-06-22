<template>
  <div class="restaurants" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100" infinite-scroll-throttle-delay=1000>
    <b-card v-for="result in results" :key="result.id">
      <b-row>
        <b-col sm="3">
          <b-card-img v-if="result.photos" :src="imgUrl + result.photos[0].photo_reference" class="rounded-0"></b-card-img>
        </b-col>
        <b-col sm="9">
          <b-card-body :title="result.name">
            <b-card-text>
              <b>Address</b>: {{ result.formatted_address }}
              <br/>
              <div v-if="result.opening_hours">
                <b>Status</b>:  
                <span class="open-now" v-if="result.opening_hours.open_now">Open</span>
                <span class="close-now" v-else>Close</span>
              </div>
              <b>Rating</b>: {{ result.rating }} <b>Total Voted</b>: {{ result.user_ratings_total }}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card> 
  </div>
</template>

<script src='./restaurants.js'></script>

<style scoped src='./restaurants.css'></style>


