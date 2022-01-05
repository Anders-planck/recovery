import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import db from '../firebase/firebaseInit'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles:[],
    isLogged:null,
    user:{
      username:null,
      email:null,
      id:null,
      initials:null,
      firstName:null,
      lastName:null,
    },
    article:{
      id:null,
      user_id:null,
      title:null,
      description:null,
      content:null,
      date:null,
      image:{
        name:null,
        url: null
      }
    }
  },
  mutations: {
    setProfileInfo(state, payload){
      state.user.username= payload.data().username
      state.user.lastName= payload.data().lastName
      state.user.firstName= payload.data().firstName
      state.user.email = payload.data().email
      state.user.id = payload.id
      state.user.initials= payload.data().firstName.match(/(\b\S)?/g).join("") +  payload.data().lastName.match(/(\b\S)?/g).join("") 
    },
    updateUser(state,payload){
      state.isLogged=payload
    }
  },
  getters:{
    LastArticles(state){
      return state.articles.splice(0,3)
    }
  },
  actions: {
    async getCurrentUser({commit}){
      const database = await db.collection("users").doc(firebase.auth().currentUser.uid)
      const dbResult = await database.get()
      commit("setProfileInfo",dbResult)
    },
    async getArticles({state}){
      const database = await db.collection('articles').orderBy("date","desc")
      const dbResult = await database.get();
      dbResult.forEach((doc) =>{
        if(!state.articles.some((article)=> article.id === doc.id)){
          const data ={
            id:doc.data().id,
            user_id:doc.data().user_id,
            title:doc.data().title,
            description:doc.data().description,
            content:doc.data().content,
            date:doc.data().date,
            image:{
              name:doc.data().ImageName,
              url: doc.data().url
            }
          }
          state.articles.push(data)
        }
      })
      console.log(state.articles)
    }
  },
  modules: {

  }
})
