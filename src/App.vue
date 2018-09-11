<template>
  <div id="app" class="app-wrapper">
    <div class="app-view">
      <div class="slds-page-header">
        <div class="slds-page-header__row">
          <div class="slds-page-header__col-title">
            <div class="slds-page-header__name">
              <div class="slds-page-header__name-title">
                <h1>
                  <span class="slds-page-header__title slds-truncate">
                    Vue App
                  </span>
                </h1>
              </div>
            </div>
            <p class="slds-page-header__name-meta"></p>
          </div>
        </div>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<style lang="sass">
@import url('../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css')

html, body
  width: 100%
  min-height: 100%
  height: 100%
  background: rgb(176, 196, 223)

.app-wrapper
  width: 100%
  max-width: 100%
  height: 100%
  display: flex
  flex-direction: column
  background-image: url(./assets/lightning_blue_background.png)
  background-position: top left
  background-repeat: repeat-x
  padding: .75rem .75rem 0 .75rem

  .app-view
    flex: 1
</style>
