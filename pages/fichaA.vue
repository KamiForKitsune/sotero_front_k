<template>

  <v-app>    
        <!-- Formulario info personal-->
        <!--Hola :´3-->
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
      
        <!-- Ficha A -->
      <v-card>
        <div class="ficha-a">
            <h2 class="ficha-a__title">Consultorio de origen y antecedentes socio economicos</h2>

            <!-- Antecedentes -->
            <div class="ficha-a__antecedentes">
                <form class="ficha-a__antecedentes__form">
                    <!--Prevision-->
                    
                    <span class="ficha-a__antecedentes__form__item">
                        <label for="estudios">Prevision</label>
                        <v-combobox
                        v-model="previsionSelected"
                        :items="prevision"
                        ></v-combobox>
                    </span>


                    <!--Estudios-->
                    <span class="ficha-a__antecedentes__form__item">
                        <label for="estudios">Estudios</label>
                        <v-combobox
                        v-model="estudiosSelected"
                        :items="estudios"
                        ></v-combobox>
                    </span>

                    <!--Estado Civil-->
                    <span class="ficha-a__antecedentes__form__item">
                        <label for="estado-civil">Estado Civil</label>
                        <v-combobox
                        v-model="estadoCivilSelected"
                        :items="estado_civil"
                        ></v-combobox>
                    </span>

                    <!--Actividad principal-->
                    <span class="ficha-a__antecedentes__form__item">
                        <label for="ocupacion">Ocupacion</label>
                        <v-combobox
                        v-model="ocupacionSelected"
                        :items="ocupacion"
                        ></v-combobox>
                    </span>

                    <!--Grupo sanguineo de la madre-->
                    <div class="ficha-a__antecedentes__form__item">
                        <label for="grpSangre">Grupo Sanguineo Madre</label>
                        <v-combobox
                        v-model="grpSangreSelected"
                        :items="grpSangre"
                        ></v-combobox>
                    </div>

                    <!--Grupo sanguineo Conyuge-->
                    <div class="ficha-a__antecedentes__form__item">
                        <label for="grpSangreConyu">Grupo Sanguineo Conyuge</label>
                        <v-combobox
                        v-model="grpSangreConyuSelected"
                        :items="grpSangre"
                        ></v-combobox>
                    </div>

                    <!--Peso-->
                    <div class="ficha-a__antecedentes__form__item">
                        <label for="peso">Peso</label>
                        <input type="number" name="peso" placeholder="kg" v-model="peso" >
                    </div>

                    <!--Estatura-->
                    <div class="ficha-a__antecedentes__form__item">
                        <label for="estatura">Estatura</label>
                        <input type="number" name="estatura" placeholder="cm" v-model="estatura">
                    </div>
                </form>
            </div>

            <!-- Datos Medicos -->
            <div class="ficha-a__datos-medicos">
                <form class="ficha-a__datos-medicos__form">
                    <!-- Patologia Familiar-->
                    <div class="lista-interactiva">
                        <label class="lista-interactiva__title">Patologia Familiar</label>
                        <div class="lista-interactiva__select">
                            <!-- aca hay que filtrar la patlogia por el tipo de patologia que es KEVIN -->
                            <v-combobox
                            v-model="patologiaFarmiliarSelected"
                            :items="patologia"
                            multiple
                            ></v-combobox>
                            <button class="btn btn-azul btn-añadir-a-lista">+</button>
                        </div>
                        <ul class="lista-interactiva__lista">
                            <!--<li class="li-pat">Diabetes <a href="#" class="btn eliminar-pat">x</a> </li>-->
                        </ul>
                    </div>

                    <!-- Patologia Medica-->
                    <div class="lista-interactiva">
                        <label class="lista-interactiva__title">Patologia Medica</label>
                        <div class="lista-interactiva__select">
                            <v-combobox
                            v-model="patologiaMedicaSelected"
                            :items="patologia"
                            multiple
                            ></v-combobox>
                            <button class="btn btn-azul btn-añadir-a-lista">+</button>
                        </div>
                        <ul class="lista-interactiva__lista">
                            <!--<li class="li-pat">Diabetes <a href="#" class="btn eliminar-pat">x</a> </li>-->
                        </ul>
                    </div>

                    <!-- Patologia Quirurjica-->
                    <div class="lista-interactiva">
                        <label class="lista-interactiva__title">Patologia Quirurgica</label>
                        <div class="lista-interactiva__select">
                            <v-combobox
                                v-model="patologiaQuirurjicaSelected"
                                :items="patologia"
                                multiple
                            ></v-combobox>
                            <button class="btn btn-azul btn-añadir-a-lista">+</button>
                        </div>
                        <ul class="lista-interactiva__lista">
                            <!--<li class="li-pat">Diabetes <a href="#" class="btn eliminar-pat">x</a> </li>-->
                        </ul>
                    </div>
                </form>
            </div>

            <!-- Medicamentos y drogas -->
            <div class="ficha-a__medDrogas">
                <form class="ficha-a__medDrogas__form">
                    <!--Medicamentos cronicos-->
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="ficha-a__medDrogas__form__item__title">Medicamentos crónicos</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="rMedCronico">No</label>
                            <input type="radio" name="rMedCronico" id="">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label class="contRadioButtn">Si, Durante el 1er Trimestre</label>
                            <input type="radio" name="rMedCronico" id="">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label class="contRadioButtn">Si, Después del 1er Trimestre </label>
                            <input type="radio" name="rMedCronico" id="">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label class="contRadioButtn">No sabe </label>
                            <input type="radio" name="rMedCronico" id="">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="">Otro</label>
                            <input type="text" name="" id="Mejorar">
                        </div>

                        <!--Como creo un ComboBox Que cuando selecciono uno, pueda con otro boton "+" Por ejemplo que se active otro combobox igual al otro y me permita listar detallar los medicamentos Cronicos?-->
                    </div>

                    <!-- Cigarrilos / Alcohol -->
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="ficha-a__medDrogas__form__item__title">Cigarrilos por día</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label class="contRadioButtn">No </label>
                            <input type="radio" name="rCigarrillo" id=""></span>
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label class="contRadioButtn">Ocasional</label>
                            <input type="radio" name="rCigarrillo" id="">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="cantCigarrillos">Cantidad</label>
                            <input type="text" name="cantCigarrillos" id="cantCigarrillos">
                        </div>

                        <label class="ficha-a__medDrogas__form__item__title">Alcohol/día(Copa vino)</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label class="contRadioButtn">No</label>
                            <input type="radio" name="rAlcohol" id="">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label class="contRadioButtn">Ocasional</label>
                            <input type="radio" name="rAlcohol" id="">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="cantAlcohol">Cantidad</label>
                            <input type="text" name="cantAlcohol" id="cantAlcohol">
                        </div>


                    </div>

                    <!-- Drogas -->
                    <div class="lista-interactiva">
                        <label class="lista-interactiva__title">Drogas</label>
                        <div class="lista-interactiva__select">
                            <select id="drogas">
                                <option value="Ninguna">Ninguna</option>
                                <option value="Cocaina">Cocaína</option>
                                <option value="Marihuana">Marihuana</option>
                                <option value="Pasta Base">Pasta Base</option>
                                <option value="Anfetamina">Anfetamina</option>
                                <option value="Benzodiazepinas">Benzodiazepinas</option>
                            </select>
                            <button class="btn btn-azul btn-añadir-a-lista">+</button>
                        </div>
                        <ul class="lista-interactiva__lista">
                            <!--<li class="li-pat">Diabetes <a href="#" class="btn eliminar-pat">x</a> </li>-->
                        </ul>

                        <!--Como creo un ComboBox Que cuando selecciono uno, pueda con otro boton "+" Por ejemplo que se active otro combobox igual al otro y me permita listar mas patologias familiar?-->
                        <!-- Hay que hacer que este Combo box se conecte a uina bdd para que ponga todas las patologias medicas facilmente y que haga lo de arriba igual -->

                    </div>
                </form>
            </div>

            <!--Antecedentes Obstetricos-->
            <!-- PENSAR EN ESTA SECCION -->
            <div class="ficha-a__antecedentes-obstetricos">
                <span class="ficha-a__antecedentes-obstetricos__title">Antecedentes Obstétricos</span>

                <form class="ficha-a__antecedentes-obstetricos__form">
                    <!-- Anticoncepcion -->
                    <div class="ficha-a__antecedentes-obstetricos__form__item">
                        <span class="ficha-a__antecedentes-obstetricos__form__item__title">Anticoncepción</span>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="natural">Natural</label>
                            <input type="radio" value="natural" id="" name="anticonceptivo">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="DIU">D.I.U</label>
                            <input type="radio" value="DIU" id="" name="anticonceptivo">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="oral">Oral</label>
                            <input type="radio" value="oral" id="" name="anticonceptivo">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="no">No</label>
                            <input type="radio" value="no" id="" name="anticonceptivo">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="anticonceptivoOtro">Otro</label>
                            <input type="text" id="" name="anticonceptivoOtro">
                        </div>
                    </div>
                    <!-- Embarazos Previos -->
                    <div class="ficha-a__antecedentes-obstetricos__form__item">
                        <span class="ficha-a__antecedentes-obstetricos__form__item__title">Embarazos Previos</span>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="embarazoPrevNormales">Normales</label>
                            <input type="radio" value="normales" id="">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="embarazoPrevMalaHist">Mala historia obstetrica</label>
                            <input type="checkbox" value="mala historia obstetrica" id="">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="embarazoPrevPreeclampsia">Preeclampsia</label>
                            <input type="checkbox" value="preeclampsia" id="">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="embarazoPrevDiabetesGestacional">Diabetes Gestacional</label>
                            <input type="checkbox" value="diabetes gestacional" id="">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="embarazoPrevRNMalFormSNC">RN con malform. SNC</label>
                            <input type="checkbox" value="rn con malform. snc" id="">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="embarazoPrevRNMalFormCard">RN con malform. cardiaca</label>
                            <input type="checkbox" value="rn con malform. cardiaca" id="">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="embarazoPrevRNDown">RN Down</label>
                            <input type="checkbox" value="rn down" id="">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="embarazoPrevRNOtraMalForm">RN con otra malformación</label>
                            <input type="checkbox" value="rn con otra malformacion" id="">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="embarazoPrevOtra">Otra</label>
                            <input type="text" name="embarazoPrevOtra" id="">
                        </div>

                    </div>
                    <!-- Embarazo Ectopico -->
                    <div class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico"
                        id="embarazo-ectopico">
                        <span class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico__title">Embarazo
                            Ectópico</span>

                        <div class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico__seccion-input">
                            <div class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico__input">
                                <label for="embarazoPrevNormales">AE</label>
                                <input type="checkbox" name="embarazoPrevNormales" id="">
                            </div>

                            <div class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico__input">
                                <label for="embarazoPrevNormales">AE</label>
                                <input type="checkbox" name="embarazoPrevNormales" id="">
                            </div>

                            <div class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico__input">
                                <label for="embarazoPrevNormales">AP</label>
                                <input type="checkbox" name="embarazoPrevNormales" id="">
                            </div>

                            <div class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico__input"
                                id="ppr">
                                <label for="embarazoPrevNormales">Ppr</label>
                                <input type="checkbox" name="embarazoPrevNormales" id="">
                            </div>

                            <div class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico__input"
                                id="pter">
                                <label for="embarazoPrevNormales">Pter</label>
                                <input type="checkbox" name="embarazoPrevNormales" id="">
                            </div>

                            <div class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico__input">
                                <label for="embarazoPrevNormales">MNat</label>
                                <input type="checkbox" name="embarazoPrevNormales" id="">
                            </div>

                            <div class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico__input">
                                <label for="embarazoPrevNormales">Mneo</label>
                                <input type="checkbox" name="embarazoPrevNormales" id="">
                            </div>

                            <div class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico__input">
                                <label for="embarazoPrevNormales">Hv</label>
                                <input type="checkbox" name="embarazoPrevNormales" id="">
                            </div>

                            <div class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico__input">
                                <label for="embarazoPrevNormales">Embarazos Ectópicos</label>
                                <input type="checkbox" name="embarazoPrevNormales" id="">
                            </div>


                        </div>

                        <!--Seccion Opcional-->
                        <div class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional">
                            <div class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__input"
                                id="rn-mayor-peso">
                                <label for="rnMayorPeso">RN de mayor peso</label>
                                <input type="text" name="rnMayorPeso" id="" placeholder="grs.">
                            </div>

                            <div
                                class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__input">
                                <label for="cesareasPrevias">Cesareas Previas</label>
                                <input type="checkbox" name="cesareasPrevias" value="cesareas previas"
                                    id="cesareas-previas">
                            </div>

                            <div
                                class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__input">
                                <label for="embarazosGemelares">Embarazos Gemelares</label>
                                <input type="checkbox" name="embarazosGemelares" value="embarazos gemelares"
                                    id="embarazos-gemelares">
                            </div>

                            <div
                                class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__causa">
                                <div
                                    class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__causa__title">
                                    Causa</div>
                                <div
                                    class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__causa__input">
                                    <label for="trabajoParto">Trabajo de Parto</label>
                                    <input type="checkbox" name="trabajoParto" value="trabajo parto">
                                </div>

                                <div
                                    class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__causa__input">
                                    <label for="parto-menor-32-semanas">Parto &lt32 semanas</label>
                                    <input type="checkbox" name="parto-menor-32-semanas" value="parto menor 32 semanas">
                                </div>

                                <div
                                    class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__causa__input">
                                    <label for="distocia-presentacion">Distocia de presentación</label>
                                    <input type="checkbox" name="distocia-presentacion" value="distocia presentacion">
                                </div>

                                <div
                                    class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__causa__input">
                                    <label for="no-sabe">No sabe</label>
                                    <input type="checkbox" name="no-sabe" value="no sabe">
                                </div>

                                <div
                                    class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__causa__input">
                                    <label for="otra">Otra</label>
                                    <input type="checkbox" name="otra" value="otra">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
            <!-- FIN PENSAR EN ESTA SECCION -->
            <!--Antecedentes Embarazo Actual-->
            <div class="ficha-a__antecedentes-embarazo-actual">
                <span class="ficha-a__antecedentes-embarazo-actual__title">Antecedentes Embarazo Actual</span>

                <form class="ficha-a__antecedentes-embarazo-actual__form">
                    <!-- Control Prenatal -->
                    <div class="ficha-a__antecedentes-embarazo-actual__form__item">
                        <span class="ficha-a__antecedentes-embarazo-actual__form__item__title">Control Prenatal</span>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="inicio-semanas">Inicio &#40;sem.&#41;</label>
                            <input type="number" id="" name="inicio-semanas" v-model="inicio_semanas">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="nro-controles">N° controles</label>
                            <input type="number" id="" name="nro-controles" v-model="nro_controles">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="peso-normal">Peso normal &#40;Kgs.&#41;</label>
                            <input type="number" id="" name="peso-normal" v-model="peso_normal">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="talla">Talla &#40;cms&#41;</label>
                            <input type="number" id="" name="talla" v-model="talla">
                        </div>
                    </div>

                    <!-- Control Prenatal -->
                    <div class="ficha-a__antecedentes-embarazo-actual__form__item">
                        <span class="ficha-a__antecedentes-embarazo-actual__form__item__title">F.U.R</span>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input--date">
                            <label for="fur">Fecha última regla</label>
                            <input type="date" id="" name="fur" v-model="fur">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="fur-no-confiable">F.U.R no confiable o no segura</label>
                            <input type="checkbox" id="" name="fur-no-confiable" value="fur no confiable" v-model="fur_no_confiable">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item--primera-ecografia">
                            <span class="ficha-a__antecedentes-embarazo-actual__form__item__title">Primera
                                Ecografía</span>
                            <div class="ficha-a__antecedentes-embarazo-actual__form__item__input--date">
                                <label for="fur">Fecha</label>
                                <input type="date" id="" name="fur" v-model="fechaEcoFur">
                            </div>

                            <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                                <label for="edad-gestacional">Edad Gestacional</label>
                                <input type="number" id="" name="edad-gestacional" v-model="edad_gestacional">
                            </div>
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input--date">
                            <label for="fur">F.U.R Operacional</label>
                            <input type="date" id="" name="fur" v-model="furConfiable">
                        </div>
                    </div>
                </form>
            </div>
          
        </div>
        
        <div class="ficha-a__seccion-btn-global">
            <div class="btn-ingresar-datos">Ingresar Datos</div>
        </div>
            <v-btn
        elevation="2"
        @click="ObtenerTodosLosDatos"
        > Pulsame</v-btn>
      </v-card>
      
     </v-app>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            // La ip para llamar a la api
            address: process.env.baseUrl,
            fechingre: '',
            rut:'',
            fnacmadre:'',
            pNombre:'',
            aPaterno:'',
            aMaterno:'',
            direccion:'',
            numeroDomicilio:0,
            numDeptoCasa:'',
            poblacion:'',
            // revisar comuna
            // 
            region:[],
            // 
            comuna:[],
            telefono:'',
            // revisarPrevision
            prevision:[],
            // revisar estudios
            estudios:[],
            // Cambiar estado civil _
            estado_civil:[],
            // Revisar ocupacion
            ocupacion:'',
            // revisar grupo de sangre
            grpSangre:[],
            // revisar 
            grpSangreConyu:'',
            peso: 0 ,
            estatura: 0 ,
            // Revisar patologia familiar, patologia medica y patologia Quirurjica EN CASO QUE AL BUSCAR UN PACIENTE SE MUESTRE TODO EL LISTADO DE PATOLOGIAS QUE TIENE EL PACIENTE
            patoFam: '',
            // patologias
            patologia: [],
            // tipo patologias,
            tPatologia:[],
            // Revisar medicamento cronico
            rMedCronico:'',
            // revisaar cigarrillo
            cantCigarrillos:'',
            cantAlcohol:'',
            // revisar drogas
            drogas:[],
            // revisar anticonceptivo
            anticonceptivo:[],
            // anticonceptivo otro ????
            // Verificar lo de embarazos previos, como lo tomamos y como los generamos
            // Verificar esto, obtencion y  filtro
            rnMayorPeso:'',
            // verificar obtencion y calculo de esto
            cesareasPrevias:'',
            // Todos los antecedentes obtetricos se necesitan tomaar y filtrar de cierta manera, es necesario conocer si obtenemos los datos y los transformamos o solo los obtenemos ya transformados
            //  cambiar inicio-semanas por _
            inicio_semanas:'',
            // hay alguna manera de obtener los controles?
            nro_controles: 0,
            // peso normal de que?
            peso_normal:0,
            talla:0,
            fur:'',
            fur_no_confiable: false,
            // cambiar edad-gestacional por _
            edad_gestacional:'',
            previsionSelected: '',
            estudiosSelected: '',
            estadoCivilSelected:'',
            ocupacionSelected:'',
            grpSangreSelected: '',
            grpSangreConyuSelected: '',
            regionSelected: '',
            comunaSelected: '',
            patologiaFarmiliarSelected:[],
            patologiaQuirurjicaSelected:[],
            patologiaMedicaSelected:[],
            furConfiable:'',
            fechaEcoFur:'',











        }
    },
    created(){
        //  Al abrirse la ficha A, se deberia obtener:
        // Region, Prevision, Estudios, Estaado Civil, Ocupacion, grupo sanguineo(for both cbox),patologias (familiar, medica y quirurgica)
        // Drogas, Anticoncepcion

    },
    watch:{
        regionSelected: async function(){
            if(this.regionSelected){

            const getData = await axios.get(this.address+'/ObtenerComunas',{id_reg:this.regionSelected},
            {
                headers: { "authorization": this.$auth.$storage['_state']['_token.local'] }
            })
            }
            this.comuna=getData.data

        }

    },
    methods: {
        TakeComunas:async function(){
            alert("Cristina le gusta la palabra nose y emm", this.rut)
            console.log('Cristina puede que le gusten las peras',this.fechingre)
        },
        ObtenerDatosPaciente: async function(){
            // Aca tenemos que tomar datos del paciente
            // Tomar los datos prevision, estudios, estado civil, ocupación, Grupos sanguineos de los familiares
            // Embarazos previos, embarazo ectopico , embarazo gemelar, cesareas previas y cuales
            // Causa de embarazos ectopicos
            alert("Aun no estoy listo")
        },

        insertaFichaA: async function(){
            const grabarFichaA = await axios.post(this.address+'/ObtenerTodo',{fichaA:fichaFData},
                {
                    headers: { "authorization": this.$auth.$storage['_state']['_token.local'] }
                })
            alert("Aun no no no estoy listo")

        },
        ObtenerTodosLosDatos: async function(){
                const getData = await axios.get(this.address+'/ObtenerDataFichaA',
                {
                    headers: { "authorization": this.$auth.$storage['_state']['_token.local'] }
                })
                console.log(getData)

                this.region = getData.data[0]
                this.prevision = getData.data[1]
                this.estudios = getData.data[2]
                this.estado_civil = getData.data[3]
                this.ocupacion = getData.data[4]
                this.grpSangre= getData.data[5]
                this.patologia = getData.data[6]
                this.tPatologia = getData.data[7]
                this.drogas = getData.data[8]
                this.anticonceptivo = getData.data[9]
                // this.region = getData.data[0].nombre
                // this.prevision = getData.data[1].nombre
                // this.estudios = getData.data[2].nomEstudio
                // this.estado_civil = getData.data[3].nombre
                // this.ocupacion = getData.data[4].nomActividad
                // this.grpSangre= getData.data[5].nombre
                // this.patologia = getData.data[6].nombre
                // this.tPatologia = getData.data[7].nombre
                // this.drogas = getData.data[8].nom_droga
                // this.anticonceptivo = getData.data[9].nombre
                console.log(this.region[0].nombre)





        } 

    }
}
</script>







