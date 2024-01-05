<script>
import TheWelcome from './TheWelcome.vue';
import SubjectCards from './SubjectCards.vue';
import Modal from '../utils/Modal.vue';
import Neutralbtn from '../utils/buttons/Neutralbtn.vue';
import Dangerbtn from '../utils/buttons/Dangerbtn.vue';

export default {
    name: 'LandingScreen',
    components: {
        TheWelcome,
        SubjectCards,
        Modal,
        Neutralbtn,
        Dangerbtn,
    },
    data(){
        return {
            showModal: false,
            shouldDeleteSubject: false,
            subjectToDelete: {},
        }
    },
    methods: {
        toggleModal(){
            this.showModal = !this.showModal
        },
        onDeleteSubjectFromModal(){
            this.shouldDeleteSubject = true;
            this.toggleModal();
        },
        onReceivingSubjectToDelele(value){
            this.subjectToDelete = value;
            this.toggleModal();
        },
        resetShouldDeleteSubject(){
            this.shouldDeleteSubject = false;
        }
    }
}
</script>

<template>
<div id='landing-screen'>
    <Modal :showModal=showModal>
        <template v-slot:message>Are you sure you want to delete this subject?" </template>
        <template v-slot:btn>
            <Neutralbtn @click='toggleModal'>Cancel</Neutralbtn>
            <Dangerbtn @click='onDeleteSubjectFromModal'>Delete</Dangerbtn>
        </template>
    </Modal>

    <div id='banner'>
        <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />
        <TheWelcome />
    </div>

    <SubjectCards :shouldDeleteSubject='shouldDeleteSubject' @deleteSubjectClicked='onReceivingSubjectToDelele' :subjectToDelete='subjectToDelete' @resetShouldDeleteSubject='resetShouldDeleteSubject' />
</div>
</template>

<style scoped>
#landing-screen {
    margin: 0 auto;
}
#banner {
  display: flex !important;
  justify-content: center;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>