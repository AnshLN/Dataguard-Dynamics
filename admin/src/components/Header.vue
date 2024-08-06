<template>
<div class="header_comp">
    <nav class="navbar fixed-top navbar-expand-lg">
        <div class="logo_sidbr">
            <a class="navbar-brand ms-2 p-0" href="/admin/dashboard">
                <img src="https://i.imgur.com/NLZDuOO.png" alt="Logo" class="d-inline-block align-text-top nv_logo_img">
            </a>
            <a href="javascript:void(0)" class="sidebar-toggler toggle_btn" type="button" id="SidebarToggle" @click="ToggleSidebarText">
                <i class="fa fa-bars"></i>
            </a>
        </div>
        <div class="top_right_prt">
            <a href="#NavBarCollapsible" class="navbar-toggler toggle_btn" type="button" data-bs-toggle="collapse" id="SidebarToggle" ref="toggleBtn">
                <i class="fa fa-bars"></i>
            </a>
            <a class="setting-flip" href="javascript:void(0)">
                <img src="https://devstore10.rencommerce.com/assets/admin/images/top-setting-icon.png" alt="setting_icn">
            </a>
            <a class="Tooltip-flip" href="javascript:void(0)">
                <img src="https://cdn.rencdn.com/assets/admin/images/tooltip_config.png" alt="Tooltip_icn">
            </a>
        </div>
        <div class="collapse navbar-collapse" id="NavBarCollapsible">
            <ul class="navbar-nav" id="NavLinks" ref="NavLinks">
                <div class="accordion" id="AccordionList">
                <li class="nav-item">
                    <router-link :class="{ active: currentRoute.startsWith('/admin/dashboard') }" to="/admin/dashboard" class="nav-link py-3 border-bottom border-top" title="Dashboard" @click="closeAccordionAndSidebar">
                        <div class="link_icon_container">
                            <i class="fa fa-home"></i>
                        </div>
                        <span class="link_title">Dashboard</span>
                    </router-link>
                </li>
                <li class="nav-item" @mouseleave="removeShow">
                    
                        <div class="accordion-item">
                            <a :class="{ active: currentRoute.startsWith('/admin/cms') }" href="#AccordionChild1" class="border-bottom nav-link accordion-button collapsed py-3" title="CMS" data-bs-toggle="collapse">
                                <div class="link_icon_container">
                                    <i class="fa-solid fa-coins"></i>
                                </div>
                                <span class="link_title">CMS</span>
                            </a>
                            <div id="AccordionChild1" class="accordion-collapse collapse" data-bs-parent="#AccordionList">
                                    <!--  -->
                                    <div class="accordion" id="CMSAccordion">
                                        <div class="accordion-item">
                                            <a :class="{ active: currentRoute.startsWith('/admin/cms/appearance') }" href="#AppearanceAcc" class="nav-link border-bottom accordion-button collapsed py-3" title="Appearance" data-bs-toggle="collapse">
                                                <div class="link_icon_container">
                                                    <i class="fa-solid fa-palette"></i>
                                                </div>
                                                <span class="link_title">Appearance</span>
                                            </a>
                                            <div id="AppearanceAcc" class="accordion-collapse collapse" data-bs-parent="#CMSAccordion">
                                                
                                                    <!-- Other Links -->
                                                    <router-link :class="{ active: currentRoute.startsWith('/admin/cms/appearance/menu') }" to="/admin/cms/appearance/menu" class="nav-link border-bottom py-3" title="Menu" @click="closeAccordionAndSidebar">
                                                        <div class="link_icon_container">
                                                            <i class="fa-solid fa-bars"></i>
                                                        </div>
                                                        <span class="link_title">Menu</span>
                                                    </router-link>
                                                    <!-- <router-link :class="{ active: currentRoute.startsWith('/admin/cms/appearance/cmspages') }" to="/admin/cms/appearance/cmspages" class="nav-link border-bottom py-3" title="Pages" @click="closeAccordionAndSidebar">
                                                        <div class="link_icon_container">
                                                            <i class="fa-solid fa-file"></i>
                                                        </div>
                                                        <span class="link_title">Pages</span>
                                                    </router-link>
                                                    <router-link :class="{ active: currentRoute.startsWith('/admin/cms/appearance/widgets') }" to="/admin/cms/appearance/widgets" class="nav-link border-bottom py-3" title="Widgets" @click="closeAccordionAndSidebar">
                                                        <div class="link_icon_container">
                                                            <i class="fa-solid fa-grip"></i>
                                                        </div>
                                                        <span class="link_title">Widgets</span>
                                                    </router-link> -->
                                                    
                                                
                                            </div>
                                        </div>
                                        
                                        <!-- <div class="accordion-item">
                                            <a :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing') }" href="#CMSMrkttingAcc" class="nav-link border-bottom accordion-button collapsed py-3" title="CMS Marketting" data-bs-toggle="collapse">
                                                <div class="link_icon_container">
                                                    <i class="fa-solid fa-square-poll-horizontal"></i>
                                                </div>
                                                <span class="link_title">CMS Marketting</span>
                                            </a>
                                            <div id="CMSMrkttingAcc" class="accordion-collapse collapse" data-bs-parent="#CMSAccordion">
                                                    <div class="accordion" id="CMSMarketingAccordion">
                                                        <div class="accordion-item">

                                                          
                                                            <a :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing/integrated-modules') }" href="#Integrated_Modules" class="nav-link border-bottom accordion-button collapsed py-3" title="Integrated Modules" data-bs-toggle="collapse">
                                                                <div class="link_icon_container">
                                                                    <i class="fa-solid fa-puzzle-piece"></i>
                                                                </div>
                                                                <span class="link_title">Integrated Modules</span>
                                                            </a>
                                                            <div id="Integrated_Modules" class="accordion-collapse collapse" data-bs-parent="#CMSMarketingAccordion">
                                                                <router-link :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing/integrated-modules/floatingads') }" to="/admin/cms/cms-marketing/integrated-modules/floatingads" class="nav-link border-bottom py-3" title="Floating Ads" @click="closeAccordionAndSidebar">
                                                                    <div class="link_icon_container">
                                                                        <i class="fa-solid fa-newspaper"></i>
                                                                    </div>
                                                                    <span class="link_title">Floating Ads</span>
                                                                </router-link>
                                                            </div>
                                                            

                                                        </div>
                                                        <div class="accordion-item">

                                                            
                                                            <a :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing/integrated-shopping') }" href="#Integrated_Shopping" class="nav-link border-bottom accordion-button collapsed py-3" title="Integrated Shopping" data-bs-toggle="collapse">
                                                                <div class="link_icon_container">
                                                                    <i class="fa-solid fa-cart-arrow-down"></i>
                                                                </div>
                                                                <span class="link_title">Integrated Shopping</span>
                                                            </a>
                                                            <div id="Integrated_Shopping" class="accordion-collapse collapse" data-bs-parent="#CMSMarketingAccordion">
                                                                <router-link :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing/integrated-shopping/amazon-market-place') }" to="/admin/cms/cms-marketing/integrated-shopping/amazon-market-place" class="nav-link border-bottom py-3" title="Amazon Market Place" @click="closeAccordionAndSidebar">
                                                                    <div class="link_icon_container">
                                                                        <i class="fa-brands fa-amazon"></i>
                                                                    </div>
                                                                    <span class="link_title">Amazon Market Place</span>
                                                                </router-link>
                                                                <router-link :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing/integrated-shopping/facebook-marketting') }" to="/admin/cms/cms-marketing/integrated-shopping/facebook-marketting" class="nav-link border-bottom py-3" title="Facebook Marketing" @click="closeAccordionAndSidebar">
                                                                    <div class="link_icon_container">
                                                                        <i class="fa-brands fa-facebook-f"></i>
                                                                    </div>
                                                                    <span class="link_title">Facebook Marketing</span>
                                                                </router-link>
                                                                <router-link :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing/integrated-shopping/google-shopping') }" to="/admin/cms/cms-marketing/integrated-shopping/google-shopping" class="nav-link border-bottom py-3" title="Google Shopping" @click="closeAccordionAndSidebar">
                                                                    <div class="link_icon_container">
                                                                        <i class="fa-brands fa-google-plus-g"></i>
                                                                    </div>
                                                                    <span class="link_title">Google Shopping</span>
                                                                </router-link>
                                                            </div>
                                                            

                                                        </div>
                                                        <div class="accordion-item">

                                                            
                                                            <a :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing/renaissance-services') }" href="#Renaissance_Services" class="nav-link border-bottom accordion-button collapsed py-3" title="DataGuard Dynamics" data-bs-toggle="collapse">
                                                                <div class="link_icon_container">
                                                                    <i class="fa-solid fa-shield-halved"></i>
                                                                </div>
                                                                <span class="link_title">DataGuard Services</span>
                                                            </a>
                                                            <div id="Renaissance_Services" class="accordion-collapse collapse" data-bs-parent="#CMSMarketingAccordion">
                                                                <router-link :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing/renaissance-services/accounting') }" to="/admin/cms/cms-marketing/renaissance-services/accounting" class="nav-link border-bottom py-3" title="Accounting" @click="closeAccordionAndSidebar">
                                                                    <div class="link_icon_container">
                                                                        <i class="fa-solid fa-book"></i>
                                                                    </div>
                                                                    <span class="link_title">Accounting</span>
                                                                </router-link>
                                                                <router-link :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing/renaissance-services/ecircular') }" to="/admin/cms/cms-marketing/renaissance-services/ecircular" class="nav-link border-bottom py-3" title="eCircular" @click="closeAccordionAndSidebar">
                                                                    <div class="link_icon_container">
                                                                        <i class="fa-solid fa-book-open"></i>
                                                                    </div>
                                                                    <span class="link_title">eCircular</span>
                                                                </router-link>
                                                                <router-link :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing/renaissance-services/media-buying') }" to="/admin/cms/cms-marketing/renaissance-services/media-buying" class="nav-link border-bottom py-3" title="Media Buying" @click="closeAccordionAndSidebar">
                                                                    <div class="link_icon_container">
                                                                        <i class="fa-solid fa-tower-cell"></i>
                                                                    </div>
                                                                    <span class="link_title">Media Buying</span>
                                                                </router-link>
                                                                <router-link :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing/renaissance-services/pay-per-click') }" to="/admin/cms/cms-marketing/renaissance-services/pay-per-click" class="nav-link border-bottom py-3" title="Pay Per Click" @click="closeAccordionAndSidebar">
                                                                    <div class="link_icon_container">
                                                                        <i class="fa-brands fa-amazon-pay"></i>
                                                                    </div>
                                                                    <span class="link_title">Pay Per Click</span>
                                                                </router-link>
                                                                <router-link :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing/renaissance-services/print') }" to="/admin/cms/cms-marketing/renaissance-services/print" class="nav-link border-bottom py-3" title="Print" @click="closeAccordionAndSidebar">
                                                                    <div class="link_icon_container">
                                                                        <i class="fa-solid fa-print"></i>
                                                                    </div>
                                                                    <span class="link_title">Print</span>
                                                                </router-link>
                                                                <router-link :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing/renaissance-services/reputation-management') }" to="/admin/cms/cms-marketing/renaissance-services/reputation-management" class="nav-link border-bottom py-3" title="Reputation Management" @click="closeAccordionAndSidebar">
                                                                    <div class="link_icon_container">
                                                                        <i class="fa-solid fa-comments"></i>
                                                                    </div>
                                                                    <span class="link_title">Reputation Management</span>
                                                                </router-link>
                                                                <router-link :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing/renaissance-services/seo') }" to="/admin/cms/cms-marketing/renaissance-services/seo" class="nav-link border-bottom py-3" title="SEO" @click="closeAccordionAndSidebar">
                                                                    <div class="link_icon_container">
                                                                        <i class="fa-solid fa-tv"></i>
                                                                    </div>
                                                                    <span class="link_title">SEO</span>
                                                                </router-link>
                                                                <router-link :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing/renaissance-services/social-media') }" to="/admin/cms/cms-marketing/renaissance-services/social-media" class="nav-link border-bottom py-3" title="Social Media" @click="closeAccordionAndSidebar">
                                                                    <div class="link_icon_container">
                                                                        <i class="fa-regular fa-thumbs-up"></i>
                                                                    </div>
                                                                    <span class="link_title">Social Media</span>
                                                                </router-link>
                                                                <router-link :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing/renaissance-services/video') }" to="/admin/cms/cms-marketing/renaissance-services/video" class="nav-link border-bottom py-3" title="Video" @click="closeAccordionAndSidebar">
                                                                    <div class="link_icon_container">
                                                                        <i class="fa-solid fa-circle-play"></i>
                                                                    </div>
                                                                    <span class="link_title">Video</span>
                                                                </router-link>
                                                                <router-link :class="{ active: currentRoute.startsWith('/admin/cms/cms-marketing/renaissance-services/view-360') }" to="/admin/cms/cms-marketing/renaissance-services/view-360" class="nav-link border-bottom py-3" title="View 360°" @click="closeAccordionAndSidebar">
                                                                    <div class="link_icon_container">
                                                                        <i class="fa-solid fa-street-view"></i>
                                                                    </div>
                                                                    <span class="link_title">View 360°</span>
                                                                </router-link>
                                                            </div>
                                                            

                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        
                                        <div class="accordion-item">
                                            <a href="#contentAcc" class="nav-link border-bottom accordion-button collapsed py-3" title="Content" data-bs-toggle="collapse">
                                                <div class="link_icon_container">
                                                    <i class="fa-solid fa-folder"></i>
                                                </div>
                                                <span class="link_title">Content</span>
                                            </a>
                                            <div id="contentAcc" class="accordion-collapse collapse" data-bs-parent="#CMSAccordion">
                                                
                                                  
                                                
                                            </div>
                                        </div> -->
                                    </div>
                                    
                            </div>
                        </div>
                    
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link py-3 border-bottom" title="CRM" >
                        <div class="link_icon_container">
                            <i class="fa-solid fa-users-viewfinder"></i>
                        </div>
                        <span class="link_title">CRM</span>
                        
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link py-3 border-bottom" title="POS" >
                        <div class="link_icon_container">
                            <i class="fas fa-cloud-upload"></i>
                        </div>
                        <span class="link_title">POS</span>
                        
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link py-3 border-bottom" title="Reports" >
                        <div class="link_icon_container">
                            <i class="fa fa-file-text"></i>
                        </div>
                        <span class="link_title">Reports</span>
                        
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link py-3 border-bottom" title="Process List" >
                        <div class="link_icon_container">
                            <i class="fa fa-hourglass-2"></i>
                        </div>
                        <span class="link_title">Process List</span>
                        
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link py-3 border-bottom" title="Notifications" >
                        <div class="link_icon_container">
                            <i class="fa fa-bell"></i>
                        </div>
                        <span class="link_title">Notifications</span>
                        
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link py-3 border-bottom" title="System Logger" >
                        <div class="link_icon_container">
                            <i class="fa fa-bullhorn"></i>
                        </div>
                        <span class="link_title">System Logger</span>
                        
                    </a>
                </li>
            </div>
            </ul>
        </div>
    </nav>
