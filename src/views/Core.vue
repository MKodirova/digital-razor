<template>
  <div class="min-h-screen p-6 bg-dark-blue font-montserrat">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/core/Header";
// import Footer from "@/components/core/Footer";
export default {
  name: "Core",
  components: {
    Header,
    // Footer,
  },
};
</script>

<style></style>
