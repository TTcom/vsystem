import router from './router/index'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

  NProgress.configure({ showSpinner: false }) // NProgress Configuration

  NProgress.configure({ easing: 'ease', speed: 500 });


router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  next();
  
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