<style>
*, *::before, *::after {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;    
    /*COLOR VARIABLES*/
    --color-primary: #5680f9;
    --color-primary-dark: #374786;
    --color-primary-light-1: #7799fa;
    --color-primary-light-2: #99b3fb;
    --color-secondary: #6f5ee3;
    --color-red: #eb5858;
    --color-white: #fff;
    --color-light-blue: #f4f7fc;
    --color-grey-light-1: #f6f6f6;
    --color-grey-light-2: #dfdfdf;
    --color-grey-dark-1: #24305e;
    --color-grey-dark-2: #141827;
    --color-shadow-color: #e1e3eb;
    --color-green: #6ec553;
    /* FONT VARIABLES*/
    --font-primary: 'Lato', sans-serif;
    --font-color-black: #131313;
    --font-color-grey: #a3a3a3;
    --font-color-white: #ffffff;
    --font-color-primary: #5680f9;
    
    /* Breakpoints */
    --bp-largest: 73em;
   
}

.info-personal__title {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 1rem;
    padding: 1rem 0px 1rem 1.8rem;
    /*border-bottom: solid 2px rgba(0, 0, 0, .1);*/
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.08);
}

.info-personal__form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 2rem;
    align-items: start;
    justify-items: center;
    padding: 1rem 1rem 1rem 1rem;
}


