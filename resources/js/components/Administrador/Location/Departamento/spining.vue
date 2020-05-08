<template>
    <div v-bind:style="styles" class="spinner spinner--cube">
        <div v-bind:style="spining_styles" class="spinin1"></div>
        <div v-bind:style="spining_styles" class="spinin2"></div>
    </div>
</template>
<script>
export default {
    props:{
        size:{
            default:'40px',

        },
        background:{
            default:'#41b883'
        },
        duration:{
            default:'1.8s'
        }
    },
    computed:{
        spining_style(){
            return{
                spining_styles:this.background,
                animacion:'sk-cubemove',
                duracion: this.duration,
                TipoFunction:'ease-in-out',
                Conteo:'infinite'
            }
        },
        styles(){
            return{
                width: this.size,
                height:this.size
            }
        }
    }
}
</script>
<style scoped>
.spinner{
    display:inline-block;
    position:relative;
}
.spinin1, .spinin2{
    width:15px;
    height: 15px;
    position: absolute;
    top:0;
    left:0;
}
.spinin2{
    animation-delay: -0.9s;
}
@keyframes sk-subemove{
    25%{
        transform: translateX(20px) rotate(-90deg) scale(0.5);
    }
    50%{
        transform:translateX(20px) translateY(20px) rotate(-179deg);
    }
    50.1%{
        transform:translateX(20px) translateY(20px) rotate(-180deg);
    }
    75%{
        transform: translateX(0px) translateY(20px) rotate(-270deg) scale(0.5);
    }
    100%{
        transform: rotate(-360deg);
    }
}
</style>