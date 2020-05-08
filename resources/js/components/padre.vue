<template>
    <div>
        <hijo></hijo>
        <button @click="aumentar">+</button>
         <button @click="reducir">-</button>
         <button @click="obtenerCursos">Obtener Cursos</button>
        <h3>Numero {{count}}</h3>
        <!-- <ul v-for="(item,index) in cursos" :key="index">
            <li>
                {{item.nombre}}
            </li>
        </ul> -->
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(['count','cursos'])
    },
    methods:{
        ...mapMutations(['aumentar','reducir']),
    }
}
</script>