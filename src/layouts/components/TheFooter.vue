<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template functional>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
        <span>COPYRIGHT &copy; {{ new Date().getFullYear() }} <a href="https://www.linkedin.com/in/douglas-nascimento-62188767/" target="_blank" rel="nofollow">Douglas Matos</a>, All rights Reserved</span>

    </footer>
</template>

<script>
export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
    }
}
</script>
