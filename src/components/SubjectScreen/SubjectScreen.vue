<script>
import SideNav from './SideNav.vue';
import RightNav from './RightNav.vue';

export default {
    name: 'SubjectScreen',
    components: {
        SideNav,
        RightNav,
    },
    props: [
        'name'
    ]
}
</script>

<template>
<div id='subject-screen'>
    <div id='side-nav'>
        <SideNav :subjectName='$route.params.subjectName' />
    </div>
    
    <div id='main'>
        <form>
            <input id="title" placeholder="Heading..." /><br/>
            <textarea id="content" type="text" rows="30" cols="85" placeholder="Enter the content..." />
        </form>
    </div>
    
    <div id='right-nav'>
        <RightNav :subjectName='$route.params.subjectName' />
    </div>
</div>
</template>

<style scoped>
#side-nav {
    overflow-y: scroll;
}
#subject-screen {
    display: flex;
    width: 100vw;
    margin: 0 -3rem;
}
#main {
    padding: 2rem;
}
#title, #textarea {
    display: block;
}
#title {
    font-size: 1.2rem;
}
#content {

}
</style>