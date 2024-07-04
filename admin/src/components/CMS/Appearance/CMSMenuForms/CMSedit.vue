<template>
  <formPageDesign :page-data="CMSMenuEditData">
      <div v-if="ErrorHandle.dataLoading">
          <v-progress-linear indeterminate></v-progress-linear>
          <div class="loading-text text-center">Loading...Please wait</div>
      </div>
      <div v-else class="row">
          <div class="col-lg-5">
              <div class="accordion" id="accordionExample">
                  <div class="accordion-item" ref="ref_pages">
                      <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <i class="fa fa-desktop"></i>
                          Pages
                      </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                          <div v-if="FormData.Pages[0]" class="accordion-body">
                              <div v-for="(item, index) in FormData.Pages" :key="index" class="form-check my-2">
                                  <input class="form-check-input" type="checkbox" :value="JSON.stringify(item)" :id="'PagesCheck_'+index">
                                  <label class="form-check-label" :for="'PagesCheck_'+index">
                                      {{ item.text }}
                                  </label>
                              </div>
                              <div class="w-100"><button class="btn theme-btn" @click="addPages()">Add to menu / Next</button></div>
                          </div>
                          <p class="text-center p-2" v-else>
                              No Data Available
                          </p>
                      </div>
                  </div>
                  <div class="accordion-item" ref="ref_category">
                      <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <i class="fa fa-book"></i>
                          Categories
                      </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div v-if="FormData.Categories[0]" class="accordion-body">
                          <category-item v-for="(item, index) in FormData.Categories" :key="index" :item="item" :index="index" :toggle-check="toggleCheck"/>
                          <div class="w-100"><button class="btn theme-btn" @click="addCategory()">Add to menu / Next</button></div>
                      </div>
                      <p  class="text-center p-2" v-else>
                          No Data Available
                      </p>
                      </div>
                  </div>
                  <div class="accordion-item" ref="ref_brand">
                      <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <i class="fa fa-briefcase"></i>
                          Brand
                      </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div v-if="FormData.Brand[0]" class="accordion-body">
                              <div v-for="(item, index) in FormData.Brand" :key="index" class="form-check my-2">
                                  <input class="form-check-input" type="checkbox" :value="JSON.stringify(item)" :id="'BrandCheck_'+index">
                                  <label class="form-check-label" :for="'BrandCheck_'+index">
                                      {{ item.text }}
                                  </label>
                              </div>
                              <div class="w-100"><button class="btn theme-btn" @click="addBrands()">Add to menu / Next</button></div>
                      </div>
                      <p class="text-center p-2" v-else>
                          No Data Available
                      </p>
                      </div>
                  </div>
                  <div class="accordion-item" ref="ref_collection_grp">
                      <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                          <i class="fa fa-book"></i>
                          Collection Groups
                      </button>
                      </h2>
                      <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div v-if="FormData.Collection_Groups[0]" class="accordion-body">
                          <div v-for="(item, index) in FormData.Collection_Groups" :key="index" class="form-check my-2">
                                  <input class="form-check-input" type="checkbox" :value="JSON.stringify(item)" :id="'Collection_Groups_'+index">
                                  <label class="form-check-label" :for="'Collection_Groups_'+index">
                                      {{ item.text }}
                                  </label>
                              </div>
                              <div class="w-100"><button class="btn theme-btn" @click="addCollectionGrp()">Add to menu / Next</button></div>
                      </div>
                      <p class="text-center p-2" v-else>
                          No Data Available
                      </p>
                      </div>
                  </div>
                  <div class="accordion-item" ref="ref_custom_links">
                      <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                          <i class="fa fa-book"></i>
                          Custom Links
                      </button>
                      </h2>
                      <div id="collapseFive" class="accordion-collapse collapse clpse5" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                          <small v-if="ErrorHandle.menuNameRequired" class="text-danger">*required</small>
                          <div class="input-group mb-3">
                              <span class="input-group-text"><i class="fa fa-text-width"></i></span>
                              <input type="text" class="form-control shadow-none" v-model="USER_SELECTED.custom_link_details.text" @input="ErrorHandle.menuNameRequired = false" placeholder="Menu Name" :class="{ 'is-invalid' : ErrorHandle.menuNameRequired }" ref="inp">
                          </div>
                          <div class="input-group mb-3">
                              <span class="input-group-text"><i class="fab fa-html5"></i></span>
                              <input type="text" class="form-control shadow-none" v-model="USER_SELECTED.custom_link_details.url" placeholder="Menu Url">
                          </div>
                          <div class="mb-3">
                              <select class="form-select shadow-none" v-model="USER_SELECTED.custom_link_details.target">
                                  <option selected value="_self">Open in same window</option>
                                  <option value="_blank">Open in new window</option>
                              </select>
                          </div>
                          <div class="mb-3">
                              <div class="dropdown d-grid">
                              <button class="form-select shadow-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  <span v-if="!USER_SELECTED.custom_link_details.icon">Select icon</span>
                                  <span v-else class="d-flex align-center justify-start">
                                      Selected Icon : 
                                  <i class="ms-2 fa" :class="USER_SELECTED.custom_link_details.icon"></i>
                                  <span class="ms-2">{{ USER_SELECTED.custom_link_details.icon }}</span>
                                  <a href="javascript:void(0)" @click="USER_SELECTED.custom_link_details.icon = ''" class="text-danger ms-auto icon-remove"><i class="fa fa-times-circle"></i></a>
                                  </span>
                              </button>
                              <ul class="dropdown-menu link_container overflow-auto">
                                  <li v-for="(item, index) in FormData.custom_link_icons" :key="index"><a class="dropdown-item py-2" :class="{'active' : USER_SELECTED.custom_link_details.icon === item}" @click.prevent="USER_SELECTED.custom_link_details.icon=item" href="#">
                                      <i class="fa" :class="item"></i>
                                      <span class="ms-2">{{ item }}</span>
                                  </a></li>
                              </ul>
                              </div>
                          </div>
                          <div class="mb-3">
                              <label for="Position_Select">icon Position : </label>
                              <select class="form-select shadow-none" id="Position_Select" v-model="USER_SELECTED.custom_link_details.icon_position">
                                  <option selected value="before">Before</option>
                                  <option value="after">After</option>
                              </select>
                          </div>
                          <div class="w-100"><button class="btn theme-btn" @click="addCustomLinks()">Add to menu</button></div>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-lg-7">
              <form action="#" class="container mt-5" @submit.prevent @reset.prevent>
                  <div class="input-container row">
                      <div class="col-sm-4" v-if="ErrorHandle.Name"></div>
                      <small class="text-danger col-sm-8" v-if="ErrorHandle.Name">Required!</small>
                      <label for="MenuName" :class="{'text-danger' : ErrorHandle.Name}" class="col-sm-4"><h6 title="required" class="mb-0">Name <span class="text-danger">*</span> :</h6></label>
                      <div class="col-sm-8 ">
                          <input @input="ErrorHandle.Name = false" name="MenuName" type="text" :class="{ 'border-danger' : ErrorHandle.Name }" class="form-control shadow-none rounded-0" id="MenuName" v-model="Name">
                      </div>
                  </div>
                  <div class="input-container row">
                      <div class="col-sm-4" v-if="ErrorHandle.Slug"></div>
                      <small class="text-danger col-sm-8" v-if="ErrorHandle.Slug">Required!</small>
                      <label for="Slug" :class="{'text-danger' : ErrorHandle.Slug}" class="col-sm-4"><h6 title="required" class="mb-0">Slug <span class="text-danger">*</span> : </h6></label>
                      <div class="col-sm-8 ">
                          <input @input="ErrorHandle.Slug = false" type="text" :class="{ 'border-danger' : ErrorHandle.Slug }" class="form-control shadow-none col-sm-8 rounded-0" id="Slug" v-model="Slug">
                      </div>
                  </div>
                  <div class="input-container row">
                      <div class="col-sm-4" v-if="ErrorHandle.MenuType"></div>
                      <small class="text-danger col-sm-8" v-if="ErrorHandle.MenuType">Required!</small>
                      <label for="MenuType" :class="{'text-danger' : ErrorHandle.MenuType}" class="col-sm-4"><h6 title="required" class="mb-0">Menu Type <span class="text-danger">*</span> :</h6></label>
                      <div class="col-sm-8">
                      <select @change="ErrorHandle.MenuType = false" name="MenuType" id="MenuType" :class="{ 'border-danger' : ErrorHandle.MenuType }" class="form-select shadow-none rounded-0" v-model="Menu_Type">
                          <option selected disabled value="">Select Menu Type</option>
                          <option value="Footer Menu">Footer Menu</option>
                          <option value="Header Menu">Header Menu</option>
                          <option value="Main Menu">Main Menu</option>
                          <option value="Dropdown Menu">Dropdown Menu</option>
                          <option value="Sub Menu">Sub Menu</option>
                          <option value="Navigation Menu">Navigation Menu</option>
                          <option value="Context Menu">Context Menu</option>
                          <option value="Vertical Menu">Vertical Menu</option>
                          <option value="Horizontal Menu">Horizontal Menu</option>
                          <option value="Mobile Menu">Mobile Menu</option>
                          <option value="Responsive Menu">Responsive Menu</option>
                          <option value="Custom Menu">Custom Menu</option>
                      </select>
                  </div>
                  </div>
                  <div class="input-container row">
                      <div class="col-sm-4" v-if="ErrorHandle.MenuItem"></div>
                      <small class="text-danger col-sm-8" v-if="ErrorHandle.MenuItem">Required!</small>
                      <label for="MenuItem" :class="{'text-danger' : ErrorHandle.MenuItem}" class="col-sm-4"><h6 title="required" class="mb-0">Menu Item <span class="text-danger">*</span> :</h6></label>
                      <div class="col-sm-8 MenuItem_container">
                          <div class="form-control rounded-0" :class="{ 'border-danger' : ErrorHandle.MenuItem }">
                              <Draggable v-if="treeData[0]" class="mtl-tree" v-model="treeData">
                                  <template #default="{ node, stat }">
                                      <div class="tree border py-1 px-2">
                                          <button class="status_btn px-2 theme-link" v-if="node.children&&node.children[0]" @click="stat.open = !stat.open">
                                              <i v-if="stat.open" class="fa-solid fa-minus"></i>
                                              <i v-else class="fa-solid fa-plus"></i>
                                          </button>
                                          <span class="mtl-ml product_label">{{ node.text }}</span>
                                          <span>{{ node.type }}</span>
                                          <button class="px-1 mx-1 theme-link" data-bs-toggle="modal" data-bs-target="#DeleteModal" @click="DeleteItemId = node.id">
                                              <i class="fa-solid fa-trash-can"></i>
                                          </button>
                                          <button class="px-1 mx-1 theme-link" data-bs-toggle="modal" data-bs-target="#EditModal" @click="Edit(node.id)">
                                              <i class="fa-solid fa-pen-to-square"></i>
                                          </button>
                                      </div>
                                  </template>
                              </Draggable>
                          </div>
                      </div>
                  </div>
                  <div class="form-switch input-container row">
                          <label class="col-sm-4"><h6 class="mb-0">Enabled/Disabled :</h6></label>
                          <div class="col-sm-8 ">
                          <input name="Enabled_Disabled" class="form-check-input col-sm-8 menu-status" id="Enabled_Disabled" type="checkbox" v-model="Enable_Disabled">
                      </div>
                  </div>
                  <div class="input-container row">
                      <div class="col-sm-4"></div>
                      <div class="sbmit_reset_cntnr col-sm-8">
                          <button class="btn theme-btn" type="submit" :disabled="ErrorHandle.SaveDataLoading" @click="saveToJson()">
                              <div v-if="ErrorHandle.SaveDataLoading" class="spinner-border text-light" role="status">
                                  <span class="sr-only">Loading...</span>
                              </div>
                              Save Changes
                          </button>
                          <router-link v-if="!ErrorHandle.SaveDataLoading" class="btn theme-btn" to="/admin/cms/appearance/menu">Cancel</router-link>
                      </div>
                  </div>
          </form>
          </div>
      </div>

      <!-- Modal For Delete -->

      <!-- Modal -->
      <div class="modal fade" id="DeleteModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
              <div class="modal-header">
                  <h5>Are You Sure Want To Remove This Item?</h5>
              </div>
              <div class="modal-body text-center">
                  <i style="font-size: 90px; color: var(--theme_color_2);" class="fas fa-trash"></i>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn theme-btn" data-bs-dismiss="modal" ref="CloseDelete">No</button>
                  <button type="button" class="btn theme-btn" @click="Delete(DeleteItemId)">Yes! Delete</button>
              </div>
              </div>
          </div>
      </div>

      <!-- Modal For Edit -->

      <!-- Modal -->
      <div class="modal fade" id="EditModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
              <div class="modal-header">
                  <h5>Edit Menu</h5>
              </div>
              <div v-if="EditModalItem[0]" class="modal-body">
                  <small v-if="ErrorHandle.menuNameRequiredModal" class="text-danger">*required</small>
                  <div class="input-group mb-3">
                      <span class="input-group-text">
                          <i class="fa fa-text-width"></i>
                      </span>
                      <input @input="ErrorHandle.menuNameRequiredModal = false" type="text" :class="{ 'border-danger' : ErrorHandle.menuNameRequiredModal }" class="form-control shadow-none" v-model="EditModalItem[0].text" placeholder="Menu Name" :readonly="EditModalItem[0].url === undefined">
                  </div>
                  <div v-if="EditModalItem[0].url !== undefined" class="input-group mb-3">
                      <span class="input-group-text">
                          <i class="fab fa-html5"></i>
                      </span>
                      <input type="text" class="form-control shadow-none"  v-model="EditModalItem[0].url" placeholder="Menu Url">
                  </div>
                  <div class="mb-3">
                      <select class="form-select shadow-none" v-model="EditModalItem[0].target">
                          <option value="_self">Open in same window</option>
                          <option value="_blank">Open in new window</option>
                      </select>    
                  </div>
                  <div class="mb-3">
                      <div class="dropdown d-grid">
                      <button class="form-select dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span v-if="!EditModalItem[0].icon">Select icon</span>
                          <span v-else class="d-flex align-center justify-start">
                              Selected Icon : 
                          <i class="ms-2 fa" :class="EditModalItem[0].icon"></i>
                          <span class="ms-2">{{ EditModalItem[0].icon }}</span>
                          <a href="javascript:void(0)" @click="EditModalItem[0].icon = ''" class="text-danger ms-auto icon-remove"><i class="fa fa-times-circle"></i></a>
                          </span>
                      </button>
                      <ul class="dropdown-menu link_container overflow-auto">
                          <li v-for="(item, index) in FormData.custom_link_icons" :key="index"><a class="dropdown-item py-2" :class="{'active' : EditModalItem[0].icon === item}" @click.prevent="EditModalItem[0].icon=item" href="#">
                              <i class="fa" :class="item"></i>
                              <span class="ms-2">{{ item }}</span>
                          </a></li>
                      </ul>
                      </div>
                  </div>
                  <div class="mb-3">
                      <label for="Position_Selectttt">icon Position : </label>
                      <select class="form-select" v-model="EditModalItem[0].icon_position" id="Position_Selectttt">
                          <option value="before">Before</option>
                          <option value="after">After</option>
                      </select>
                  </div>
              </div>
              <div v-if="EditModalItem[0]" class="modal-footer">
                  <button type="button" class="btn theme-btn" data-bs-dismiss="modal" ref="CloseEdit">Cancel</button>
                  <button type="button" class="btn theme-btn" @click="saveEdits()">Change updates!</button>
              </div>
              <div v-if="!EditModalItem[0]" class="modal-body text-center">
                  <div class="spinner-border text-dark m-5" role="status">
                      <span class="visually-hidden">Loading...</span>
                  </div>
              </div>
              </div>
          </div>
      </div>

      <!-- Alert Msg -->
      <!-- Button trigger modal -->
          <button type="button" class="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#dataSaveSuccess" ref="dataSavedSuccessfully">
          Launch demo modal
          </button>

          <!-- Modal -->
          <div class="modal fade" id="dataSaveSuccess" data-bs-backdrop="static" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content border-0">
                  <div class="alert alert-success mb-0" role="alert">
                      Menu Cahnged Successfully Visit <a href="#" @click.prevent="goToTable()" class="alert-link">CMS Menu</a> to see the updates.
                  </div>
                  <button type="button" class="btn theme-btn d-none" data-bs-dismiss="modal" ref="CloseAlertt">Cancel</button>
              </div>
          </div>
          </div>
  </formPageDesign>
