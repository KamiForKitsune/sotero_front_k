<template>
    <v-card>
        <div class="info-personal">
            <h2 class="info-personal__title">Datos Personales</h2>
            <form class="info-personal__form">
                <!--  FechaIngresoRutDeLaMadreFechaDeIngresoDeLaMadre-->
                <span class="info-personal__form__item">
                    <label for="fechingre">Fecha Ingreso</label>                   
                    <v-text-field label="" v-model="fechingre" hide-details type="date" class="text-n"></v-text-field>
                </span>

                <span class="info-personal__form__item">
                    <label for="rut-madre">Rut de la madre</label>                    
                    <v-text-field label="" v-model="rut" hide-details type="text" class="text-n"></v-text-field>
                </span>

                <span class="info-personal__form__item">
                    <label for="fnacmadre">Fecha de nacimiento madre</label>                    
                    <v-text-field label="" v-model="fnacmadre" hide-details type="date" class="text-n"></v-text-field>
                </span>                
                <!--PrimerNombreApellidoPaternoMaterno-->
                <span class="info-personal__form__item">
                    <label for="pNombre">Primer nombre</label>                    
                    <v-text-field label="" v-model="pNombre" hide-details type="text" class="text-n"></v-text-field>
                </span>

                <span class="info-personal__form__item">
                    <label for="aPaterno">Apellido paterno</label>                    
                    <v-text-field label="" v-model="aPaterno" hide-details type="text" class="text-n"></v-text-field>
                </span>

                <span class="info-personal__form__item">
                    <label for="aMaterno">Apellido materno</label>                    
                    <v-text-field label="" v-model="aMaterno" hide-details type="text" class="text-n"></v-text-field>
                </span>                
                <!-- DomicilioNumeroDeptoOCasa-->
                <span class="info-personal__form__item">
                    <label for="direccion">Dirección</label>                   
                    <v-text-field label="" v-model="direccion" hide-details type="text" class="text-n"></v-text-field>
                </span>

                <span class="info-personal__form__item">
                    <label for="numeroDomicilio">Número domicio</label>                    
                    <v-text-field label="" v-model="numeroDomicilio" hide-details type="number" class="text-n"></v-text-field>
                </span>

                <span class="info-personal__form__item">
                    <label for="numDeptoCasa">Número departamento o casa</label>                    
                    <v-text-field label="" v-model="numDeptoCasa" hide-details type="number" class="text-n"></v-text-field>
                </span>
                <!-- Poblacion/BarrioComunaTelefono  -->
                <span class="info-personal__form__item">
                    <label for="poblacion">Población o Barrio</label>                    
                    <v-text-field label="" v-model="poblacion" hide-details type="text" class="text-n"></v-text-field>
                </span>
                <!-- region -->
                <span class="info-personal__form__item">
                    <label for="Region">Región</label>
                    <v-combobox v-model="regionSelected" :items="region" item-text="nombre" item-value="_id" class="text-n"></v-combobox>
                    <!--Para autocompletar-->
                </span>
                <!-- comuna -->
                <span class="info-personal__form__item">
                    <label for="Comuna">Comuna</label>
                    <v-combobox v-model="comunaSelected" :items="comuna" v-if="regionSelected" item-text="nombre" item-value="_id" class="text-n"></v-combobox>
                    <!--Para autocompletar-->
                </span>
                <span class="info-personal__form__item">
                    <label for="telefono">Telefono de contacto</label>                    
                    <v-text-field label="" v-model="telefono" hide-details type="text" class="text-n"></v-text-field>
                </span>
                <span class="info-personal__form__item">
                    <label for="grpSangre">Grupo Sanguineo Madre</label>
                    <v-combobox v-model="grpSangreSelected" :items="grpSangre" class="text-n"></v-combobox>
                </span>

                <span class="info-personal__form__item">
                    <label for="grpSangreConyu">Grupo Sanguineo Conyuge</label>
                    <v-combobox v-model="grpSangreConyuSelected" :items="grpSangre" class="text-n"></v-combobox> 
                </span>

                <span class="info-personal__form__item">
                    <label for="peso">Peso</label>                         
                    <v-text-field placeholder="kg" v-model="peso" hide-details type="number" class="text-n"></v-text-field>              
                </span>

                <span class="info-personal__form__item">
                    <label for="estatura">Estatura</label>                    
                    <v-text-field placeholder="cm" v-model="estatura" hide-details type="number" class="text-n"></v-text-field>
                </span>
            </form>
        </div>
      </v-card>
</template>



<style>
  @import '../assets/estilos.css';
</style>
