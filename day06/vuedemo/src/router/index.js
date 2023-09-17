import Vue from 'vue'
import VueRouter from "vue-router";

import Layout from "@/views/Layout.vue"
import ArticleDetail from "@/views/ArticleDetail.vue"
import Like from "@/views/Like.vue"
import User from "@/views/User.vue"
import Collect from "@/views/Collect.vue"
import Article from "@/views/Article.vue"
import NotFound from "@/views/NotFound.vue"





Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/article',
      children: [
        { path: 'like', component: Like },
        { path: 'user', component: User },
        { path: 'collect', component: Collect },
        { path: 'article', component: Article },
      ]
    },
    { path: '/detail/:id', component: ArticleDetail },
    { path: '*', component: NotFound }
  ]
})

export default router