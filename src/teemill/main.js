import { Boot } from '@/core';
import App from './App.vue';
import '@/global';

// import { Guards as GlobalGuards } from '@/global/router';
// import { Guards as LocalGuards } from '@/teemill/router';

// import Plugins from '@/teemill/plugins';

// console.log(GlobalGuards);
// console.log(LocalGuards);
// console.log(Plugins);

/**
 * Bootstrap the app.
 */
Boot({
  App,
});