</div>
</template>
<script>
export default {
  data() {
    return {
        viewportWidth: window.innerWidth,
        currentRoute:null
    };
  },
  watch: {
    '$route'(to, from) {
      this.currentRoute = to.path;
    }
  },
  created() {
    this.currentRoute = this.$route.path;
  },
  mounted() {
    window.addEventListener('resize', this.updateViewportWidth);
  },
  methods: {
    updateViewportWidth() {
      this.viewportWidth = window.innerWidth;
    },
    ToggleSidebarText(){
        this.$refs.NavLinks.classList.toggle('show_navbar');
        this.closeAllAccordion();
    },
    removeShow(event){
        if(this.viewportWidth > 991){
            if(!this.$refs.NavLinks.classList.contains( "show_navbar")){
                event.target.querySelector('.accordion-collapse').classList.remove("show");
                setTimeout(() => {
                    event.target.querySelector('.accordion-collapse').classList.remove("show");
                }, 350);
                event.target.querySelector('.nav-link').classList.add("collapsed");
            }
        }
    },
    closeAccordionAndSidebar(){
        this.$refs.NavLinks.classList.remove('show_navbar');
        this.closeAllAccordion();
    },  
    closeAllAccordion(){
        const accordionItems = document.querySelectorAll('.header_comp .accordion-collapse');
        accordionItems.forEach(item => {
            item.classList.remove('show');
        });
        const accordionButtons = document.querySelectorAll('.header_comp .accordion-button');
        accordionButtons.forEach(button => {
            button.classList.add('collapsed');
        });

        if(this.viewportWidth < 992){
            this.$refs.toggleBtn.click();
        }

        setTimeout(() => {
            accordionItems.forEach(item => {
                item.classList.remove('show');
            });
        }, 350);
        
    }
  }
};
</script>
<style scoped>
.header_comp nav{
    background-color: var(--theme_color);
}
.header_comp .navbar i{
    color: white;
}
.header_comp .navbar .navbar-brand{
    max-width: 177px;
}
.header_comp .navbar .logo_sidbr{
    margin-right: auto;
    display: flex;
    align-items: center;
    gap: 4px;
}
.header_comp .navbar .sidebar-toggler{
    padding: 0.25rem 0.75rem;
    display: none;
}
.header_comp .navbar  .toggle_btn{
    font-size: 24px;
    border-radius: 0;
    border: 1px solid white;
    line-height: 1.5;
    height: 50px;
}
.header_comp .navbar .toggle_btn:focus{
    box-shadow: none;
}
.header_comp .navbar .toggle_btn .fa{
    color: white;
}
.header_comp .navbar .top_right_prt{
    display: flex;
    align-items: center;
    gap: 15px;
}
.header_comp .navbar .setting-flip{
    width: 50px;
    padding: 5px;
}
.header_comp .navbar .setting-flip img{
    width: 100%;
}
.header_comp .navbar .Tooltip-flip{
    width: 20px;
    align-self: flex-end;
    margin-right: 8px;
}
.header_comp .navbar .Tooltip-flip img{
    width: 100%;
}
.header_comp .navbar .navbar-collapse{
    flex-basis: 100%;
}
.header_comp .navbar .navbar-nav{
    margin-right: auto;
}
.header_comp .navbar .nav-link{
    display: flex;
    padding: 15px;
    align-items: center;
}
.header_comp .navbar .nav-item i{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}
.header_comp .navbar .nav-link img{
    width: 28px;
}
.header_comp .navbar .nav-link .link_title{
    color: white;
    margin-left: 4px;
}
.header_comp .navbar .nav-item{
    background-color: var(--theme_color);
}
.header_comp .navbar .nav-link:hover{
    transition: none;
    background-color: var(--theme_color_2);
}
.active{
    background-color: var(--theme_color_2) !important;
}
.header_comp .navbar .nav-item .arrow{
    display: none;
}
.header_comp .navbar .nav-item .link_icon_container{
    width: 40px;
    height: 25px;
    display: flex;
    justify-content: center;
    flex: none;
}
.accordion-item{
    background-color: transparent;
    border: none;
}
.accordion-collapse{
    position: relative;
    left: 10%;
    width: 90%;
    border-radius: 0 !important;
    background-color: var(--theme_color);
}
.nav-link.accordion-button{
    background-color: var(--theme_color_2);
}
.nav-link.accordion-button.collapsed{
    background-color: var(--theme_color);
}
.nav-item > .nav-link > .link_title, .nav-item > .accordion-item > .nav-link > .link_title{
    text-wrap: nowrap !important;
}
.accordion-button::after{
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23FFFFFF' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 5L8 11L14 5'/%3E%3C/svg%3E");
}
.nv_logo_img{
    max-height: 57px;
    max-width: 180px;
}
/* RESPONSIVE */

