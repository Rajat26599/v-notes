<script>
export default {
    name: 'Dangerbtn'
}
</script>

<template>
<button class='btn danger-btn'>
    <slot></slot>
</button>
</template>

<style scoped>
.danger-btn {
    background: #fd8ca4;
    border: 1px solid #ed7c94;
    border-radius: 1rem;
} 
.danger-btn:hover {
    background: #ed7c94;
}
</style>
