<template>
  <div>
    <h1>home</h1>
    {{totalcount}}
    <button class='btn btn-primary' @click='toggleform' >Add Pet</button>
     <b-form @submit.prevent="handlesubmit"  v-if="showpetform">

      <b-form-group id="input-group-2" label="Pets's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formdata.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formdata.species"
          :options="['cats','dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pets's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type='number'
          v-model="formdata.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      showpetform: false,
      formdata: {
        name: '',
        age: 0,
        Species: null
      }
    }
  },
  computed: {
    ...mapGetters(['totalcount'])
  },
  methods: {
    ...mapActions(['addnewpet']),
    toggleform () {
      this.showpetform = !this.showpetform
    },
    handlesubmit () {
      const { name, age, species } = this.formdata
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addnewpet(payload)

      this.formdata = {
        name: '',
        age: 0,
        Species: null
      }
    }
  }
}

</script>
