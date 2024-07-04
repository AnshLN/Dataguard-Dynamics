<template>
<cardDesignPage :page-data="CMS"></cardDesignPage>
</template>
<script>
import cardDesignPage from "../CardContainingPagesDesign.vue";
export default {
  components: {
    cardDesignPage
  },
  data() {
    return {
        CMS: {
            pageTitle:"CMS Dashboard",
            currentPageImg:"fa-solid fa-coins",
            pageInfo:"Welcome to Your CMS Tools",
            pageDescription:"Manage Your CMS to make your Business work better for you.",
            breadcrumbs: [
                { name: 'Dashboard', path: '/admin/dashboard' },
                { name: 'CMS', path: '/admin/cms'},                   //follow the sequence of breadcrumbs , last item of breadcrumbs will remain ACTIVE
            ],
            cards: [
                {
                    "path": "/admin/cms/appearance",
                    "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/appearance-cos.png",
                    "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/appearance-cos_hover.png",
                    'check_hover': false,
                    'icon':'fa-solid fa-palette',
                    "title": "Appearance"
                },
                {
                    "path": "/admin/cms/cms-marketing",
                    "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/marketing-advertising.png",
                    "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/marketing-advertising_hover.png",
                    'check_hover': false,
                    'icon':'fa-solid fa-square-poll-horizontal',
                    "title": "CMS Marketing"
                },
                {
                    "path": "/admin/cms/content",
                    "src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/content.png",
                    "hover_src": "https://cdn.rencdn.com/rencommaster/uploads/dashboardwidget/content_hover.png",
                    'check_hover': false,
                    'icon':'fa-solid fa-folder',
                    "title": "Content"
                }
            ]
        }
    };
  },
};
</script>
<style scoped>

</style>