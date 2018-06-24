<template>
  <div :class="$style.Reply" class="van-hairline--top">
    <input type="text" :class="$style.input" placeholder="快来评论" v-model="value">
    <button :class="$style.btn" @click="action">{{text}}</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'x-reply',
  data () {
    return {
      value: ''
    }
  },
  computed: {
    text () {
      return this.value ? '评论' : '查看评论'
    }
  },
  methods: {
    ...mapActions('reply', ['reply']),
    action () {
      if (this.value) {
        this.reply({content: this.value, topic_id: this.$route.params.id})
        console.log('评论')
        this.value = ''
      } else {
        console.log('查看评论')
        this.$router.push(`/topic/${this.$route.params.id}/reply`)
      }
    }
  }
}
</script>

<style module>
.Reply{
  width: 100%;
  height: 50px;
  font-size: 14px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  padding: 0 10px;
  box-sizing: border-box;
}
.input{
  appearance: none;
  border: none;
  padding: 0;

  flex: 1;
  height: 30px;
  display: inline-flex;

  background-color: #eee;
  color: #888;
  text-indent: 1em;
}
.btn{
  appearance: none;
  border: none;
  position: relative;
  min-width: 60px;
  height: 30px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  background-color: #3388ff;
  color: #ffffff;
}
.btn:active::before{
  opacity: .3;
}
.btn:before {
  content: " ";
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  width: 100%;
  height: 100%;
  border: inherit;
  border-color: #000;
  background-color: #000;
  border-radius: inherit;
  transform: translate(-50%,-50%);
}
</style>
