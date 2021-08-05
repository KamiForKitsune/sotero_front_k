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
                    <input type="date" name="fechingre" id="fechingre">
                </span>
                <span class="info-personal__form__item">
                    <label for="rut-madre">Rut de la Madre</label>
                    <input type="text" name="rut-madre" id="rut">
                </span>
                <span class="info-personal__form__item">
                    <label for="fnacmadre">Fecha de nac. madre</label>
                    <input type="date" name="fnacmadre" id="fnacmadre">
                </span>

                <!--PrimerNombreApellidoPaternoMaterno-->

                <span class="info-personal__form__item">
                    <label for="pNombre">Primer nombre</label>
                    <input type="text" name="pNombre" id="pNombre">
                </span>
                <span class="info-personal__form__item">
                    <label for="aPaterno">Apellido Paterno</label>
                    <input type="text" name="aPaterno" id="aPaterno">
                </span>
                <span class="info-personal__form__item">
                    <label for="aMaterno">Apellido Materno</label>
                    <input type="text" name="aMaterno" id="aMaterno">
                </span>

                <!-- DomicilioNumeroDeptoOCasa-->

                <span class="info-personal__form__item">
                    <label for="direccion">Direccion</label>
                    <input type="text" name="direccion" id="direccion">
                </span>
                <span class="info-personal__form__item">
                    <label for="numeroDomicilio">Numero</label>
                    <input type="number" name="numeroDomicilio" id="numeroDomicilio">
                </span>
                <span class="info-personal__form__item">
                    <label for="numDeptoCasa">Numero depto o casa</label>
                    <input type="text" name="numDeptoCasa" id="numDeptoCasa">
                </span>

                <!-- Poblacion/BarrioComunaTelefono  -->

                <span class="info-personal__form__item">
                    <label for="poblacion">Poblacion o Barrio</label>
                    <input type="text" name="poblacion" id="poblacion">
                </span>
                <span class="info-personal__form__item">
                    <label for="Comuna">Comuna</label>
                    <input type="text" name="comuna" id="comuna">
                    <!--Para autocompletar-->
                </span>
                <span class="info-personal__form__item">
                    <label for="telefono">Telefono de contacto</label>
                    <input type="text" name="telefono" id="telefono">
                </span>
            </form>
        </div>
      </v-card>
      
        <!-- Ficha A -->
      <v-card>
        <div class="ficha-a">
            <h2 class="ficha-a__title">Ficha A</h2>

            <!-- Antecedentes -->
            <div class="ficha-a__antecedentes">
                <form class="ficha-a__antecedentes__form">
                    <!--Prevision-->
                    <span class="ficha-a__antecedentes__form__item">
                        <label for="prevision">Prevision</label>
                        <select name="prevision">
                            <option value="Sin Prevision">Sin Prevision</option>
                            <option value="Fonasa A">Fonasa A</option>
                            <option value="Fonasa B">Fonasa B</option>
                            <option value="Fonasa C">Fonasa C</option>
                            <option value="Fonasa D">Fonasa D</option>
                            <option value="Isapre">Isapre</option>
                        </select>
                    </span>

                    <!--Estudios-->
                    <span class="ficha-a__antecedentes__form__item">
                        <label for="estudios">Estudios</label>
                        <select name="estudios">
                            <option value="Sin Educacion">Sin Educacion</option>
                            <option value="Basica">Basica</option>
                            <option value="Media">Media</option>
                            <option value="Tecnica">Tecnica</option>
                            <option value="Universitaria">Universitaria</option>
                        </select>
                    </span>

                    <!--Estado Civil-->
                    <span class="ficha-a__antecedentes__form__item">
                        <label for="estado-civil">Estado Civil</label>
                        <select name="estado-civil">
                            <option value="Casada">Casada</option>
                            <option value="Convivente">Convivente</option>
                            <option value="Soltera">Soltera</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </span>

                    <!--Actividad principal-->
                    <span class="ficha-a__antecedentes__form__item">
                        <label for="ocupacion">Ocupacion</label>
                        <select name="ocupacion">
                            <option value="Dueña de casa">Dueña de casa</option>
                            <option value="Estudiante">Estudiante</option>
                            <option value="Trabajo Esporadico">Trabajo Esporadico</option>
                            <option value="Trabajo Media Jornada">Trabajo Media Jornada</option>
                            <option value="Trabajo Jornada Completa">Trabajo Jornada Completa</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </span>

                    <!--Grupo sanguineo de la madre-->
                    <div class="ficha-a__antecedentes__form__item">
                        <label for="grpSangre">Grupo Sanguineo Madre</label>
                        <select id="grpSangre">
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="A- no sensibilizada">A- no sens.</option>
                            <option value="A- sensibilizada">A- sens.</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="B- no sensibilizada">B- no sens.</option>
                            <option value="B- sensibilizada">B- sens.</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="O- no sensibilizada">O-no sens.</option>
                            <option value="O- sensibilizada">O- sens. </option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="AB- no sensibilizada">AB- no sens.</option>
                            <option value="AB- sensibilizada">AB- sens.</option>
                            <option value="?">Desconoce</option>
                        </select>
                    </div>

                    <!--Grupo sanguineo Conyuge-->
                    <div class="ficha-a__antecedentes__form__item">
                        <label for="grpSangreConyu">Grupo Sanguineo Conyuge</label>
                        <select id="grpSangreConyu">
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="?">Desconoce</option>
                        </select>
                    </div>

                    <!--Peso-->
                    <div class="ficha-a__antecedentes__form__item">
                        <label for="peso">Peso</label>
                        <input type="number" name="peso" placeholder="kg">
                    </div>

                    <!--Estatura-->
                    <div class="ficha-a__antecedentes__form__item">
                        <label for="estatura">Estatura</label>
                        <input type="number" name="estatura" placeholder="cm">
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
                            <select id="patoFam">
                                <option value="Ninguna">Ninguna</option>
                                <option value="Diabetes">Diabetes</option>
                                <option value="TBC Pulmonar">TBC Pulmonar</option>
                                <option value="Hipertensión Arterial">Hipertensión Arterial</option>
                                <option value="Alergias">Alergias</option>
                                <option value="Asma">Asma</option>
                                <option value="Epilepsia">Epilepsia</option>
                                <option value="Enfermedades Tiroiodes">Enfermedades Tiroiodes</option>
                                <option value="Enfermedades Cardiacas">Enfermedades Cardiacas</option>
                                <option value="Enfermedades Renal">Enfermedades Renal</option>
                            </select>
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
                            <select id="patoFam">
                                <option value="Ninguna">Ninguna</option>
                                <option value="Diabetes">Diabetes</option>
                                <option value="TBC Pulmonar">TBC Pulmonar</option>
                                <option value="Hipertensión Arterial">Hipertensión Arterial</option>
                                <option value="Alergias">Alergias</option>
                                <option value="Asma">Asma</option>
                                <option value="Epilepsia">Epilepsia</option>
                                <option value="Enfermedades Tiroiodes">Enfermedades Tiroiodes</option>
                                <option value="Enfermedades Cardiacas">Enfermedades Cardiacas</option>
                                <option value="Enfermedades Renal">Enfermedades Renal</option>
                            </select>
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
                            <select id="patoFam">
                                <option value="Ninguna">Ninguna</option>
                                <option value="Cono">Cono</option>
                                <option value="Miomas">Miomas</option>
                                <option value="Infertibilidad">Infertibilidad</option>
                                <option value="Litiasis renal">Litiasis renal</option>
                                <option value="Asma">Asma</option>
                                <option value="Colelitiasis">Colelitiasis</option>
                                <option value="Apendicectomia">Apendicectomia</option>
                            </select>
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
                        <label class="ficha-a__medDrogas__form__item__title">Medicamentos cronicos</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="rMedCronico">No</label>
                            <input type="radio" name="rMedCronico" id="">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label class="contRadioButtn">Si, Durante el 1er Trimestre</label>
                            <input type="radio" name="rMedCronico" id="">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label class="contRadioButtn">Si, Despues del 1er Trimestre </label>
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
                        <label class="ficha-a__medDrogas__form__item__title">Cigarrilos por dia</label>
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

                        <label class="ficha-a__medDrogas__form__item__title">Alcohol/dia(Copa vino)</label>
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
                                <option value="Cocaina">Cocaina</option>
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
            <div class="ficha-a__antecedentes-obstetricos">
                <span class="ficha-a__antecedentes-obstetricos__title">Antecedentes Obstetricos</span>

                <form class="ficha-a__antecedentes-obstetricos__form">
                    <!-- Anticoncepcion -->
                    <div class="ficha-a__antecedentes-obstetricos__form__item">
                        <span class="ficha-a__antecedentes-obstetricos__form__item__title">Anticoncepcion</span>

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
                            Ectopico</span>

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

            <!--Antecedentes Embarazo Actual-->
            <div class="ficha-a__antecedentes-embarazo-actual">
                <span class="ficha-a__antecedentes-embarazo-actual__title">Antecedentes Embarazo Actual</span>

                <form class="ficha-a__antecedentes-embarazo-actual__form">
                    <!-- Control Prenatal -->
                    <div class="ficha-a__antecedentes-embarazo-actual__form__item">
                        <span class="ficha-a__antecedentes-embarazo-actual__form__item__title">Control Prenatal</span>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="inicio-semanas">Inicio &#40;sem.&#41;</label>
                            <input type="number" id="" name="inicio-semanas">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="nro-controles">N° controles</label>
                            <input type="number" id="" name="nro-controles">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="peso-normal">Peso normal &#40;Kgs.&#41;</label>
                            <input type="number" id="" name="peso-normal">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="talla">Talla &#40;cms&#41;</label>
                            <input type="number" id="" name="talla">
                        </div>
                    </div>

                    <!-- Control Prenatal -->
                    <div class="ficha-a__antecedentes-embarazo-actual__form__item">
                        <span class="ficha-a__antecedentes-embarazo-actual__form__item__title">F.U.R</span>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input--date">
                            <label for="fur">Fecha última regla</label>
                            <input type="date" id="" name="fur">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="fur-no-confiable">F.U.R no confiable o no segura</label>
                            <input type="checkbox" id="" name="fur-no-confiable" value="fur no confiable">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item--primera-ecografia">
                            <span class="ficha-a__antecedentes-embarazo-actual__form__item__title">Primera
                                Ecografía</span>
                            <div class="ficha-a__antecedentes-embarazo-actual__form__item__input--date">
                                <label for="fur">Fecha</label>
                                <input type="date" id="" name="fur">
                            </div>

                            <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                                <label for="edad-gestacional">Edad Gestacional</label>
                                <input type="number" id="" name="edad-gestacional">
                            </div>
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input--date">
                            <label for="fur">F.U.R Operacional</label>
                            <input type="date" id="" name="fur">
                        </div>
                    </div>


                </form>


            </div>
            <div class="ficha-a__seccion-btn-global">
                <div class="btn-ingresar-datos">Ingresar Datos</div>
            </div>
        </div>
      </v-card>
      
     </v-app>
</template>

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
    padding: 5px 10px;
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
    font-size: 1.5rem;
    padding: 4px 8px;
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

</style>

<script>

</script>