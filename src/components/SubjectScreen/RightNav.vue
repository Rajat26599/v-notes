<script>
import data from '../../utils/data/subjectsData';

export default {
    name: 'RightNav',
    props: [
        'subjectName'
    ],
    data(){
        return {
            newChapterName: '',
            chapters: data.subjects.filter(sub => sub.name===this.subjectName)[0]?.chapters,
        }
    },
    methods: {
        addChapter(){
            this.chapters.push({id: this.chapters.length, editMode: true});
            this.$nextTick(() => this.$refs.chapterNameInput[0].focus());
        },
        setChapterName(chapter){
            this.chapters.map(chap => {
                if(chap===chapter) chap.name = this.newChapterName;
            })
            this.newChapterName = '';
            this.chapters.map(chap => {
                if(chap===chapter) chap.editMode = false;
            })
        },
        onChapterInputBlur(chapter){
            if(this.newChapterName!==''){
                this.setChapterName(chapter);
            } else {
                if(this.chapters[this.chapters.length-1].editMode){
                    this.chapters.pop();
                } else {
                    this.chapters.map(chap => {
                        if(chap.editMode) {
                            chap.name = chapter.name;
                            chap.editMode = false;
                        }
                    })
                }
            }
        },
        onChapterNameSubmit(chapter){
            console.log(this.newChapterName)
            if(this.newChapterName===''){
                this.newChapterName = 'New Chapter'
            }
            this.setChapterName(chapter);
        }
    }
}
</script>

<template>
<div id='sideNav'>
    <h1>{{ subjectName }} Headings</h1>
    <div v-for='chapter in chapters' :key='chapter' class='chapter-card-container'>
        <div class='chapter-card'>
            <p class='chapter-name'>
                <span>{{ chapter.id+1 }}.</span>&nbsp;
                <span v-if='chapter.name!==undefined'>{{ chapter.name }}</span>
                <form v-else @submit.prevent='onChapterNameSubmit(chapter)'>
                    <input ref='chapterNameInput' class='chapter-name-input' v-model='newChapterName' @blur='onChapterInputBlur(chapter)' />
                </form>
            </p>
        </div>
    </div>

    <!-- Card to add new chapter -->
    <div class='chapter-card-container' @click='addChapter'>
        <div class='chapter-card' id='add-chapter-card'>
            <p class='chapter-name'> + Add new chapter </p>
        </div>
    </div>
</div>
</template>

<style scoped>
#sideNav {
    width: 20vw;
    min-height: 100vh;
}
.chapter-cards {
    width: 100%;
}
.chapter-card {
    width: 90%;
    margin: 4%;
    border: 2px solid #A1FFCE;
    border-radius: 0.5rem;
    padding: 0.5rem;
}
.chapter-card:hover {
    cursor: pointer;
    border: 2px solid #91FF9E;
}
#add-chapter-card {
    background: rgba(0,0,0,0.1);
}
#add-chapter-card:hover {
    border: 2px solid #ccc;
}
.chapter-name, .chapter-name-input {
    font-size: 1.2rem;
    display: inline-flex;
}
.chapter-name-input {
    width: 100%;
}
form {
    display: inline-block;
}
</style>