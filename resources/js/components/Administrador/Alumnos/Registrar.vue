 <template>
    <div>
        <!-- <form> -->
        <!-- <form v-on:submit.prevent="saveForm()"> -->
            <div class="card card-primary">
                <div class="card-header">
                    Registrar Rol
                    <router-link :to="{name: 'VisualizarAlumnos'}" class="float-right">Atras</router-link>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text"  class="form-control" placeholder="Escribir Nombre">
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </div>
        <!-- </form> -->
    </div>
</template>
