<template>
    <div id="editor_list">
        <div class="overlay"></div>
        <div class="list_top">
            <div class="list_header">
                <b-container class="d-flex">
                    <div class="logo">meemo!!</div>
                    <a href="#" class="open-main-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </b-container>
            </div>
            <div class="user_profile d-flex justify-content-center">
                <img src="../assets/images/kosuge.jpg">
                <div class="user_details">
                    <h4>kosuge</h4>
                </div>
            </div>
        </div>

        <div class="list">
            <div class="container title">
                <h3>My Memo!!</h3>
            </div>

            <ul class="memo">
                <b-container>
                    <li class="memo_item" v-for="memo in memos" :key="memo.id">{{memo}}</li>
                </b-container>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
  name: 'editor-list',

  data: () => ({
    memos: [
      'りんご',
      'バナナ',
      'パイナップル',
      'スイカ',
      'いちご'
    ]
  })
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

        .list_header {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 30px 0;
            z-index: 999;
            left: 0;
            transition: all .3s ease;

            .logo {
                font-size: 30px;
            }
            .open-main-menu {
                margin-left: auto;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-align: center;
                align-items: center;
                font-weight: 900;
                &:hover {
                    span {
                        border-color: #54D6C7;
                        background-color: #54D6C7;
                    }
                }
                span {
                    display: block;
                    transition: all .3s ease;
                    border-radius: 100%;
                    margin: 0 3px;
                    border: 3px solid;
                    color: #fff;
                    &:first-of-type {
                        width: 10px;
                        height: 10px;
                        background-color: #fff;
                    }
                    &:nth-child(2) {
                        width: 14px;
                        height: 14px;
                        border: 3px solid #fff;
                    }
                    &:last-of-type {
                        width: 16px;
                        height: 16px;
                        background-color: #fff;
                    }
                }
            }
        }
    }

    .user_profile {
        margin-top: 90px;

        img {
            margin-right: 20px;
            width: 100px;
            height: 100px;
            border-radius: 100%;
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
            background-color: #fff;
            z-index: 1;
            padding: 35px;
            position: relative;
            color: #222;
            padding-top: 0;
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
            background: #fff;
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
