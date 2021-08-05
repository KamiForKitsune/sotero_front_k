<template>
    <v-app>
        <v-card>
            <div class="content">
        <!-- Formulario info personal-->
        <div class="info-personal">
            <h2 class="info-personal__title">Datos Personales</h2>
            <form class="info-personal__form">
                <!--  FechaIngresoRutDeLaMadreFechaDeIngresoDeLaMadre-->
                
                <span class="info-personal__form__item">
                    <label for="rut-madre">Rut de la Madre</label>
                    <input type="text" name="rut-madre" id="rut">
                </span>

                <span class="info-personal__form__item">
                    <label for="fechingre">Fecha del procedimiento</label>
                    <input type="date" name="fechingre" id="fechingre">
                </span>

                <span class="info-personal__form__item">
                    <label for="fnacmadre">Hora de procedimiento</label>
                    <input type="time" name="fnacmadre" id="fnacmadre">
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
            </form>
        </div>

        <div class="ficha-a">
            <h2 class="ficha-a__title">Ficha C</h2>
            
            <h2 class="ficha-a__title">Procedimiento</h2>
            <div class="ficha-a__antecedentes">
                <form class="ficha-a__antecedentes__form">
                   
                    <div class="ficha-a__medDrogas__form__item__input">
                        <label for="">Gemelar (A, B, etc)</label>
                        <input type="text" name="" id="Mejorar">
                    </div>

                    <div class="ficha-a__medDrogas__form__item__input">
                        <label for="">Ed. Gest (sem/dias) </label>
                        <input type="text" name="" id="Mejorar">
                    </div>    

                </form>


                <form class="ficha-a__antecedentes__form">

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Procedimiento</label>                        
                        <div class="lista-interactiva__select">
                            <select id="patoFam">
                                <option value="Amniocentesis">Amniocentesis</option>
                                <option value="Cordocentesis">Cordocentesis</option>
                                <option value="Trnas. Intraut.">Trnas. Intraut.</option>
                                <option value="Shunt vesical">Shunt vesical</option>
                                <option value="Shunt Toráxico">Shunt Toráxico</option>
                                <option value="Otro">Otro</option>
                            </select>
                            <button class="btn btn-azul btn-añadir-a-lista">+</button>
                            
                            <ul class="lista-interactiva__lista">                           
                            </ul>
                        </div>  
                    </div>     

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Transplac.</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="rMedCronico">No</label>
                            <input type="radio" name="rTrans" id="notransplac">
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="rMedCronico">Si</label>
                            <input type="radio" name="rTrans" id="transplac">
                        </div>

                        <label for="">Nº Intentos</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="" id="sitransplac">
                        </div>
                    </div>                                               
                </form>

                <form class="ficha-a__antecedentes__form">
                    
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Aspecto del L. amniótico</label>
                        <div class="lista-interactiva__select">
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label for="rMedCronico">No se obtiene</label>
                                <input type="radio" name="No" id="">
                            </div>
                        </div>

                        <div class="lista-interactiva__select">
                            <select id="patoFam">
                                <option value="Claro Sin Grumos">Claro Sin Grumos</option>
                                <option value="Claro Grumos Finos">Claro Grumos Finos</option>
                                <option value="Claro Grumos Gruesos">Claro Grumos Gruesos</option>
                                <option value="Meconio Fluido">Meconio Fluido</option>
                                <option value="Meconio Espeso">Meconio Espeso</option>
                                <option value="Contaminado c/sangre">Contaminado c/sangre</option>
                                <option value="Citrino">Citrino</option>
                                <option value="Te Cargado">Te Cargado</option>
                                <option value="Turbio">Turbio</option>
                                <option value="Otro">Otro</option>
                            </select>
                            <button class="btn btn-azul btn-añadir-a-lista">+</button>
                            <ul class="lista-interactiva__lista"></ul>
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Membranas</label>
                        <div class="lista-interactiva__select">
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label for="rMembrana">Intactas</label>
                                <input type="radio" name="eMembrana" id="">

                                <label for="rMembrana">Prominentes</label>
                                <input type="radio" name="eMembrana" id="">

                                <label for="rMembrana">Rotas</label>
                                <input type="radio" name="eMembrana" id="">

                                <label for="rMembrana">Dudoso</label>
                                <input type="radio" name="eMembrana" id="">
                            </div>
                        </div>
                    </div>

                </form>

                <form class="ficha-a__antecedentes__form">

                    <div class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico" id="embarazo-ectopico">
                        <span class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico__title">Trabajo de parto</span>

                        <div class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico__seccion-input">

                            <div class="ficha-a__medDrogas__form__item">
                              
                                <div class="ficha-a__medDrogas__form__item__input" id="embP">
                                    <label for="embarazoPrevNormales">Si</label>
                                    <input type="radio" name="embarazoPrevNormales" value="Si" id="ePrevC">
                                </div>
                                <div class="ficha-a__medDrogas__form__item__input" id="embP">
                                    <label for="embarazoPrevNormales">No</label>
                                    <input type="radio" name="embarazoPrevNormales" value="No" id="ePrevC">
                                </div>
                                <div class="ficha-a__medDrogas__form__item__input" id="embP">
                                    <label for="embarazoPrevNormales">Dudoso</label>
                                    <input type="radio" name="embarazoPrevNormales" value="Dudoso" id="ePrevC">
                                </div>

                            </div>                          
                        </div>
                       
                        <div class="ficha-a__antecedentes-obstetricos__form__item--embarazo-ectopico--seccion-opcional" id="proocultosEE">
                            
                            <div class="ficha-a__medDrogas__form__item">

                                <span class="info-personal__form__item">
                                    <label for="fechingre">Contrac. en 10 min.</label>
                                    <input type="number" name="fechingre" id="fechingre">
                                </span>
                                  
                                <span class="info-personal__form__item">
                                    <label for="fechingre">Borrado (%)</label>
                                    <input type="number" name="fechingre" id="fechingre">
                                </span>
                               
                                <span class="info-personal__form__item">
                                    <label for="fechingre">Dilat. cerv. (cms)</label>
                                    <input type="number" name="fechingre" id="fechingre">
                                </span>                            
                            </div>
                        </div>

                    </div> 

                </form> 
            </div>

            <h2 class="ficha-a__title ha">Condiciones durante el procedimiento</h2>            
            <div class="ficha-a__antecedentes">
               
             
                <p class="ficha-a__title hi">Ingrese el valor más cercano al momento del procedimiento</p>

                <form class="ficha-a__antecedentes__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Perfil biofísico</label>

                        <div class="texto">
                            <label class="movr">No realizado</label>
                            <input type="radio" name="pcorres" id="norealizado"> 
                        </div> 

                        <label class="lista-interactiva__title"></label>

                        <div class="texto">
                            <label class="movr">Mov. resp</label>
                            <input type="radio" name="movresp" id="psala" class=""> 
                            <label class="radioperf">0</label>
                            <input type="radio" name="movresp" id="ppensionado">
                            <label class="">2</label>                            
                        </div> 

                        <div class="texto">
                            <label class="movf">Mov. fetal</label>
                            <input type="radio" name="movfetal" id="psala" class="">                        
                            <label class="radioperf">0</label>
                            <input type="radio" name="movfetal" id="ppensionado">
                            <label>2</label>
                        </div>

                        <div class="texto">
                            <label class="tono">Tono</label>
                            <input type="radio" name="tono" id="psala">                        
                            <label class="radioperf">0</label>
                            <input type="radio" name="tono" id="ppensionado">
                            <label>2</label>
                        </div>

                        <div class="texto">
                            <label class="lamn">L. Amniót</label>
                            <input type="radio" name="lamn" id="psala">                        
                            <label class="radioperf">0</label>
                            <input type="radio" name="lamn" id="ppensionado">
                            <label>2</label>
                        </div>

                        <div class="texto">
                            <label class="rbne">R.B.N.E</label>
                            <input type="radio" name="rbne" id="psala">                        
                            <label class="radioperf">0</label>
                            <input type="radio" name="rbne" id="ppensionado">
                            <label>2</label>
                        </div>        

                        <label class="lista-interactiva__title">Indice L. Amniót</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="indlamn" id="edadgest" step="00.1">
                        </div>                

                    </div>  

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Signos presentes</label>
                                                
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="ninguna">Ninguno</label>
                            <input type="checkbox" name="grupo" id="signosning">                                    
                        </div>

                        <div class="lista-interactiva__select">                            
                            <select name="grupo" id="actcompltp">
                                <option value="Sensibilidad uterina">Sensibilidad uterina</option>
                                <option value="Descarga vaginal purulenta">Descarga vaginal purulenta</option>    
                                <option value="Taquicardia materna">Taquicardia materna</option>  
                                <option value="Taquicardia fetal">Taquicardia fetal</option> 
                                <option value="Otro">Otro</option>                                 
                            </select>        
                            <button class="btn btn-azul btn-añadir-a-lista">+</button>   
                            
                            <ul class="lista-interactiva__lista">
                           
                            </ul>   

                            <label class="lista-interactiva__title">Temp. ax.</label>
                            <div class="lista-interactiva__select">
                                <input type="number" name="indlamn" id="edadgest" step="00.1">
                            </div>

                            <label class="lista-interactiva__title">Leucocitos maternos</label>
                            <div class="lista-interactiva__select">
                                <input type="number" name="indlamn" id="edadgest" step="00.01">
                            </div>

                        </div>
                    </div>
                </form>

                
                <form class="ficha-a__antecedentes__form">

                    <div class="ficha-a__medDrogas__form__item">

                        <label class="lista-interactiva__title">Medicamentos DURANTE el procedimiento</label>
                                                
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="ninguna">Ninguno</label>
                            <input type="checkbox" name="grupo" id="signosning">                                    
                        </div>

                        <div class="lista-interactiva__select">                            
                            <select name="grupo" id="actcompltp">
                                <option value="Fenoterol">Fenoterol</option>
                                <option value="Sulfato de Magnesio">Sulfato de Magnesio</option>    
                                <option value="Antib. profilácticos">Antib. profilácticos</option>  
                                <option value="Antib. terapéuticos">Antib. terapéuticos</option> 
                                <option value="Nimesulina">Nimesulina</option> 
                                <option value="Aspirina">Aspirina</option> 
                                <option value="Corticoides previos">Corticoides previos</option> 
                                <option value="Otro Antinflam. no esteroidal">Otro Antinflam. no esteroidal</option> 
                                <option value="Otro">Otro</option>                                 
                            </select>        
                            <button class="btn btn-azul btn-añadir-a-lista">+</button>   
                            
                            <ul class="lista-interactiva__lista">
                            
                            </ul> 
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">

                        <label class="lista-interactiva__title">Complicaciones del procedimiento</label>                                                
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="ninguna">Ninguna</label>
                            <input type="checkbox" name="grupo" id="signosning">                                    
                        </div>
                        <div class="lista-interactiva__select">                            
                            <select name="grupo" id="actcompltp">
                                <option value="Rotura prematura de membrana">Rotura prematura de membrana</option>
                                <option value="Bradicardia &#60 1 minuto">Bradicardia &#60 1 minuto</option>    
                                <option value="Bradicardia > 1 minuto">Bradicardia > 1 minuto</option>  
                                <option value="Hemorragia de placenta">Hemorragia de placenta</option> 
                                <option value="Hemorragia de cordón">Hemorragia de cordón</option>
                                <option value="DPPNI">DPPNI</option>
                                <option value="Otro">Otro</option>                                 
                            </select>        
                            <button class="btn btn-azul btn-añadir-a-lista">+</button>   
                            
                            <ul class="lista-interactiva__lista">
                           
                            </ul> 
                        </div>
                    </div>
                
                </form>
            
            </div>

           

            <h2 class="ficha-a__title ha" id="prooculto">Resultados de liquído amniotico</h2>            
            <div class="ficha-a__antecedentes"  id="prooculto">
                <form class="ficha-a__antecedentes__form">

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Test de Clements</label>
                        <div class="lista-interactiva__select">                            
                            <select name="grupo" id="testcelments">
                                <option value="Negativo">Negativo</option>
                                <option value="Intermedio">Intermedio</option>    
                                <option value="Positivo">Positivo</option>  
                                <option value="No realizado">No realizado</option>                                
                            </select>      
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">FG</label>
                        <div class="lista-interactiva__select">                            
                            <select name="grupo" id="testcelments">
                                <option value="Negativo">Negativo</option>   
                                <option value="Positivo">Positivo</option>  
                                <option value="No realizado">No realizado</option>                                
                            </select>      
                        </div>
                    </div> 
                </form>

                <form class="ficha-a__antecedentes__form">

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Complicaciones del procedimiento</label>                                                
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="norealizado">No realizado</label>
                            <input type="radio" name="grupo" id="signosning">                                    
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="negativo">Negativo</label>
                            <input type="radio" name="grupo" id="signosning">                                    
                        </div>
                        <div class="lista-interactiva__select">                            
                            <select name="grupo" id="actcompltp">
                                <option value="Cocos G(-)">Cocos G(-)</option>
                                <option value="Cocos G(+)">Cocos G(+)</option>    
                                <option value="Bacilos G(-)">Bacilos G(-)</option>  
                                <option value="Bacilos G(+)">Bacilos G(+)</option> 
                                <option value="Hongos">Hongos</option>
                                <option value="Parasitos">Parásitos</option>
                                <option value="Glob. de pus">Glób. de pus</option>
                                <option value="Dudoso">Dudoso</option>                                  
                            </select>   
                        </div>    
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Leucositos en L.A.</label>                                                
                        <div class="lista-interactiva__select">
                            <div class="lista-interactiva__select">
                                <input type="number" name="indlamn" id="edadgest" step="00.001">
                            </div>
                        </div>

                        <label class="lista-interactiva__title">Glucosa en L.A.</label>                                                
                        <div class="lista-interactiva__select">
                            <div class="lista-interactiva__select">
                                <input type="number" name="indlamn" id="edadgest">
                            </div>
                        </div>
                    </div>
                </form>

                <form class="ficha-a__antecedentes__form">

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Cultivo aerob./anaerob.</label>
                        <div class="lista-interactiva__select">                            
                            <select name="grupo" id="testcelments">
                                <option value="Negativo">Negativo</option>   
                                <option value="Positivo">Positivo</option>  
                                <option value="No realizado">No realizado</option>                                
                            </select>      
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Micopias /Uroplasma</label>
                        <div class="lista-interactiva__select">                            
                            <select name="grupo" id="testcelments">
                                <option value="Negativo">Negativo</option>   
                                <option value="Positivo">Positivo</option>  
                                <option value="No realizado">No realizado</option>                                
                            </select>      
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Estudio virológico</label>
                        <div class="lista-interactiva__select">                            
                            <select name="grupo" id="testcelments">
                                <option value="Negativo">Negativo</option>   
                                <option value="Positivo">Positivo</option>  
                                <option value="No realizado">No realizado</option>                                
                            </select>      
                        </div>
                    </div>
                </form>

                <form class="ficha-a__antecedentes__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Comentarios:</label>
                        <div class="lista-interactiva__select">                                       
                            <textarea name="comentPreparto" rows="10" cols="80" id="cexpanre" data="elementos"></textarea>
                        </div>
                    </div>
                </form>            
            </div>
        
        
            <h2 class="ficha-a__title ha">Germenes</h2>            
            <div class="ficha-a__antecedentes">
                <form class="ficha-a__antecedentes__form">                    
                    <div class="lista-interactiva__select">
                        <label for="diagnostico">Germen 1</label>
                        <input type="text" name="peridural" id="diagCesarea" data="elementos">                                
                    </div>  

                    <div class="lista-interactiva__select">
                        <label for="diagnostico">Germen 2</label>
                        <input type="text" name="peridural" id="diagCesarea" data="elementos">                                
                    </div>   

                    <div class="lista-interactiva__select">
                        <label for="diagnostico">Otro germen</label>
                        <input type="text" name="peridural" id="diagCesarea" data="elementos">                                
                    </div>   
                </form>
            </div>

                        
            <div class="ficha-a__antecedentes" id="proocultosF">
                <h2 class="ficha-a__title ha">Resultados en sangre fetal</h2>

                <form class="ficha-a__antecedentes__form">                    
                    <div class="ficha-a__medDrogas__form__item">                        
                        <label class="lista-interactiva__title">pH</label>                       
                        <div class="ficha-a__medDrogas__form__item__input">                        
                            <input type="number" step="0.01" class="form-control" />
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">                        
                        <label class="lista-interactiva__title">pO2</label>                       
                        <div class="ficha-a__medDrogas__form__item__input">                        
                            <input type="number" class="form-control" />
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">                        
                        <label class="lista-interactiva__title">pCO2</label>                       
                        <div class="ficha-a__medDrogas__form__item__input">                        
                            <input type="number" class="form-control" />
                        </div>
                    </div>
                
                </form>

                <form class="ficha-a__antecedentes__form">                    
                    <div class="ficha-a__medDrogas__form__item">                        
                        <label class="lista-interactiva__title">Hemoglobina</label>                       
                        <div class="ficha-a__medDrogas__form__item__input">                        
                            <input type="number" step="0.01" class="form-control" />
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">                        
                        <label class="lista-interactiva__title">Hcto. Pre</label>                       
                        <div class="ficha-a__medDrogas__form__item__input">                        
                            <input type="number" class="form-control" />
                            <p class="porcentaje">%</p>
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item"> 
                        <label class="lista-interactiva__title">Hcto. Post</label>                       
                        <div class="ficha-a__medDrogas__form__item__input">                        
                            <input type="number" class="form-control" />
                            <p class="porcentaje">%</p>
                        </div>
                    </div>            
                </form>

                <form class="ficha-a__antecedentes__form">                    
                    <div class="ficha-a__medDrogas__form__item">                        
                        <label class="lista-interactiva__title">Eritrocitos</label>                       
                        <div class="ficha-a__medDrogas__form__item__input">                        
                            <input type="number" step="1000" class="form-control" />
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">                        
                        <label class="lista-interactiva__title">Leucocitos</label>                       
                        <div class="ficha-a__medDrogas__form__item__input">                        
                            <input type="number" step="100" class="form-control" />
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item"> 
                        <label class="lista-interactiva__title">Plaquetas</label>                       
                        <div class="ficha-a__medDrogas__form__item__input">                        
                            <input type="number" step="1000" class="form-control" />
                        </div>
                    </div>
                </form>    

         
                <form class="ficha-a__antecedentes__form color">

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Grupo</label> 
                        <div class="lista-interactiva__select">                                                    
                            <select name="grupo" id="GrupoSang">
                                <option value="A">A</option>   
                                <option value="AB">AB</option>  
                                <option value="B">B</option>
                                <option value="O">O</option>  
                                <option value="Desconoce">Desconoce</option>                                  
                            </select>     
                        </div>
                    </div>  

                    <div class="ficha-a__medDrogas__form__item"> 
                        <label class="lista-interactiva__title">Rh</label>
                        <div class="lista-interactiva__select">                                                   
                            <select name="grupo" id="Rh">
                                <option value="Negativo">(+)</option>   
                                <option value="Positivo">(-)</option>  
                                <option value="No realizado">(-) no sens.</option>
                                <option value="No realizado">(-) sens.</option>  
                                <option value="No realizado">Desconoce</option>                                  
                            </select>     
                        </div>
                    </div> 

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Vol. transf.</label>
                        <div class="lista-interactiva__select">                        
                            <input type="number" name="volTransf" id="volTransf">
                        </div>
                    </div>

                </form>

                <form class="ficha-a__antecedentes__form">

                    <div class="ficha-a__medDrogas__form__item">
                    <label class="lista-interactiva__title">Hcto. Bolsa (%)</label>
                        <div class="lista-interactiva__select">                                        
                            <input type="number" name="hctoBolsa" id="hctoBolsa"> 
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">KB</label>
                        <div class="lista-interactiva__select">
                            <input type="number" name="kb" id="kb">
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Cariotipo</label>
                        <div class="lista-interactiva__select">
                            <input type="text" name="cariotipo" id="cariotipo">   
                        </div> 
                    </div>

                </form>

                <form class="ficha-a__antecedentes__form">
                    
                    <div class="ficha-a__medDrogas__form__item">
                                
                        <label class="lista-interactiva__title">Cultivo sangre fetal</label>
                        <div class="lista-interactiva__select">                            
                            <select name="grupo" id="testcelments">
                                <option value="Negativo">Negativo</option>   
                                <option value="Positivo">Positivo</option>  
                                <option value="No realizado">No realizado</option>                                
                            </select>                           
                        </div>                    

                    </div>  
                </form>
            </div>
       
        </div>

        <div class="ficha-a__seccion-btn-global">
            <div class="btn-ingresar-datos">Ingresar Datos</div>
        </div>

    </div>


        </v-card>
    </v-app>
</template>

<style>
</style>

<script>
</script>