.info-personal__form__item {
    display: grid;
    grid-template-columns: min-content;
}

.info-personal__form__item>input {
    width: 20rem;
}

.ficha-a {
    background-color: var(--color-white);
    font-weight: 400;
    /*padding: 3rem 3rem;*/
    box-shadow: 0px 3px 5px var(--color-shadow-color);
    border-top: solid 5px var(--color-primary);
}

.ficha-a__title {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 3rem;
    padding: 1rem 0px 1rem 1.8rem;
    /*border-bottom: solid 2px rgba(0, 0, 0, .1);*/
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.08);
}

.ficha-a__antecedentes {
    padding-bottom: 4rem;
    border-bottom: solid 2px rgba(0, 0, 0, 0.08);
}

.ficha-a__antecedentes__form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 2rem;
    align-items: start;
    justify-items: center;
    padding: 2rem 3rem 2rem 3rem;
}

.ficha-a__antecedentes__form__item {
    display: grid;
    grid-template-columns: min-content;
}

.ficha-a__antecedentes__form__item>input, .ficha-a__antecedentes__form__item>select {
    width: 20rem;
}

.ficha-a__datos-medicos {
    border-bottom: solid 2px rgba(0, 0, 0, 0.08);
    padding: 4rem 3rem 4rem 3rem;
}

