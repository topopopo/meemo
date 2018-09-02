<template>
    <div id="editor_text">
        <div class="d-flex">
            <textarea class="markdown" v-model="markdown"></textarea>
            <div class="preview" v-html="preview()"></div>
        </div>
    </div>
</template>

<script>
import Marked from 'marked'

export default {
  name: 'editor-text',
  data: () => ({
    markdown: ''
  }),

  methods: {
    preview () {
      return Marked(this.markdown)
    }
  }
}
</script>

<style lang="scss" scoped>
    .markdown {
    width: 50%;
    height: 500px;
    }

    .preview {
    width: 50%;
    text-align: left;
    background-color: #fff;
    }
</style>
