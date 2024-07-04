<template>
    <cardDesignPage :page-data="Renaissance_Services"></cardDesignPage>
    </template>
    <script>
    import cardDesignPage from "../../../CardContainingPagesDesign.vue";
    export default {
      components: {
        cardDesignPage
      },
      data() {
        return {
            Renaissance_Services: {
                pageTitle:"DataGuard Dynamics Services Dashboard",
                currentPageImg:"fa-solid fa-shield-halved",
                pageInfo:"Welcome to Your DataGuard Dynamics Services Tools",
                pageDescription:"Manage Your DataGuard Dynamics Services to make your Business work better for you.",
                breadcrumbs: [
                    { name: 'Dashboard', path: '/admin/dashboard' },
                    { name: 'CMS', path: '/admin/cms'}, 
                    { name: 'CMS Marketing', path: '/admin/cms/cms-marketing' },
                    { name: 'DataGuard Dynamics Services', path: '/admin/cms/cms-marketing/renaissance-services' }                  //follow the sequence of breadcrumbs , last item of breadcrumbs will remain ACTIVE
                ],
                cards: [
                    {
                        "path": "/admin/cms/cms-marketing/renaissance-services/accounting",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/accounting.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/accounting_hover.png",
                        'check_hover': false,
                        'icon':'fa-solid fa-book',
                        "title": "Accounting"
                    },
                    {
                        "path": "/admin/cms/cms-marketing/renaissance-services/ecircular",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/ecircular.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/ecircular_hover.png",
                        'check_hover': false,
                        'icon':'fa-solid fa-book-open',
                        "title": "eCircular"
                    },
                    {
                        "path": "/admin/cms/cms-marketing/renaissance-services/media-buying",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/media-buying.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/media-buying_hover.png",
                        'check_hover': false,
                        'icon':'fa-solid fa-tower-cell',
                        "title": "Media Buying"
                    },
                    {
                        "path": "/admin/cms/cms-marketing/renaissance-services/pay-per-click",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/pay-per-click.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/pay-per-click_hover.png",
                        'check_hover': false,
                        'icon':'fa-brands fa-amazon-pay',
                        "title": "Pay Per Click"
                    },
                    {
                        "path": "/admin/cms/cms-marketing/renaissance-services/print",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/print.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/print_hover.png",
                        'check_hover': false,
                        'icon':'fa-solid fa-print',
                        "title": "Print"
                    },
                    {
                        "path": "/admin/cms/cms-marketing/renaissance-services/reputation-management",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/reputation-management.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/reputation-management_hover.png",
                        'check_hover': false,
                        'icon':'fa-solid fa-comments',
                        "title": "Reputation Management"
                    },
                    {
                        "path": "/admin/cms/cms-marketing/renaissance-services/seo",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/seo.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/seo_hover.png",
                        'check_hover': false,
                        'icon':'fa-solid fa-tv',
                        "title": "SEO"
                    },
                    {
                        "path": "/admin/cms/cms-marketing/renaissance-services/social-media",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/social-media.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/social-media_hover.png",
                        'check_hover': false,
                        'icon':'fa-regular fa-thumbs-up',
                        "title": "Social Media"
                    },
                    {
                        "path": "/admin/cms/cms-marketing/renaissance-services/video",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/video.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/video_hover.png",
                        'check_hover': false,
                        'icon':'fa-solid fa-circle-play',
                        "title": "Video"
                    },
                    {
                        "path": "/admin/cms/cms-marketing/renaissance-services/view-360",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/view-360.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/view-360_hover.png",
                        'check_hover': false,
                        'icon':'fa-solid fa-street-view',
                        "title": "View 360°"
                    }
                ]
            }
        };
      },
    };
    </script>
    <style scoped>
    
    </style>