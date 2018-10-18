<template>
  <section>
    <h1>index</h1>
    <p>このページは、、、</p>
    {{ which }}
    <p>でレンダリングされています。</p>
    <nuxt-link to="/about">about</nuxt-link>
  </section>
</template>

<script>
export default {
  asyncData() {
    return {
      which: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  }
}
</script>
