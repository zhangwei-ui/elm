<template>
<div>
    <eeeHeader :seller="seller"></eeeHeader>
<!--  上等的食材往往只需要最简单的烹饪方式，在忙碌了一天之后，姚师傅点开美团点了一份外卖-->
  <div class="tab">
    <div class="tab-item">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/ratings">评价</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/seller">商家</router-link>
    </div>
  </div>
  <keep-alive>
    <router-view :seller="seller"></router-view>
  </keep-alive>
</div>
</template>

<script>
  import axios from 'axios'
  import eeeHeader from './components/head/eeeHead'
  const OK=0
export default {
  name: 'App',
  data(){
    return{
      seller:{}
    }
  },
  components:{
    eeeHeader
  },
  created() {
    setTimeout(()=>{
        axios.get('/api2/seller')
                .then(response=>{
                  const result=response.data
                  if(result.code===OK){
                    console.log(result);
                    this.seller=result.data
                  }
                })
                .catch(error=>{
                  console.log(error);
                })


    } ,1000)
  }

}
</script>

<style lang="stylus">
  @import "common/stylus/mixins.styl"

  .tab
    height 40px
    line-height 40px
    display: flex
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex 1
      font-size 14px
      color rgb(77,85,93)
      text-align center
      .router-link-active
        color: red



</style>
