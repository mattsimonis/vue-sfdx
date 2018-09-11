<template>
  <div class="home slds-m-vertical_small">
    <div class="slds-grid">
      <div class="slds-col slds-no-space">
        <accounts/>
      </div>
    </div>
  </div>
</template>

<script>
import Accounts from '@/components/Accounts.vue'

export default {
  name: 'home',
  components: {
    Accounts
  }
}
</script>
