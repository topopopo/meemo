<template>
    <div id="editor_list">
        <div class="overlay"></div>
        <div class="list_top">

            <Header></Header>

            <div class="user_profile d-flex justify-content-center">
                <img v-if="!user.photoURL" src="../assets/images/kosuge.jpg">
                <img v-else :src="user.photoURL"/>
                <div class="user_details d-flex align-items-center">
                    <p>{{user.displayName}}</p>
                    <!-- <div @click="shuffle">シャフル</div> -->
                </div>
            </div>
        </div>

        <div class="list">
            <div class="container title">
                <h3>My Memo!!</h3>
            </div>

            <ul class="memo">
                <b-container>
                    <transition-group name="flip-list" mode="out-in">
                    <li class="memo_item" v-for="memo in memos" v-bind:key="memo">{{memo}}</li>
                    </transition-group>
                </b-container>
            </ul>
        </div>

    </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: 'editor-list',

  data: () => ({
    memos: [
      1, 2, 3, 4, 5, 6, 7, 8, 9
    ],
    visible: false
  }),

  props: {
    user: {
      type: Object
    }
  },

  methods: {
    shuffle () {
      // やってみたかっただけ
      this.memos.sort((a, b) => Math.random() > 0.5 ? -1 : 1)
    }
  },

  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/common.scss';

#editor_list {
   .overlay {
        background: url(../assets/images/smile.jpg) no-repeat top /contain;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-size: 100%;
        z-index: -1;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: rgba(71, 32, 84, 0.5);
        }
    }

    .list_top {
        position: relative;
        min-height: 240px;
        color: #fff;
        padding-top: 60px;
        @include mq(sm) {
            min-height: 186px;
        }
    }

    .user_profile {
        margin-top: 90px;

        img {
            margin-right: 20px;
            width: 100px;
            height: 100px;
            border-radius: 100%;
            object-fit: cover;
        }

        .user_details {
            font-size: 2em;
        }
    }

    .list{
        margin-top: 160px;
        position: relative;

        @include mq(sm) {
            margin-top: 0;
        }
        .title {
            color: #000;
            margin-bottom: 20px;
            text-align: left;
            padding-left: 20px;
            h3 {
                font-size: 3.75rem;
                @include mq(sm) {
                    font-size: 1.75rem;
                }
            }
        }

        .memo {
            background: url(https://theme.crumina.net/html-woox-creative/img/body-bg.png);
            // background-color: #fff;
            z-index: 1;
            padding: 35px;
            position: relative;
            color: #222;
            padding-top: 0;
            padding-bottom: 0;
            li {
                position: relative;
                background-color: #fefefe;
                color: #000;
                text-decoration: none;
                border-radius: 3px;
                -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
                -webkit-tap-highlight-color: transparent;
                -webkit-transition: .3s ease-out;
                transition: .3s ease-out;
                cursor: pointer;
                margin-bottom: 15px;
                padding: 15px;

                &:active {
                    transform: translateY(1px);
                    transition: 0s ease-out;
                }

                &::after {
                    content: '';
                    position: absolute;
                    left: -18px;
                    top: 8px;
                    height: 8px;
                    width: 8px;
                    border-radius: 50%;
                    background: #54D6C7;
                }
            }

        }
        &::after {
            content: '';
            position: absolute;
            top: -28px;
            background: url(https://theme.crumina.net/html-woox-creative/img/body-bg.png);
            left: 0px;
            right: 0;
            height: 240px;
            transform: skew(0deg,10deg);
            z-index: -1;
            width: 100%;
        }
    }

}

</style>
