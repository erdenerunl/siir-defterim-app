<template>
    <div class="wrapper">
        <div class="container content-section">
            <div class="row">
                <div class="col-12 my-header">
                    <h2>{{ poemList[specificIndex].header }}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="poem-text-wrapper format-poem">
                            {{poemList[specificIndex].body}}
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'
export default {
    props: ['specificIndex'],
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters({
            poemList : '_poemList'
        })
    },
    created() {
        console.log(this.poemList);
        
    }
}
</script>

<style lang="scss">
@import '@/assets/styles.scss';
.wrapper {
    width: 100%;
    height: 100%;
}
.poem-text-wrapper {
    display: flex;
    justify-content: center;
}
.format-poem {
    font-size: 15px;
    text-align: left;
    white-space: pre-line;
    padding: 1rem;
    }
</style>