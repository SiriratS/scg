<template>
  <div class="navigation">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>
        <router-link to="/">Home</router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/mv-cv">My CV</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/restaurants">Restaurants</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/scg">SCG</router-link>
          </b-nav-item>                    
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script src='./navigation.js'></script>

<style scoped src='./navigation.css'></style>


