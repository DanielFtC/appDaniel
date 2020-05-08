<template>
    <div>
         <h3>Numero {{count}}</h3>
        <!-- <padre></padre> -->
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['count'])
    }
}
</script>