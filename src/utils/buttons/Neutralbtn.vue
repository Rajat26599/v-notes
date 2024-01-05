<script>
export default {
    name: 'Neutralbtn'
}
</script>

<template>
<button class='btn neutral-btn'>
    <slot></slot>
</button>
</template>

<style scoped>
.neutral-btn {
    background: #eee;
    border: 1px solid #ddd;
    border-radius: 1rem;
} 
.neutral-btn:hover {
    background: #ddd;
}
</style>
