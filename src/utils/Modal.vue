<script>
export default {
    name: 'Modal',
    props: {
        showModal: Boolean,    
    },
}
</script>

<template>
<div v-if='showModal' class='modal'>
    <p>
        <slot name='message'></slot>
    </p>
    <footer>
        <slot name='btn'></slot>
    </footer>
</div>
</template>

<style scoped>
.modal {
    position: absolute;
    margin: auto;
    left: 33%;
    top: 33%;
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 10px 10px 1px 100vw rgba(0,0,0,0.5);
}
footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
}
</style>