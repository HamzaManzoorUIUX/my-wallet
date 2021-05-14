<template>
  <div class="container">
    <h1 class="text-center my-3 my-5">Wellcome to my wallet</h1>
    <div class="addTransection row justify-content-center">
      <div class="col-12 col-md-4 mb-3">
        <input
          type="number"
          placeholder="Enter amount"
          name="TransecInput"
          id="TransecInput"
          class="form-control"
          v-model="transection.amount"
        />
      </div>
      <div class="col-12 col-md-4 mb-3">
        <select name="type" id="type" v-model="transection.type" class="form-control">
          <option value="" selected disabled>--Select Type--</option>
          <option value="debit">Debit</option>
          <option value="credit">Credit</option>
        </select>
      </div>
      <div class="col-12 col-md-8 mb-3">
        <textarea
          name="desc"
          id="desc"
          rows="4"
          class="form-control"
          placeholder="Please Enter some details here"
          v-model="transection.dec"
        ></textarea>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-md-3 mb-3">
        <button class="btn btn-primary w-100 flex-grow" @click="addTransection">Add Transectio</button>
      </div>
    </div>
    <div class="row mt-3 mt-md-5">
      <ShowTrans
        v-for="(transection, index) in getTransection"
        :key="index"
        :trans="transection"
      />
    </div>
  </div>
</template>

<script>
import ShowTrans from "./components/ShowTrans";
import {mapGetters} from 'vuex'
export default {
  name: "App",
  components: {
    ShowTrans,
  },
  data() {
    return {
      transection: 
        {
          amount: "",
          dec: "",
          type: "",
        },

      
    };
  },
  computed:{
    
      ...mapGetters(['getTransection']),

  },
  methods:{
    addTransection(){
      this.$store.commit('addTransection',this.transection)
      this.transection=Object.keys(this.transection).map((obj)=>{
        return {
          ...this.transection,
          [obj]:''
        }
      })
    }
  }
};
</script>

<style>
</style>
