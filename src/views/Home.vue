<template>
  <div id="app">
    <v-row style="height:100vh">
      <v-col
        style="background-color:#985E6D"
        cols="12"
        sm="12"
        md="4"
        class="d-flex flex-column justify-space-between align-center"
      >
        <div>
          <div style="width:150px" class="pb-4">
            <v-img style="border-radius:50%" src="../assets/myphoto.jpg"></v-img>
          </div>
          <div align="center" class="white--text">
            <p>Fakher baccouch</p>
            <p>Vuejs frontend developer</p>
          </div>
        </div>
        <div align="center">
          <v-btn x-large style="background-color:#98878F color:white">Save</v-btn>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="8"
        class="d-flex flex-column justify-center"
        style="background-color:#192231"
      >
        <h1 style="text-align:center " class="display-3 align-center white--text">My Skills</h1>
        <br />
        <br />
        <v-list-item-title style="color:#fff;width:200px">
          <v-btn fab small class="mr-4">1</v-btn>HTML
        </v-list-item-title>

        <v-list-item-title style="color:#fff;width:200px">
          <v-btn fab small class="mr-4">3</v-btn>CSS
        </v-list-item-title>

        <v-list-item-title style="color:#fff;width:200px">
          <v-btn fab small class="mr-4">4</v-btn>Javascript
        </v-list-item-title>

        <v-list-item-title style="color:#fff;width:200px">
          <v-btn fab small class="mr-4">5</v-btn>VueJs
        </v-list-item-title>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>