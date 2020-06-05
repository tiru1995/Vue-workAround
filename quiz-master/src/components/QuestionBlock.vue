<template>
 <div class='question-block'>
  <b-jumbotron>
   <template v-slot:lead>
      {{currquestion.question}}
    </template>

    <hr class="my-4">
    <b-list-group >
  <b-list-group-item 
  v-for="(option,index) in shuffledoption" 
  :key="index"
  @click='Selectedoption(index)'
  :class="[!answered && selectedindex=== index ? 'selected': 
  answered && correctindex=== index ? 'correct':
  answered && correctindex!== index && selectedindex=== index ? 'wrong':'']"
  >
  {{option}}
  </b-list-group-item>
  
</b-list-group>
   
    <b-button variant="primary" @click='onSubmit' :disabled='selectedindex===null || answered'>Submit</b-button>
    <b-button variant="success" @click='Onclicknext'>Next</b-button>
  </b-jumbotron>
</div>
</template>

<script>
import _ from 'lodash' ;
export default{
props:{
currquestion: Object,
Onclicknext:Function,
increment:Function
},


    data(){
    return{
    selectedindex:null,
    correctindex:null,
    shuffledoption:[],
    answered:false
    }},


    computed:{
    options(){
    const option=[...this.currquestion.incorrect_answers]
    option.push(this.currquestion.correct_answer)
    return option
    }
    },


    watch:{
    currquestion:{
    immediate:true,
    handler(){
    this.selectedindex=null
    this.answered=false
    this.shuffleoption()
    }
    }
    },


    methods:{
    Selectedoption( index ) {
    this.selectedindex=index;
    },

    onSubmit(){
    let isCorrect = false;

    if(this.selectedindex===this.correctindex){
     isCorrect=true
     }
     this.answered=true
     this.increment(isCorrect)
    },

    shuffleoption(){
    const option=[...this.currquestion.incorrect_answers,this.currquestion.correct_answer]
    this.shuffledoption= _.shuffle(option)
    this.correctindex=this.shuffledoption .indexOf(this.currquestion.correct_answer)
    }
    }

    }
    </script>

    <style>
    .list-group{
    margin-bottom:10px;} 

    .list-group-item:hover{
    background-color:lightgrey;
    cursor:pointer;}

    .selected{
    background-color:lightblue;
    }

    .correct{
    background-color:lightgreen;
    }

    .wrong{
    background-color:red;
    }

    .btn{
    margin:0px 5px }
    </style>