.ficha-a__datos-medicos__form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    gap: 2rem;
    align-items: start;
    justify-items: stretch;
}


.lista-interactiva {
    display: grid;
    /*padding: 20px;*/
    background-color: var(--color-white);
    box-shadow: 0px 5px 5px var(--color-grey-light-1);
    border-radius: 1rem;
    border: 2px solid var(--color-grey-light-1);
}

.lista-interactiva__title {
    padding: 1rem 0px 1rem 0px;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 10px;
    border-bottom: 1.5px solid rgba(0, 0, 0, .1);
}

.lista-interactiva__select {
    margin-top: 1rem;
    margin-bottom: 2rem;
    justify-self: center;
    justify-content: center;
    text-align: center;
}

.lista-interactiva__select>select {
    width: 17rem;
    padding: 3px;
    justify-self: center;
}

.lista-interactiva__lista {
    padding: 1rem 2rem 0px 2rem;
    list-style: none;
    text-align: left;
}

.lista-interactiva__lista__li {
    display: grid;
    font-size: 1.4rem;
    grid-template-columns: 90% 1fr;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;
    text-transform: capitalize;
    background-color: white;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, .15)
}

.ficha-a__medDrogas {
    display: grid;
    border-bottom: solid 2px rgba(0, 0, 0, 0.08);
    padding: 4rem 3rem 4rem 3rem;
}

