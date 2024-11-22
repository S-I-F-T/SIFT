<template>
    <div class="body">
        <div class="heading">
            <h1>SIFT</h1>
            <h3> Hello {{ msg }}</h3>
        </div>
        <div class="middle">

            <div class="navBar">
                <p>nav</p>
            </div>
            <div class="mainContent">
                <p>mainContent</p>
            </div>
        </div>
            
    </div>
</template>

<script>
    export default {
    name: 'MainPage',
    props: {
        msg: String
    }
}
</script>

<style>

</style>