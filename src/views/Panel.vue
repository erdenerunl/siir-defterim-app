<template>
    <my-poems-component :specificIndex="specificIndex"></my-poems-component>
</template>

<script>
import MyPoemsComponent from "@/components/pageComponents/MyPoemsComponent.vue";
import {mapGetters} from "vuex"
export default {
    components : {
        MyPoemsComponent
    },
    data() {
        return {
            specificIndex: null,
        }
    },
    created() {
        this.createSpecificIndex();
    },
    methods: {
        createSpecificIndex() {
            let randomIndex = Math.floor(Math.random() * (this.poemList.length + 1));
            console.log(this.poemList);
            console.log(randomIndex); 
        }
    },
    computed : {
        ...mapGetters({
            poemList : '_poemList'
        })
    }
}
</script>
