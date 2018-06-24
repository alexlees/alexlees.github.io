<template>
  <div :class="$style.flex" @scroll="scroll">
    <keep-alive>
      <component :is="is" >
      </component>
    </keep-alive>
  </div>
</template>

<script>
import Dev from './Dev'
import Good from './Good'
import Job from './Job'
import Share from './Share'
import Answer from './Answer'

const components = [Good, Answer, Share, Job, Dev]
export default {
  provide () {
    return {
      scrollTop: this.scrollTop
    }
  },
  name: 'x-components',
  props: {
    active: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      scrollY: Array(components.length).fill(0),
      target: null
    }
  },
  components: {
    [Dev.name]: Dev,
    [Good.name]: Good,
    [Job.name]: Job,
    [Share.name]: Share,
    [Answer.name]: Answer
  },
  computed: {
    is () {
      return components[this.active]
    }
  },
  methods: {
    scroll (e) {
      if (!this.target) {
        this.target = e.target
      }
      this.scrollY[this.active] = this.target.scrollTop
    },
    scrollTop () {
      if (this.target) {
        this.target.scroll(0, 0)
      }
    },
    scrollTo () {
      if (this.target) {
        this.target.scroll(0, this.scrollY[this.active])
      }
    }
  },
  activated () {
    this.scrollTo()
  }
}
</script>

<style module>
.flex{
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
