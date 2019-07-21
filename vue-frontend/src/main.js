import Vue from 'vue'
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false

//Custom Directives

/* On Scroll Class Binding*/
Vue.directive('vpshow', {
  inViewport (el) {
    var rect = el.getBoundingClientRect()
    return !(rect.bottom < 0 || rect.right < 0 || 
             rect.left > window.innerWidth ||
             rect.top > window.innerHeight)
  },
  
  bind(el, binding) {
    el.classList.add('before-enter')
    el.$onScroll = function() {
      if (binding.def.inViewport(el)) {
        el.classList.add('enter')
        el.classList.remove('before-enter')
        binding.def.unbind(el, binding)        
      }
    }
    document.addEventListener('scroll', el.$onScroll)
  },
  
  inserted(el) {
    el.$onScroll()  
  },
  
  unbind(el) {    
    document.removeEventListener('scroll', el.$onScroll)
    delete el.$onScroll
  }  
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
