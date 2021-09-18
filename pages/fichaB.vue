<template>
  <v-app>
  <pacienteDatos></pacienteDatos>
  <v-card>    
    <div class="content">
        <!-- Formulario info personal-->        
        <div class="info-personal">
            <h2 class="info-personal__title">Ingreso y motivo de ingreso</h2>
            <form class="info-personal__form">
                <!--  FechaIngresoRutDeLaMadreFechaDeIngresoDeLaMadre-->
                <span class="info-personal__form__item">
                    <!--<select id="patoFam" v-model="derivada">
                            <option value="Paro">Paro</option>
                            <option value="CRS">CRS</option>
                            <option value="Consultorio">Consultorio</option>
                            <option value="Cons. Particular">Cons. Particular</option>
                            <option value="Padre Hurtado">Padre Hurtado</option>
                            <option value="Poli Adolecencia">Poli Adolecencia</option>
                            <option value="Cons. Espontanea">Cons. Espontanea</option>
                        </select>
                        <button class="btn btn-azul btn-añadir-a-lista">+</button>  
                        <ul class="lista-interactiva__lista">                                                  
                        </ul>-->
                    <label for="rut-madre">Derivada desde</label>
                    <v-combobox label="" v-model="derivada" hide-details class="text-n"></v-combobox>
                </span>
                                   	
                <span class="ficha-a__medDrogas__form__item__text">
                    <label for="rut-madre">Fecha de ingreso</label>                    	
                    <v-text-field label="" v-model="fIngreso" hide-details type="date" class="text-n"></v-text-field>
                </span>

                <span class="ficha-a__medDrogas__form__item__text">
                    <label for="rut-madre">Hora ingreso</label>                    	
                    <v-text-field label="" v-model="hIngreso" hide-details type="time" class="text-n"></v-text-field>
                </span>      

            </form>

            <form class="info-personal"> 
                <div class="lista-interactiva__select"> 
                    <label for="rut-madre" class="area-t">Motivo de ingreso</label>                   
                    <v-textarea name="comentPreparto" rows="8" rows-height="8" v-model="motivoIngreso" class="area"></v-textarea>
                </div>
            </form>
        </div>

        <div class="ficha-a">                       
            <h2 class="ficha-a__title">Control parental y signos vitales al ingreso</h2>
            <div class="ficha-a__antecedentes">   
                
                <form class="info-personal__form">
                   <div class="ficha-a__medDrogas__form__item">
                     	<label class="lista-interactiva__title">Patologia</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="rMedCronico">Sin patología</label>                            
                            <v-checkbox hide-details v-model="sinPatologia" class="check"></v-checkbox>
                        </div>
                        <div class="lista-interactiva__select"> 
                            <!--<select id="patoFam" >                                
                                <option value="Pat. mamaria">Pat. mamaria</option>
                                <option value="Caries">Caries</option>
                                <option value="Gingivitis">Gingivitis</option>                                
                            </select> 
                            <button class="btn btn-azul btn-añadir-a-lista">+</button> 
                            <ul class="lista-interactiva__lista"></ul> -->
                            <v-combobox v-model="nombrePatologia" hide-details multiple="true" class="text"></v-combobox>
                        </div>
                    </div>  

                    <div class="ficha-a__medDrogas__form__item">
                     	<label class="lista-interactiva__title">Presión arterial</label>
                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="inicio-semanas">Sistólica</label>                            
                            <v-text-field label="" v-model="sistolica" hide-details type="number" class="text"></v-text-field>
                        </div>
                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="inicio-semanas">Diastólica</label>                            
                            <v-text-field label="" v-model="diastolica" hide-details type="number" class="text"></v-text-field>
                        </div>
                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="inicio-semanas">Pulso</label>                           
                            <v-text-field label="" v-model="pulso" hide-details type="number" class="text"></v-text-field>
                        </div>
                    </div>     

                    <div class="ficha-a__medDrogas__form__item">
                     	<label class="lista-interactiva__title">VIH</label>
                        <div class="lista-interactiva__select"> 
                            <!--<select id="patoFam">
                                <option value="-">-</option>
                                <option value="+">+</option>
                            </select> -->
                            <v-combobox v-model="vih" hide-details class="text"></v-combobox>
                        </div>             
                        <label class="lista-interactiva__title">Fecha examen</label>
                        <div class="lista-interactiva__select">                             
                            <v-text-field label="" v-model="fechaVih" hide-details type="date" class="text"></v-text-field>
                        </div>           
                    </div>               
                </form>     

                <form class="info-personal__form">  
                    <div class="ficha-a__medDrogas__form__item">
                     	<label class="lista-interactiva__title">VDRL</label>
                        <div class="lista-interactiva__select"> 
                            <!--<select id="patoFam">
                                <option value="-">-</option>
                                <option value="+">+</option>
                            </select> -->
                            <v-combobox v-model="vdrl" hide-details class="text"></v-combobox>
                        </div>
                        <label class="lista-interactiva__title">Fecha examen</label>
                        <div class="lista-interactiva__select">                             
                            <v-text-field label="" v-model="fechaVdrl" hide-details type="date" class="text"></v-text-field>
                        </div>
                    </div> 

                    <div class="ficha-a__medDrogas__form__item">
                     	<label class="lista-interactiva__title">Hematocrito</label>
                        <div class="lista-interactiva__select">                            
                            <v-text-field label="" v-model="hematocrito" hide-details type="number" class="text"></v-text-field> 
                        </div>
                        <label class="lista-interactiva__title">Fecha examen</label>
                        <div class="lista-interactiva__select">                            
                            <v-text-field label="" v-model="fechaHcto" hide-details type="date" class="text"></v-text-field> 
                        </div>                        
                    </div> 

                    <div class="ficha-a__medDrogas__form__item">
                     	<label class="lista-interactiva__title">Peso actual</label>
                        <div class="lista-interactiva__select">
                            <v-text-field label="" v-model="peso" hide-details type="number" class="text"></v-text-field> 
                        </div>
                        <label class="lista-interactiva__title">Temperatura axilar</label>
                        <div class="lista-interactiva__select">                             
                            <v-text-field label="" v-model="tempAxilar" hide-details type="number" class="text"></v-text-field>
                        </div>
                    </div>                   
                </form>

            </div>

            <h2 class="ficha-a__title">Examen físico y hallazgos positivos</h2>
            <div class="ficha-a__antecedentes">
                <form class="info-personal__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Cabeza y cuello</label>
                        <div class="lista-interactiva__select">                         
                            <!--<select id="patoFam" >
                                <option value="-">Normal</option>
                                <option value="+">Anormal</option>
                                <option value="+">No Realiz.</option>
                            </select> -->
                            <v-combobox v-model="cabezaCuello" hide-details class="text"></v-combobox>
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Cardiopulmunar</label>
                        <div class="lista-interactiva__select">                                
                            <!--<select id="patoFam" >
                                <option value="-">Normal</option>
                                <option value="+">Anormal</option>
                                <option value="+">No Realiz.</option>
                            </select>--> 
                            <v-combobox v-model="cardiopulmunar" hide-details class="text"></v-combobox>
                        </div>
                    </div>                    
               
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Abdomen</label>
                        <div class="lista-interactiva__select">                                 
                            <!--select id="patoFam" >
                                <option value="-">Normal</option>
                                <option value="+">Anormal</option>
                                <option value="+">No Realiz.</option>
                            </select>-->
                            <v-combobox v-model="abdomen" hide-details class="text"></v-combobox>
                        </div>
                    </div>            
                 </form>

                <form class="info-personal__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Extremidades</label>
                        <div class="lista-interactiva__select">                                
                            <select id="patoFam" v-model="extremidades">
                                <option value="-">Normal</option>
                                <option value="+">Anormal</option>
                                <option value="+">No Realiz.</option>
                            </select> 
                        </div>
                    </div>
               
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Genitales externos</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam" v-model="genitalExterno">
                                <option value="-">Normal</option>
                                <option value="+">Anormal</option>
                                <option value="+">No Realiz.</option>
                            </select> 
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Mamas</label>
                        <div class="lista-interactiva__select"> 
                            <select id="patoFam" v-model="mamas">
                                <option value="-">Normal</option>
                                <option value="+">Anormal</option>
                                <option value="+">No Realiz.</option>
                            </select> 
                        </div>
                    </div>                
                </form>                
                                      
                <form class="info-personal"> 
                    <div class="lista-interactiva__select">                    
                        <textarea name="comentPreparto" rows="8" cols="100" v-model="descripExamen"></textarea>                        
                    </div>
                </form>                

            </div>

            <h2 class="ficha-a__title">Evaluación de ingreso</h2>
            <div class="ficha-a__antecedentes">
                <form class="ficha-a__antecedentes__form">

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Trabajo de parto</label>
                        <div class="lista-interactiva__select"> 
                            <select id="patoFam" v-model="trabajoParto">
                                <option value="-">Si</option>
                                <option value="+">No</option>
                                <option value="+">Dudoso</option>
                            </select> 
                        </div>                       
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Movimientos fetales</label>
                        <div class="lista-interactiva__select"> 
                            <select id="patoFam" v-model="movFetal">
                                <option value="-">Normales</option>
                                <option value="+">Disminuidos</option>
                                <option value="+">No Aplicable</option>
                            </select> 
                        </div>                       
                    </div>
                </form>
                
                <form class="info-personal__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Altura uterina (cms)</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="Pulso" id="Pulso" v-model="alturaUter">
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Contracciones en 10 min.</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="Pulso" id="Pulso" v-model="contraccion">
                        </div>
                    </div>
                            
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Hrs. trabajo parto</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="Pulso" id="Pulso" v-model="trabParto">
                        </div>
                    </div>
                </form>

                <form class="ficha-a__antecedentes__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Estimación clinica peso fetal (grs)</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="Pulso" id="Pulso" v-model="estPesoFetal">
                        </div>
                        <label class="lista-interactiva__title">Tono uterino</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam" v-model="tonoUterino">
                                <option value="-">Normal</option>
                                <option value="+">Aumentado</option>
                                <option value="+">No registrado</option>
                            </select> 
                        </div>                        
                    </div>                	
             
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Exámen servical</label>
                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="inicio-semanas">No realizado</label>
                            <input type="checkbox" id="" name="inicio-semanas" v-model="examNoRealizado">
                        </div>
                        <div class="lista-interactiva__select visible" data-tooltip="Si lo requiere, escriba en examen físico">
                            <select id="patoFam" v-model="tipoExamServical">
                                <option value="+">Espéculo</option>
                                <option value="+">Dígital</option>
                            </select> 
                        </div>
                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="inicio-semanas">Dilatación cervical (cms.)</label>
                            <input type="number" id="" name="inicio-semanas" v-model="dilatCervical">
                        </div>
                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="inicio-semanas">Espinas</label>
                            <input type="number" id="" name="inicio-semanas" v-model="espinas">
                        </div>
                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="inicio-semanas">Borrado (%)</label>
                            <input type="number" id="" name="inicio-semanas" v-model="borrado">
                        </div>
                    </div>                   
                </form>

                <form class="ficha-a__antecedentes__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Presentación</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam" v-model="presentacion">
                                <option value="Cefálica">Cefálica</option>
                                <option value="Podálica">Podálica</option>
                                <option value="Transversa">Transversa</option>
                                <option value="No determinada">No determinada</option>
                            </select> 
                        </div>                    
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Latidos cardiofetales</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam" v-model="latCerdiofetal">
                                <option value="Normal">Normal</option>
                                <option value="Taquicardía">Taquicardía</option>
                                <option value="Bradicardía">Bradicardia</option>
                                <option value="Desaceler.">Desaceler.</option>
                                <option value="Ausentes">Ausentes</option>
                                <option value="No registrados">No registrados</option>
                            </select> 
                        </div>                    
                    </div>
                </form>

                <form class="ficha-a__antecedentes__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Presentación Gem. B</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam" v-model="presentacionB">
                                <option value="Cefálica">Cefálica</option>
                                <option value="Podálica">Podálica</option>
                                <option value="Transversa">Transversa</option>
                                <option value="No determinada">No determinada</option>
                            </select> 
                        </div>                    
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Latidos cardiofetales Gem. B</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam" v-model="latCardiofetalB">
                                <option value="Normal">Normal</option>
                                <option value="Taquicardía">Taquicardía</option>
                                <option value="Bradicardía">Bradicardia</option>
                                <option value="Desaceler.">Desaceler.</option>
                                <option value="Ausentes">Ausentes</option>
                                <option value="No registrados">No registrados</option>
                            </select> 
                        </div>                    
                    </div>
                </form>

                <form class="ficha-a__antecedentes__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Proteinuria ingreso</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam" v-model="proteinIngreso">
                                <option value="negativoIndicios">Negativo/Indic.</option>
                                <option value="mas">+</option>    
                                <option value="dosMas">++</option>  
                                <option value="tresMas">+++</option> 
                                <option value="cuatroMas">++++</option> 
                                <option value="noRealizado">No realizado</option> 
                            </select> 
                        </div>                    
                    </div>
               
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Membranas</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam" v-model="membranas">
                                <option value="Intactas">Intactas</option>
                                <option value="Prominentes">Prominentes</option>    
                                <option value="Dudosa">Dudosa</option>  
                                <option value="Rotas">Rotas</option>
                            </select> 
                        </div>         
                        <label class="lista-interactiva__title">RPM</label>
                        <div class="ficha-a__medDrogas__form__item__input" id="Si">
                            <label for="embarazoPrevNormales">RPM (días)</label>
                            <input type="number" name="embarazoPrevNormales" id="" v-model="rpmDias">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input" id="No">
                            <label for="embarazoPrevNormales">RPM (horas)</label>
                            <input type="number" name="embarazoPrevNormales" id="" v-model="rpmHoras">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input" id="Dudoso">
                            <label for="embarazoPrevNormales">No precisable</label>
                            <input type="checkbox" name="embarazoPrevNormales" id="" v-model="noPrecisable">
                        </div>
                    </div>
                </form>

                <form class="ficha-a__antecedentes__form">
                    <div class="ficha-a__medDrogas__form__item">
                     	<label class="lista-interactiva__title">Pérdida vaginal de:</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="rMedCronico">Sin flujo</label>
                            <input type="checkbox" name="rMedCronico" id="" v-model="sinFlujo">
                        </div>
                        <div class="lista-interactiva__select"> 
                            <select id="patoFam" v-model="perdidaVaginal">                                
                                <option value="Líquido Amniótico">Líquido Amniótico</option>
                                <option value="Tapón mucoso">Tapón mucoso</option>    
                                <option value="Leucorrea">Leucorrea</option>  
                                <option value="Sangre escasa">Sangre escasa</option>
                                <option value="Sangre moderada">Sangre moderada</option> 
                                <option value="Sangre abundante">Sangre abundante</option>
                                <option value="Flujo turbio/purulento">Flujo turbio/purulento</option>
                                <option value="Otro">Otro</option>                                
                            </select> 
                            <button class="btn btn-azul btn-añadir-a-lista">+</button> 
                            <ul class="lista-interactiva__lista"></ul> 
                        </div>
                    </div>  

                    <div class="ficha-a__medDrogas__form__item">
                     	<label class="lista-interactiva__title">Aspecto líquido Amniótico R.P.O.</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="rMedCronico">Ausente</label>
                            <input type="checkbox" name="rMedCronico" id="" v-model="liqAmnAusente">
                        </div>
                        <div class="lista-interactiva__select"> 
                            <select id="patoFam" v-model="liquidoAmniotico">                                
                                <option value="Líquido Amniótico">Claro</option>
                                <option value="Tapón mucoso">Meconio fluído</option>    
                                <option value="Meconio espeso">Meconio espeso</option>  
                                <option value="Sangre fresca">Sangre fresca</option>
                                <option value="Sangre antigua">Sangre antigua</option> 
                                <option value="Turbio">Turbio</option>
                                <option value="Purulento">Purulento</option>
                                <option value="Otro">Otro</option>                             
                            </select> 
                            <button class="btn btn-azul btn-añadir-a-lista">+</button> 
                            <ul class="lista-interactiva__lista"></ul> 
                        </div>
                    </div>                    
                </form> 

                <form class="ficha-a__antecedentes__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Tipo de leucorrea</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam" v-model="tipoLeucorrea">
                                <option value="">Vaginosis bacteriana</option>
                                <option value="">Tricornoniasis</option>
                                <option value="">Micosis vaginal</option>
                            </select> 
                        </div>                    
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Cristalización</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam" v-model="cristalizacion">
                                <option value="">Negativa</option>
                                <option value="">Positiva</option>
                                <option value="">No realizada</option>                               
                            </select> 
                        </div>                    
                    </div>
                </form>  

                <form class="ficha-a__antecedentes__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">pH vaginal</label>
                         <div class="lista-interactiva__select"> 
                            <input type="number" name="number" id="number" v-model="phVaginal"> 
                        </div>                    
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">KOH vaginal</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam" v-model="khoVaginal">
                                <option value="">Negativa</option>
                                <option value="">Positiva</option>
                                <option value="">No realizado</option>                               
                            </select> 
                        </div>                    
                    </div>
                </form>  
            </div>

            <h2 class="ficha-a__title">Ecografia al ingreso</h2>
            <div class="ficha-a__antecedentes"> 
                <form class="info-personal__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Presentación:</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam" v-model="presentacionEco">
                                <option value="Cefalica">Cefálica</option>
                                <option value="Podalica">Podálica</option>    
                                <option value="Tranversa">Transversa</option>  
                                <option value="Cef-Cef">Cef-Cef</option>
                                <option value="Cef-Pod">Cef-Pod</option>
                                <option value="Cef-Tro">Cef-Tro</option>
                                <option value="Pod-Cef">Pod-Cef</option>
                                <option value="Pod-Pod">Pod-Pod</option>
                                <option value="Pod-Tro">Pod-Tro</option>
                                <option value="Tro-x">Tro-X</option>
                                <option value="No determinado">No determinado</option>
                            </select> 
                        </div>                    
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Líquido Amniótico</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam" v-model="liqAnmioticoEco">
                                <option value="Normal">Normal</option>
                                <option value="P.H.A">P.H.A (>25)</option>    
                                <option value="Disminución (2-5)">Disminunción (2-5)</option>  
                                <option value="O.H.A (&#60 2)">O.H.A (&#60 2)</option>
                                <option value="No realizado">No realizado</option>                                
                            </select> 
                        </div>                    
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Placenta</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam" v-model="placenta">
                                <option value="Normoins.">Normoins.</option>
                                <option value="Prv. marginal">Prv. marginal</option>    
                                <option value="Prv. Total">Prv. Total</option>  
                                <option value="DPPNI">DPPNI</option>
                                <option value="No registrado">No registrado</option>                                
                            </select> 
                        </div>                    
                    </div>
                </form>

                <form class="info-personal__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Indice Líquido Amniotico (cms.)</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="embarazoPrevNormales" id="" v-model="indiceLiqAmn">
                        </div>                    
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Canal (mm.)</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="embarazoPrevNormales" id="" v-model="canal">
                        </div>                    
                    </div>                    

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Funnel</label>
                        <div class="ficha-a__medDrogas__form__item__input" id="Si">
                            <label for="embarazoPrevNormales">No</label>
                            <input type="checkbox" name="embarazoPrevNormales" id="" v-model="funnelNo">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input" id="No">
                            <label for="embarazoPrevNormales">Tamaño</label>
                            <input type="number" name="embarazoPrevNormales" id="" step="0.01" v-model="funnel">
                        </div>                        
                    </div>
                </form>
                
                <form class="info-personal__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Estado de Peso fetal (grs.)</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="embarazoPrevNormales" id="" v-model="estadoPFetal">
                        </div>                
                        <label class="lista-interactiva__title">Perfil Biofísico</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="embarazoPrevNormales" id="" v-model="pbf"><p>/8</p>
                        </div>                          
                    </div>   
                </form>                  
            </div>

            
            <h2 class="info-personal__title">Edad gestacional</h2>
            <div class="info-personal">
                <form class="info-personal__form">          
                    <div class="lista-interactiva__select">                    
                        <p>Semanas</p>
                        <input type="number" name="embarazoPrevNormales" id="" v-model="semanas">
                    </div>
                    <div class="lista-interactiva__select"> 
                        <p>Días</p>
                        <input type="number" name="embarazoPrevNormales" id="" v-model="dias">
                    </div>
                    <div class="lista-interactiva__select"> 
                        <p>Edad Gestacional dudosa</p>
                        <input type="checkbox" name="embarazoPrevNormales" id="" v-model="edadDudosa"
                    </div>
                </form>
            </div>

            <h2 class="ficha-a__title">Diagnosticos al ingreso</h2>
            <div class="info-personales">            
                <form class="info-personal__form">
                    <div class="lista-interactiva__select"> 
                        <select id="patoFam" v-model="diasIngreso">                                
                            <option value="Líquido Amniótico">Diagnosticos</option>
                            <option value="Líquido Amniótico">Diagnosticos</option>                    
                        </select> 
                        <button class="btn btn-azul btn-añadir-a-lista">+</button> 
                        <ul class="lista-interactiva__lista"></ul> 
                    </div>
                </form>
            </div>

            <h2 class="ficha-a__title">Indicaciones y comentarios</h2>
            <div class="ficha-a__antecedentes">                        
                <form class="info-personal"> 
                    <div class="lista-interactiva__select">                    
                        <textarea name="comentPreparto" rows="8" cols="100" v-model="comentarios"></textarea>
                    </div>
                </form>
            </div>  

            <h2 class="ficha-a__title">Destino al ingreso</h2>
            <div class="ficha-a__antecedentes">                        
                <form class="ficha-a__antecedentes__form"> 
                    
                        <div class="lista-interactiva__select">
                            <select id="patoFam" v-model="destinoIngreso">
                                <option value="Embarazo Patológico">Embarazo Patológico</option>
                                <option value="Preparto/Parto">Preparto/Parto</option>    
                                <option value="Aislamiento">Aislamiento</option>  
                                <option value="Puerperio">Puerperio</option>
                                <option value="Pesionado">Pensionado</option>
                                <option value="Otro">Otro</option>
                            </select> 
                           
                        </div>
                   
                </form>
            </div> 

        </div>
    </div>
    <div class="ficha-a__seccion-btn-global">
        <div class="btn-ingresar-datos">Ingresar Datos</div>
    </div>    
    </v-card>
  </v-app>
</template>

<script>
import axios from 'axios'
import pacienteDatos from '../components/PacienteDatos'
export default {
    data(){
        return{
            // La ip para llamar a la api
            address: process.env.baseUrl,

            //nombre del establecimiento (combobox)
            derivada:'',
            //rut de la paciente
            rutPaciente:'',
            //edad se debe generar un metodo para realizar el calculo y visualizarlo            
            edadPaciente:'',
            //fecha de ingreso (revisar ya que presenta tanto la fecha de ingreso como la hora)
            fIngreso:'',
            hIngreso:'',
            //nombre de paciente
            nombreP:'',            
            //apellido de la paciente
            apellidoP:'',
            //motivo de ingreso Paciente
            motivoIngreso:'',            
            //patologia de Paciente (sin patologia)
            sinPatologia: true,
            //nombre de la Patologias
            nombrePatologia:'',            
            //sistolica
            sistolica:0,
            //diastolica
            diastolica:0,
            //pulso
            pulso:0,
            //resultado vih
            vih:'',
            //fecha examen VIH
            fechaVih:'',
            //resultado VDRL
            vdrl:'',
            //fecha ecamen vdrl
            fechaVdrl:'',
            //hematocrito
            hematocrito:0,
            //fecha examen hematocrito
            fechaHcto:'',
            //peso
            peso:0,
            //temperatura axilar 
            tempAxilar:'',
            //examen cuello y cabeza 
            cabezaCuello:'',
            //examen cardiopulmunar
            cardiopulmunar:'',
            //examen abdomen
            abdomen:'',
            //examen extreminades
            extremidades:'',
            //examen genitales externos
            genitalExterno:'',
            //examen mamas
            mamas:'',
            //descripcion examenes
            descripExamen:'',
            //trabajo de parto
            trabajoParto:'',
            //movimientos fetales
            movFetales:'',
            //Altura uterina
            alturaUter:0,
            //contracciones
            contraccion:0,
            //horas de trabajo de parto
            trabParto:0,
            //estimación clinica peso fetal
            estPesoFetal:0,
            //tono uterino
            tonoUterino:'',
            //examen servical (realizado)
            examNoRealizado:true,
            //tipo Examen Servical 
            tipoExamServical:'',
            //dilatacion cervical 
            dilatCervical:0,
            //Espinas
            espinas:0,
            //borrado en porcentaje
            borrado:0,
            //presentacion
            presentacion:'',
            //latidos cardiofetales
            latCardiofetal:'',
            //presentacion gem b
            presentacionB:'',
            //latidos cardiofetales gem b
            latCardiofetalB:'',
            //proteinuria ingreso
            proteinIngreso:'', 
            //membranas
            membrabas:'',
            //rpm dias
            rpmDias:0,
            //rpm horas
            rpmHoras:0,
            //no precisable
            noPrecisable:true,
            //perdida vaginal sin flujor
            sinFlujo:true,
            //perdida Vaginal
            perdidaVaginal:[],
            //liquido amniotico ausente
            liqAmnAusente:true,
            //liquido ambiotico r.p.o
            liquidoAmniotico:[],
            //tipo de leucorrea
            tipoLeucorrea:'',
            //cristalización
            cristalizacion:'',
            //ph vaginal
            phVaginal:'',
            //kho vaginal
            khoVaginal:'',
            //presentacion ecogafia
            presentacionEco:'',
            //liquido amniotico eco
            liqAnmioticoECO:'', 
            //placenta
            placenta:'',
            //indice liquido amniotico 
            indiceLiqAmn:0,
            //canal en centimetros
            canal:0,
            //funnel si o no
            funnelNo:true,
            //tamaño funnel
            funnel:0,
            //estado peso fetal
            estadoPFetal:'',
            //perfil biofisico
            pbf:'',
            //edad Gestacional
            semanas:0,
            dias:0,
            edadDudosa:true,
            //diagnostico al ingreso
            diasIngreso:[],
            //indicaciones y Comentarios
            comentarios:'',
            //destino ingreso
            destinoIngreso:'',
        }
    },
    methods: {
        TakeComunas: async function(){

            const listRegion = await axios.get(this.address+'/ObtenerRegion',
                {
                    headers: { "authorization": this.$auth.$storage['_state']['_token.local'] }
                })

            console.log(listRegion)
        }

    }
}
</script>