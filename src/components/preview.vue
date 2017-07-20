<template>
  <div class="preview">
    <p>You can try some change to preview</p>
    <vuep :template="code"></vuep>
  </div>
</template>

<script>
  export default {
    data: () => ({
      code: `
  <template>
    <div class="text">hello {{ name }}</div>
  </template>

  <style>
  .text {
    color: red;
  }
  </style>

  <script>
  module.exports = {
    data: () => ({
      name: 'preview'
    })
  }`
    })
  }
</script>

<style lang="css">
  .preview .vuep {
    text-align: left;
  }
</style>
