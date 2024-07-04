<template>
    <div class="main-content">
        <div class="card text-center">
            <div class="card-header">
                <h4 class="my-0">
                {{ cardPageData.pageTitle }}
                </h4>
            </div>
            <div class="card-body">
                <div style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li v-for="(item, index) in cardPageData.breadcrumbs" :key="index" :class="{ 'breadcrumb-item': true, 'active': index === cardPageData.breadcrumbs.length - 1 }">
                        <router-link v-if="index !== cardPageData.breadcrumbs.length - 1" :to="item.path">{{ item.name }}</router-link>
                        <span v-else>{{ item.name }}</span>
                        </li>
                    </ol>
                </div>
                 <div v-if="cardPageData.currentPageImg" class="current_page_img">
                    <i :class="cardPageData.currentPageImg"></i>
                </div> 
                <h5 class="card-title">{{ cardPageData.pageInfo }}</h5>
                <p class="card-text">{{ cardPageData.pageDescription }}</p>
                <div class="row cards-container">
                    <div v-for="(card, index) in cardPageData.cards" :key="index" class="col-lg-4 col-12">
                        <!-- <router-link :to="card.path" class="card-link" @mouseover="card.check_hover = true" @mouseleave="card.check_hover = false"> -->
                            <router-link :to="card.path" class="card-link">
                            <div class="card">
                                <div class="card-img">
                                    <!-- <img :src="card.check_hover ? card.hover_src : card.src" class="card-img-top" :alt="card.title"> -->
                                    <i :class="card.icon"></i>
                                </div>
                                <div class="card-header">
                                    <h5 class="my-0">{{ card.title }}</h5>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
    pageData: {
      type: Object,
      required: true
    }
  },
  data() {
      return{
        cardPageData :  this.pageData
    };
},
};
</script>
<style scoped>

/* All Pages CSS */
.main-content{
    padding: 15px;
    color: black;
    background-color: white;
    min-height: 666px;
}
.main-content .card .current_page_img{
    margin: auto;
    width: 183.55px;
    height: 163px;
}
.main-content .card .current_page_img i{
    font-size: 100px;
    color: var(--theme_color_2);
    width: 100%;
}
.main-content .card .card-header{
    padding: 10px;
}
.main-content > .card > .card-body{
    padding-top: 30px;
}
.main-content .cards-container .card .card-img{
    padding: 20px 0;
    width: 100%;
}
.main-content .cards-container .card i{
    transition: all ease .22s;
    font-size: 100px;
    color: var(--theme_color);
    margin: auto;
}

.main-content .cards-container .card-link{
    text-decoration: none;
}
.main-content .cards-container .card{
    transition: all ease 0.22s;
}
.main-content .cards-container .card-link .card-header h5{
    transition: color ease 0.22s;
}
.main-content .cards-container .card-link:hover .card{
    border: 1px solid var(--theme_color_2);
    transform: translateY(-10px);
}
.main-content .cards-container .card-link:hover .card i{
    color: var(--theme_color_2);
}
.main-content .row.cards-container .col-lg-4.col-12{
    margin-top: 12px;
}
.main-content .cards-container .card-link:hover .card-header h5{
    color: var(--theme_color_2);
}
.main-content .cards-container .card .card-header{
    border-bottom: none;
    border-top: var(--bs-card-border-width) solid var(--bs-card-border-color);;
}
.main-content .card-body .breadcrumb-item a,.main-content .card-body .breadcrumb-item{
    color: var(--theme_color);
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
}
.main-content .card-body .breadcrumb-item a:hover{
    text-decoration: underline;
    color: var(--theme_color_2);
}
.main-content .card-body .breadcrumb-item.active{
    color: var(--theme_color_2);
}
</style>