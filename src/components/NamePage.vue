<template>
  <div class="names-container">
    <p>Harper Martinez</p>
    <p>Declan Thompson</p>
    <p>Ava Garcia</p>
    <p>Owen Rodriguez</p>
    <p>Isabella Scott</p>
    <p>Liam Cooper</p>
    <p>Sophia Murphy</p>
    <p>Benjamin Flores</p>
    <p>Mia Collins</p>
    <p>Elijah Parker</p>
    <p>Dakota Miller</p>
    <p v-show="isVisible">Mackenzie Miller</p>
  </div>
</template>

<script>
  export default {
      data() {
      return {
        isVisible: false // Initial visibility state
      };
    },
    mounted() {
      // Set a timer to toggle the visibility after a certain duration (e.g., 5 seconds)
      setTimeout(() => {
        this.isVisible = !this.isVisible; // Toggle visibility
      }, 2000); // 2000 milliseconds = 2 seconds
    }
  }
  import '@/styles/names.css';
</script>