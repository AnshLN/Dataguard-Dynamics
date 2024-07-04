<template>
    <formPageDesign :page-data="CMSMenuData">
        <h3>There Will be Table</h3>
        <div class="row">
    <BaseTree v-model="ModalData" ref="tree" @check:node="onCheckNode" class="m2 col-4">
      <template #default="{ node, stat }">
        
            <button @click="stat.open = !stat.open">
            {{ stat.open ? '-' : '+' }}
            </button>
            <input type="checkbox" v-model="stat.checked" />
            {{ node.text }}
       
      </template>
    </BaseTree>
    <div v-if="treeData[0]"  class="col-8 MenuItem_container">
                            <Draggable class="mtl-tree" v-model="treeData" treeLine>
                                <template #default="{ node, stat }">
                                <OpenIcon
                                    v-if="stat.children.length"
                                    :open="stat.open"
                                    class="mtl-mr"
                                    @click.native="stat.open = !stat.open"
                                />
                                <input
                                    class="mtl-checkbox mtl-mr"
                                    type="checkbox"
                                    v-model="stat.checked"
                                />
                                <span class="mtl-ml">{{ node.text + stat.level }}</span>
                                </template>
                            </Draggable>
                          </div>
                        </div>
    </formPageDesign>
</template>
<script>
import formPageDesign from "../../TableContainingPages.vue";
import { BaseTree, Draggable, pro, OpenIcon } from '@he-tree/vue'
  import '@he-tree/vue/style/default.css'
  import '@he-tree/vue/style/material-design.css'
    export default {
        components: {
        formPageDesign,
        BaseTree,
        Draggable,
        OpenIcon,
      },
      data() {
          return{
            CMSMenuData:{
                breadcrumbs: [
                    { name: 'Dashboard', path: '/admin/dashboard' },
                    { name: 'CMS', path: '/admin/cms'},
                    { name: 'Appearance', path: '/admin/cms/appearance' },
                    { name: 'Pages', path: '/admin/cms/appearance/cmspages'}                   //follow the sequence of breadcrumbs , last item of breadcrumbs will remain ACTIVE
                ],
                caption_icon: 'fa fa-desktop font-green',
                caption_title: 'PAGES',
                action_links:[ 
                    {
                    href: '/admin/cms/appearance/cmspages/new',
                    title: 'Add New',
                    icon: 'fa fa-plus'
                    },
                    {
                    href: '/admin/cms/appearance/cmspages/managemenu',
                    title: 'Tools',
                    icon: 'fa fa-share'
                    }
                ]
            },
            ModalData: [
                {
                "text": "Living Room",
                "id": "unique_key_1",
                "children": [
                    {"text": "Living Room Sets", "id": "unique_key_1_1"},
                    {"text": "Sofa Sets", "id": "unique_key_1_2"},
                    {"text": "Sofas", "id": "unique_key_1_3"},
                    {"text": "Sectionals", "id": "unique_key_1_4"},
                    {"text": "Sleeper Sofas", "id": "unique_key_1_5"},
                    {"text": "Coffee Tables", "id": "unique_key_1_6"}
                ]
                },
                {
                "text": "Bedroom",
                "id": "unique_key_2",
                "children": [
                    {"text": "Bedroom Sets", "id": "unique_key_2_1"},
                    {"text": "Beds", "id": "unique_key_2_2"},
                    {"text": "Chests", "id": "unique_key_2_3"},
                    {"text": "Bedroom Chairs", "id": "unique_key_2_4"},
                    {"text": "Nightstands", "id": "unique_key_2_5"},
                    {"text": "Vanities", "id": "unique_key_2_6"}
                ]
                },
                {
                "text": "Kids",
                "id": "unique_key_3",
                "children": [
                    {"text": "Kids Bedroom Sets", "id": "unique_key_3_1"},
                    {"text": "Kids Beds", "id": "unique_key_3_2"},
                    {"text": "Kids Chests", "id": "unique_key_3_3"},
                    {"text": "Kids Desks", "id": "unique_key_3_4"},
                    {"text": "Kids Storage", "id": "unique_key_3_5"},
                    {
                    "text": "Kids Bedding",
                    "id": "unique_key_3_6",
                    "children": [
                        {"text": "Kids Comforters", "id": "unique_key_3_6_1"},
                        {"text": "Kids Quilts", "id": "unique_key_3_6_2"}
                    ]
                    }
                ]
                }
            ],
        checked: [],
        treeData:[],
        treeDataLength:0,
        }
    },
    methods:{
        onCheckNode() {
        this.checked = this.$refs.tree.getChecked().map((v) => v.data);

        this.treeData = [];

        for(let i = 0;i<this.checked.length;i++){
                this.treeData.push(this.checked[i]);
                if(this.checked[i].children){
                    let childLength = this.checked[i];
                    for(let j = 0;j<childLength.children.length;j++){
                        if(childLength.children[j].children){
                            i += childLength.children[j].children.length;
                        }
                    }
                    i += childLength.children.length;
                }
            }

            this.treeDataLengthCounter();
      },

    },
}
</script>
<style scoped>
</style>