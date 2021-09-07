<template>
  <v-app>
  <v-card>
    <div class="content">
        <!-- Formulario info personal-->
        <div class="info-personal">
            <h2 class="info-personal__title">Ingreso e identificación</h2>
            <form class="info-personal__form">                
                <div class="ficha-a__medDrogas__form__item">

                   
                    <label class="lista-interactiva__title">Derivada desde</label>                        
                    <div class="lista-interactiva__select">
                        <select id="patoFam">
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
                        </ul>
                    </div>  
                    
                </div>

                <div class="ficha-a__medDrogas__form__item">
                        
                    <span class="ficha-a__medDrogas__form__item__input">
                    	<label for="rut-madre">Rut de la Madre</label>
                    	<input type="text" name="rut-madre" id="rut">
                	</span>

                	<span class="ficha-a__medDrogas__form__item__input">
                    	<label for="rut-madre">Edad</label>
                    	<input type="number" name="rut-madre" id="rut">
                	</span>

                	<span class="ficha-a__medDrogas__form__item__input">
                    	<label for="rut-madre">Fecha de ingreso</label>
                    	<input type="date" name="rut-madre" id="rut">
                	</span>

                	<span class="ficha-a__medDrogas__form__item__input">
                    	<label for="rut-madre">Hora ingreso</label>
                    	<input type="time" name="rut-madre" id="rut">
                	</span>

                	<span class="ficha-a__medDrogas__form__item__input">
                    	<label for="rut-madre">Nombres</label>
                    	<input type="text" name="rut-madre" id="rut">
                	</span>

                	<span class="ficha-a__medDrogas__form__item__input">
                    	<label for="rut-madre">Apellidos</label>
                    	<input type="text" name="rut-madre" id="rut">
                	</span>
            	</div>
            </form>
        </div>
        <div class="ficha-a">
            <h2 class="ficha-a__title">Motivo del ingreso</h2>
            <div class="ficha-a__antecedentes">                        
                <form class="info-personal"> 
                    <div class="lista-interactiva__select">                    
                        <textarea name="comentPreparto" rows="8" cols="100"></textarea>
                    </div>
                </form>
            </div>  
            
            <h2 class="ficha-a__title">Control parental y signos vitales al ingreso</h2>
            <div class="ficha-a__antecedentes">   
                
                <form class="ficha-a__antecedentes__form">
                   <div class="ficha-a__medDrogas__form__item">
                     	<label class="lista-interactiva__title">Patologia</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="rMedCronico">Sin patología</label>
                            <input type="checkbox" name="rMedCronico" id="">
                        </div>
                        <div class="lista-interactiva__select"> 
                            <select id="patoFam">                                
                                <option value="Pat. mamaria">Pat. mamaria</option>
                                <option value="Caries">Caries</option>
                                <option value="Gingivitis">Gingivitis</option>                                
                            </select> 
                            <button class="btn btn-azul btn-añadir-a-lista">+</button> 
                            <ul class="lista-interactiva__lista"></ul> 
                        </div>
                    </div>  

                    <div class="ficha-a__medDrogas__form__item">
                     	<label class="lista-interactiva__title">Presión arterial</label>
                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="inicio-semanas">Sistólica</label>
                            <input type="number" id="" name="inicio-semanas">
                        </div>
                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="inicio-semanas">Diastólica</label>
                            <input type="number" id="" name="inicio-semanas">
                        </div>
                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="inicio-semanas">Pulso</label>
                            <input type="number" id="" name="inicio-semanas">
                        </div>
                    </div>                    
                </form>     

                <form class="ficha-a__antecedentes__form">

                    <div class="ficha-a__medDrogas__form__item">
                     	<label class="lista-interactiva__title">VIH</label>
                        <div class="lista-interactiva__select"> 
                            <select id="patoFam">
                                <option value="-">-</option>
                                <option value="+">+</option>
                            </select> 
                        </div>             
                        <label class="lista-interactiva__title">Fecha</label>
                        <div class="lista-interactiva__select"> 
                            <input type="date" name="Fecha1" id="Fecha1"> 
                        </div>           
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                     	<label class="lista-interactiva__title">VDRL</label>
                        <div class="lista-interactiva__select"> 
                            <select id="patoFam">
                                <option value="-">-</option>
                                <option value="+">+</option>
                            </select> 
                        </div>
                        <label class="lista-interactiva__title">Fecha</label>
                        <div class="lista-interactiva__select"> 
                            <input type="date" name="Fecha1" id="Fecha1"> 
                        </div>
                    </div>                   
                    
                </form>	                

                <form class="ficha-a__antecedentes__form">          

                     <div class="ficha-a__medDrogas__form__item">
                     	<label class="lista-interactiva__title">Hcto.</label>
                        <div class="lista-interactiva__select"> 
                            <input type="number" name="Hcto." id="Hcto"> 
                        </div>
                        <label class="lista-interactiva__title">Fecha</label>
                        <div class="lista-interactiva__select"> 
                            <input type="date" name="Fecha1" id="Fecha1"> 
                        </div>                        
                    </div> 

                    <div class="ficha-a__medDrogas__form__item">
                     	<label class="lista-interactiva__title">Peso actual</label>
                        <div class="lista-interactiva__select"> 
                            <input type="number" name="Pulso" id="Pulso"> 
                        </div>
                        <label class="lista-interactiva__title">Temp. ax.</label>
                        <div class="lista-interactiva__select"> 
                            <input type="number" name="Pulso" id="Pulso"> 
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
                            <select id="patoFam">
                                <option value="-">Normal</option>
                                <option value="+">Anormal</option>
                                <option value="+">No Realiz.</option>
                            </select> 
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Cardiopulmunar</label>
                        <div class="lista-interactiva__select">                                
                            <select id="patoFam">
                                <option value="-">Normal</option>
                                <option value="+">Anormal</option>
                                <option value="+">No Realiz.</option>
                            </select> 
                        </div>
                    </div>                    
               
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Abdomen</label>
                        <div class="lista-interactiva__select">                                 
                            <select id="patoFam">
                                <option value="-">Normal</option>
                                <option value="+">Anormal</option>
                                <option value="+">No Realiz.</option>
                            </select> 
                        </div>
                    </div>            
                 </form>

                <form class="info-personal__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Extremidades</label>
                        <div class="lista-interactiva__select">                                
                            <select id="patoFam">
                                <option value="-">Normal</option>
                                <option value="+">Anormal</option>
                                <option value="+">No Realiz.</option>
                            </select> 
                        </div>
                    </div>
               
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Genitales exter.</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam">
                                <option value="-">Normal</option>
                                <option value="+">Anormal</option>
                                <option value="+">No Realiz.</option>
                            </select> 
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Mamas</label>
                        <div class="lista-interactiva__select"> 
                            <select id="patoFam">
                                <option value="-">Normal</option>
                                <option value="+">Anormal</option>
                                <option value="+">No Realiz.</option>
                            </select> 
                        </div>
                    </div>                
                </form>                
                                      
                <form class="info-personal"> 
                    <div class="lista-interactiva__select">                    
                        <textarea name="comentPreparto" rows="8" cols="100"></textarea>
                    </div>
                </form>                

            </div>

            <h2 class="ficha-a__title">Evaluación de ingreso</h2>
            <div class="ficha-a__antecedentes">
                <form class="ficha-a__antecedentes__form">

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Trabajo de parto</label>
                        <div class="ficha-a__medDrogas__form__item__input" id="Si">
                            <label for="embarazoPrevNormales">Si</label>
                            <input type="radio" name="trabajop" id="">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input" id="No">
                            <label for="embarazoPrevNormales">No</label>
                            <input type="radio" name="trabajop" id="">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input" id="Dudoso">
                            <label for="embarazoPrevNormales">Dudoso</label>
                            <input type="radio" name="trabajop" id="">
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Movimientos fetales</label>
                        <div class="ficha-a__medDrogas__form__item__input" id="Si">
                            <label for="embarazoPrevNormales">Normales</label>
                            <input type="radio" name="embarazoPrevNormales" id="">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input" id="No">
                            <label for="embarazoPrevNormales">Disminuidos</label>
                            <input type="radio" name="embarazoPrevNormales" id="">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input" id="Dudoso">
                            <label for="embarazoPrevNormales">No aplicable</label>
                            <input type="radio" name="embarazoPrevNormales" id="">
                        </div>
                    </div>
                </form>
                
                <form class="info-personal__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Altura uter.(cms)</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="Pulso" id="Pulso">
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Contr. en 10min.</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="Pulso" id="Pulso">
                        </div>
                    </div>
                            
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Hrs. trab. parto</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="Pulso" id="Pulso">
                        </div>
                    </div>
                </form>

                <form class="ficha-a__antecedentes__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Esti. clinica peso fetal (grs)</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="Pulso" id="Pulso">
                        </div>
                        <label class="lista-interactiva__title">Tono uterino</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam">
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
                            <input type="checkbox" id="" name="inicio-semanas">
                        </div>
                        <div class="lista-interactiva__select visible" data-tooltip="Si lo requiere, escriba en examen físico">
                            <select id="patoFam">
                                <option value="+">Espéculo</option>
                                <option value="+">Dígital</option>
                            </select> 
                        </div>
                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="inicio-semanas">Dilatación cerv. (cms.)</label>
                            <input type="number" id="" name="inicio-semanas">
                        </div>
                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="inicio-semanas">Espinas</label>
                            <input type="number" id="" name="inicio-semanas">
                        </div>
                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">
                            <label for="inicio-semanas">Borrado (%)</label>
                            <input type="number" id="" name="inicio-semanas">
                        </div>
                    </div>                   
                </form>

                <form class="ficha-a__antecedentes__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Presentación</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam">
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
                            <select id="patoFam">
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
                            <select id="patoFam">
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
                            <select id="patoFam">
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
                            <select id="patoFam">
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
                            <select id="patoFam">
                                <option value="Intactas">Intactas</option>
                                <option value="Prominentes">Prominentes</option>    
                                <option value="Dudosa">Dudosa</option>  
                                <option value="Rotas">Rotas</option>
                            </select> 
                        </div>         
                        <label class="lista-interactiva__title">RPM</label>
                        <div class="ficha-a__medDrogas__form__item__input" id="Si">
                            <label for="embarazoPrevNormales">RPM (días)</label>
                            <input type="number" name="embarazoPrevNormales" id="">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input" id="No">
                            <label for="embarazoPrevNormales">RPM (horas)</label>
                            <input type="number" name="embarazoPrevNormales" id="">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input" id="Dudoso">
                            <label for="embarazoPrevNormales">No precisable</label>
                            <input type="checkbox" name="embarazoPrevNormales" id="">
                        </div>
                    </div>
                </form>

                <form class="ficha-a__antecedentes__form">
                    <div class="ficha-a__medDrogas__form__item">
                     	<label class="lista-interactiva__title">Pérdida vaginal de:</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="rMedCronico">Sin flujo</label>
                            <input type="checkbox" name="rMedCronico" id="">
                        </div>
                        <div class="lista-interactiva__select"> 
                            <select id="patoFam">                                
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
                     	<label class="lista-interactiva__title">Aspecto L. Amn. R.P.O.</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="rMedCronico">Ausente</label>
                            <input type="checkbox" name="rMedCronico" id="">
                        </div>
                        <div class="lista-interactiva__select"> 
                            <select id="patoFam">                                
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
                            <select id="patoFam">
                                <option value="">Vaginosis bacteriana</option>
                                <option value="">Tricornoniasis</option>
                                <option value="">Micosis vaginal</option>
                            </select> 
                        </div>                    
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Cristalización</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam">
                                <option value="">Negativa</option>
                                <option value="">Positiva</option>
                                <option value="">No realizada</option>                               
                            </select> 
                        </div>                    
                    </div>
                </form>  

                <form class="ficha-a__antecedentes__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">pH vahinal</label>
                         <div class="lista-interactiva__select"> 
                            <input type="number" name="number" id="number"> 
                        </div>                    
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">KOH vaginal</label>
                        <div class="lista-interactiva__select">
                            <select id="patoFam">
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
                            <select id="patoFam">
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
                            <select id="patoFam">
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
                            <select id="patoFam">
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
                            <input type="number" name="embarazoPrevNormales" id="">
                        </div>                    
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Canal (mm.)</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="embarazoPrevNormales" id="">
                        </div>                    
                    </div>                    

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Funnel</label>
                        <div class="ficha-a__medDrogas__form__item__input" id="Si">
                            <label for="embarazoPrevNormales">No</label>
                            <input type="radio" name="embarazoPrevNormales" id="">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input" id="No">
                            <label for="embarazoPrevNormales">Tamaño</label>
                            <input type="number" name="embarazoPrevNormales" id="" step="0.01">
                        </div>                        
                    </div>
                </form>
                
                <form class="info-personal__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Estado de Peso fetal (grs.)</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="embarazoPrevNormales" id="">
                        </div>                
                        <label class="lista-interactiva__title">PBF</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="embarazoPrevNormales" id=""><p>/8</p>
                        </div>                          
                    </div>   
                </form>                  
            </div>

            
            <h2 class="info-personal__title">Edad gestacional</h2>
            <div class="info-personal">
                <form class="info-personal__form">          
                    <div class="lista-interactiva__select">                    
                        <p>Semanas</p>
                        <input type="number" name="embarazoPrevNormales" id="">
                    </div>
                    <div class="lista-interactiva__select"> 
                        <p>Días</p>
                        <input type="number" name="embarazoPrevNormales" id="">
                    </div>
                    <div class="lista-interactiva__select"> 
                        <p>Edad Gestacional dudosa</p>
                        <input type="checkbox" name="embarazoPrevNormales" id="">
                    </div>
                </form>
            </div>

            <h2 class="ficha-a__title">Diagnosticos al ingreso</h2>
            <div class="info-personales">            
                <form class="info-personal__form">
                    <div class="lista-interactiva__select"> 
                        <select id="patoFam">                                
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
                        <textarea name="comentPreparto" rows="8" cols="100"></textarea>
                    </div>
                </form>
            </div>  

            <h2 class="ficha-a__title">Destino al ingreso</h2>
            <div class="ficha-a__antecedentes">                        
                <form class="ficha-a__antecedentes__form"> 
                    
                        <div class="lista-interactiva__select">
                            <select id="patoFam">
                                <option value="Embarazo Patológico">Embarazo Patológico</option>
                                <option value="Preparto/Parto">Preparto/Parto</option>    
                                <option value="Aislamiento">Aislamiento</option>  
                                <option value="Puerperio">Puerperio</option>
                                <option value="Pesionado">Pensionado</option>
                                <option value="Otro">Otro</option>
                            </select> 
                            <button class="btn btn-azul btn-añadir-a-lista">+</button> 
                            <ul class="lista-interactiva__lista"></ul> 
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
</script>