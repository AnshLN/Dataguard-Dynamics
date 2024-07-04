<template>
    <cardDesignPage :page-data="Dashboard"></cardDesignPage>
    </template>
    <script>
    import cardDesignPage from "../CardContainingPagesDesign.vue";
    export default {
      components: {
        cardDesignPage
      },
      data() {
        return {
            Dashboard: {
                pageTitle:"Data Control & Organization",
                currentPageImg:"",
                pageInfo:"Welcome, " + JSON.parse(sessionStorage.getItem('user')).name,
                pageDescription:"Manage Your CMS, CRM and POS to make your Business work better for you.",
                breadcrumbs: [
                    {
                        name: 'Dashboard',
                        path: '/admin/dashboard'
                    }
                ],                   //follow the sequence of breadcrumbs , last item of breadcrumbs will remain ACTIVE
                cards: [
                    {
                        "path": "/admin/cms",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/contentcms.jpeg",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/contentcms_hover.jpeg",
                        'check_hover': false,
                        'icon':'fa-solid fa-coins',
                        "title": "CMS"
                    },
                    {
                        "path": "/admin/crm",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/crm.jpeg",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/crm_hover.jpeg",
                        'check_hover': false,
                        'icon':'fa-solid fa-users-viewfinder',
                        "title": "CRM"
                    },
                    {
                        "path": "/admin/pos",
                        "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/pos.jpeg",
                        "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/pos_hover.jpeg",
                        'check_hover': false,
                        'icon':'fas fa-cloud-upload',
                        "title": "POS"
                    }
                ]
            }
        };
      },
    };
    </script>
    <style scoped>
    
    </style>