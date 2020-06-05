<template>
 <div>
 <Header
 :optioncorrect='optioncorrect'
:numtotal='numtotal'/>
 <b-container class="bv-example-row">
  <b-row>
    <b-col sm='6' offset='3'>
    <QuestionBlock 
    v-if='questions.length'
    :currquestion='questions[index]'
    :Onclicknext='Onclicknext'
    :increment='increment'/>
    </b-col>
    
  </b-row>
</b-container>
 
 </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header.vue'
import QuestionBlock from './components/QuestionBlock.vue'




export default {
components:{
Header,
QuestionBlock
},
data(){
return{
questions:[],
index:0,
optioncorrect:0,
numtotal:0


}
},
methods:{
Onclicknext(){
this.index++
},
increment(iscorrect){
if(iscorrect){
this.optioncorrect++
}
this.numtotal++
}
},

mounted(){
axios.get('https://opentdb.com/api.php?amount=10&category=11&type=multiple')
.then((res)=>this.questions=res.data.results)

}
  
}
</script>

<style>

</style>
