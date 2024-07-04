<template>
    <formPageDesign :page-data="CMSMenuData">
      <div>
        <v-data-table
  v-model="selected"
  :headers="table.headers"
  :items="filteredData"
  item-value="id"
  items-per-page="10"
  return-object
  show-select
  class="elevation-1"
  id="menuTable"
  
>
  <template v-slot:body="{ items }">
    <template v-if="!tableLoading">
      <!-- Customization for the first row -->
      <tr class="row">
        <td class="col-1">
          <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#deleteModal">
            <i class="fa fa-trash"></i>
          </a>
        </td>
        <td class="col-4">
          <v-select
            clearable
            label="Search search via Menu"
            :items = "Array.from(new Set(this.table.data.map(item => item.menu_name)))"      
            variant="outlined"
            class="my-2"
            v-model="SearchedMenu"
            @update:modelValue="FilterData()"
          ></v-select>
        </td>
        <td class="col-4">
            <v-select
              clearable
              label="Search via Status"
              :items="['Enabled', 'Disabled']"
              variant="outlined"
              v-model="searchedStatus"
              class="my-2"
              @update:modelValue="FilterData()"
            >
          </v-select>
        </td>
        <td class="resetOption col-3">
          <a href="javascript:void(0)" ref="resetSearch" @click="ResetSearchFn()">
            <i class="fa fa-refresh"></i>
            <span>Reset Search Here</span>
          </a>
        </td>
      </tr>
    </template>
    <!-- Default rows for the remaining items -->
    <template v-for="(item, index) in items" :key="index" v-if="!tableLoading">
      <tr >
        <td>
          <v-checkbox v-model="selected"  :value="item"></v-checkbox>
        </td>
        <td>{{ item.menu_name }}</td>
        <td>
          <div class="form-switch">
            <input class="form-check-input menu-status" type="checkbox" :data-key="item.id" @change="checkBoxChanged($event)" :checked="item.status === 'Enabled'">
          </div>
        </td>
        <td>
          <router-link title="Edit" :to="'/admin/cms/appearance/menu/edit/' + item.id">
            <i class="fa fa-edit"></i>
          </router-link>
          <a href="javascript:void(0)" title="Delete" @click="deleteSingleMenuModal(item.id)">
            <i class="fa fa-trash"></i>
          </a>
          <router-link :to="'/admin/cms/appearance/menu/clone/' + item.id" title="Clone">
            <i class="fa fa-clone"></i>
          </router-link>
        </td>
      </tr>
    </template>
    <template v-if="tableLoading">
      <tr>
        <td colspan="4">
          <v-progress-linear  indeterminate></v-progress-linear>
          <div class="loading-text text-center">Loading...Please wait</div>
        </td>
      </tr> 
    </template>
  </template>
  
