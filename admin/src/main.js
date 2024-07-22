import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Dashboard from './components/dashboard.vue';
import MasterLoginPage from './components/masterlogin.vue';
import ErrorPage from './components/ErrorPage.vue'; // Import your custom error page component
import Header from "./components/Header.vue";
import DashboardInner from "./components/Dashboard/dashboardInner.vue";
import Footer from "./components/footer.vue";
import CMSPage from "./components/CMS/Appearance/CMSPages.vue";
import CMSMenu from "./components/CMS/Appearance/CMSMenu.vue";
import CMSWidgets from "./components/CMS/Appearance/CMSWidgets.vue";
import FloatingAds from "./components/CMS/CMS_Marketting/Integrated_Modules/FloatingAds.vue"
import AmazonMarketPlace from "./components/CMS/CMS_Marketting/Integrated_Shopping/AmazonMarketPlace.vue"
import FacebookMarketting from "./components/CMS/CMS_Marketting/Integrated_Shopping/FacebookMarketting.vue"
import GoogleShopping from "./components/CMS/CMS_Marketting/Integrated_Shopping/GoogleShopping.vue"
import AccountingComp from "./components/CMS/CMS_Marketting/Renaissance_Services/Accounting.vue"
import eCircular from "./components/CMS/CMS_Marketting/Renaissance_Services/eCircular.vue"
import MediaBuying from "./components/CMS/CMS_Marketting/Renaissance_Services/MediaBuying.vue"
import PayPerClick from "./components/CMS/CMS_Marketting/Renaissance_Services/PayPerClick.vue"
import Print from "./components/CMS/CMS_Marketting/Renaissance_Services/print.vue"
import ReputationManagement from "./components/CMS/CMS_Marketting/Renaissance_Services/ReputationManagement.vue"
import SEO from "./components/CMS/CMS_Marketting/Renaissance_Services/SEO.vue"
import SocialMedia from "./components/CMS/CMS_Marketting/Renaissance_Services/SocialMedia.vue"
import Video from "./components/CMS/CMS_Marketting/Renaissance_Services/Video.vue"
import ViewComp from "./components/CMS/CMS_Marketting/Renaissance_Services/view360.vue"
import CMS from "./components/CMS/CMS.vue"
import Appearance from "./components/CMS/Appearance/appearance.vue"
import CMSMarketing from "./components/CMS/CMS_Marketting/cms-marketting.vue"
import IntegratedModules from "./components/CMS/CMS_Marketting/Integrated_Modules/Integrated_modules.vue"
import IntegratedShopping from "./components/CMS/CMS_Marketting/Integrated_Shopping/integrated_shopping.vue"
import RenaissanceServices from "./components/CMS/CMS_Marketting/Renaissance_Services/renaissance_Services.vue"
import CMSMenuAddNew from "./components/CMS/Appearance/CMSMenuForms/AddNewMenuForm.vue";
import CMSMenuEdit from "./components/CMS/Appearance/CMSMenuForms/CMSedit.vue";
import CMSMenuClone from "./components/CMS/Appearance/CMSMenuForms/CMSMenuclone.vue";
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    //
  },
})

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/admin/dashboard', name: 'Dashboard', component: Dashboard,
            children: [
                {
                    path: '/admin/dashboard',
                    component:DashboardInner
                },
                {
                    path: '/admin/cms',
                    component:CMS
                },
                {
                    path: '/admin/cms/appearance',
                    component:Appearance
                },
                {
                    path: '/admin/cms/appearance/menu',
                    component:CMSMenu
                },
                {
                    path: '/admin/cms/appearance/menu/new',
                    component:CMSMenuAddNew
                },
                {
                    path: '/admin/cms/appearance/menu/edit/:id',
                    component:CMSMenuEdit
                },
                {
                    path: '/admin/cms/appearance/menu/clone/:id',
                    component:CMSMenuClone
                },
                {
                    path: '/admin/cms/appearance/cmspages',
                    component:CMSPage
                },
                {
                    path: '/admin/cms/appearance/widgets',
                    component:CMSWidgets
                },
                {
                    path :'/admin/cms/cms-marketing',
                    component:CMSMarketing
                },
                {
                    path :'/admin/cms/cms-marketing/integrated-modules',
                    component:IntegratedModules
                },
                {
                    path :'/admin/cms/cms-marketing/integrated-shopping',
                    component:IntegratedShopping
                },
                {
                    path :'/admin/cms/cms-marketing/renaissance-services',
                    component:RenaissanceServices
                },
                {
                    path: '/admin/cms/cms-marketing/integrated-modules/floatingads',
                    component:FloatingAds
                },
                {
                    path: '/admin/cms/cms-marketing/integrated-shopping/amazon-market-place',
                    component:AmazonMarketPlace
                },
                {
                    path: '/admin/cms/cms-marketing/integrated-shopping/facebook-marketting',
                    component:FacebookMarketting
                },
                {
                    path: '/admin/cms/cms-marketing/integrated-shopping/google-shopping',
                    component:GoogleShopping
                },
                {
                    path: '/admin/cms/cms-marketing/renaissance-services/accounting',
                    component:AccountingComp
                },
                {
                    path: '/admin/cms/cms-marketing/renaissance-services/ecircular',
                    component:eCircular
                },
                {
                    path: '/admin/cms/cms-marketing/renaissance-services/media-buying',
                    component:MediaBuying
                },
                {
                    path: '/admin/cms/cms-marketing/renaissance-services/pay-per-click',
                    component:PayPerClick
                },
                {
                    path: '/admin/cms/cms-marketing/renaissance-services/print',
                    component:Print
                },
                {
                    path: '/admin/cms/cms-marketing/renaissance-services/reputation-management',
                    component:ReputationManagement
                },
                {
                    path: '/admin/cms/cms-marketing/renaissance-services/seo',
                    component:SEO
                },
                {
                    path: '/admin/cms/cms-marketing/renaissance-services/social-media',
                    component:SocialMedia
                },
                {
                    path: '/admin/cms/cms-marketing/renaissance-services/video',
                    component:Video
                },
                {
                    path: '/admin/cms/cms-marketing/renaissance-services/view-360',
                    component:ViewComp
                },
            ]
        },
        { path: '/admin/masterlogin', name: 'MasterLoginPage', component: MasterLoginPage },
        
        // Add catch-all route for undefined paths
       { path: '/:catchAll(.*)', component: ErrorPage }
    ]
});

sessionStorage.setItem('user',JSON.stringify({
    "id": "85cf",
    "name": "John Doe",
    "email": "anshparmar1502@gmail.com",
    "username": "Ansh1111",
    "password": "Ansh1111"
  }));

router.beforeEach(async (to, from, next) => {

    const savedUser = JSON.parse(sessionStorage.getItem('user'));

    if (to.path === '/admin/masterlogin' || to.path === '/admin/masterlogin/') {
        if (!savedUser) {
            next();
          }
          else{
            next('/admin/dashboard');
          }
      }
      else{
        if (!savedUser) {
            next('/admin/masterlogin');
          }
          else if(to.path === '/' || to.path === '' || to.path === '/admin/' || to.path === '/admin'){
            next('/admin/dashboard');
          }
          else{
            next();
          }
      }
  });
  

const app = createApp(App);

app.use(router);
app.use(vuetify);


app.component('header-component', Header);
app.component('footer-component', Footer);

app.mount('#app');


