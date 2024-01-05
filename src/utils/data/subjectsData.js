let subjectId = 0;
let chapterId = 0;
export default {
    subjects: [
        {
            id: subjectId++, 
            name: 'English',
            chapters: [
                {id: chapterId++, name: 'The Wave'},
                {id: chapterId++, name: 'Magical Fountain'},
                {id: chapterId++, name: 'Abraham Lincon'},
                {id: chapterId++, name: 'The Song of Ice and Fire' },
            ]
        },
        {
            id: subjectId++, 
            name: 'Science'
        },
        {
            id: subjectId++, 
            name: 'Politics'
        },
        {
            id: subjectId++, 
            name: 'Economy'
        },
    ],
}