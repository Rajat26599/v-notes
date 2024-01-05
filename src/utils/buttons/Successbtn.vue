<script>
export default {
    name: 'Successbtn'
}
</script>

<template>
<button class='btn success-btn'>
    <slot></slot>
</button>
</template>

<style>
.success-btn {
    background: #A1FFCE;
    border: 1px solid #91eFbE;
    border-radius: 1rem;
} 
.success-btn:hover {
    background: #91eFbE;
}
</style>
