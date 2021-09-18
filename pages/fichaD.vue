<template>
    <v-app>
        <pacienteDatos></pacienteDatos>
        <v-card>        
        <div class="content">          
        <!-- Ficha D -->
        <div class="ficha-a D">            
            <h2 class="ficha-a__title">Ficha D</h2>            <!-- Ingreso -->
            <div class="ficha-a__antecedentes">

                <form class="ficha-a__antecedentes__form D">

                    <!-- Derivada desde -->
                    <div class="lista-interactiva__select">
                        <span class="ficha-a__antecedentes__form__item D">
                            <label for="prevision">Derivada desde</label>
                            <select name="prevision">
                                <option value="Paro">Paro</option>
                                <option value="CRS">CRS</option>
                                <option value="Consultorio">Consultorio</option>
                                <option value="Padre Hurtado">Padre Hurtado</option>
                                <option value="Poli Adolesc.">Poli Adolesc.</option>
                                <option value="Preparto">Preparto</option>
                                <option value="Aislamiento">Aislamiento</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </span>
                    </div>

                    <div class="lista-interactiva__select">
                        <!--Estatura-->
                        <div class="ficha-a__antecedentes__form__item_textarea">
                            <label for="motivoConDiag">Motivo consulta y Diagnostico de ingreso</label>
                            <textarea name="motivoConDiag" rows="5" cols="50"></textarea>
                        </div>
                    </div>
                </form>
            </div>

            <!---------------------------------------------------------------------------------------------------->

            <!-- Evolución -->
            <div class="ficha-a__datos-medicos">

                <form class="ficha-a__datos-medicos__form">

                    <!-- Evolución SHE -->
                    <div class="lista-interactiva">

                        <label class="lista-interactiva__title">Evolución SHE</label>
                        

                        <div class="lista-interactiva__select">
                            <div class="ficha-a__antecedentes-obstetricos__form__item__input D" id="evoNoCorr">
                                <label for="No corresponde SHE">No corresponde</label>
                                <input type="checkbox" value="No corresponde SHE" class="chkNOC">
                            </div>

                            <select id="evolucion" class="evolucion"> 
                                <option value="Se descarta SHE">Se descarta SHE</option>
                                <option value="Estable, no requiere hipotens">Estable, no requiere hipotens</option>
                                <option value="Estable, requiere hipotens">Estable, requiere hipotens</option>
                                <option value="Deterioro U. Feto-placentaria">Deterioro U. Feto-placentaria</option>
                                <option value="Crisis hipertensivas">Crisis hipertensivas</option>
                                <option value="Edema agudo del pulmón">Edema agudo del pulmón</option>
                                <option value="Hemorragia cerebral">Hemorragia cerebral</option>
                                <option value="Hellp">Hellp</option>
                                <option value="Disfunción renal">Disfunción renal</option>
                                <option value="Otros signos de gravedad">Otros signos de gravedad</option>
                            </select>
                            <button class="btn btn-cafe btn-añadir-a-lista" id="btn">+</button>
                        </div>

                        <ul class="lista-interactiva__lista">
                            <!--<li class="li-pat">Diabetes <a href="#" class="btn eliminar-pat">x</a> </li>-->
                        </ul>

                    </div>

                    <!-- Evolución RPO -->
                    <div class="lista-interactiva">

                        <label class="lista-interactiva__title">Evolución RPO</label>

                        <div class="lista-interactiva__select">
                            <div class="ficha-a__antecedentes-obstetricos__form__item__input D" id="evoNoCorr">
                                <label for="No corresponde RPO">No corresponde</label>
                                <input type="checkbox" value="No Corresponde RPO" class="chkNOC">
                            </div>

                            <select id="evolucion"  class="evolucion">
                                <option value="Se descarta RPO">Se descarta RPO</option>
                                <option value="Se interrumpe al ingreso">Se interrumpe al ingreso</option>
                                <option value="Inicia parto espontáneo">Inicia parto espontáneo</option>
                                <option value="Expectante hasta 34-35 sem.">Expectante hasta 34-35 sem.</option>
                                <option value="Deterioro U. Feto-placentaria">Deterioro U. Feto-placentaria</option>
                                <option value="Aparece otra causa de interr.">Aparece otra causa de interr.</option>
                                <option value="Otra">Otra</option>
                            </select>
                            <button class="btn btn-cafe btn-añadir-a-lista" id="btn">+</button>
                        </div>

                        <ul class="lista-interactiva__lista">
                            <!--<li class="li-pat">Diabetes <a href="#" class="btn eliminar-pat">x</a> </li>-->
                        </ul>

                    </div>

                    <!-- Evolución RCIU -->
                    <div class="lista-interactiva">

                        <label class="lista-interactiva__title">Evolución RCIU</label>

                        <div class="lista-interactiva__select">
                            <div class="ficha-a__antecedentes-obstetricos__form__item__input D" id="evoNoCorr">
                                <label for="No corresponde RCIU">No corresponde</label>
                                <input type="checkbox" value="No Corresponde RCIU" class="chkNOC">
                            </div>

                            <select id="evolucion"  class="evolucion">
                                <option value="Se descarta RCIU">Se descarta RCIU</option>
                                <option value="Evolución estable">Evolución estable</option>
                                <option value="Deterioro UFP">Deterioro UFP</option>
                                <option value="Con malformación">Con malformación</option>
                                <option value="Con cromosomopatía">Con cromosomopatía</option>
                                <option value="Otra">Otra</option>
                            </select>
                            <button class="btn btn-cafe btn-añadir-a-lista" id="btn">+</button>
                        </div>

                        <ul class="lista-interactiva__lista">
                            <!--<li class="li-pat">Diabetes <a href="#" class="btn eliminar-pat">x</a> </li>-->
                        </ul>

                    </div>

                    <!-- Evolución parto prematuro -->
                    <div class="lista-interactiva">

                        <label class="lista-interactiva__title">Evolución parto prematuro</label>
                        <div class="lista-interactiva__select">
                            <div class="ficha-a__antecedentes-obstetricos__form__item__input D" id="evoNoCorr">
                                <label for="No corresponde parto prematuro">No corresponde</label>
                                <input type="checkbox" value="No Corresponde parto prematuro" class="chkNOC">
                            </div>

                            <select id="evolucion" class="evolucion">
                                <option value="DU cede con reposo">DU cede con reposo</option>
                                <option value="DU cede con hidratación">DU cede con hidratación</option>
                                <option value="DU cede con betamimét">DU cede con betamimét</option>
                                <option value="DU cede con Sulf Magn.">DU cede con Sulf Magn.</option>
                                <option value="Parto progresa sín tocolít.">Parto progresa sin tocolít.</option>
                                <option value="Progreso a pesar de tocol.">Progreso a pesar de tocol.</option>
                                <option value="Deterioro U. Feto-placent.">Deterioro U. Feto-placent.</option>
                                <option value="Otra">Otra</option>
                            </select>
                            <button class="btn btn-cafe btn-añadir-a-lista" id="btn">+</button>
                        </div>

                        <ul class="lista-interactiva__lista">
                            <!--<li class="li-pat">Diabetes <a href="#" class="btn eliminar-pat">x</a> </li>-->
                        </ul>
                        
                    </div>

                    <!-- Evolución de otras patologías -->
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="ficha-a__medDrogas__form__item__title evo">Evolución de otras patologías</label>
                        <div class="ficha-a__antecedentes-obstetricos__form__item__input" id="evoNoCorr">
                            <label for="No corresp. otras pat.">No corresponde</label>
                            <input type="checkbox" value="NoCOP" class="chkNOC NoCOP">
                        </div>
                        
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="otrasPat">Sana</label>
                            <input type="radio" name="otrasPat" class="radEvo">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label class="contRadioButtn">Mejoria</label>
                            <input type="radio" name="otrasPat" class="radEvo">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label class="contRadioButtn">Sin cambios</label>
                            <input type="radio" name="otrasPat" class="radEvo">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label class="contRadioButtn">Agravamiento</label>
                            <input type="radio" name="otrasPat" class="radEvo">
                        </div>

                    </div>

                    <div class="ficha-a__medDrogas__form__item D">
                        
                        <span class="info-personal__form__item">
                            <label for="primCorti">Fecha 1ra dosis cortícoides</label>
                            <input type="date" name="primCorti" id="primCorti">
                        </span>

                        <span class="info-personal__form__itemD">
                            <label for="edGest">Resumen Evolución</label>
                            <v-card class="b" elevation="0">
                            <textarea type="text" name="edGest" id="edGest" rows="7" cols="45"></textarea>
                            </v-card>
                        </span>

                    </div>

                </form>
            </div>

            <!-- Examenes -->
            <div class="ficha-a__medDrogas">

                <form class="ficha-a__medDrogas__form">

                    <!-- Terapias -->
                    <div class="lista-interactiva">

                        <label class="lista-interactiva__title">Terapias</label>

                        <div class="lista-interactiva__select">
                            <select id="Terapias">
                                <option value="Ninguna">Ninguna</option>
                                <option value="Corticoides">Corticoides</option>
                                <option value="Betamiméticos">Betamiméticos</option>
                                <option value="Antibióticos profilácticos">Antibióticos profilácticos</option>
                                <option value="Antibióticos terapéuticos">Antibióticos terapéuticos</option>
                                <option value="Hidralazina (crisis HTA)">Hidralazina (crisis HTA)</option>
                                <option value="Hipotensores (mantención)">Hipotensores (mantención)</option>
                                <option value="Sulfato de Magnesio">Sulfato de Magnesio</option>
                                <option value="Insulina">Insulina</option>
                                <option value="Anticoagulantes orales">Anticoagulantes orales</option>
                                <option value="Heparina">Heparina</option>
                                <option value="Otra">Otra</option>
                            </select>
                            <button class="btn btn-cafe btn-añadir-a-lista">+</button>
                        </div>

                        <ul class="lista-interactiva__lista">
                            <!--<li class="li-pat">Diabetes <a href="#" class="btn eliminar-pat">x</a> </li>-->
                        </ul>
                        
                    </div>

                    <!-- Procedimientos -->
                    <div class="lista-interactiva">

                        <label class="lista-interactiva__title">Procedimientos</label>

                        <div class="lista-interactiva__select">
                            <select id="Proce">
                                <option value="Ninguna">Ninguna</option>
                                <option value="Amniocentesis">Amniocentesis</option>
                                <option value="Cordocentesis">Cordocentesis</option>
                                <option value="Biopsia veliosidad corial">Biopsia veliosidad corial</option>
                                <option value="Amniodrenaje">Amniodrenaje</option>
                                <option value="Amnioinfusión">Amnioinfusión</option>
                                <option value="Transfusión intrauterina">Transfusión intrauterina</option>
                                <option value="Cerclaje">Cerclaje</option>
                                <option value="Cirugía fetal">Cirugía fetal</option>
                                <option value="Cirugía materna">Cirugía materna</option>
                                <option value="Otra">Otra</option>
                            </select>
                            <button class="btn btn-cafe btn-añadir-a-lista">+</button>
                        </div>

                        <ul class="lista-interactiva__lista">
                            <!--<li class="li-pat">Diabetes <a href="#" class="btn eliminar-pat">x</a> </li>-->
                        </ul>
                        
                    </div>

                    <!-- Examenes -->
                    <div class="lista-interactiva">
                        <label class="lista-interactiva__title">Examenes</label>
                        <div class="lista-interactiva__select">
                            <select id="Examenes">
                                <option value="Ecografía">Ecografía</option>
                                <option value="RBNE">RBNE</option>
                                <option value="PBF">PBF</option>
                                <option value="Amniocentesis">Amniocentesis</option>
                                <option value="Doppler fetal">Doppler fetal</option>
                                <option value="Doppler materno">Doppler materno</option>
                                <option value="Cordocentesis">Cordocentesis</option>
                                <option value="Eco TV Cérvix">Eco TV Cérvix</option>
                                <option value="Estudio Preecl.">Estudio Preecl.</option>
                                <option value="Albuminuria 24 hrs.">Albuminuria 24 hrs.</option>
                                <option value="Celldyn">Celldyn</option>
                                <option value="Enzimas hepáticas">Enzimas hepáticas</option>
                                <option value="Sedim. urinario">Sedim. urinario</option>
                                <option value="Urocultivo">Urocultivo</option>
                                <option value="Panel glicemia">Panel glicemia</option>
                                <option value="Estudio Parénquim.">Estudio Parénquim.</option>
                                <option value="Estudio AAF">Estudio AAF</option>
                                <option value="Estudio Coagulacíon">Estudio Coagulacíon</option>
                                <option value="Otros">Otros</option>
                            </select>
                            <button class="btn btn-cafe btn-añadir-d-lista">+</button>
                        </div>
                        <ul class="lista-interactivaD__lista">
                            <!--<li class="li-pat">Diabetes <a href="#" class="btn eliminar-pat">x</a> </li>-->
                        </ul>

                        <!--Como creo un ComboBox Que cuando selecciono uno, pueda con otro boton "+" Por ejemplo que se active otro combobox igual al otro y me permita listar mas patologias familiar?-->
                        <!-- Hay que hacer que este Combo box se conecte a uina bdd para que ponga todas las patologias medicas facilmente y que haga lo de arriba igual -->

                    </div>

                </form>
            </div>

            <!-- Egreso -->
            <div class="ficha-a__medDrogas">
                <span class="ficha-a__antecedentes-obstetricos__title">Egreso</span>

                <form class="ficha-a__antecedentes-obstetricos__form">
                    <!-- Destino al egreso -->
                    <div class="lista-interactiva D">
                        <label class="lista-interactiva__title">Destino al egreso</label>
                        <div class="lista-interactiva__select">
                            <select id="destinoEgreso">
                                <option value="PARO">PARO</option>
                                <option value="CRS">CRS</option>
                                <option value="Control CEDIP">Control CEDIP</option>
                                <option value="Consultorio">Consultorio</option>
                                <option value="Prepartos">Prepartos</option>
                                <option value="Pabellón">Pabellón</option>
                                <option value="UCI-Intermedio">UCI-Intermedio</option>
                                <option value="Hosp. Padre Hurtado">Hosp. Padre Hurtado</option>
                                <option value="Otro Hospital">Otro Hospital</option>
                                <option value="Aislamiento">Aislamiento</option>
                                <option value="Otra">Otra</option>
                            </select>
                            <button class="btn btn-cafe btn-añadir-a-lista">+</button>
                        </div>
                        <ul class="lista-interactiva__lista">
                            <!--<li class="li-pat">Diabetes <a href="#" class="btn eliminar-pat">x</a> </li>-->
                        </ul>

                        <!--Como creo un ComboBox Que cuando selecciono uno, pueda con otro boton "+" Por ejemplo que se active otro combobox igual al otro y me permita listar mas patologias familiar?-->
                        <!-- Hay que hacer que este Combo box se conecte a uina bdd para que ponga todas las patologias medicas facilmente y que haga lo de arriba igual -->

                    </div>
                    
                    <!-- Fecha Gest. Egreso -->
                    <div class="ficha-a__antecedentes-obstetricos__form__item">
                        <div class="ficha-a__antecedentes__form__item">
                            <label for="Fecha de egreso">Fecha de egreso</label>
                            <input type="date" id="" name="fechaegre">
                        </div>

                        <div class="ficha-a__antecedentes__form__item">
                            <label for="Ed. Gest (sem./ds.)">Ed. Gest (sem./ds.)</label>
                            <input type="text" id="" name="EgresogestSEMDS">
                        </div>
                    </div>

                    <!-- Condición de egreso -->
                    <div class="ficha-a__antecedentes-obstetricos__form__item">
                        <span class="ficha-a__antecedentes-obstetricos__form__item__title">Condición de egreso</span>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="Sana">Sana</label>
                            <input type="radio" value="Sana" id="" name="condicionegreso">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="Enferma con tratam">Enferma con tratam.</label>
                            <input type="radio" value="Enfermacon" id="" name="condicionegreso">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="Enferma sin tratam.">Enferma sin tratam.</label>
                            <input type="radio" value="Enfermasin" id="" name="condicionegreso">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="Fallece">Fallece</label>
                            <input type="radio" value="Fallece" id="" name="condicionegreso">
                        </div>
                    </div>
                    
                    <!-- Fórmula obstetrica -->
                    <div class="ficha-a__antecedentes-obstetricos__form__item">
                        <span class="ficha-a__antecedentes-obstetricos__form__item__title">Fórmula obstetrica</span>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="egresoForObstetrica">AE</label>
                            <input type="checkbox" value="AE" id="">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="egresoForObstetrica">AP</label>
                            <input type="checkbox" value="AP" id="">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="egresoForObstetrica">Ppr</label>
                            <input type="checkbox" value="Ppr" id="">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="egresoForObstetrica">Pter</label>
                            <input type="checkbox" value="Pter" id="">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="egresoForObstetrica">MNat</label>
                            <input type="checkbox" value="MNat" id="">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="egresoForObstetrica">Mneo</label>
                            <input type="checkbox" value="Mneo" id="">
                        </div>

                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="egresoForObstetrica">Hv</label>
                            <input type="checkbox" value="Hv" id="">
                        </div>

                    </div>

                    
                </form>
            </div>

            <!-- indicaciones -->
            <h2 class="ficha-a__title">Indicaciones</h2>
            <div class="ficha-a__antecedentes">                        
                <form class="info-personal"> 
                    <div class="lista-interactiva__select">                    
                        <textarea name="comentPreparto" rows="8" cols="100"></textarea>
                    </div>
                </form>
            </div>  

            <!--Diagnostico-->
            <div class="ficha-a__antecedentes-embarazo-actual">
                <form class="ficha-a__antecedentes-embarazo-actual__form">
                    
                    <!-- Diagnostico -->
                    <div class="ficha-a__antecedentes-embarazo-actual__form__item">
                        <div class="ficha-a__antecedentes-obstetricos__form__item__input">
                            <label for="Fallece">Sin patologías</label>
                            <input type="radio" value="Fallece" id="" name="condicionegreso">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="Diagnostico1">Diagnostico</label>
                            <input type="text" id="" name="Diagnostico1">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="Diagnostico2">Diagnostico</label>
                            <input type="text" id="" name="Diagnostico2">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="Diagnostico3">Diagnostico</label>
                            <input type="text" id="" name="Diagnostico3">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="Diagnostico4">Diagnostico</label>
                            <input type="text" id="" name="Diagnostico4">
                        </div>
                    </div>
                </form>
            </div>

            <div class="ficha-a__seccion-btn-global">
                <div class="btn-ingresar-datos D">Ingresar Datos</div>
            </div>
        </div>
    </div>
        </v-card>
    </v-app>
</template>

<style>
  @import '../assets/estilos.css';
</style>
