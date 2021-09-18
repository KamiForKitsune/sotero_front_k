<template>
    <v-card>
        <div class="info-personal">
            <h2 class="info-personal__title">Datos Personales</h2>
            <form class="info-personal__form">
                <!--  FechaIngresoRutDeLaMadreFechaDeIngresoDeLaMadre-->
                <span class="info-personal__form__item">
                    <label for="fechingre">Fecha Ingreso</label>
                    <input type="date" name="fechingre" v-model="fechingre">
                    
                </span>
                <span class="info-personal__form__item">
                    <label for="rut-madre">Rut de la Madre</label>
                    <input type="text" name="rut-madre" v-model="rut">
                </span>
                <span class="info-personal__form__item">
                    <label for="fnacmadre">Fecha de nac. madre</label>
                    <input type="date" name="fnacmadre" v-model="fnacmadre">
                </span>

                <!--PrimerNombreApellidoPaternoMaterno-->

                <span class="info-personal__form__item">
                    <label for="pNombre">Primer nombre</label>
                    <input type="text" name="pNombre" v-model="pNombre">
                </span>
                <span class="info-personal__form__item">
                    <label for="aPaterno">Apellido Paterno</label>
                    <input type="text" name="aPaterno" v-model="aPaterno">
                </span>
                <span class="info-personal__form__item">
                    <label for="aMaterno">Apellido Materno</label>
                    <input type="text" name="aMaterno" v-model="aMaterno">
                </span>

                <!-- DomicilioNumeroDeptoOCasa-->

                <span class="info-personal__form__item">
                    <label for="direccion">Dirección</label>
                    <input type="text" name="direccion" v-model="direccion">
                </span>
                <span class="info-personal__form__item">
                    <label for="numeroDomicilio">Número</label>
                    <input type="number" name="numeroDomicilio" v-model="numeroDomicilio">
                </span>
                <span class="info-personal__form__item">
                    <label for="numDeptoCasa">Número depto o casa</label>
                    <input type="text" name="numDeptoCasa" v-model="numDeptoCasa">
                </span>

                <!-- Poblacion/BarrioComunaTelefono  -->

                <span class="info-personal__form__item">
                    <label for="poblacion">Poblacion o Barrio</label>
                    <input type="text" name="poblacion" v-model="poblacion">
                </span>
                <!-- region -->
                <span class="info-personal__form__item">
                    <label for="Region">Region</label>
                    <v-combobox
                    v-model="regionSelected"
                    :items="region"
                    item-text="nombre"
                    item-value="_id"
                ></v-combobox>
                    <!--Para autocompletar-->
                </span>
                <!-- comuna -->

                <span class="info-personal__form__item">
                    <label for="Comuna">Comuna</label>
                    <v-combobox
                    v-model="comunaSelected"
                    :items="comuna"
                    v-if="regionSelected"
                    item-text="nombre"
                    item-value="_id"
                    ></v-combobox>
                    <!--Para autocompletar-->
                </span>
                <span class="info-personal__form__item">
                    <label for="telefono">Telefono de contacto</label>
                    <input type="text" name="telefono" v-model="telefono">
                </span>
            </form>
        </div>
      </v-card>
</template>



<style>
  @import '../assets/estilos.css';
</style>
