<template>
  <div id="app">
    <div class="page-header center grid examplex">

      <vs-navbar color="#2b2b2b" text-white square center-collapsed v-model="active">

        <template #left>
          <img src="/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt="">
        </template>
        
        <vs-navbar-item 
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          :active="active == link.name" 
          :id="link.name">
          {{ link.text }}
        </vs-navbar-item>

        <template #right>
          <vs-button color="#fff" flat >Войти</vs-button>
        </template>

      </vs-navbar>

      <router-view/>

    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      active: 'catalog',
      links: [
        { path: '/catalog',  name: 'catalog',  text: 'Каталог' },
        { path: '/contacts', name: 'contacts', text: 'Контакты' },
        { path: '/delivery', name: 'delivery', text: 'Доставка и оплата' }
      ]
    }
  }
}
</script>

