<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1 class="header-title">Rick and Morty Characters</h1>
  </header>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/page2">Next page</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped>
header {
  text-align: center;
  container-type: inline-size;
}
.header-title {
  font-weight: 500;
  font-size: clamp(1rem, 3.5cqi, 4rem);
  color: var(--color-heading-accent);
}

nav {
  width: 100%;
  margin-top: 2rem;
  font-size: 1rem;
  padding: 1rem 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
