<template>
    <div>
        <div class="modal" id="Modal">
            <div class="contenedor">
                <div class="container-fluid text-center" style="color:#6E6E6E" >
                    <i class="fas fa-tv nav-icon" style="font-size: 60px;"></i>
                        <h1 class="text-center" style="font-size: 50px;">
                            Bienvenidos<br>
                            Desarrollos Fadel S.A.C.
                        </h1>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
#Modal
{
    width: 100%;
    height: 180%;
    background:rgb(0,0,0,0.8);
    position: auto;
    display: flex;
    animation: Modal 4s;
    visibility:hidden;
    opacity: 0;
    max-height:0 auto;
}
.contenedor
{
    
    width: 60%;
    height: 72%;
    margin: auto;
}
@keyframes Modal{
    100%{
        visibility: visible;
        opacity: 1;
    }
}

</style>