<template>
    <div id="v-header" class="list_header">
                <b-container class="d-flex">
                    <div class="logo">meemo!!</div>
                    <a href="#" class="open-main-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </b-container>
            </div>
</template>

<script>
export default {
  name: 'v-header'
}
</script>

<style lang="scss" scoped>
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

#editor_text {
    .list_header {
        padding: 0;
        height: 55px;
        background-color: #fff;
        box-shadow: 15px 0 40px 0 rgba(61,67,79,.08);
        .open-main-menu {
            span {
            display: block;
            transition: all .3s ease;
            border-radius: 100%;
            margin: 0 3px;
            border: 3px solid;
            color: #000;
            &:first-of-type {
                background-color: #000;
            }
            &:nth-child(2) {
                border: 3px solid #000;
            }
            &:last-of-type {
                background-color: #000;
            }
            }
            &:hover {
                span {
                    border-color: #54D6C7;
                    background-color: #54D6C7;
                }
            }
        }
    }
}
</style>
