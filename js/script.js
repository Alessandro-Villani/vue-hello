console.log('VUE OK', Vue);

const app = Vue.createApp({
    data(){
        return{
            firstName: 'Alessandro',
            lastName: 'Villani',
            picture: 'https://picsum.photos/200',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum distinctio quod possimus doloremque neque vel. Totam dolore vel, illum, dolorum corrupti iure consectetur asperiores quas iste natus, cum saepe.'
        }
    }
});

app.mount('#root');