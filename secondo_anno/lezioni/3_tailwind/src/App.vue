<template>
  <div class="h-screen flex flex-col">
    <div
      class="h-20 flex items-center justify-center bg-green-400 text-green-800"
    >
      Header
    </div>
    <div
      class="flex-grow flex items-center justify-center bg-blue-100 text-blue-800 text-4xl"
    >
      Content
    </div>
    <div class="h-20 flex items-center justify-center bg-gray-800 text-white">
      Footer
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