.ficha-a__medDrogas__form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    gap: 2rem;
    align-items: start;
}

.ficha-a__medDrogas__form__item {
    display: grid;
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 1rem;
    box-shadow: 0px 5px 5px var(--color-grey-light-1);
    border-radius: 1rem;
    border: 2px solid var(--color-grey-light-1);
}

.ficha-a__medDrogas__form__item__title {
    justify-self: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 1.8rem;
    font-weight: 400;
}

.ficha-a__medDrogas__form__item__input {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
}

.ficha-a__medDrogas__form__item__input input {
    justify-self: end;
}

.ficha-a__medDrogas__form__item__input input[type=text] {
    width: 100%;
}

.ficha-a__medDrogas__form__item__title {
    justify-self: center;
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 10px;
}

.ficha-a__medDrogas__form__item__lista-drogas__select {
    text-align: center;
}

.ficha-a__medDrogas__form__item__lista-drogas__select>select {
    width: 17rem;
    padding: 3px;
}


.ficha-a__antecedentes-obstetricos {
    display: grid;
    border-bottom: solid 2px rgba(0, 0, 0, 0.08);
    padding-bottom: 2rem;
}

.ficha-a__antecedentes-obstetricos__title {
    grid-column: 1/-1;
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 3rem;
    padding: 2rem 0px 2rem 1.8rem;
    /* border-bottom: solid 2px rgba(0, 0, 0, .1); */
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.08);
    text-align: center;
}

