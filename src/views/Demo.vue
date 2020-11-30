<template>
    <div>
        <h1>{{ message }}</h1>
        <button class="btn btn-primary" v-on:click="showMessage()">Click me</button>
    </div>
</template>

<script>
export default {
    
    data: function() {
        return {
            message: "Demo"
        }
    },
    methods: {
        showMessage: function() {
            alert(this.message)
        }
    }
}
</script>