@media screen and (min-width: 992px) {
    .header_comp .nav-item > .accordion-item > .accordion-button::after{
        transition: all ease 0.35s;
        width: 0;
    }
    .show_navbar .nav-item > .accordion-item > .accordion-button::after{
        width: var(--bs-accordion-btn-icon-width);
    }
    .header_comp .navbar .nav-item:hover .accordion-item > .accordion-button::after{
        width: var(--bs-accordion-btn-icon-width);
    }
    .header_comp .navbar .sidebar-toggler {
        display: block;
    }
    .header_comp .navbar{
        flex-wrap: wrap;
    }
    .header_comp .navbar .navbar-collapse{
        position: absolute;
        display: flex;
        top: 73px;
        left: 0;
    }
    .header_comp .navbar .navbar-nav{
        width: 70px;
        transition: width .35s ease;
        margin-right: 0;
        flex-direction: column;
        overflow: visible;
    }
    .header_comp .navbar .navbar-nav.show_navbar{
        width: unset;       /* Solved Scrolling */
       overflow-y: auto;
       max-height: calc(100vh - 73px);
    }
    .header_comp .navbar .nav-link .link_title{
        transition: width .35s ease;
        width: 0;
        overflow-x: hidden;
        text-wrap: wrap;
    }
    .header_comp .navbar .nav-item{
        width: 70px;
        transition: width .35s ease;
        border-collapse: collapse;
    }
    .header_comp .navbar .nav-item:hover{
        width: 328px;
        
    }
    .header_comp .navbar .navbar-nav.show_navbar .nav-item{
        width: 328px;
    }
    .header_comp .navbar .nav-item:hover .link_title{
       width: 258px;
    }
    .header_comp .navbar .navbar-nav.show_navbar .link_title{
       width: 258px;
    }
    .accordion-collapse{
        position: relative;
        left: 10%;
        width: 90%;
        border-radius: 0 !important;
        background-color: var(--theme_color);
    }
    
    .nav-item > .accordion-item > .accordion-collapse{
        position: absolute;
        left: 76px;
        color: white;
        width: 252px;
       max-height: 75vh;       /*Set Sidebar Dropdown Max height as needed */
        overflow: auto; 
    }
    .nav-item > .accordion-item > .accordion-collapse.collapsing{
        overflow: hidden;   /* Hides Scrollbar When Collapsing */
    }
    .show_navbar .nav-item > .accordion-item > .accordion-collapse{
        position: relative;
        left: 28px;
        width: 300px;
        max-height: unset;  
    }
}
@media screen and (max-width: 991px) {
    .navbar-collapse.collapse{
        overflow-y: auto;
        max-height: calc(100vh - 173px);
    }
}
</style>