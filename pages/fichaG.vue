<template>
    <v-app>
        <v-card>
            <div class="content">        
            <!-- FormularioG-->
                <div class="info-personal">
                <h2 class="info-personal__title">Datos Personales</h2>
                <form class="info-personal__form">
                    
                    <span class="info-personal__form__item">
                        <label for="fechingre">Apellido paterno del recién nacido</label>
                        <input type="text" name="fechingre" id="fechingre">
                    </span>

                    <span class="info-personal__form__item">
                        <label for="rut-madre">Apellido materno del recién nacido</label>
                        <input type="text" name="rut-madre" id="rut">
                    </span>

                    <span class="info-personal__form__item">
                        <label for="pensionado">Ingreso trasladado</label>
                        <input type="radio" name="reanimacion" id="">
                    </span>

                    <span class="info-personal__form__item">
                        <label for="pNombre">Generar N°</label>
                        <input type="number" name="pNombre" id="pNombre">
                    </span>

                    <span class="info-personal__form__item">
                        <label for="aPaterno">Rut de la madre</label>
                        <input type="text" name="aPaterno" id="aPaterno">
                    </span>

                    <span class="info-personal__form__item">
                        <label for="aMaterno">Edad de la madre</label>
                        <input type="number" name="aMaterno" id="aMaterno">
                    </span>

                    <span class="info-personal__form__item">
                        <label for="pNombre">Nombre de la madre</label>
                        <input type="text" name="pNombre" id="pNombre">
                    </span>

                    <span class="info-personal__form__item">
                        <label for="aPaterno">Apellido paterno de la madre</label>
                        <input type="text" name="aPaterno" id="aPaterno">
                    </span>

                    <span class="info-personal__form__item">
                        <label for="aPaterno">Apellido materno de la madre</label>
                        <input type="text" name="aPaterno" id="aPaterno">
                    </span>
                </form>
                </div>                
            </div>


            <div class="info-personal">            
            <div class="ficha-a__antecedentes">

                <form class="info-personal__form"> 
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Control prenatal</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="sala">Si</label>
                            <input type="radio" name="sino" id=""> 
                        </div>                            
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="pensionado">No</label>
                            <input type="radio" name="sino" id="">
                        </div> 
                    </div> 

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Corticoides prenatales</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="sala">Si</label>
                            <input type="radio" name="sino" id=""> 
                        </div>                            
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="pensionado">No</label>
                            <input type="radio" name="sino" id="">
                        </div>  
                    </div> 

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Sufrimiento fetal</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="sala">Si</label>
                            <input type="radio" name="sino" id=""> 
                        </div>                            
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="pensionado">No</label>
                            <input type="radio" name="sino" id="">
                        </div>  
                    </div>                     
                     
                </form>

                <form class="info-personal__form"> 
                   
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Patologia embarazo</label>
                        <div class="ficha-a__medDrogas__form__item__input"> 
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label for="pensionado">Sin patología</label>
                                <input type="radio" name="reanimacion" id="">
                            </div>                              
                        </div>
                        <div class="lista-interactiva__select">
                            <select name="drogasUsadasTParto">
                                <option value="Hipertension">Hipertensión</option>
                                <option value="cie">C.I.E</option>    
                                <option value="Diabetes">Diabetes</option>  
                                <option value="rciu">R.C.I.U</option> 
                                <option value="Infeccion">Infeccion urinatia</option>  
                                <option value="Otras">Otras infecciones</option>
                                <option value="Madre">Madre Rh(-)</option>    
                                <option value="Metrorragla">Metrorragla</option>  
                                <option value="Prematuro">Sintomas de parto prematuro</option> 
                                <option value="Oligoamnios">Oligoamnios</option>   
                                <option value="rpo">R.P.O</option>
                                <option value="Anemia">Anemia</option>
                                <option value="Otros">Otros</option>                        
                            </select>
                                                      
                        </div>     

                        <div class="ficha-a__medDrogas__form__item__input">                        
                            <label class="respEspontaneo">Hrs.</label>                       
                            <div class="ficha-a__medDrogas__form__item__input">                        
                                <input type="time" name="hora" id="hora">
                            </div>
                        </div> 
                    </div>

                    <!---->
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Antropornetría al nacer</label>                           

                        <div class="ficha-a__medDrogas__form__item__input"> 
                            <label class="respEspontaneo">Peso (gr.)</label>                       
                            <div class="ficha-a__medDrogas__form__item__input">                        
                                <input type="number" name="hora" id="hora">
                            </div>             
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input"> 
                            <label class="respEspontaneo">Talla (mm.)</label>                       
                            <div class="ficha-a__medDrogas__form__item__input">                        
                                <input type="number" name="hora" id="hora">
                            </div>             
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input"> 
                            <label class="respEspontaneo">P Cran. (mm.)</label>                       
                            <div class="ficha-a__medDrogas__form__item__input">                        
                                <input type="number" name="hora" id="hora">
                            </div>             
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input"> 
                            <label class="respEspontaneo">Sexo</label>    
                            <select name="drogasUsadasTParto">
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>    
                                <option value="Indeterminado">Indeterminado</option>
                            </select>
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input"> 
                            <label class="respEspontaneo">Apgar 1'</label>                       
                            <div class="ficha-a__medDrogas__form__item__input">                        
                                <input type="number" name="hora" id="hora">
                            </div>             
                        </div>
                        <div class="ficha-a__medDrogas__form__item__input"> 
                            <label class="respEspontaneo">Apgar 5'</label>                       
                            <div class="ficha-a__medDrogas__form__item__input">                        
                                <input type="number" name="hora" id="hora">
                            </div>             
                        </div>
                        <div class="lista-interactiva__select">
                            <select name="drogasUsadasTParto">
                                <option value="Espontaneo">Espontaneo</option>
                                <option value="Forceps">Forceps</option>    
                                <option value="Cesareas">Cesáreas urgentes.</option>  
                                <option value="Fuera">Fuera del servicio</option>                                                        
                            </select>
                                                     
                        </div>                       
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Fecha de nacimiento</label>
                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input--date">                           
                            <input type="date" name="sino" id=""> 
                        </div>   
                    </div> 
                   
                </form>

            </div>
            </div>
        </v-card>

        <v-card>
            <div class="ficha-a">
                <h2 class="ficha-a__title">Hospitalización</h2>
                <div class="info-personal">                    
                    <form class="info-personal__form">                        
                        <span class="info-personal__form__item">
                            <label for="fechingre">N° de ficha Clinica Neonatal</label>
                            <input type="number" name="fechingre" id="fechingre">
                        </span>
                        <span class="info-personal__form__item">
                            <label for="fechingre">Fecha de hospitalización</label>
                            <input type="date" name="fechingre" id="fechingre">
                        </span>
                        <span class="info-personal__form__item">
                            <label for="fechingre">Edad ingreso</label>
                            <input type="number" name="fechingre" id="fechingre">
                        </span>
                        <span class="info-personal__form__item">
                            <label for="fechingre">Peso de ingreso (grs.)</label>
                            <input type="number" name="fechingre" id="fechingre">
                        </span>
                        
                        <span class="info-personal__form__item">   
                            <label for="fechingre">Indice de riesgo</label>                     
                            <div class="lista-interactiva__select">                        
                                <select name="drogasUsadasTParto">
                                    <option value="alto">Alto</option>
                                    <option value="medio">Medio</option>    
                                    <option value="bajo">Bajo</option>  
                                </select>
                            </div>
                        </span>

                    </form>                    
                </div>
            </div>
        </v-card>

         <v-card>
            <div class="ficha-a">
                <h2 class="ficha-a__title">Nutrición y terapias</h2>
                <div class="info-personal">                    
                    <form class="info-personal__form"> 
                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Nutrición</label>
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label for="fechingre">% de leche materna recibida</label>
                                <input type="number" name="sino" id=""> 
                            </div>                            
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label for="fechingre">Días de Alimento parenteral</label>
                                <input type="number" name="sino" id="">
                            </div> 

                           <div class="ficha-a__medDrogas__form__item">
                                <label class="lista-interactiva__title">Edad de:</label>
                                <div class="ficha-a__medDrogas__form__item__input">
                                    <label for="fechingre">Alimentación enteral exclusiva</label>
                                    <input type="number" name="sino" id="">
                                </div> 
                                <div class="ficha-a__medDrogas__form__item__input">
                                    <label for="fechingre">Recuperación peso alimento</label>
                                    <input type="number" name="sino" id="">
                                </div> 
                                <div class="ficha-a__medDrogas__form__item__input">
                                    <label for="sala">No recupera peso</label>
                                    <input type="checkbox" name="sino" id=""> 
                                </div>  
                            </div>
                        </div> 

                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Terapias</label>
                            <div class="ficha-a__medDrogas__form__item">
                                <label class="lista-interactiva__title">Días de:</label>                                
                                <div class="ficha-a__medDrogas__form__item__input">
                                    <label for="fechingre">Fototerapia</label>
                                    <input type="number" name="sino" id=""> 
                                </div> 

                                <div class="ficha-a__medDrogas__form__item__input">
                                    <label for="fechingre">Bili máxima</label>
                                    <input type="number" name="sino" id=""> 
                                </div> 

                                <div class="ficha-a__medDrogas__form__item__input">
                                    <label for="fechingre">Oxígeno</label>
                                    <input type="number" name="sino" id=""> 
                                </div> 

                                <label for="fechingre">Oxígeno a las 36 semanas:</label>
                                <div class="ficha-a__medDrogas__form__item__input">                                    
                                    <label for="fechingre">Si</label>
                                    <input type="radio" name="sino" id="">
                                    <label for="fechingre">No</label> 
                                    <input type="radio" name="sino" id="">
                                </div> 

                                <div class="ficha-a__medDrogas__form__item__input">
                                    <label for="fechingre">C.P.A.P</label>
                                    <input type="number" name="sino" id=""> 
                                </div>   

                                <div class="ficha-a__medDrogas__form__item__input">
                                    <label for="fechingre">Vent. mec.</label>
                                    <input type="number" name="sino" id=""> 
                                </div>                                 
                            </div> 
                        </div> 
                    </form>         
                </div>                
            </div>

            <div class="ficha-a">
                <h2 class="ficha-a__title">Examenes</h2>

                <form class="info-personal__form">
                    
                    <div class="ficha-a__medDrogas__form__item">
                    <span class="ficha-a__medDrogas__form__item__input">
                    	<label for="rut-madre">No se efectuaron examenes</label>
                    	<input type="checkbox" name="rut-madre" id="rut">
                	</span>                    

                    <span class="ficha-a__medDrogas__form__item__input">
                    	<label for="rut-madre">Fondo de ojo</label>    
                        <select name="drogasUsadasTParto">
                            <option value="alto">Normal</option>
                            <option value="medio">Anormal</option>    
                            <option value="bajo">No realizado</option>  
                        </select>                        
                	</span>          	
            	
                    <span class="ficha-a__medDrogas__form__item__input">
                    	<label for="rut-madre">E.E.G</label>    
                        <select name="drogasUsadasTParto">
                            <option value="alto">Normal</option>
                            <option value="medio">Anormal</option>    
                            <option value="bajo">No realizado</option>  
                        </select>                        
                	</span>

                    <span class="ficha-a__medDrogas__form__item__input">
                    	<label for="rut-madre">Examen neurológico</label>    
                        <select name="drogasUsadasTParto">
                            <option value="alto">Normal</option>
                            <option value="medio">Anormal</option>    
                            <option value="bajo">No realizado</option>  
                        </select>                        
                	</span>

                    <span class="ficha-a__medDrogas__form__item__input">
                    	<label for="rut-madre">Ecocardiograma</label>    
                        <select name="drogasUsadasTParto">
                            <option value="alto">Normal</option>
                            <option value="medio">Anormal</option>    
                            <option value="bajo">No realizado</option>  
                        </select>                        
                	</span>

                    <span class="ficha-a__medDrogas__form__item__input">
                    	<label for="rut-madre">Neurosonografía</label>    
                        <select name="drogasUsadasTParto">
                            <option value="alto">Normal</option>
                            <option value="medio">Anormal</option>    
                            <option value="bajo">No realizado</option>  
                        </select>                        
                	</span>

                    <span class="ficha-a__medDrogas__form__item__input">
                    	<label for="rut-madre">Hemocultivos</label>    
                        <select name="drogasUsadasTParto">
                            <option value="alto">Normal</option>
                            <option value="medio">Anormal</option>    
                            <option value="bajo">No realizado</option>  
                        </select>                        
                	</span>

                    <span class="ficha-a__medDrogas__form__item__input">
                    	<label for="rut-madre">Otros cultivos</label>    
                        <select name="drogasUsadasTParto">
                            <option value="alto">Normal</option>
                            <option value="medio">Anormal</option>    
                            <option value="bajo">No realizado</option>  
                        </select>                        
                	</span>            
                </div>

                <div class="ficha-a__medDrogas__form__item">
                    <form class="info-personal"> 
                        <label for="rut-madre">Otros examenes:</label> 
                        <div class="lista-interactiva__select">                    
                            <textarea name="comentPreparto" rows="10" cols="60"></textarea>
                        </div>
                    </form>
                </div>

                </form>                  
            </div>
        </v-card>

        <v-card>          
            <div class="ficha-a">
                <h2 class="ficha-a__title">Procedimientos, farmacos y cirugias</h2>
                <div class="info-personal">                    
                    <form class="info-personal__form"> 
                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Procedimientos</label>
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label for="fechingre">Ninguno</label>
                                <input type="checkbox" name="sino" id=""> 
                            </div>     
                            <div class="lista-interactiva__select">                        
                                <select name="drogasUsadasTParto">
                                    <option value="Sue">Sueroféresis</option>
                                    <option value="Pleu">Pleurotomía</option>    
                                    <option value="Cater u">Cateter umbilical</option>  
                                    <option value="Cater p">Cateter percutáneo</option>
                                    <option value="Dial">Diálisis</option>    
                                    <option value="Otro">Otro</option>  
                                     
                                </select>
                            </div> 
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label for="fechingre">N° examen sanguineo de transfusión</label>
                                <input type="number" name="sino" id=""> 
                            </div> 
                             <div class="ficha-a__medDrogas__form__item__input">
                                <label for="fechingre">N° transfusiones</label>
                                <input type="number" name="sino" id=""> 
                            </div>    
                        </div>

                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Farmacos administrados</label>
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label for="fechingre">Ninguno</label>
                                <input type="checkbox" name="sino" id=""> 
                            </div>     
                            <div class="lista-interactiva__select">                        
                                <select name="drogasUsadasTParto">
                                    <option value="Sue">Sueroféresis</option>
                                    <option value="Pleu">Pleurotomía</option>    
                                    <option value="Cater u">Cateter umbilical</option>  
                                    <option value="Cater p">Cateter percutáneo</option>
                                    <option value="Dial">Diálisis</option>    
                                    <option value="Otro">Otro</option>  
                                     
                                </select>
                            </div> 
                              
                        </div>

                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Tipo de cirugía realizada</label>
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label for="fechingre">Ninguno</label>
                                <input type="checkbox" name="sino" id=""> 
                            </div>     
                            <div class="lista-interactiva__select">                        
                                <select name="drogasUsadasTParto">
                                    <option value="Sue">Sueroféresis</option>
                                    <option value="Pleu">Pleurotomía</option>    
                                    <option value="Cater u">Cateter umbilical</option>  
                                    <option value="Cater p">Cateter percutáneo</option>
                                    <option value="Dial">Diálisis</option>    
                                    <option value="Otro">Otro</option>  
                                     
                                </select>
                            </div>                              
                        </div>
                    </form>
                </div>



                
            </div>                    
        </v-card>

    </v-app>
</template>

<script>
</script>