.ficha-a__antecedentes-obstetricos__form {
    grid-column: 1/-1;
    grid-row: 2/3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 2rem 3rem 2rem 3rem;
}

.ficha-a__antecedentes-obstetricos__form__item {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    height: fit-content;
    box-shadow: 0px 5px 5px var(--color-grey-light-1);
    border-radius: 1rem;
    border: 2px solid var(--color-grey-light-1);
    padding: 2rem;
}

.ficha-a__antecedentes-obstetricos__form__item__title {
    font-size: 1.4rem;
    justify-self: center;
}

.ficha-a__antecedentes-obstetricos__form__item__input {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
}

.ficha-a__antecedentes-obstetricos__form__item__input>input {
    justify-self: end;
}

.ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico {
    grid-row: 3/4;
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content 1fr;
    box-shadow: 0px 5px 2px var(--color-grey-light-1);
    border-radius: 1rem;
    border: 2px solid var(--color-grey-light-1);
    overflow: hidden;
}

.ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico__title {
    font-size: 1.4rem;
    padding: 1rem 0rem 1rem 0rem;
    text-align: center;
    grid-column: 1/-1;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
}

.ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico__seccion-input {
    grid-column: 1/-1;
    grid-row: 2/3;
    display: flex;
    justify-content: space-between;
    padding: 0rem 2rem;
}

.ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico__input {
    display: grid;
    grid-template-columns: minmax(min-content, max-content);
    grid-template-rows: 1fr 1fr;
    text-align: center;
    justify-items: center;
    justify-content: center;
    /*padding: 0rem 1.5rem 0rem 1.5rem;*/
}

.ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico__input>input {
    width: 2rem;
    height: 100%;
}

#ppr, #pter {
    background-color: var(--color-grey-light-1);
    justify-self: center;
    min-width: 5rem;
    border-left: 1px solid rgba(0, 0, 0, .1);
    border-right: 1px solid rgba(0, 0, 0, .1);
}

.ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional {
    grid-column: 1/-1;
    grid-row: 3/4;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    background-color: var(--color-grey-light-1);
    color: var(--font-color-black);
    /*color: rgba(0, 0, 0, .4)*/
}

.ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional--inactive {
    color: var(--font-color-grey);
}

.ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__input {
    display: grid;
    text-align: center;
    justify-items: center;
}

.ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional>.ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__input:not(:first-child) {
    background-color: var(--color-white);
    margin-top: 2rem;
    padding: 1rem 1rem 1rem 1rem;
    border-top: 1px solid rgba(0, 0, 0, .1);
    border-left: 1px solid rgba(0, 0, 0, .1);
    border-right: 1px solid rgba(0, 0, 0, .1);
    z-index: 1;
    width: max-content;
    justify-self: center;
}


#rn-mayor-peso {
    grid-column: 1/-1;
}

/*.ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__input input[type=text] {
    height: 3rem;
}*/

.ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__input input[type=checkbox] {
    height: 1.5rem;
    width: 100%;
}

.ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__causa {
    display: grid;
    grid-column: 1/-1;
    grid-template-columns: 1fr;
    background-color: var(--color-white);
}

.ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__causa__title {
    font-size: 1.4rem;
    text-align: center;
    padding: 1rem 0px;
    /*border-bottom: 1px solid rgba(0, 0, 0, .15);*/
}

.ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__causa__input {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    padding: 1rem;
}

.ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional__causa__input input {
    justify-self: center;
}


/* ---------- Antecedentes Embarazo Actual ---------- */

.ficha-a__antecedentes-embarazo-actual {
    display: grid;
    padding-bottom: 2rem;
}

.ficha-a__antecedentes-embarazo-actual__title {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 3rem;
    padding: 2rem 0px 2rem 1.8rem;
    /* border-bottom: solid 2px rgba(0, 0, 0, .1); */
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.08);
    text-align: center;
}