</v-data-table>


        <!-- MODAL FOR MULTIPLE DELETAION -->

          <!-- Modal -->
          <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="deleteModalLabel">Are you sure want to delete?</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="deleteModlClose"></button>
                </div>
                <div class="modal-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Menu</th>
                        <th scope="col">Status</th>
                        <th class="text-center" scope="col">Exclude</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in selected" :key="index" :data-key="item.id">
                        <th scope="row">{{ index+1 }}</th>
                        <td>{{ item.menu_name }}</td>
                        <td>
                          <div class="form-switch">
                            <input class="form-check-input menu-status" type="checkbox" disabled :checked="item.status === 'Enabled'">
                          </div>
                        </td>
                        <td class="ExcludeItem"><a href="#" @click.prevent="removeItemFromMOdal($event)" ><i class="fa-solid fa-x"></i></a></td>
                      </tr>
                    </tbody>
                  </table>   
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn theme-btn" data-bs-dismiss="modal">cancel</button>
                  <button type="button" class="btn theme-btn" :disabled="!selected[0]" @click="removeItem()">Delete</button>
                </div>
              </div>
            </div>
          </div>

          <!-- MODAL FOR SINGLE DELETATION -->
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#modalForSingleDelete" ref="singleDelBtn">
            Launch static backdrop modal
          </button>

          <!-- Modal -->
          <div class="modal fade" id="modalForSingleDelete" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalForSingleDeleteLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="modalForSingleDeleteLabel">Are you sure want to delete?</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" ref="closeSingleDelModal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Menu</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="singleDeleteIndex !== null">
                        <td>{{ table.data[singleDeleteIndex].menu_name }}</td>
                        <td>
                          <div class="form-switch">
                            <input class="form-check-input menu-status" type="checkbox" disabled :checked="table.data[singleDeleteIndex].status === 'Enabled'">
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table> 

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn theme-btn" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn theme-btn" @click="deleteSingle()">Delete</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </formPageDesign>
</template>
<script>
import axios from "axios";
import formPageDesign from "../../TableContainingPages.vue";
    export default {
      components: {
        formPageDesign
      },
      data() {
          return{
            CMSMenuData:{
                breadcrumbs: [
                    { name: 'Dashboard', path: '/admin/dashboard' },
                    { name: 'CMS', path: '/admin/cms'},
                    { name: 'Appearance', path: '/admin/cms/appearance' },
                    { name: 'Menu', path: '/admin/cms/appearance/menu'}                   //follow the sequence of breadcrumbs , last item of breadcrumbs will remain ACTIVE
                ],
                caption_icon: 'fa fa-bars',
                caption_title: 'MENU',
                action_links:[ 
                    {
                    href: '/admin/cms/appearance/menu/new',
                    title: 'Add New',
                    icon: 'fa fa-plus'
                    },
                    {
                    href: '/admin/cms/appearance/menu/managemenu',
                    title: 'Assign Menu',
                    icon: 'fa fa-edit'
                    }
                ]
            },
            tableLoading:true,
            SearchedMenu:null,
            searchedStatus:null,
            selected: [],
            filteredData:[],
            singleDeleteIndex:null,
            table:{
              headers:null,
              data:null,
            },
          };
        },
created(){
  this.fetchData();
},
methods: {
  async fetchData() {
  try {
    const responseHeader = await fetch('/api/CMSMenuTableHeaders');
    const responseHeaderData = await responseHeader.json();
    
    if (!responseHeader.ok) {
      throw new Error('Failed to fetch headers');
    }
    
    const responseData = await fetch('/api/CMSMenuTableData');
    const responseDataData = await responseData.json();
    
    if (!responseData.ok) {
      throw new Error('Failed to fetch data');
    }
    
    this.table.headers = responseHeaderData;
    this.table.data = responseDataData;

    this.filteredData = responseDataData; 
    this.tableLoading = false;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
},
ResetSearchFn(){
  if(this.searchedStatus !== null || this.SearchedMenu !== null){
    this.tableLoading = true;
    this.SearchedMenu = null;
    this.searchedStatus = null;
    this.Filter();
  }
},
  FilterData() {
      this.tableLoading = true;
      this.Filter();
  },
  Filter(){
    let filteredItems = this.table.data;

    // Menu Filtering
    if (this.SearchedMenu !== null) {
        filteredItems = filteredItems.filter(item => item.menu_name === this.SearchedMenu);
    }

    // Status Filtering
    if (this.searchedStatus !== null) {
        filteredItems = filteredItems.filter(item => item.status === this.searchedStatus);
    }

    this.filteredData = filteredItems;
    this.tableLoading = false;
  },
  removeItemFromMOdal(event){
    const uniqueKey = event.target.closest('tr').getAttribute('data-key');
    const indexToBeRemoved  = this.selected.findIndex(item => item.id == uniqueKey);
    this.selected.splice(indexToBeRemoved,1);
  },
  // Below Fn is For Multiple Delete
  async removeItem(){
    this.tableLoading = true;
    this.singleDeleteIndex = null;    //This is Important 
    try {
      this.$refs.deleteModlClose.click();

      for (const item of this.selected) {
        await axios.delete(`/api/CMSMenuTableData/${item.id}`);
      }

      const updatedResponse = await fetch('/api/CMSMenuTableData');
      this.table.data = await updatedResponse.json();

      this.selected = [];
      this.Filter();
    } catch (error) {
      console.error('Error removing item:', error);
      // Handle errors as needed
    }
  },
  async checkBoxChanged(event){
    this.tableLoading = true;
    try {
    const uniqueKey = event.target.getAttribute('data-key');
    const foundIndex = this.selected.findIndex(item => item.id === uniqueKey);
    if(event.target.checked){
      await axios.patch(`/api/CMSMenuTableData/${uniqueKey}`, {
        "status": "Enabled"
      });
      if (foundIndex !== -1) {
        this.selected[foundIndex].status = "Enabled";
      }
    }
    else{
      await axios.patch(`/api/CMSMenuTableData/${uniqueKey}`, {
        "status": "Disabled"
      });
      if (foundIndex !== -1) {
        this.selected[foundIndex].status = "Disabled";
      }
    }

    const updatedResponse = await fetch('/api/CMSMenuTableData');
    this.table.data = await updatedResponse.json();

    this.Filter();
  } catch (error){
    console.error('Error updating checkbox status:', error);
    // Handle errors as needed
  }
  },
  deleteSingleMenuModal(id){
    this.singleDeleteIndex = this.table.data.findIndex(item => item.id == id); 
    this.$refs.singleDelBtn.click();
  },
  async deleteSingle(){
    this.tableLoading = true;
    this.$refs.closeSingleDelModal.click();
    try{
      let index = this.singleDeleteIndex;
      await axios.delete(`/api/CMSMenuTableData/${this.table.data[index].id}`);
      // If Select array have this item,remove it from array 
      const foundIndex = this.selected.findIndex(item => item.id === this.table.data[index].id);
      if (foundIndex !== -1) {
        this.selected.splice(foundIndex, 1);
      }
      const updatedResponse = await fetch('/api/CMSMenuTableData');
      this.table.data = await updatedResponse.json();
      this.singleDeleteIndex = null,
      this.Filter();
    }catch(error){
      console.error('Error removing item:', error);
      // Handle errors as needed
    }
  },
}
};
</script>
<style scoped>
td a{
  padding: 7px;
}
td i{
  transition: all ease .2s;
  font-size: 18px;
  color: var(--theme_color);
}
td a:hover i{
  color: var(--theme_color_2);
}
.resetOption a{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 3px;
  border: 1px solid var(--theme_color);
  text-decoration: none;
  width: fit-content;
  padding: 7px 17px;
  transition: all ease .25s;
  color: var(--theme_color);
}
.resetOption a:hover{
  border: 1px solid var(--theme_color_2);
  color: white;
  background-color: var(--theme_color_2);
}
.resetOption a:hover i.fa{
  color: white;
}
.row{
  display: table-row;
}
td.col-1 a{
  position: relative;
  left: 5px;
}
.ExcludeItem{
  text-align: center;
  vertical-align: middle;
}
/* Updated usage */
:deep(#menuTable) thead tr > th:first-child {
  padding: 0 16px !important;
}
:deep(#menuTable) table{
  min-width: 650px;
  overflow-x: auto;
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
  /* background-color: green; */
  background-color: var(--theme_color);
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" width="35" height="35"><path fill="none" d="M0 0h24v24H0V0z"/><path fill="white" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>');
}


</style>