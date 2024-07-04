<template>
    <div class="form-check my-2">
        <input class="form-check-input" type="checkbox" :value="JSON.stringify(item)" :id="computedId" @change="toggleCheck"/>
        <label class="form-check-label" :for="computedId">{{ item.text }}</label>
        <category-item v-if="item.children" v-for="(child, childIndex) in item.children" :key="childIndex" :item="child" :index="childIndex" :parentId="computedId" :toggle-check="toggleCheck"/>
    </div>
</template>
<script>
    export default {
        name: 'CategoryItem',
        props: {
            item: Object,
            index: Number,
            parentId: String,
            toggleCheck: Function
        },
        computed: {
            computedId() {
                return this.parentId ? `${this.parentId}_${this.index}` : `c_${this.index}`;
            }
        }
    }
</script>
<style scoped>
.form-check-input:checked{
    background-color: var(--theme_color);
    border-color: var(--theme_color);
}
.accordion .form-check-input{
    border: var(--bs-border-width) solid #000000;
}
</style>