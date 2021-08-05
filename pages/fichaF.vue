<template>
    <v-app>       
        <v-card>
            <div class="content">        
        
        <div class="info-personal">
            <h2 class="info-personal__title">Identificación del recién nacido</h2>
            <form class="ficha-a__antecedentes__form">
                            
                <!--Rut de la madre-->               
                <span class="info-personal__form__item">
                    <label for="rut-madre">Rut de la Madre</label>
                    <input type="text" name="rut-madre" id="rut">                    
                </span>
                <!--Generación de número-->
                <span class="info-personal__form__item">
                    <label for="rut-madre">Generar N°</label>
                    <div class="ficha-a__medDrogas__form__item__input">                   
                        <input type="number" id="" name="generarN">
                    </div>
                </span>                 
                
            </form>
            <!--Información del recien nacido-->
            <form class="info-personal__form">

                <!--Apellido paterno del recien nacido-->
               <span class="info-personal__form__item">
                    <label for="aPaterno">Apellido Paterno del recién nacido</label>
                    <input type="text" name="aPaterno" id="aPaterno">
                </span>
                <!--Apellido materno del recien nacido-->
                <span class="info-personal__form__item">
                    <label for="aMaterno">Apellido Materno del recién nacido</label>
                    <input type="text" name="aMaterno" id="aMaterno">
                </span>            

            </form>
        </div>    
    
        <!--Ingreso de información de los datos de la ficha F-->
        <div class="ficha-a"> 

            <h2 class="ficha-a__title">Parto</h2>
            <div class="ficha-a__antecedentes">
                <form class="ficha-a__antecedentes__form">

                    <!--Información de la fecha de parto-->
                    <div class="ficha-a__medDrogas__form__item"> 
                        <label class="lista-interactiva__title">Fecha del parto</label>  
                        <div class="lista-interactiva__select">                        
                            <input type="date" name="fechparto" id="fechparto">
                        </div>                   
                    </div>

                    
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Hora de parto</label>                       
                        <div class="lista-interactiva__select">                        
                            <input type="time" name="hora" id="hora">
                        </div>
                    </div>                                       
                               
                </form>
            </div>
        

                   
            <h2 class="ficha-a__title">Evaluación del R.N.</h2>
            <div class="ficha-a__antecedentes">

                <form class="ficha-a__antecedentes__form">                  
                   
                    <div class="ficha-a__medDrogas__form__item"> 
                        <label class="lista-interactiva__title">Peso (grs.)</label>  
                        <div class="lista-interactiva__select">                        
                            <input type="number" id="" name="peso">
                        </div>                   
                    </div>

                    
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Talla (mm)</label>                       
                        <div class="lista-interactiva__select">                        
                            <input type="number" id="" name="talla">
                        </div>
                    </div>  

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">P. cef. (mm)</label>                       
                        <div class="lista-interactiva__select">                        
                            <input type="number" id="" name="pcef">
                        </div>
                    </div>                               
                </form>


                <form class="ficha-a__antecedentes__form">                  
                   
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Sexo</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="sala">Masculino</label>
                            <input type="radio" name="sexo" id=""> 
                        </div>                            
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="pensionado">Femenino</label>
                            <input type="radio" name="sexo" id="">
                        </div> 
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label for="pensionado">Ambiguo</label>
                            <input type="radio" name="sexo" id="">
                        </div>
                    </div>

                    
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Apgar 1'</label>                       
                        <div class="lista-interactiva__select">                        
                            <input type="number" id="" name="apgar1">
                        </div>
                    </div>  

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Apgar 5'</label>                       
                        <div class="lista-interactiva__select">                        
                            <input type="number" id="" name="apgar5">
                        </div>
                    </div>                               
                </form>


                <form class="ficha-a__antecedentes__form"> 
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Reanimación</label>
                        <div class="ficha-a__medDrogas__form__item__input"> 
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label for="pensionado">Si</label>
                                <input type="radio" name="reanimacion" id="">
                            
                                <label for="pensionado">No</label>
                                <input type="radio" name="reanimacion" id="">
                            </div>                              
                        </div>
                        <div class="lista-interactiva__select">
                            <select name="drogasUsadasTParto">
                                <option value="Ambú">Ambú</option>
                                <option value="Tubo">Tubo</option>    
                                <option value="Oxígeno">Oxígeno</option>  
                                <option value="Masaje">Masaje</option> 
                                <option value="Adrenalina">Adrenalina</option>                             
                            </select>
                            <button class="btn btn-azul btn-añadir-a-lista">+</button>  
                            <ul class="lista-interactiva__lista"></ul>                          
                        </div>     

                        <div class="ficha-a__medDrogas__form__item__input">                        
                            <label class="respEspontaneo">Resp. Espontáneo (minutos)</label>                       
                            <div class="ficha-a__medDrogas__form__item__input">                        
                                <input type="time" name="hora" id="hora">
                            </div>
                        </div> 
                    </div>


                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Se transporta:</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                          
                            <label for="pensionado">Sin soporte ventilat.</label>
                            <input type="radio" name="reanimacion" id="">
                            <label for="pensionado">con Oxígeno</label>
                            <input type="radio" name="reanimacion" id="">
                            <label for="pensionado">con CPAP nasal</label>
                            <input type="radio" name="reanimacion" id="">
                            <label for="pensionado">con Vent. manual</label>
                            <input type="radio" name="reanimacion" id="">
                            <label for="pensionado">con Vent. mecánica</label>
                            <input type="radio" name="reanimacion" id="">                             
                                                        
                        </div>                        
                    </div>

                </form>
            </div>

           

            <h2 class="ficha-a__title">Gases en sangre del R.N.</h2>
            <div class="ficha-a__antecedentes">

                <form class="ficha-a__antecedentes__form"> 
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Gases en la sangre del R.N.</label>
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

                <form class="ficha-a__antecedentes__form">   

                    <div class="ficha-a__medDrogas__form__item">                        
                        <label class="lista-interactiva__title">Minutos posiparto</label>                       
                        <div class="ficha-a__medDrogas__form__item__input">                        
                            <input type="number" id="quantity" name="quantity" min="1" max="999">
                        </div>
                    </div>

                   <div class="ficha-a__medDrogas__form__item">                        
                        <label class="lista-interactiva__title">pH</label>                       
                        <div class="ficha-a__medDrogas__form__item__input">                        
                            <input type="number" step="0.01" class="form-control" />
                        </div>
                    </div> 

                    <div class="ficha-a__medDrogas__form__item">                        
                        <label class="lista-interactiva__title">pCO2</label>                       
                        <div class="ficha-a__medDrogas__form__item__input">                        
                            <input type="number" id="" name="pco2" min="0">
                        </div>
                    </div>                    

                </form>

                <form class="ficha-a__antecedentes__form">   

                    <div class="ficha-a__medDrogas__form__item">                        
                        <label class="lista-interactiva__title">Vaso (cordón)</label>                       
                        <div class="ficha-a__medDrogas__form__item__input">                        
                            <select name="drogasUsadasTParto">
                                <option value="ambu">Arteria cordón</option>
                                <option value="tubo">Vena cordón</option>    
                                <option value="oxigeno">RN inmediato</option>                                  
                            </select> 
                        </div>
                    </div>

                    <div class="ficha-a__medDrogas__form__item">                        
                        <label class="lista-interactiva__title">pO2</label>                       
                        <div class="ficha-a__medDrogas__form__item__input">                        
                            <input type="number" id="" name="pco2">
                        </div>
                    </div> 

                    <div class="ficha-a__medDrogas__form__item">                        
                        <label class="lista-interactiva__title">Base Excess</label>                       
                        <div class="ficha-a__medDrogas__form__item__input">                        
                            <input type="number" step="0.01" class="form-control" />
                        </div>
                    </div> 
                </form>
            </div>                                               
            

                     
            <h2 class="ficha-a__title">Observaciones NEO</h2>               
            <div class="ficha-a__antecedentes">
                
                <div class="lista-interactiva__select">                    
                    <textarea name="comentPreparto" rows="15" cols="90"></textarea>
                </div>
                <div class="lista-interactiva__select">
                    <form class="ficha-a__antecedentes__form">
                        <span class="info-personal__form__item">
                            <label class="nombreProf">Nombre del profesional</label>
                            <input type="text" name="nombre-prof" id="nombre-prof">
                        </span>                       
                        <span class="info-personal__form__item">
                            <label class="codigo">Código</label> 
                            <input type="text" name="codigo" id="codigo">
                        </span>
                    </form>
                </div>  
            </div>

            
            <h2 class="ficha-a__title">Continuación (obstetrica) de formulario de parto</h2>
            <div class="ficha-a__antecedentes">                
                <div class="lista-interactiva__select"> 
                    <label for="">Nombre completo de la madre</label>
                    <form class="info-personal__form">          
                        <span class="info-personal__form__item">
                            <label for="aPaterno">Apellido Paterno</label>
                            <input type="text" name="aPaterno" id="aPaterno">
                        </span>
                        <span class="info-personal__form__item">
                            <label for="aMaterno">Apellido Materno</label>
                            <input type="text" name="aMaterno" id="aMaterno">
                        </span> 
                    </form>
                    <form class="info-personal__form">
                        <span class="info-personal__form__item">
                            <label for="pNombre">Primer nombre</label>
                            <input type="text" name="pNombre" id="pNombre">
                        </span>
                        <span class="info-personal__form__item">
                            <label for="pNombre">Segundo nombre</label>
                            <input type="text" name="pNombre" id="pNombre">
                        </span>                       
                    </form> 
                </div>
            </div>

            <h2 class="ficha-a__title">Antecedente del parto</h2>
            <div class="ficha-a__antecedentes">            
                
                <form class="ficha-a__antecedentes__form"> 
                    <div class="ficha-a__medDrogas__form__item">                         
                        <label class="lista-interactiva__title">Vía del parto</label> 
                        <div class="lista-interactiva__select">                        
                            <select name="drogasUsadasTParto">
                                <option value="vEsport">Vaginal esport.</option>
                                <option value="forceps">Forceps</option>    
                                <option value="cElectiva">Cesárea electiva</option> 
                                <option value="cUrgencia">Cesárea urgencia</option>                                  
                            </select> 
                        </div>
                    </div>    

                    <div class="ficha-a__medDrogas__form__item">                        
                        <label class="lista-interactiva__title">Presentación</label>                       
                        <div class="lista-interactiva__select">                        
                            <select name="drogasUsadasTParto">
                                <option value="cefalica">Cefálica</option>
                                <option value="podalica">Podálica</option>    
                                <option value="transversa">Transversa</option>                                  
                            </select> 
                        </div>
                    </div>        

                    <div class="ficha-a__medDrogas__form__item">                        
                        <label class="lista-interactiva__title">Estado al nacer</label>                       
                        <div class="lista-interactiva__select">                        
                            <select name="drogasUsadasTParto" id="amorti">
                                <option value="vivo">Vivo</option>
                                <option value="mortinato">Mortinato</option>                                                                    
                            </select> 
                        </div>
                    </div>              
                </form>

                <form class="ficha-a__antecedentes__form" id="encasomorti">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">En caso de mortinato</label>                        
                        <div class="lista-interactiva__select">                        
                            <select name="drogasUsadasTParto">
                                <option value="intraservicio">Intraservicio</option>
                                <option value="extraservicio">Extraservicio</option>                                                                         
                            </select> 
                        </div>
                        <div class="lista-interactiva__select">                        
                            <select name="drogasUsadasTParto">
                                <option value="anteparto">Anteparto</option>
                                <option value="intraparto">Intraparto</option>    
                                <option value="noPrecisable">No precisable</option>                                                                         
                            </select> 
                        </div>                        
                    </div>

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Se envía a A. Patológica</label>
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
            </div>                
                     
            <h2 class="ficha-a__title">Turno obstetrico</h2>
            <div class="ficha-a__antecedentes">

                <form class="ficha-a__antecedentes__form"> 
                    <div class="ficha-a__medDrogas__form__item">                        
                        <label class="lista-interactiva__title">Turno</label>                       
                        <div class="lista-interactiva__select">                        
                            <select name="drogasUsadasTParto">
                                <option value="lunes">Lunes</option>
                                <option value="martes">Martes</option>    
                                <option value="miercoles">Miércoles</option> 
                                <option value="jueves">Jueves</option>
                                <option value="volanteUno">Volante 1</option>
                                <option value="volanteDos">Volante 2</option>
                                <option value="ePreparto">Equipo prepartos</option>
                                <option value="eParticular">Equipo particular</option>                                  
                            </select> 
                        </div>
                    </div>   

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Inicio procedimiento</label>                       
                        <div class="lista-interactiva__select">                        
                            <input type="time" name="hora" id="hora">
                        </div>
                        <label class="lista-interactiva__title">Fin procedimiento</label>                       
                        <div class="lista-interactiva__select">                        
                            <input type="time" name="hora" id="hora">
                        </div>
                    </div>
                </form>
            </div>            


            <h2 class="ficha-a__title">Operaciones</h2>
            <div class="ficha-a__antecedentes">
               <form class="ficha-a__antecedentes__form"> 
                    <div class="ficha-a__medDrogas__form__item">                         
                        <label class="lista-interactiva__title">Código médico</label> 
                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">                        
                          <label>Cod. Médico 1</label>
                          <input type="text" name="medicouno" id="medico2">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">                        
                          <label>N. médico 1</label>
                          <input type="text" name="nmedicouno" id="nmedicouno">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">                        
                          <label>Cod. Médico 2</label>
                          <input type="text" name="medicodos" id="medicodos">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">                        
                          <label>N. médico 2</label>
                          <input type="text" name="nmedicodos" id="nmedicodos">
                        </div>
                        
                    </div> 

                     <div class="ficha-a__medDrogas__form__item">                         
                        <label class="lista-interactiva__title">Código asistentes</label> 
                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">                        
                          <label>Cod. matrona</label>
                          <input type="text" name="matrona" id="matrona">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">                        
                          <label>N. matrona</label>
                          <input type="text" name="nmatrona" id="nmatrona">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">                        
                          <label>Cod. anestesista</label>
                          <input type="text" name="anestesista" id="anestesista">
                        </div>

                        <div class="ficha-a__antecedentes-embarazo-actual__form__item__input">                        
                          <label>N. anestesista</label>
                          <input type="text" name="nanestesista" id="nanestesista">
                        </div>
                    </div> 
                </form>
            </div> 

            <h2 class="ficha-a__title">Protocolo operatorio de intervención</h2>
            <div class="ficha-a__antecedentes">
                <form class="ficha-a__antecedentes__form"> 
                    <div class="lista-interactiva__select">                    
                        <textarea name="comentPreparto" rows="15" cols="90"></textarea>
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