<template>
    <cardDesignPage :page-data="CMS_Marketting"></cardDesignPage>
    </template>
    <script>
    import cardDesignPage from "../../CardContainingPagesDesign.vue";
    export default {
      components: {
        cardDesignPage
      },
      data() {
        return {
            CMS_Marketting: {
                pageTitle:"CMS Marketing Dashboard",
                currentPageImg:"fa-solid fa-square-poll-horizontal",
                pageInfo:"Welcome to Your CMS Marketing Tools",
                pageDescription:"Manage Your CMS Marketing to make your Business work better for you. ",
                breadcrumbs: [
                    { name: 'Dashboard', path: '/admin/dashboard' },
                    { name: 'CMS', path: '/admin/cms'},   
                    { name: 'CMS Marketing', path: '/admin/cms/cms-marketing' }                //follow the sequence of breadcrumbs , last item of breadcrumbs will remain ACTIVE
                ],
                cards: [
                    {
                        "path": "/admin/cms/cms-marketing/integrated-modules",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/integrated-modules.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/integrated-modules_hover.png",
                        'check_hover': false,
                        'icon':'fa-solid fa-puzzle-piece',
                        "title": "Integrated Modules"
                    },
                    {
                        "path": "/admin/cms/cms-marketing/integrated-shopping",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/integrated-shopping.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/integrated-shopping_hover.png",
                        'check_hover': false,
                        'icon':'fa-solid fa-cart-arrow-down',
                        "title": "Integrated Shopping"
                    },
                    {
                        "path": "/admin/cms/cms-marketing/renaissance-services",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/renaissance-services.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/renaissance-services_hover.png",
                        'check_hover': false,
                        'icon':'fa-solid fa-shield-halved',
                        "title": "DataGuard Dynamics Services"
                    }
                ]
            }
        };
      },
    };
    </script>
    <style scoped>
    
    </style>