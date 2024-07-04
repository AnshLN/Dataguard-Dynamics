<template>
    <cardDesignPage :page-data="Integrated_Modules"></cardDesignPage>
    </template>
    <script>
    import cardDesignPage from "../../../CardContainingPagesDesign.vue";
    export default {
      components: {
        cardDesignPage
      },
      data() {
        return {
            Integrated_Modules: {
                pageTitle:"Integrated Modules Dashboard",
                currentPageImg:"fa-solid fa-puzzle-piece",
                pageInfo:"Welcome to Your Integrated Modules Tools",
                pageDescription:"Manage Your Integrated Modules to make your Business work better for you.",
                breadcrumbs: [
                    { name: 'Dashboard', path: '/admin/dashboard' },
                    { name: 'CMS', path: '/admin/cms'}, 
                    { name: 'CMS Marketing', path: '/admin/cms/cms-marketing' },
                    { name: 'Integrated Modules', path: '/admin/cms/cms-marketing/integrated-modules'}                  //follow the sequence of breadcrumbs , last item of breadcrumbs will remain ACTIVE
                ],
                cards: [
                    {
                        "path": "/admin/cms/cms-marketing/integrated-modules/floatingads",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/floatingads.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/floatingads_hover.png",
                        'check_hover': false,
                        'icon':'fa-solid fa-newspaper',
                        "title": "Floating Ads"
                    }
                ]
            }
        };
      },
    };
    </script>
    <style scoped>
    
    </style>