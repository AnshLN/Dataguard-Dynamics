<template>
    <cardDesignPage :page-data="Appearance"></cardDesignPage>
    </template>
    <script>
    import cardDesignPage from "../../CardContainingPagesDesign.vue";
    export default {
      components: {
        cardDesignPage
      },
      data() {
        return {
            Appearance: {
                pageTitle:"Appearance Dashboard",
                currentPageImg:"fa-solid fa-palette",
                pageInfo:"Welcome to Your Appearance Tools",
                pageDescription:"Manage Your Appearance to make your Business work better for you.",
                breadcrumbs: [
                    { name: 'Dashboard', path: '/admin/dashboard' },
                    { name: 'CMS', path: '/admin/cms'},
                    { name: 'Appearance', path: '/admin/cms/appearance' }                   //follow the sequence of breadcrumbs , last item of breadcrumbs will remain ACTIVE
                ],
                cards: [
                    {
                        "path": "/admin/cms/appearance/menu",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/menu.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/menu_hover.png",
                        'check_hover': false,
                        'icon':'fa-solid fa-bars',
                        "title": "Menu"
                    },
                    // {
                    //     "path": "/admin/cms/appearance/cmspages",
                    //     "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/cmspages.png",
                    //     "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/cmspages_hover.png",
                    //     'check_hover': false,
                    //     'icon':'fa-solid fa-file',
                    //     "title": "Pages"
                    // },
                    // {
                    //     "path": "/admin/cms/appearance/widgets",
                    //     "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/widgets.png",
                    //     "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/widgets_hover.png",
                    //     'check_hover': false,
                    //     'icon':'fa-solid fa-grip',
                    //     "title": "Widgets"
                    // }
                ]
            }
        };
      },
    };
    </script>
    <style scoped>
    
    </style>