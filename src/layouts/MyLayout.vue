<template>
  <q-layout class="shadow-2 rounded-borders" view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>츄즈원</q-toolbar-title>

        <div>로그인</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      mini-to-overlay
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      bordered
      content-class="bg-grey-2"
    >
      <vue-menu />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import VueMenu from "../components/Menu.vue";
export default {
  name: "MyLayout",
  components: { VueMenu },
  data() {
    return {
      leftDrawerOpen: false,
      miniState: true
    };
  }
};
</script>
