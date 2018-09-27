<template>
    <div class="humburger_navi">
        <nav class="navBar">
            <ul>
                <li class="navBar-group">
                    <div class="navBar-item navBar-item--with-icon-left"><span class="navbar-link__text">HOME</span></div>
                </li>
                <li class="navBar-group">
                    <div class="navBar-item navBar-item--with-icon-left"><span class="navbar-link__text">LOG OUT</span></div>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'humburger'
}
</script>

<style lang="scss" scoped>
.humburger_navi {
    .navBar {
        padding: 24px;
        padding-bottom: 95px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        height: 100%;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;

        .navBar-group {
            padding-bottom: 5px;
            padding-top: 10px;

            .navBar-item--with-icon-left {
                padding-left: 36px;
                position: relative;
            }
            .navBar-item {
                font-size: 16px;
                line-height: 22px;
                letter-spacing: .015em;
                font-weight: 600;
                padding: 3px 0;
            }
        }

    }

}

</style>
