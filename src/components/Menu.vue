<template>
  <q-list>
    <q-item-label header v-if="$q.platform.is.mobile">츄즈원 어드민</q-item-label>
    <q-item v-for="item in list" :key="item.href" clickable tag="a" :href="item.href">
      <q-item-section class="item-section" avatar>
        <q-icon name="school" />
      </q-item-section>
      <q-item-section class="item-section" avatar>
        <q-item-label>{{ item.name }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: "VueMenu",
  data: _ => ({
    list: [
      {
        href: "/users",
        name: "유저"
      },
      {
        href: "/posts",
        name: "포스트"
      },
      {
        href: "/comments",
        name: "댓글"
      },
      {
        href: "/reports",
        name: "신고"
      }
    ]
  })
};
</script>