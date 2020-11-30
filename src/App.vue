<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Infections DB</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/persons"> Persons </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/pathogens">
              Pathogens
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/infections">
              Infections
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>
#navbarNav .router-link-active {
  color: #a70909;
}
</style>
