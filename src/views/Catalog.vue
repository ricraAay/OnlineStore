<template>
  <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
    <vs-card>
    <template #title>
      <h3>Pot with a plant</h3>
    </template>
    <template #img>
      <img src="/3415030.png" alt="">
    </template>
    <template #text>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
    </template>
    <template #interactions>
      <vs-button danger icon>
        <i class='bx bx-heart'></i>
      </vs-button>
      <vs-button class="btn-chat" shadow primary>
        <i class='bx bx-chat' ></i>
        <span class="span">
          54
        </span>
      </vs-button>
    </template>
  </vs-card>
  </vs-col>
</template>

<script>
export default {
  name: 'Catalog'
}
</script>