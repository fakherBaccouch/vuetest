<template>
  <div id="app">
    <v-row style="height:100vh">
      <v-col
        style="background-color:#e67e22"
        cols="12"
        sm="12"
        md="2"
        class="d-flex flex-column justify-space-between align-center pr-0 pb-0"
      >
        <div>
          <div style="width:150px">
            <v-img src="../assets/myphoto.jpg"></v-img>
          </div>
          <div class="black--text">
            <p>
              <strong>Fakher baccouch</strong>
            </p>
            <p class="mb-0 mt-5">Age:21</p>
            <p>HTML,CSS,JS,VueJs</p>
          </div>
        </div>

        <v-btn style="width:100%" x-large color="success ">Sauvegarder</v-btn>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="10"
        class="d-flex flex-column justify-center"
        style="background-color:#40739e"
        id="list"
      >
        <h1 style="text-align:center " class="display-3 align-center black--text">Je suis un titre</h1>
        <p style="text-align:center " class="display-1 align-center black--text">Je suis un soutitre</p>
        <br />
        <br />

        <v-list-item-title style="color:#fff;">
          <v-btn fab small style="font-size:30px" class="mr-8">1</v-btn>
          <span>Element 1</span>
        </v-list-item-title>

        <v-list-item-title style="color:#fff">
          <v-btn fab small style="font-size:30px" class="mr-8">2</v-btn>
          <span>Element 2</span>
        </v-list-item-title>

        <v-list-item-title style="color:#fff">
          <v-btn fab small style="font-size:30px" class="mr-8">3</v-btn>
          <span>Element 3</span>
        </v-list-item-title>

        <v-list-item-title style="color:#fff">
          <v-btn fab small style="font-size:30px" class="mr-8">4</v-btn>
          <span>Element 4</span>
        </v-list-item-title>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#list span {
  background: white;
  color: black;
  border-radius: 5px;
  height: 200px;
  width: 700px;
  font-size: 30px;
  padding-right: 150px;
  border: 1px solid black;
}
</style>