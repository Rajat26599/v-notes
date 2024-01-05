<script>
import Icons from '../utils/Icons.vue';
import router from '../router/index';
import data from '../utils/data/subjectsData';

let id = 0;

export default {
    name: 'SubjectCards',
    props: [
        'shouldDeleteSubject',
        'subjectToDelete',
    ],
    data(){
        return {
            router: router,
            newSubjectName: '',
            subjects: data.subjects,
        }
    },
    components: {
        Icons,
    },
    methods: {
        addSubject(){
            this.subjects.push({id: id++, editMode: true});
            this.$nextTick(() => this.$refs.subjectNameInput[0].focus());
        },
        removeSubject(subject){
            this.subjects = this.subjects.filter((sub) => sub!=subject);
        },
        setSubjectName(subject){
            this.subjects.map(sub => {
                if(sub===subject) sub.name = this.newSubjectName;
            })
            this.newSubjectName = '';
            this.subjects.map(sub => {
                if(sub===subject) sub.editMode = false;
            })
        },
        onSubjectNameSubmit(subject){
            if(this.newSubjectName===''){
                this.newSubjectName = 'New Subject'
            }
            this.setSubjectName(subject);
        },
        onInputBlur(subject){
            if(this.newSubjectName!==''){
                this.setSubjectName(subject);
            } else {
                if(this.subjects[this.subjects.length-1].editMode){
                    this.subjects.pop();
                } else {
                    this.subjects.map(sub => {
                        if(sub.editMode) {
                            sub.name = subject.name;
                            sub.editMode = false;
                        }
                    })
                }
            }
        },
        onDeleteSubject(subject){
            this.$emit('deleteSubjectClicked', subject)
        },
        onRenameSubject(subject){
            this.subjects.map(sub => {
                if(sub===subject) sub.editMode = true;
            });
            this.$nextTick(() => this.$refs.subjectNameInput[0].focus());
            this.newSubjectName = subject.name;
        },
    },
    mounted(){},
    watch: {
        shouldDeleteSubject(){
            this.removeSubject(this.subjectToDelete);
            this.$emit('resetShouldDeleteSubject', false);
        },
    }
}
</script>

<template>
<div id='subject-cards'>
 
    <!-- Cards for all the saved subjects -->
    <div v-for='subject in subjects' :key='subject.id' class='subject-card-container'>
        <div class='subject-card' @click="router.push(`/Subject/${subject.name}`)">
            <p v-if='(subject.name!==undefined) && (subject.editMode===undefined || subject.editMode===false)' class='subject-name'>{{ subject.name }}</p>
            <form v-else @submit.prevent='onSubjectNameSubmit(subject)'>
                <input ref='subjectNameInput' class='subject-name-input' v-model='newSubjectName' @blur='onInputBlur(subject)' />
            </form>
        </div>
        <div class='subject-card-icon icon'>
            <Icons @click='onRenameSubject(subject)' title='Rename'><font-awesome-icon icon="fa-solid fa-pen" size='sm' /></Icons>
            <Icons @click='onDeleteSubject(subject)' title='Delete'><font-awesome-icon icon="fa-solid fa-trash-can" size='sm' /></Icons>
        </div>
    </div>

    <!-- Card to add new subject -->
    <div class='subject-card-container' @click='addSubject'>
        <div class='subject-card' id='add-subject-card'>
            <p class='subject-name'> + Add new subject </p>
        </div>
    </div>

</div>
</template>

<style scoped>
.subject-cards {
    width: 100%;
}
.subject-card-container {
    display: inline-block;
    width: 33.33%;
}
.subject-card {
    display: inline-block;
    width: 80%;
    margin: 4%;
    border: 2px solid white;
    border-radius: 0.5rem;
    padding: 1rem;
    background: #A1FFCE;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #FAFFD1, #A1FFCE);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #FAFFD1, #A1FFCE); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.subject-card:hover {
    cursor: pointer;
    border: 2px solid #91FF9E;
}
.subject-card-container:hover .subject-card-icon {
    visibility: visible;
}
.subject-card-icon {
    display: inline-block;
    visibility: hidden;
    width: 10%;
}
#add-subject-card {
    background: rgba(0,0,0,0.1);
}
#add-subject-card:hover {
    border: 2px solid #ccc;
}
.subject-name, .subject-name-input {
    font-size: 1.2rem;
}
.subject-name-input {
    width: 100%;
}
</style>