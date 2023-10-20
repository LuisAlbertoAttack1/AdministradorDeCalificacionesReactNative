
import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
//NOTA TIENES QUE IR IMPORTANDO TODAS LAS ETIQUETAS QUE VALLAS A UTILIZAR 
export const AdministradorTar = () => {
    const TituloDeProyecto = 'Administrador De Tareas';
    const AgregarTareaSubtitulo = 'Agregar Tarea';
    const ListaDeTareasPorRealizar = 'Listas De Tareas Por Realizar';
    const [text, onChangeText] = React.useState('');


  return (
    <View style = { styles.conatiner }>
        <View style={ styles.CardPrincipal }>
        <Text style={ styles.TituloDeProyectoEstilos }>{TituloDeProyecto}</Text> 
                    {/* AQUI CONTIENE LOS 2 LADOS POSCIONES */}
                <View style={ styles.ContenidoDeInformacionAcomodo }>

                <View style={ styles.CardIzquierda }>
                    <Text style={ styles.AgregarTareaSubtituloEstilos }>{AgregarTareaSubtitulo}</Text>

                        <TextInput style={ styles.Input } onChangeText={onChangeText} value={text} placeholder='IngresarLaTarea' />
                    <Pressable style={ styles.BotonIngresarTarea }> <Text style={ styles.TextoDentroDeBoton }>Ingresar</Text> </Pressable>
                </View>

                <View style={ styles.CardDerecha }>
                    <Text style={ styles.ListaDeTareasPorRealizarEstilos }>{ListaDeTareasPorRealizar}</Text>
                </View>

                </View>
                    {/* AQUI CONTIENE LOS 2 LADOS POSCIONES */}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

        conatiner: {
            flex:1,
            backgroundColor: "#e9ecef",
            justifyContent: 'center',
            alignItems: 'center',

        },
        CardPrincipal:{
            flex: 1,
            width: "80rem",
            height: "40rem",
            backgroundColor: "#ced4da",
            borderRadius: "20px",
            position: "absolute",
            alignItems: "center"
      
        },
        TituloDeProyectoEstilos:{
            top: "50px",
            fontSize: 45,
            fontFamily: "Sitka Small Semibold"
            
        },
        AgregarTareaSubtituloEstilos:{
            fontSize: 35,
            top: "30px",
            fontFamily: "Sitka Small Semibold"
        },
        TextoDentroDeBoton:{
            fontFamily: "Sitka Small Semibold"
        },
        ListaDeTareasPorRealizarEstilos:{
            fontSize:35,
            top: "30px",
            fontFamily: "Sitka Small Semibold"
        },
        ContenidoDeInformacionAcomodo:{
            flex:1,
            flexDirection: "row",
            position: "absolute",
            alignItems: 'center',
            justifyContent: 'center',
            top: "150px",
            gap:80
        },
        CardIzquierda:{
            width: "25rem",
            height: "20rem",
            backgroundColor: "#dee2e6",
            borderRadius: "30px",
            alignContent: 'center',
            alignItems: 'center',


        },
        CardDerecha:{
            width: "45rem",
            height: "20rem",
            backgroundColor: "#dee2e6",
            borderRadius: "30px",
            alignContent: 'center',
            alignItems: 'center',
        },
        Input: {
            height: 40,
            width: "350px",
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: "10px",
            position: "absolute",
            alignItems: 'center',
            justifyContent: 'center',
            top: "100px",
            fontFamily: "Sitka Small Semibold"
        },
        BotonIngresarTarea:{
            backgroundColor: "#ddb892",
            height: 45,
            width: "100px",
            alignItems: "center",
            justifyContent: 'center',
            borderRadius: "20px",
            top: "120px",
        }

})