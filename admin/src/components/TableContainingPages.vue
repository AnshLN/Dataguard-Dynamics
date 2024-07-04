<template>
    <div class="form_container_page">
        <div style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li v-for="(item, index) in formPageData.breadcrumbs" :key="index" :class="{ 'breadcrumb-item': true, 'active': index === formPageData.breadcrumbs.length - 1 }">
                <router-link v-if="index !== formPageData.breadcrumbs.length - 1" :to="item.path">{{ item.name }}</router-link>
                <span v-else>{{ item.name }}</span>
                </li>
            </ol>
        </div>
        <div class="form_container">
            <div class="form_header">
                <div class="caption">
                    <i :class="formPageData.caption_icon"></i>
                    <h5>{{ formPageData.caption_title }}</h5>
                </div>
                <div class="actions">
                    <router-link v-if="formPageData.action_links[0]" v-for="(item, index) in formPageData.action_links" :to="item.href" :key="index" :title="item.title">
                        <span>{{ item.title }}</span>
                        <i :class="item.icon"></i>
                    </router-link>
                </div>
            </div>
            <div class="table_container">
                <!-- THERE IS DATA TABLE / ADD NEW / ASSIGNMENU -->
                <slot></slot>                                        
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
        formPageData :  this.pageData
    };
}
}
</script>
<style scoped>
.form_container_page{
    padding: 15px;
    color: black;
    background-color: white;
    min-height: 666px;
}
.form_container_page .breadcrumb-item a,.form_container_page .breadcrumb-item{
    color: var(--theme_color);
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
}
.form_container_page .breadcrumb-item a:hover{
    text-decoration: underline;
    color: var(--theme_color_2);
}
.form_container_page .breadcrumb-item.active{
    color: var(--theme_color_2);
}
.form_container_page .form_container .caption h5{
    font-weight: bold;
    margin-bottom: 0;
}
.form_container_page .form_container{
    border: 1px solid var(--bs-border-color);
    border-radius: 16px;
}
.form_container_page .form_container .form_header{
    padding: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--bs-border-color);
}
.form_container_page .form_container .form_header>div{
    display: flex;
    align-items: center;
    gap: 16px;
}
.form_container_page .form_container .form_header .caption i{
    font-size: 22px;
    border: 1px solid black;
    padding: 7px;
    border-radius: 4px;
}
.form_container_page .form_container .form_header .actions a{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    text-decoration: none;
    color: black;
    border-radius: 6px;
    padding: 10px;
    background-color: var(--theme_color);
    color: white;
    transition: all ease .25s;
} 
.form_container_page .form_container .form_header .actions a:hover{
    background-color: var(--theme_color_2);
}
.form_container_page .form_container .table_container{
    padding: 18px;
}

</style>