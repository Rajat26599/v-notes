<script>
export default {
    name: 'Icons',
}
</script>

<template>
<div class='icons-container'>
    <slot></slot>
</div>
</template>

<style scoped>
.icons-container {
    padding: 0.2rem;
    background: white;
    border-radius: 50%;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 1.5rem;
}
</style>