.ficha-a__antecedentes-embarazo-actual__form {
    grid-column: 1/-1;
    grid-row: 2/3;
    display: grid;
    /*grid-template-columns: 1fr 1fr;*/
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    gap: 2rem;
    padding: 2rem 3rem 2rem 3rem;
}

.ficha-a__antecedentes-embarazo-actual__form__item {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    height: fit-content;
    box-shadow: 0px 5px 5px var(--color-grey-light-1);
    border-radius: 1rem;
    border: 2px solid var(--color-grey-light-1);
    padding: 2rem;
}

.ficha-a__antecedentes-embarazo-actual__form__item__title {
    font-size: 1.4rem;
    justify-self: center;
}

.ficha-a__antecedentes-embarazo-actual__form__item__input {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
}

.ficha-a__antecedentes-embarazo-actual__form__item__input--date {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
}

.ficha-a__antecedentes-embarazo-actual__form__item--primera-ecografia {
    display: grid;
    gap: 2rem;
    background-color: var(--color-grey-light-1);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, .2);
    padding: 1rem;
}

.ficha-a__antecedentes-embarazo-actual__form__item__input input {
    justify-self: end;
}

.ficha-a__antecedentes-embarazo-actual__form__item__input input[type=number] {
    width: 6rem;
}

.ficha-a__antecedentes-embarazo-actual__form__item__input input[type=date] {
    grid-row: 2/-1;
    grid-column: 1/-1;
}

.ficha-a__seccion-btn-global {
    border-top: 2px solid rgba(0, 0, 0, .1);
}


/* ---------- Botones ---------- */

.btn:link, .btn:visited, .btn {
    max-width: 50px;
    text-decoration: none;
    position: relative;
    color: white;
    padding: 5px 5px;
    transition: all .2s ease-out;
    font-weight: 700;
    font-size: 1rem;
    border: none;
    user-select: none;
    cursor: pointer;
    outline: 0;
}

.btn-azul {
    background-color: var(--color-primary);
    font-size: 1.2rem;
    padding: 4px 12px;
    border-radius: 5px;
}

.btn-rojo {
    background-color: var(--color-red);
}

.btn-eliminar-pat {
    font-weight: 900;
    height: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .13);
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-eliminar-pat:hover {
    text-transform: capitalize;
    padding-left: 15px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, .2);
}

.btn-eliminar-pat:active {
    box-shadow: 0px 3.5px 2.5px rgba(0, 0, 0, .2);
}

.btn-añadir-a-lista:hover {
    transform: translate(0, -2px);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, .2);
}

.btn-añadir-a-lista:active {
    box-shadow: 0px 3.5px 2.5px rgba(0, 0, 0, .2);
}

.btn-ingresar-datos {
    background-color: var(--color-primary);
    color: var(--font-color-white);
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    width: max-content;
    margin: 2rem auto 2rem auto;
    border-radius: 1rem;
    user-select: none;
    cursor: pointer;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, .2);
    transition: all .15s ease-out;
}

.btn-ingresar-datos:hover {
    transform: translateY(-3px);
    box-shadow: 0px 5px 6px rgba(0, 0, 0, .2);
}

.btn-ingresar-datos:active {
    transform: translateY(2px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .4);
}

.ocultar{
   display: none;
}

input{
    border: 1px solid var(--font-color-grey);
    border-radius: 4px;
}

select{
    border: 1px solid var(--font-color-grey);
    border-radius: 4px;
}

textarea{
    border: 1px solid var(--font-color-grey);
    border-radius: 4px;
}


*[data-tooltip] {
    position: relative;
}

*[data-tooltip]::after {
    content: attr(data-tooltip);

    position: absolute;
    top: -20px;
    right: -20px;
    width: 150px;

    pointer-events: none;
    opacity: 0;
    -webkit-transition: opacity .15s ease-in-out;
    -moz-transition: opacity .15s ease-in-out;
    -ms-transition: opacity .15s ease-in-out;
    -o-transition: opacity .15s ease-in-out;
    transition: opacity .15s ease-in-out;

    display: block;
    font-size: 12px;
    line-height: 16px;
    background: #f6f6f6;
    padding: 2px 2px;
    border: 1px solid #c0c0c0;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.4);
}

*[data-tooltip]:hover::after {
    opacity: 1;
}

.a{
    float: right;
}

.b{
    padding: 10px 10px 10px 10px;
}



</style>

