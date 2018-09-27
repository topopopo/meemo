<template>
    <div id="editor_text">
      <Header></Header>
        <div class="editor_body">
          <div class="d-flex">
              <textarea class="markdown" v-model="markdown" placeholder="1行目にタイトルを入力..."></textarea>
              <div class="preview" v-html="preview()" v-if="showPreview"></div>
          </div>

          <a id="fab" class="pc-none" href="#">
            <i class="fa fa-save"></i>
          </a>
        </div>
    </div>
</template>

<script>
import Marked from 'marked'
import Header from './Header'

export default {
  name: 'editor-text',
  data: () => ({
    markdown: '',
    showPreview: false
  }),

  methods: {
    preview () {
      return Marked(this.markdown)
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/common.scss';

    .markdown {
      width: 50%;
      height: 500px;
      outline: 0;
      @include mq(sm) {
        width: 100%;
        height: 100vh;

      }
    }

    .preview {
      width: 50%;
      text-align: left;
      background-color: #fff;
      @include mq(sm) {
       width: 100%;
      height: 100vh;
      }
    }

    #editor_text {
      .editor_body {
        margin-top: 55px;

        #fab {
          position: fixed;
          bottom: 15px;
          right: 15px;
          display: block;
          width: 56px;
          height: 56px;
          background-image: url(../assets/images/colors/911.png);
          background-size: cover;
          text-align: center;
          border-radius: 50%;
          transition: .3s;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.12), 0 2px 2px 0 rgba(0,0,0,.24);
          &:hover {
            box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2);
          }
          &:active {
            box-shadow: unset;
          }
          i {
            color: #fff;
            font-size: 25px;
            line-height: 53px;
          }
        }
      }
    }
</style>
