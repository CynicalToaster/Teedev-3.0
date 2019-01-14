<template>
  <div class="teedev-header">
    <div class="header">
      <div
        class="menu-button"
        @click="$store.commit(
          'overlay_elements/toggle',
          {
            group: 'sidebar',
            name: 'main-menu'
          }
        )"
      >
        <font-awesome-icon :icon="faBars" />
      </div>
      <teedev-logo max-width="80px" />
      <div class="header-right">
        <div class="auth-controls">
          <teedev-link v-if="!$loggedInUser" href="/login">Login</teedev-link>
          <teedev-link v-if="!$loggedInUser" href="/register">Register</teedev-link>
          <teedev-user-profile-widget
            imageHeight="30px"
            @click="$router.push({
              name: 'TeeDev User Profile',
              params: { slug: $loggedInUser.slug }
            })"
            no-name
          />
          <teedev-link
            @click.native="logout"
            href='#'
            v-if="$loggedInUser"
          >
            Logout
          </teedev-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { faBars } from '@fortawesome/pro-light-svg-icons/faBars';

export default {
  name: 'teedev-header',

  data: () => ({
    faBars,
  }),

  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
        .then(() => this.$router.push({ name: 'TeeDev Login' }));
    },
  },
};
</script>

<style lang="scss" scoped>
.teedev-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2000;
  box-shadow: 0 -2px 4px 0 #000;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 3em;
    background-color: $color-background;
    // background-color: $color-highlight;
    // border-bottom: 0px solid $color-secondary;

    .header-right {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      height: 100%;

      .auth-controls {
        display: flex;
        justify-content: space-around;
        align-items: center;

        a {
          flex: 1;
          padding: 1rem;
        }
      }
    }

    .menu-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3em;
      height: 3em;
      border-bottom-right-radius: $border-radius;
      cursor: pointer;

      svg {
        width: 22px;
        height: 22px;
      }

      &:hover {
        background-color: rgba(0,0,0,0.05);
      }
    }
  }
}
</style>
