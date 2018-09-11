<template>
  <div class="slds-card">
    <div class="slds-card__header slds-grid">
      <h2 class="slds-card__header-title slds-text-heading_small">
        <span>Accounts</span>
      </h2>
    </div>
    <div class="slds-card__body slds-card__body_inner">
      <div v-if="!accounts" class="loader">
        <div role="status" class="slds-spinner slds-spinner_medium">
          <span class="slds-assistive-text">Loading</span>
          <div class="slds-spinner__dot-a"></div>
          <div class="slds-spinner__dot-b"></div>
        </div>
      </div>
      <table v-if="accounts && accounts.length > 0" class="slds-table slds-table_cell-buffer slds-no-row-hover slds-table_bordered slds-table_fixed-layout" role="grid">
        <thead>
          <tr class="slds-line-height_reset">
            <th class="slds-text-title_caps" scope="col">
              <div class="slds-truncate" title="Id">Id</div>
            </th>
            <th class="slds-text-title_caps" scope="col">
              <div class="slds-truncate" title="Name">Name</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="slds-hint-parent" v-for="account in accounts"
            :key="account.Id">
            <td role="gridcell">
              <div class="slds-truncate" :title="account.Id">
                {{ account.Id }}
              </div>
            </td>
            <td role="gridcell">
              <div class="slds-truncate" :title="account.Name">
                {{ account.Name }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="accounts && accounts.length === 0">
        No accounts
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    accounts () {
      return this.$store.state.accounts
    }
  },
  created () {
    if (!this.accounts) {
      this.$store.dispatch('getAllAccounts')
    }
  }
}
</script>

<style lang="sass" scoped>
.loader
  height: 3rem
  position: relative
</style>
