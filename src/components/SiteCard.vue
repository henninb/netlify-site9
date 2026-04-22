<script setup>
defineProps({
  site: Object
})
</script>

<template>
  <a :href="site.url" class="card">
    <span class="card-name">{{ site.name }}</span>
    <span class="card-path">{{ site.path }}</span>
    <span class="arrow">↗</span>
  </a>
</template>
