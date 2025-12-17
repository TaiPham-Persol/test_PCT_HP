import Vue from 'vue';
import vueSmoothScroll from 'vue2-smooth-scroll';

Vue.use(vueSmoothScroll, {
  duration: 500,
  offset: 0,
  updateHistory: true,
});