</template>
<script>
import formPageDesign from "../../../TableContainingPages.vue";
import { Draggable, pro  } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import '@he-tree/vue/style/material-design.css'
import CategoryItem from './NestedCategorryItem.vue';
import axios from 'axios';

  export default {
    components: {
      formPageDesign,
      Draggable,
      CategoryItem,
    },
    data() {
        return{
          CMSMenuEditData:{
              breadcrumbs: [
                  { name: 'Dashboard', path: '/admin/dashboard' },
                  { name: 'CMS', path: '/admin/cms'},
                  { name: 'Appearance', path: '/admin/cms/appearance' },
                  { name: 'Menu', path: '/admin/cms/appearance/menu'},
                  { name: 'Edit', path: '/admin/cms/appearance/menu/edit'}                   //follow the sequence of breadcrumbs , last item of breadcrumbs will remain ACTIVE
              ],
              caption_icon: 'fas fa-edit',
              caption_title: 'EDIT MENU',
              action_links:[ 
              ]
          },
          FormData:{
          Pages:[
              {"text": "Home", "target": "_self", "icon": "", "icon_position": "before", "type": "Pages"},
              {"text": "About us", "target": "_self", "icon": "", "icon_position": "before", "type": "Pages"},
              {"text": "Terms and Conditions", "target": "_self", "icon": "", "icon_position": "before", "type": "Pages"},
              {"text": "Contact Us", "target": "_self", "icon": "", "icon_position": "before", "type": "Pages"},
              {"text": "Current Ad", "target": "_self", "icon": "", "icon_position": "before", "type": "Pages"},
              {"text": "Coupons", "target": "_self", "icon": "", "icon_position": "before", "type": "Pages"},
              {"text": "Discount", "target": "_self", "icon": "", "icon_position": "before", "type": "Pages"},
              {"text": "In-stock special", "target": "_self", "icon": "", "icon_position": "before", "type": "Pages"},
              {"text": "Sale", "target": "_self", "icon": "", "icon_position": "before", "type": "Pages"},
              {"text": "Living Room Specials", "target": "_self", "icon": "", "icon_position": "before", "type": "Pages"},
              {"text": "Bedroom Specials", "target": "_self", "icon": "", "icon_position": "before", "type": "Pages"},
              {"text": "Mattress Specials", "target": "_self", "icon": "", "icon_position": "before", "type": "Pages"},
              {"text": "Dining Room Specials", "target": "_self", "icon": "", "icon_position": "before", "type": "Pages"},
              {"text": "Entertainment Specials", "target": "_self", "icon": "", "icon_position": "before", "type": "Pages"},
              {"text": "Testimonials", "target": "_self", "icon": "", "icon_position": "before", "type": "Pages"}
              ],
          Categories: [
              {
                  "text": "Living Room",
                  "children": [
                  {"text": "Living Room Sets", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"},
                  {"text": "Sofa Sets", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"},
                  {"text": "Sofas", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"},
                  {"text": "Sectionals", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"},
                  {"text": "Sleeper Sofas", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"},
                  {"text": "Coffee Tables", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"}
                  ],
                  "target": "_self",
                  "icon": "",
                  "icon_position": "before",
                  "type": "Categories"
              },
              {
                  "text": "Bedroom",
                  "children": [
                  {"text": "Bedroom Sets", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"},
                  {"text": "Beds", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"},
                  {"text": "Chests", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"},
                  {"text": "Bedroom Chairs", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"},
                  {"text": "Nightstands", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"},
                  {"text": "Vanities", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"}
                  ],
                  "target": "_self",
                  "icon": "",
                  "icon_position": "before",
                  "type": "Categories"
              },
              {
                  "text": "Kids",
                  "children": [
                  {"text": "Kids Bedroom Sets", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"},
                  {"text": "Kids Beds", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"},
                  {"text": "Kids Chests", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"},
                  {"text": "Kids Desks", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"},
                  {"text": "Kids Storage", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"},
                  {
                      "text": "Kids Bedding",
                      "children": [
                      {"text": "Kids Comforters", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"},
                      {"text": "Kids Quilts", "target": "_self", "icon": "", "icon_position": "before", "type": "Categories"}
                      ],
                      "target": "_self",
                      "icon": "",
                      "icon_position": "before",
                      "type": "Categories"
                  }
                  ],
                  "target": "_self",
                  "icon": "",
                  "icon_position": "before",
                  "type": "Categories"
              }
              ],

          Brand:[
              {"text": "Ashley", "target": "_self", "icon": "", "icon_position": "before", "type": "Brand"},
              {"text": "In-Store Product", "target": "_self", "icon": "", "icon_position": "before", "type": "Brand"},
              {"text": "Malouf", "target": "_self", "icon": "", "icon_position": "before", "type": "Brand"}
              ],
          Collection_Groups:[
              {"text": "Group 2018", "target": "_self", "icon": "", "icon_position": "before", "type": "Collection group"},
              {"text": "Ashley Group", "target": "_self", "icon": "", "icon_position": "before", "type": "Collection group"},
              {"text": "2024 Group", "target": "_self", "icon": "", "icon_position": "before", "type": "Collection group"}
              ],
              custom_link_icons: ['fa-glass', 'fa-music', 'fa-search', 'fa-envelope-o', 'fa-heart', 'fa-star', 'fa-star-o', 'fa-user', 'fa-film', 'fa-th-large', 'fa-th', 'fa-th-list', 'fa-check', 'fa-times', 'fa-search-plus', 'fa-search-minus', 'fa-power-off', 'fa-signal', 'fa-cog', 'fa-trash-o', 'fa-home', 'fa-file-o', 'fa-clock-o', 'fa-road', 'fa-download', 'fa-arrow-circle-o-down', 'fa-arrow-circle-o-up', 'fa-inbox', 'fa-play-circle-o', 'fa-repeat', 'fa-refresh', 'fa-list-alt', 'fa-lock', 'fa-flag', 'fa-headphones', 'fa-volume-off', 'fa-volume-down', 'fa-volume-up', 'fa-qrcode', 'fa-barcode', 'fa-tag', 'fa-tags', 'fa-book', 'fa-bookmark', 'fa-print', 'fa-camera', 'fa-font', 'fa-bold', 'fa-italic', 'fa-text-height', 'fa-text-width', 'fa-align-left', 'fa-align-center', 'fa-align-right', 'fa-align-justify', 'fa-list', 'fa-outdent', 'fa-indent', 'fa-video-camera', 'fa-picture-o', 'fa-pencil', 'fa-map-marker', 'fa-adjust', 'fa-tint', 'fa-pencil-square-o', 'fa-share-square-o', 'fa-check-square-o', 'fa-arrows', 'fa-step-backward', 'fa-fast-backward', 'fa-backward', 'fa-play', 'fa-pause', 'fa-stop', 'fa-forward', 'fa-fast-forward', 'fa-step-forward', 'fa-eject', 'fa-chevron-left', 'fa-chevron-right', 'fa-plus-circle', 'fa-minus-circle', 'fa-times-circle', 'fa-check-circle', 'fa-question-circle', 'fa-info-circle', 'fa-crosshairs', 'fa-times-circle-o', 'fa-check-circle-o', 'fa-ban', 'fa-arrow-left', 'fa-arrow-right', 'fa-arrow-up', 'fa-arrow-down', 'fa-share', 'fa-expand', 'fa-compress', 'fa-plus', 'fa-minus', 'fa-asterisk', 'fa-exclamation-circle', 'fa-gift', 'fa-leaf', 'fa-fire', 'fa-eye', 'fa-eye-slash', 'fa-exclamation-triangle', 'fa-plane', 'fa-calendar', 'fa-random', 'fa-comment', 'fa-magnet', 'fa-chevron-up', 'fa-chevron-down', 'fa-retweet', 'fa-shopping-cart', 'fa-folder', 'fa-folder-open', 'fa-arrows-v', 'fa-arrows-h', 'fa-bar-chart', 'fa-twitter-square', 'fa-facebook-square', 'fa-camera-retro', 'fa-key', 'fa-cogs', 'fa-comments', 'fa-thumbs-o-up', 'fa-thumbs-o-down', 'fa-star-half', 'fa-heart-o', 'fa-sign-out', 'fa-linkedin-square', 'fa-thumb-tack', 'fa-external-link', 'fa-sign-in', 'fa-trophy', 'fa-github-square', 'fa-upload', 'fa-lemon-o', 'fa-phone', 'fa-square-o', 'fa-bookmark-o', 'fa-phone-square', 'fa-twitter', 'fa-facebook', 'fa-github', 'fa-unlock', 'fa-credit-card', 'fa-rss', 'fa-hdd-o', 'fa-bullhorn', 'fa-bell', 'fa-certificate', 'fa-hand-o-right', 'fa-hand-o-left', 'fa-hand-o-up', 'fa-hand-o-down', 'fa-arrow-circle-left', 'fa-arrow-circle-right', 'fa-arrow-circle-up', 'fa-arrow-circle-down', 'fa-globe', 'fa-wrench', 'fa-tasks', 'fa-filter', 'fa-briefcase', 'fa-arrows-alt', 'fa-users', 'fa-link', 'fa-cloud', 'fa-flask', 'fa-scissors', 'fa-files-o', 'fa-paperclip', 'fa-floppy-o', 'fa-square', 'fa-bars', 'fa-list-ul', 'fa-list-ol', 'fa-strikethrough', 'fa-underline', 'fa-table', 'fa-magic', 'fa-truck', 'fa-pinterest', 'fa-pinterest-square', 'fa-google-plus-square', 'fa-google-plus', 'fa-money', 'fa-caret-down', 'fa-caret-up', 'fa-caret-left', 'fa-caret-right', 'fa-columns', 'fa-sort', 'fa-sort-desc', 'fa-sort-asc', 'fa-envelope', 'fa-linkedin', 'fa-undo', 'fa-gavel', 'fa-tachometer', 'fa-comment-o', 'fa-comments-o', 'fa-bolt', 'fa-sitemap', 'fa-umbrella', 'fa-clipboard', 'fa-lightbulb-o', 'fa-exchange', 'fa-cloud-download', 'fa-cloud-upload', 'fa-user-md', 'fa-stethoscope', 'fa-suitcase', 'fa-bell-o', 'fa-coffee', 'fa-cutlery', 'fa-file-text-o', 'fa-building-o', 'fa-hospital-o', 'fa-ambulance', 'fa-medkit', 'fa-fighter-jet', 'fa-beer', 'fa-h-square', 'fa-plus-square', 'fa-angle-double-left', 'fa-angle-double-right', 'fa-angle-double-up', 'fa-angle-double-down', 'fa-angle-left', 'fa-angle-right', 'fa-angle-up', 'fa-angle-down', 'fa-desktop', 'fa-laptop', 'fa-tablet', 'fa-mobile', 'fa-circle-o', 'fa-quote-left', 'fa-quote-right', 'fa-spinner', 'fa-circle', 'fa-reply', 'fa-github-alt', 'fa-folder-o', 'fa-folder-open-o', 'fa-smile-o', 'fa-frown-o', 'fa-meh-o', 'fa-gamepad', 'fa-keyboard-o', 'fa-flag-o', 'fa-flag-checkered', 'fa-terminal', 'fa-code', 'fa-reply-all', 'fa-star-half-o', 'fa-location-arrow', 'fa-crop', 'fa-code-fork', 'fa-chain-broken', 'fa-question', 'fa-info', 'fa-exclamation', 'fa-superscript', 'fa-subscript', 'fa-eraser', 'fa-puzzle-piece', 'fa-microphone', 'fa-microphone-slash', 'fa-shield', 'fa-calendar-o', 'fa-fire-extinguisher', 'fa-rocket', 'fa-maxcdn', 'fa-chevron-circle-left', 'fa-chevron-circle-right', 'fa-chevron-circle-up', 'fa-chevron-circle-down', 'fa-html5', 'fa-css3', 'fa-anchor', 'fa-unlock-alt', 'fa-bullseye', 'fa-ellipsis-h', 'fa-ellipsis-v', 'fa-rss-square', 'fa-play-circle', 'fa-ticket', 'fa-minus-square', 'fa-minus-square-o', 'fa-level-up', 'fa-level-down', 'fa-check-square', 'fa-pencil-square', 'fa-external-link-square', 'fa-share-square', 'fa-compass', 'fa-caret-square-o-down', 'fa-caret-square-o-up', 'fa-caret-square-o-right', 'fa-eur', 'fa-gbp', 'fa-usd', 'fa-inr', 'fa-jpy', 'fa-rub', 'fa-krw', 'fa-btc', 'fa-file', 'fa-file-text', 'fa-sort-alpha-asc', 'fa-sort-alpha-desc', 'fa-sort-amount-asc', 'fa-sort-amount-desc', 'fa-sort-numeric-asc', 'fa-sort-numeric-desc', 'fa-thumbs-up', 'fa-thumbs-down', 'fa-youtube-square', 'fa-youtube', 'fa-xing', 'fa-xing-square', 'fa-youtube-play', 'fa-dropbox', 'fa-stack-overflow', 'fa-instagram', 'fa-flickr', 'fa-adn', 'fa-bitbucket', 'fa-bitbucket-square', 'fa-tumblr', 'fa-tumblr-square', 'fa-long-arrow-down', 'fa-long-arrow-up', 'fa-long-arrow-left', 'fa-long-arrow-right', 'fa-apple', 'fa-windows', 'fa-android', 'fa-linux', 'fa-dribbble', 'fa-skype', 'fa-foursquare', 'fa-trello', 'fa-female', 'fa-male', 'fa-gratipay', 'fa-sun-o', 'fa-moon-o', 'fa-archive', 'fa-bug', 'fa-vk', 'fa-weibo', 'fa-renren', 'fa-pagelines', 'fa-stack-exchange', 'fa-arrow-circle-o-right', 'fa-arrow-circle-o-left', 'fa-caret-square-o-left', 'fa-dot-circle-o', 'fa-wheelchair', 'fa-vimeo-square', 'fa-try', 'fa-plus-square-o', 'fa-space-shuttle', 'fa-slack', 'fa-envelope-square', 'fa-wordpress', 'fa-openid', 'fa-university', 'fa-graduation-cap', 'fa-yahoo', 'fa-google', 'fa-reddit', 'fa-reddit-square', 'fa-stumbleupon-circle', 'fa-stumbleupon', 'fa-delicious', 'fa-digg', 'fa-pied-piper-pp', 'fa-pied-piper-alt', 'fa-drupal', 'fa-joomla', 'fa-language', 'fa-fax', 'fa-building', 'fa-child', 'fa-paw', 'fa-spoon', 'fa-cube', 'fa-cubes', 'fa-behance', 'fa-behance-square', 'fa-steam', 'fa-steam-square', 'fa-recycle', 'fa-car', 'fa-taxi', 'fa-tree', 'fa-spotify', 'fa-deviantart', 'fa-soundcloud', 'fa-database', 'fa-file-pdf-o', 'fa-file-word-o', 'fa-file-excel-o', 'fa-file-powerpoint-o', 'fa-file-image-o', 'fa-file-archive-o', 'fa-file-audio-o', 'fa-file-video-o', 'fa-file-code-o', 'fa-vine', 'fa-codepen', 'fa-jsfiddle', 'fa-life-ring', 'fa-circle-o-notch', 'fa-rebel', 'fa-empire', 'fa-git-square', 'fa-git', 'fa-hacker-news', 'fa-tencent-weibo', 'fa-qq', 'fa-weixin', 'fa-paper-plane', 'fa-paper-plane-o', 'fa-history', 'fa-circle-thin', 'fa-header', 'fa-paragraph', 'fa-sliders', 'fa-share-alt', 'fa-share-alt-square', 'fa-bomb', 'fa-futbol-o', 'fa-tty', 'fa-binoculars', 'fa-plug', 'fa-slideshare', 'fa-twitch', 'fa-yelp', 'fa-newspaper-o', 'fa-wifi', 'fa-calculator', 'fa-paypal', 'fa-google-wallet', 'fa-cc-visa', 'fa-cc-mastercard', 'fa-cc-discover', 'fa-cc-amex', 'fa-cc-paypal', 'fa-cc-stripe', 'fa-bell-slash', 'fa-bell-slash-o', 'fa-trash', 'fa-copyright', 'fa-at', 'fa-eyedropper', 'fa-paint-brush', 'fa-birthday-cake', 'fa-area-chart', 'fa-pie-chart', 'fa-line-chart', 'fa-lastfm', 'fa-lastfm-square', 'fa-toggle-off', 'fa-toggle-on', 'fa-bicycle', 'fa-bus', 'fa-ioxhost', 'fa-angellist', 'fa-cc', 'fa-ils', 'fa-meanpath', 'fa-buysellads', 'fa-connectdevelop', 'fa-dashcube', 'fa-forumbee', 'fa-leanpub', 'fa-sellsy', 'fa-shirtsinbulk', 'fa-simplybuilt', 'fa-skyatlas', 'fa-cart-plus', 'fa-cart-arrow-down', 'fa-diamond', 'fa-ship', 'fa-user-secret', 'fa-motorcycle', 'fa-street-view', 'fa-heartbeat', 'fa-venus', 'fa-mars', 'fa-mercury', 'fa-transgender', 'fa-transgender-alt', 'fa-venus-double', 'fa-mars-double', 'fa-venus-mars', 'fa-mars-stroke', 'fa-mars-stroke-v', 'fa-mars-stroke-h', 'fa-neuter', 'fa-genderless', 'fa-facebook-official', 'fa-pinterest-p', 'fa-whatsapp', 'fa-server', 'fa-user-plus', 'fa-user-times', 'fa-bed', 'fa-viacoin', 'fa-train', 'fa-subway', 'fa-medium', 'fa-y-combinator', 'fa-optin-monster', 'fa-opencart', 'fa-expeditedssl', 'fa-battery-full', 'fa-battery-three-quarters', 'fa-battery-half', 'fa-battery-quarter', 'fa-battery-empty', 'fa-mouse-pointer', 'fa-i-cursor', 'fa-object-group', 'fa-object-ungroup', 'fa-sticky-note', 'fa-sticky-note-o', 'fa-cc-jcb', 'fa-cc-diners-club', 'fa-clone', 'fa-balance-scale', 'fa-hourglass-o', 'fa-hourglass-start', 'fa-hourglass-half', 'fa-hourglass-end', 'fa-hourglass', 'fa-hand-rock-o', 'fa-hand-paper-o', 'fa-hand-scissors-o', 'fa-hand-lizard-o', 'fa-hand-spock-o', 'fa-hand-pointer-o', 'fa-hand-peace-o', 'fa-trademark', 'fa-registered', 'fa-creative-commons', 'fa-gg', 'fa-gg-circle', 'fa-tripadvisor', 'fa-odnoklassniki', 'fa-odnoklassniki-square', 'fa-get-pocket', 'fa-wikipedia-w', 'fa-safari', 'fa-chrome', 'fa-firefox', 'fa-opera', 'fa-internet-explorer', 'fa-television', 'fa-contao', 'fa-500px', 'fa-amazon', 'fa-calendar-plus-o', 'fa-calendar-minus-o', 'fa-calendar-times-o', 'fa-calendar-check-o', 'fa-industry', 'fa-map-pin', 'fa-map-signs', 'fa-map-o', 'fa-map', 'fa-commenting', 'fa-commenting-o', 'fa-houzz', 'fa-vimeo', 'fa-black-tie', 'fa-fonticons', 'fa-reddit-alien', 'fa-edge', 'fa-credit-card-alt', 'fa-codiepie', 'fa-modx', 'fa-fort-awesome', 'fa-usb', 'fa-product-hunt', 'fa-mixcloud', 'fa-scribd', 'fa-pause-circle', 'fa-pause-circle-o', 'fa-stop-circle', 'fa-stop-circle-o', 'fa-shopping-bag', 'fa-shopping-basket', 'fa-hashtag', 'fa-bluetooth', 'fa-bluetooth-b', 'fa-percent', 'fa-gitlab', 'fa-wpbeginner', 'fa-wpforms', 'fa-envira', 'fa-universal-access', 'fa-wheelchair-alt', 'fa-question-circle-o', 'fa-blind', 'fa-audio-description', 'fa-volume-control-phone', 'fa-braille', 'fa-assistive-listening-systems', 'fa-american-sign-language-interpreting', 'fa-deaf', 'fa-glide', 'fa-glide-g', 'fa-sign-language', 'fa-low-vision', 'fa-viadeo', 'fa-viadeo-square', 'fa-snapchat', 'fa-snapchat-ghost', 'fa-snapchat-square', 'fa-pied-piper', 'fa-first-order', 'fa-yoast', 'fa-themeisle', 'fa-google-plus-official', 'fa-font-awesome'],
          },
          USER_SELECTED:{
                  Pages:[],   
                  Categories:[],
                  Brand:[],
                  Collection_Groups:[],
                  custom_link_details:{
                      text:'',
                      url:'http://',
                      target:'_self',
                      icon:'',
                      icon_position:'before',
                      type:'Custom Links',
                  }
              },
              Name:'',
              Slug:'',
              Menu_Type:'',
              treeData: [],       //Draggable js Data
              Enable_Disabled:false,
              MenuId:null,

              DeleteItemId:'',
              EditElementId:'',
              EditModalItem:[],

              // Error Handling data
              ErrorHandle : {
                  dataLoading:true,
                  menuNameRequired:false,
                  menuNameRequiredModal:false,
                  Name:false,
                  Slug:false,
                  MenuType:false,
                  MenuItem:false,
                  SaveDataLoading:false,
              },
      }
  },
  created() {
       this.MenuId = this.$route.params.id;
      this.fetchData();
    },
  methods:{
    async fetchData() {
    try {
      const responseData = await fetch(`/api/CMSMenuTableData/${this.MenuId}`);
      const responseDataData = await responseData.json();
      
      if (!responseData.ok) {
        throw new Error('Failed to fetch data');
      }
      
      this.Name=responseDataData.menu_name;
      this.Slug=responseDataData.Slug;
      this.Menu_Type=responseDataData.Menu_type;
      this.treeData = responseDataData.menu_item;
      this.Enable_Disabled = responseDataData.status === 'Enabled' ? true : false;
      this.ErrorHandle.dataLoading = false;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    },
      toggleCheck(event){
          var element = event.target;
          var checkCntnr = element.closest('div.form-check'); 
          var inputs = checkCntnr.querySelectorAll('.form-check-input');

          // Check all child Checkbox
          if (inputs.length > 1) {
              let isChecked = element.checked;
              inputs.forEach(input => input.checked = isChecked);
          }

          // Check parent checkbox if all child is selected
          function parentInputCheck(container){
              let parent = container.parentElement.closest('div.form-check');
              if(parent){
                  let Inputs = parent.querySelectorAll('.form-check-input');
                  let allChecked = Array.from(Inputs).slice(1).every(Input => Input.checked === true);
                  parent.querySelector('.form-check-input').checked = allChecked;

                  parentInputCheck(parent);
              }
          }
          parentInputCheck(checkCntnr);

          // Values Saving in USER_SELECTED.Categories in nested Format
          let allCheckbox = document.querySelectorAll('#collapseTwo .form-check-input:checked');
          var chkdVal = Array.from(allCheckbox).map(checkbox => JSON.parse(checkbox.value));

          this.USER_SELECTED.Categories = [];

          for(let i = 0;i<chkdVal.length;i++){
              this.USER_SELECTED.Categories.push(chkdVal[i]);
              if(chkdVal[i].children){
                  skipElement(chkdVal[i].children);
              }
              function skipElement(items){
                  items.forEach(item => {
                      i++;
                      if(item.children){
                          skipElement(item.children);
                      }
                  });
              }
          }
      },
    addPages(){
      let allCheckbox = document.querySelectorAll('#collapseOne .form-check-input:checked');
      this.USER_SELECTED.Pages = Array.from(allCheckbox).map(checkbox => JSON.parse(checkbox.value));
      this.treeData = [...this.treeData, ...this.USER_SELECTED.Pages];
      this.treeElementIdAssigner();
      this.USER_SELECTED.Pages = [];
      this.JumpToNextAccordion('#collapseOne .form-check-input:checked','ref_pages');
    },
    addCategory(){
      this.treeData = [...this.treeData, ...this.USER_SELECTED.Categories];
      this.treeElementIdAssigner();
      this.USER_SELECTED.Categories = [];
      this.JumpToNextAccordion('#collapseTwo .form-check-input:checked','ref_category');
    },
    addBrands(){
      let allCheckbox = document.querySelectorAll('#collapseThree .form-check-input:checked');
      this.USER_SELECTED.Brand = Array.from(allCheckbox).map(checkbox => JSON.parse(checkbox.value));
      this.treeData = [...this.treeData, ...this.USER_SELECTED.Brand];
      this.treeElementIdAssigner();
      this.USER_SELECTED.Brand = [];
      this.JumpToNextAccordion('#collapseThree .form-check-input:checked','ref_brand');
    },
    addCollectionGrp(){
      let allCheckbox = document.querySelectorAll('#collapseFour .form-check-input:checked');
      this.USER_SELECTED.Collection_Groups = Array.from(allCheckbox).map(checkbox => JSON.parse(checkbox.value));
      this.treeData = [...this.treeData, ...this.USER_SELECTED.Collection_Groups];
      this.treeElementIdAssigner();
      this.USER_SELECTED.Collection_Groups = [];
      this.JumpToNextAccordion('#collapseFour .form-check-input:checked','ref_collection_grp');

      // Focus on next accordion name field
      this.$refs.inp.focus();
    },
    addCustomLinks(){
      if(!this.USER_SELECTED.custom_link_details.text){
          this.ErrorHandle.menuNameRequired = true;
          this.$refs.inp.focus();
      }
      else{
          document.getElementById('MenuName').focus();

          let temp = [{
              text: this.USER_SELECTED.custom_link_details.text,
              url: this.USER_SELECTED.custom_link_details.url,
              target: this.USER_SELECTED.custom_link_details.target,
              icon: this.USER_SELECTED.custom_link_details.icon,
              icon_position: this.USER_SELECTED.custom_link_details.icon_position,
              type: this.USER_SELECTED.custom_link_details.type,
          }];
          this.treeData = [...this.treeData, ...temp];
          this.treeElementIdAssigner();
          
          // Toggle collapse classes,
          let MainParent = document.getElementById('collapseFive');
          let Current = MainParent.closest(".accordion-item");
          Current.querySelector(".accordion-button").classList.add("collapsed");
          Current.querySelector(".accordion-collapse").classList.remove("show");
          
          // reset fields
          this.USER_SELECTED.custom_link_details.text='',
          this.USER_SELECTED.custom_link_details.url='http://',
          this.USER_SELECTED.custom_link_details.target='_self',
          this.USER_SELECTED.custom_link_details.icon='',
          this.USER_SELECTED.custom_link_details.icon_position='before';
      }
    },
  //  Jumps To Next Accordion and Uncheck all checkboxs
    JumpToNextAccordion(CheckboxQuery,accordion){
      // Jump to next accordion
      let acordion = this.$refs[accordion];
      let nextSibling = acordion.nextElementSibling;
      acordion.querySelector(".accordion-button").classList.add("collapsed");
      acordion.querySelector(".accordion-collapse").classList.remove("show");

      nextSibling.querySelector(".accordion-button").classList.remove("collapsed");
      nextSibling.querySelector(".accordion-collapse").classList.add("show");

      // uncheck all checkboxs
      document.querySelectorAll(CheckboxQuery).forEach(checkbox => checkbox.checked = false);
    },

    // Tree Element ID Assigning for Delete And Edit Menu item
    treeElementIdAssigner(){
      let counter = 0;

      function updateIds(elements) {
      elements.forEach(element => {
          counter++;
          element.id = counter;
          if (element.children) {
          updateIds(element.children);
          }
      });
      }
      updateIds(this.treeData);
      this.treeData = [...this.treeData];
      this.ErrorHandle.MenuItem = false;
    },
    Delete(id) {
      function delItem(item) {
          let index = item.findIndex(item => item.id === id);
          if (index === -1) {
              item.forEach(child => {
                  if (child.children) {
                      delItem(child.children);
                  }
              });
          } else {
              item.splice(index, 1);
          }
      }
      delItem(this.treeData);
      this.treeData = [...this.treeData];
      this.$refs.CloseDelete.click();
      this.DeleteItemId = '';
  },
  Edit(id){
      this.EditModalItem = [];
      this.EditElementId = id;
      function editItem(item, update) {
          let FindItem = item.find(item => item.id === id);
          if (!FindItem) {
              item.forEach(child => {
                  if (child.children) {
                      editItem(child.children, update);
                  }
              });
          } else {
              let temp={
                  id:FindItem.id,
                  text:FindItem.text,
                  url:FindItem.url,
                  icon:FindItem.icon,
                  target:FindItem.target,
                  type:FindItem.type,
                  icon_position:FindItem.icon_position,
                  children:FindItem.children,
              }
              update[0] = temp;
          }
      }
      editItem(this.treeData,this.EditModalItem);
      this.EditModalItem = [...this.EditModalItem];
    },
    saveEdits(){
      if(this.EditModalItem[0].text === ''){
          this.ErrorHandle.menuNameRequiredModal = true;
      }else{
      let id = this.EditElementId;
      let temp = this.EditModalItem[0];
      this.EditModalItem = [];
      function saveEdit(item,Change) {
          let FindItemIndex = item.findIndex(item => item.id === id);
          if (FindItemIndex === -1) {
              item.forEach(child => {
                  if (child.children) {
                      saveEdit(child.children, Change);
                  }
              });
          } else {
          item[FindItemIndex] = {
              id:Change.id,
              text:Change.text,
              url:Change.url,
              icon:Change.icon,
              target:Change.target,
              type:Change.type,
              icon_position:Change.icon_position,
              children:Change.children,
          }
          }
      }
      saveEdit(this.treeData,temp);
      this.treeData = [...this.treeData];
      this.EditElementId = '';
      this.$refs.CloseEdit.click();
      }
    },
    async saveToJson(){
      const NameValidity = this.checkField('Name', this.Name);
      const SlugValidity = this.checkField('Slug',this.Slug);
      const MenuTypeValidity = this.checkField('MenuType',this.Menu_Type);
      const MenuItemsValidity = this.checkField('MenuItem',this.treeData.length);
      if(NameValidity && SlugValidity && MenuTypeValidity && MenuItemsValidity){
          this.ErrorHandle.SaveDataLoading = true;
          try {
          const response = await axios.patch(`/api/CMSMenuTableData/${this.MenuId}`, {
              "menu_name": this.Name,
              "status": this.Enable_Disabled ? "Enabled" : "Disabled",
              "Slug": this.Slug,
              "Menu_type": this.Menu_Type,
              "menu_item": this.treeData,
          });

          this.Name = '',
          this.Slug = '',
          this.Menu_Type = '',
          this.treeData = [];
          this.Enable_Disabled = false;
          this.ErrorHandle.SaveDataLoading = false;
          this.$refs.dataSavedSuccessfully.click();
          } catch (error) {
              console.error('Error:', error);
          }   
      }
    },
    checkField(FieldErr,Field){
      if(Field){
          this.ErrorHandle[FieldErr] = false;
          return true;
      }else{
          this.ErrorHandle[FieldErr] = true;
          return false;
      }
    },
    goToTable(){
      this.$refs.CloseAlertt.click();
      this.$router.push(`/admin/cms/appearance/menu`);
    }
  }
}
</script>
<style scoped>
.accordion-button{
  color: white;
  background-color: var(--theme_color);
}
.accordion-button:not(.collapsed){
  color: white;
  background-color: var(--theme_color_2);
}
.sbmit_reset_cntnr{
  display: flex;
  gap: 15px;
}
.accordion .form-check-input{
  border: var(--bs-border-width) solid #000000;
}
.form-switch{
  padding-left: 0;
}
.input-container{
  display: flex;
  justify-content: start;
}
.col-lg-7>form.container{
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 15px;
}
.menu-status.form-check-input{
  left: 40px;
}
.input-container > label{
  display: flex;
  align-items: center;
}
.accordion-button::after{
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23FFFFFF' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 5L8 11L14 5'/%3E%3C/svg%3E");
}
.accordion-button i{
  margin-right: 15px;
  font-size: 21px;
}
.accordion-collapse{
  max-height: 400px;
  overflow-y: auto;
}
.form-check-input:checked{
  background-color: var(--theme_color);
  border-color: var(--theme_color);
}

.accordion-item .w-100{
  display: flex;
  justify-content: flex-end;
  position: sticky;
  bottom: 16px;
  width: fit-content !important;
  left: 100%;
}
option:disabled{
  display: none;
}
.MenuItem_container > .form-control{
  min-height: 38px;
  padding-bottom: 11px;
}
.icon-remove:hover{
  color: rgb(151, 0, 0) !important;
}
.menu-status.form-check-input{
position: relative;
transition: all ease 0.22s;
border-radius: 0;
width: 70px;
height: 35px;
background-image: unset;
cursor: pointer;
}
.menu-status.form-check-input:focus{
border: var(--bs-border-width) solid var(--bs-border-color);
box-shadow: none;
background-image: unset;
}
.menu-status.form-check-input:checked{
background-color: white;
border-color: var(--bs-border-color);
}
.menu-status.form-check-input::before{
content: '';
position: absolute;
top: 0;
left: 0;
width: 35px;
height: 33px;
transition: all ease 0.22s;
background-color: rgb(170, 0, 0);
background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" width="35" height="35"><path fill="none" d="M0 0h24v24H0V0z"/><path fill="white" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>');
}
.menu-status.form-check-input:checked::before{
left: 35px;
background-color: var(--theme_color);
background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" width="35" height="35"><path fill="none" d="M0 0h24v24H0V0z"/><path fill="white" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>');
}
.dropdown-menu.link_container{
  max-height: 400px;
  border-radius: 0;
}
.clpse5.show{
  overflow: visible;
}
.clpse5 .dropdown-toggle{
  text-align: left;
}
.clpse5 .dropdown-toggle::after{
  display: none;
}
.clpse5 .dropdown-menu.show{
  width: 100%;
}
.clpse5 {
  max-height: 360px;
}
.border-success{
  --v-border-opacity: 1 !important;
}
.theme-link{
  font-size: 16px;
}
#EditModal .form-select.dropdown-toggle::after{
  display: none !important;
}
#EditModal .form-control:read-only{
  background-color: #f5f5f5;
}
#EditModal .form-select.dropdown-toggle{
  text-align: left;
}
.sbmit_reset_cntnr .spinner-border{
  width: 15px;
  height: 15px;
  border-width: 3px;
}


/* Tree Styles */
.tree{
  display: flex;
  align-items: center;
  width: 100%;
}
.status_btn{
  display: flex;
  align-items: center;
}
.product_label{
  margin-right: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>