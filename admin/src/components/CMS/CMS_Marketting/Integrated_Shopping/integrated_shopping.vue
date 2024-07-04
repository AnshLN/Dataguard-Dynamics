<template>
    <cardDesignPage :page-data="Integrated_Shopping"></cardDesignPage>
    </template>
    <script>
    import cardDesignPage from "../../../CardContainingPagesDesign.vue";
    export default {
      components: {
        cardDesignPage
      },
      data() {
        return {
            Integrated_Shopping: {
                pageTitle:"Integrated Shopping Dashboard",
                currentPageImg:"fa-solid fa-cart-arrow-down",
                pageInfo:"Welcome to Your Integrated Shopping Tools",
                pageDescription:"Manage Your Integrated Shopping to make your Business work better for you.",
                breadcrumbs: [
                    { name: 'Dashboard', path: '/admin/dashboard' },
                    { name: 'CMS', path: '/admin/cms'}, 
                    { name: 'CMS Marketing', path: '/admin/cms/cms-marketing' },
                    { name: 'Integrated Shopping', path: '/admin/cms/cms-marketing/integrated-shopping' }                  //follow the sequence of breadcrumbs , last item of breadcrumbs will remain ACTIVE
                ],
                cards: [
                    {
                        "path": "/admin/cms/cms-marketing/integrated-shopping/amazon-market-place",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/amazon-market-place.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/amazon-market-place_hover.png",
                        'check_hover': false,
                        'icon':'fa-brands fa-amazon',
                        "title": "Amazon Market Place"
                    },
                    {
                        "path": "/admin/cms/cms-marketing/integrated-shopping/facebook-marketting",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/facebook-marketing.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/facebook-marketing_hover.png",
                        'check_hover': false,
                        'icon':'fa-brands fa-facebook-f',
                        "title": "Facebook Marketing"
                    },
                    {
                        "path": "/admin/cms/cms-marketing/integrated-shopping/google-shopping",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/google-shopping.png",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/google-shopping_hover.png",
                        'check_hover': false,
                        'icon':'fa-brands fa-google-plus-g',
                        "title": "Google Shopping"
                    }
                ]
            }
        };
      },
    };
    </script>
    <style scoped>
    
    </style>