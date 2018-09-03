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
</style>
