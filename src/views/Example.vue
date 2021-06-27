<template>
    <div>
        {{ message }}
        {{number}}
        <button v-on:click="buttonClicked" v-bind:title="message">클릭!</button>
        <br>
        <input type="text" v-model="message" v-on:keypress="onKeypress" @input="onChange">
    </div>
</template>
<script>

export default {
    name: 'Example',
    data () {
        return {
            message: '안녕하세요',
            number: 0,
        }
    },
    methods: {
        buttonClicked () {
            this.message = '반갑습니다.',
            this.number ++
        },
        onChange(event){
            console.log('onchange', event.target.value)
        },
        onKeypress(event){
            console.log(event.which, event.key)
        }
    }
}
</script>