<template>
    <v-app>       
        <v-card>
        <div class="content">        
        <!-- FormularioE-->
            <div class="info-personal">
                <h2 class="info-personal__title">Ingreso e identificación</h2>

                <form class="info-personal__form">            
                
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Paciente correspondiente a:</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label>Sala</label>
                            <input type="radio" name="pcorres" id="psala"> 
                        </div>                            
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label>Pensionado</label>
                            <input type="radio" name="pcorres" id="ppensionado">
                        </div> 
                    </div> 

                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Lugar de Parto</label>
                        <div class="lista-interactiva__select"> 
                            <select name="lugarparto" id="lugarparto">
                                <option value="Sótero del Río">Sótero del Río</option>
                                <option value="Padre Hurtado">Padre Hurtado</option>    
                                <option value="Domicilio">Domicilio</option>                             
                                <option value="Clínica privada">Clínica privada</option>                                                                
                            </select>                        
                            <button class="btn btn-azul btn-añadir-a-lista">+</button>
                            <ul class="lista-interactiva__lista"></ul>
                        </div>
                    </div>
                </form>

                <form class="info-personal__form">
                    <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Ingresa desde:</label>
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label>Urgencia</label>
                            <input type="radio" name="ingresa" id="iurgencia"> 
                        </div>                            
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label>Emb. Patológico</label>
                            <input type="radio" name="ingresa" id="iembpatolog">
                        </div> 
                        <div class="ficha-a__medDrogas__form__item__input">
                            <label>Aislamiento</label>
                            <input type="radio" name="ingresa" id="iaislamiento">
                        </div>
                    </div>                            
                </form>

                <form class="info-personal__form">
                        
                <!--  FechaProcesoRutDeLaMadre-->
                    <span class="info-personal__form__item">
                        <label>Fecha proceso</label>
                        <input type="date" name="fechingre" id="fechingre">
                    </span>
                    <span class="info-personal__form__item">
                        <label>Rut de la Madre</label>
                        <input type="text" name="rut-madre" id="rut">
                    </span>    

                <!--PrimerNombreApellidoPaternoMaterno-->
                    <span class="info-personal__form__item">
                        <label>Primer nombre</label>
                        <input type="text" name="pNombre" id="pNombre">
                    </span>
                    <span class="info-personal__form__item">
                        <label>Apellido Paterno</label>
                        <input type="text" name="aPaterno" id="aPaterno">
                    </span>
                    <span class="info-personal__form__item">
                        <label>Apellido Materno</label>
                        <input type="text" name="aMaterno" id="aMaterno">
                    </span>
                </form>            
            </div> 


            <div class="ficha-a"> 

                <h2 class="ficha-a__title">Trabajo de parto</h2>
                <div class="ficha-a__antecedentes">
                    <form class="ficha-a__antecedentes__form">
                    
                        <!--NumeroDeFetos-->
                        <div class="ficha-a__medDrogas__form__item">   
                            <label class="lista-interactiva__title">N° de fetos</label>
                            <div class="lista-interactiva__select">
                                <input type="number" name="nro-fetos" id="nfetos">
                            </div>                        
                        </div>

                        <!--EdadGestacionalObtetricaAlParto-->
                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Edad Gestacional obtétrica al parto</label>
                            <div class="lista-interactiva__select">
                                <input type="number" name="edadgestacionalObstretica" id="edadgest">
                            </div>
                        </div>                                       
                        
                        
                    </form>
                
                    <form class="ficha-a__antecedentes__form">
                        <div class="ficha-a__medDrogas__form__item">
                        <label class="lista-interactiva__title">Trabajo de parto</label>

                            <!--EdadGestacionalObtetricaAlParto-->  
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label>Sin t. de parto</label>  
                                <input type="checkbox" name="sinTDeParto" id="rb-sintparto" class="rb-sintparto">                                    
                            </div>

                            <!--TrabajoDeParto-->  
                            <div class="lista-interactiva__select">
                                <select name="trabajodeparto" id="cb-contparto">
                                    <option value="Espontaneo">Espontáneo</option>
                                    <option value="InducidoMisop">Inducido(Misop.)</option>    
                                    <option value="InducidoOcitod">Inducido(Ocitoc.)</option>  
                                    <option value="Acelerado">Acelerado</option>                                                                           
                                </select>                            
                            </div>                 
                        </div>

                        <div class="ficha-a__medDrogas__form__item oculED">
                            <label class="lista-interactiva__title">Complicaciones del T. de parto</label>
                            
                            <!--NingunaComplicacionTrabajoDeParto--> 
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label for="ninguna">Ninguna</label>
                                <input type="checkbox" name="grupo" id="compltpning">                                    
                            </div>
                            <!--ComplicacionesDelTrabajoDeParto--> 
                            <div class="lista-interactiva__select">                            
                                <select name="grupo" id="actcompltp">
                                    <option value="Registro(+)">Registro(+)</option>
                                    <option value="DPPNI">DPPNI</option>    
                                    <option value="Obs. Concamniionitis">Obs. Concamniionitis</option>  
                                    <option value="Corioamnionitis clínica">Corioamnionitis clínica</option> 
                                    <option value="Prolapso de cordón">Prolapso de cordón</option> 
                                    <option value="Meconio fluido">Meconio fluido</option> 
                                    <option value="Meconio espeso">Meconio espeso</option> 
                                    <option value="Rotura uterina">Rotura uterina</option> 
                                    <option value="Muerte fetal intraparto">Muerte fetal intraparto</option>
                                    <option value="Shock">Shock</option>
                                    <option value="Embolia Líquida Amniótico">Embolía líquido Amniótico</option>
                                </select>        
                                <button class="btn btn-azul btn-añadir-a-lista">+</button>     
                                <ul class="lista-interactiva__lista"></ul>                                                   
                            </div>
                            
                        </div>
                    </form>

                    <form class="ficha-a__antecedentes__form oculEF">
                    
                        <div class="ficha-a__medDrogas__form__item">   
                            <label class="lista-interactiva__title">Número de Tactos</label>
                            <div class="lista-interactiva__select">                                
                                <input type="number" name="nrotactos" id="ntactos" data="elementos">
                            </div>                        
                        </div> 
                        
                    </form>

                    <form class="ficha-a__antecedentes__form oculEF">

                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Complicaciones del T. de parto</label>
                            <label for="DCalMdeRealizarlo">Dilatación cervical (cms.) al momento de realizar</label>
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label>R.A.M</label>
                                <input type="number" name="ram" id="rar" data="elementos">                                
                            </div>
                            <div class="ficha-a__medDrogas__form__item__input">                                
                                <label>Peridural</label>
                                <input type="number" name="peridural" id="peridural" data="elementos">                                 
                            </div>
                            <div class="ficha-a__medDrogas__form__item__input">                                                      
                                <label>R.E.M</label>
                                <input type="number" name="rem" id="rem" data="elementos">                                
                            </div>
                            <div class="ficha-a__medDrogas__form__item__input">                                
                                <label>Cesárea</label>
                                <input type="number" name="cesarea" id="cesarea" data="elementos">
                            </div>
                        </div>  

                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Signos vitales en Preparto</label>
                            <label>(Anote el valor más alto)</label>
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label>Temp. axilar</label>
                                <input type="number" name="tempAxilar" id="taxilar" data="elementos">                                
                            </div>

                            <div class="ficha-a__medDrogas__form__item__input">                                                      
                                <label>P.A. sistólica</label>
                                <input type="number" name="paSistolica" id="pasist" data="elementos">                                 
                            </div> 

                            <div class="ficha-a__medDrogas__form__item__input">                                
                                <label>P.A. diastólica</label>
                                <input type="number" name="paDiastolica" id="padiastol" data="elementos">                                  
                            </div>                                               
                        </div>
                                                    
                    </form>

                    <form class="ficha-a__antecedentes__form oculEF">
                                                                        
                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">En caso de RPM indique:</label>
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label>Dudosa</label>
                                <input type="checkbox" name="dudosa" id="dudosa" data="elementos">                                 
                            </div>
                            <div class="ficha-a__medDrogas__form__item__input">                                
                                <label>Fecha</label>
                                <input type="date" name="fecha" id="fecha" data="elementos">                                 
                            </div>
                            <div class="ficha-a__medDrogas__form__item__input">                                                      
                                <label>Hora</label>
                                <input type="time" name="hora" id="hora" data="elementos">                                
                            </div>                        
                        </div>  


                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Proteínuria en Trabajo de Parto</label>
                            <div class="lista-interactiva__select"> 
                                <select name="pEnTrabajoDeParto" id="prtparto" data="elementos">
                                    <option value="negativoIndicios">Negativo/Indicios</option>
                                    <option value="mas">+</option>    
                                    <option value="dosMas">++</option>  
                                    <option value="tresMas">+++</option> 
                                    <option value="cuatroMas">++++</option> 
                                    <option value="noRealizado">No realizado</option>                                     
                                </select>
                            </div> 
                        </div> 
                    </form>             
                </div>

                <h2 class="ficha-a__title oculEH">Diagnósticos</h2>
                <div class="ficha-a__antecedentes oculED">

                    <form class="ficha-a__antecedentes__form">
                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Códigos diagnóstico</label>
                            <p>Diagnóstico de interrupción, señale el más importante en primer lugar (ver hoja de Códigos)</p>
                            <div class="lista-interactiva__select">
                                <label>Diagnóstico:</label>
                                <input type="text" name="diagnostico1" id="diag1" data="elementos">                                
                            </div>
                            <div class="lista-interactiva__select">                                
                                <label>Diagnóstico:</label>
                                <input type="text" name="diagnostico2" id="diag2" data="elementos">                                 
                            </div>  
                            <div class="lista-interactiva__select">                                
                                <label>Diagnóstico:</label>
                                <input type="text" name="diagnostico3" id="diag3" data="elementos">                                 
                            </div>                     
                        </div>  
                    </form>
                    <form class="ficha-a__antecedentes__form">
                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Códigos diagnóstico</label>
                            <p>Causa de la cesárea (Razón, última que motivo la operación-ver códigos de cesáreas) </p>
                            <div class="lista-interactiva__select">
                                <label for="diagnostico">Diagnóstico:</label>
                                <input type="text" name="peridural" id="diagCesarea" data="elementos">                                
                            </div>               
                        </div> 
                    </form>

                </div>
            
                <h2 class="ficha-a__title oculEH">Drogas y anestesia</h2>
                <div class="ficha-a__antecedentes oculED">  

                    <form class="ficha-a__antecedentes__form">
                    
                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Drogas usadas T. de Parto</label>
                            <div class="ficha-a__medDrogas__form__item__input"> 
                                <label>Ninguna</label>
                                <input type="checkbox" name="ninguna" id="ningundroga" data="elementos">  
                            </div>
                            <div class="lista-interactiva__select">
                                <select name="drogasUsadasTParto" id="drogas" data="elementos">
                                    <option value="Ocitocina">Ocitocina</option>
                                    <option value="Misoprostol">Misoprostol</option>    
                                    <option value="Surfato de Magnesio">Surfato de Magnesio</option>  
                                    <option value="Hidralazina">Hidralazina</option> 
                                    <option value="Antibiótico terapéuticos">Antibióticos terapéuticos</option> 
                                    <option value="Antibióticos profilácticos">Antibióticos profilácticos</option>  
                                    <option value="Betamiméticos">Betamiméticos</option> 
                                    <option value="AlfaMetilDopa">AlfaMetilDopa</option>
                                    <option value="Bupivacaina">Bupivacaina</option>
                                    <option value="Fentanyl">Fentanyl</option>
                                    <option value="Lidocaina">Lidocaina</option>
                                    <option value="Epinefrina">Epinefrina</option>
                                </select>
                                <button class="btn btn-azul btn-añadir-a-lista">+</button>    
                                <ul class="lista-interactiva__lista"></ul>                                                                                
                            </div>                        
                        </div>

                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Anestesia</label>
                            <div class="ficha-a__medDrogas__form__item__input"> 
                                <label for="ninguna">Ninguna</label>
                                <input type="checkbox" name="ninguna" id="ningunanest" data="elementos">
                            </div>
                            <div class="lista-interactiva__select">
                                <select name="TipoAnestesia" id="anestesia" data="elementos">
                                    <option value="local">Local</option>
                                    <option value="peridural">Peridural</option>    
                                    <option value="raquiedea">Raquiedea</option>  
                                    <option value="oxidoNitroso">Oxido Nitroso</option>                                                                     
                                </select>
                            </div> 
                        </div>
                    </form>
                </div>
            
                        
                <h2 class="ficha-a__title oculEH">Comentarios del preparto</h2>
                <div class="ficha-a__antecedentes">
                    <div class="lista-interactiva__select">                    
                        <textarea name="comentPreparto" rows="15" cols="90" id="cpreparto" data="elementos"></textarea>
                    </div>         
                </div>
                            
                <h2 class="ficha-a__title oculEH">Expulsivo y alumbramiento</h2>
                <div class="ficha-a__antecedentes oculED">

                    <form class="ficha-a__antecedentes__form">

                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Episiotomía</label>
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label>Si</label>
                                <input type="radio" name="SiNo" id="siexpalum" data="elementos"> 
                            </div>                            
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label>No</label>
                                <input type="radio" name="SiNo" id="noexpalum" data="elementos">
                            </div> 
                        </div> 

                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Revisión instrum</label>
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label>Si</label>
                                <input type="radio" name="pcorres" id="sirevins" data="elementos"> 
                            </div>                            
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label>No</label>
                                <input type="radio" name="pcorres" id="norevins" data="elementos">
                            </div> 
                        </div> 
                    </form>
                    <form class="ficha-a__antecedentes__form">
                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Alumbramiento</label>
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label>Normal</label>
                                <input type="radio" name="alumbr" id="normal" data="elementos"> 
                            </div>                            
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label>Dirigido</label>
                                <input type="radio" name="alumbr" id="dirigido" data="elementos">
                            </div> 
                            <div class="ficha-a__medDrogas__form__item__input">
                                <label>Manual</label>
                                <input type="radio" name="alumb" id="manual" data="elementos">
                            </div>
                        </div> 

                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Placenta</label>
                            <div class="lista-interactiva__select">                            
                                <select name="injurias" id="placenta" data="elementos">
                                    <option value="Normal">Normal</option>
                                    <option value="DPPNI">DPPNI</option>    
                                    <option value="Corioamnionitis">Corioamnionitis</option>                                                                      
                                </select>
                                <button class="btn btn-azul btn-añadir-a-lista">+ </button>
                                <ul class="lista-interactiva__lista"></ul>
                            </div>                        
                        </div>
                    </form>
                    

                    <form class="ficha-a__antecedentes__form"> 
                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Injurias del canal de parto</label>
                            <div class="ficha-a__medDrogas__form__item__input"> 
                                <label>Ninguna</label>
                                <input type="checkbox" name="ninguna" id="ncanalparto" data="elementos">
                            </div>
                            <div class="lista-interactiva__select">
                                <select name="injurias" id="canalparto" data="elementos">
                                    <option value="laceraciones">Laceraciones</option>
                                    <option value="desgarroV">Desgarro vaginal</option>    
                                    <option value="compromisoC">Compromiso cervical</option>  
                                    <option value="compromisoE">Compromiso esfinter anal</option>
                                    <option value="compromisoU">Compromiso uretra/vejiga</option>                                                                       
                                </select>
                            </div> 
                        </div>

                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Complicaciones Expulsivo/alumbramiento</label>
                            <div class="ficha-a__medDrogas__form__item__input"> 
                                <label>Ninguna</label>
                                <input type="checkbox" name="ninguna" id="ncomplicacion" data="elementos">
                            </div>
                            <div class="lista-interactiva__select">
                                <select name="injurias" id="complicacion" data="elementos">
                                    <option value="Expulsivo detenido">Expulsivo detenido</option>
                                    <option value="Bradicardia fetal">Bradicardia fetal</option>    
                                    <option value="Retención de hombros">Retención de hombros</option>  
                                    <option value="Retención de cabeza">Retención de cabeza</option>
                                    <option value="Inercia uterina">Inercia uterina</option>
                                    <option value="Retención placenta/restos">Retención placenta/restos</option>
                                    <option value="Inversión uterina">Inversión uterina</option>    
                                    <option value="Hemorragía sin transfusión">Hemorragía sin transfusión</option>  
                                    <option value="Hemorragia con transfusión">Hemorragía con transfusión</option>
                                    <option value="Dehiscencia cicatríz">Dehiscencia cicatríz</option>
                                    <option value="Rotura uterina">Rotula uterina</option>
                                    <option value="Shock">Shock</option>    
                                    <option value="Muerte materna">Muerte materna</option>                                                                  
                                </select>
                                <button class="btn btn-azul btn-añadir-a-lista">+</button>  
                                <ul class="lista-interactiva__lista"></ul>                                                      
                            </div> 
                        </div>
                    </form>

                    <form class="ficha-a__antecedentes__form">
                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Dilatación Completa</label>
                            <div class="ficha-a__medDrogas__form__item__input">                                                      
                                <label>Hora y minutos:</label>
                                <input type="time" name="hora" id="horadilat" data="elementos">                                
                            </div>                        
                        </div> 
                        <div class="ficha-a__medDrogas__form__item">
                            <label class="lista-interactiva__title">Fin de procedimiento</label>
                            <div class="ficha-a__medDrogas__form__item__input">                                                      
                                <label>Hora y minutos:</label>
                                <input type="time" name="hora" id="horafinproc" data="elementos">                                
                            </div>                        
                        </div> 
                    </form>
                </div>

                        
                <h2 class="ficha-a__title oculEH">Comentarios del expulsivo, anestesia y recuperación</h2>
                <div class="ficha-a__antecedentes oculED">
                    <div class="lista-interactiva__select">                    
                        <textarea name="comentPreparto" rows="15" cols="90" id="cexpanre" data="elementos"></textarea>
                    </div>
                </div>
            

                    
                <h2 class="ficha-a__title">Destino</h2>
                <div class="ficha-a__antecedentes">
                    <div class="lista-interactiva__select">
                        <select name="TipoAnestesia" id="destino">
                            <option value="Puerperio">Puerperio</option>
                            <option value="Aislamiento">Aislamiento</option>    
                            <option value="Embarazo Patológico">Embarazo Patológico</option>  
                            <option value="U.C.I">U.C.I</option>
                            <option value="A. Patológico">A. Patológico</option>                                                                      
                        </select>
                        <button class="btn btn-azul btn-añadir-a-lista">+</button>
                        <ul class="lista-interactiva__lista"></ul>
                    </div> 
                </div>      

                
                <div class="ficha-a__seccion-btn-global">
                    <div class="btn-ingresar-datos">Ingresar Datos</div>
                </div>
            </div>
            </div>
        </v-card>
    </v-app>
</template>    
     



    

 

