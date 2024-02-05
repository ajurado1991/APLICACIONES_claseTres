import { useState } from 'react'
import {View, Text, TextInput, Button, StyleSheet, ScrollView, FlatList, Modal} from 'react-native'
import uuid from 'react-native-uuid';

const App = () => {

  const [modalVisible, setModalVisible] = useState (false)
  const [idSelected , setIdSelected] = useState ("")

  /*const [newTask, setNewTask] = useState("Vieja tarea") /* useState nos permite establecer un estado que podemos actualizarle el valor inicial, en este caso usamos como valor inicial "vieja tarea" y cuando sucede el evento (press) se cambia a "nueva tarea"*/
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    id: ''
  })
  const [tasks, setTasks] = useState ([])

  /* const tareas = ["primero", "segundo", 123,456] <---- ejemplo de un array */ 

  /*const task = {
    title: "",
    description: "",
    id: "jop009"        <---- ejemplo de un objeto

  } */

  const addTask = () => {
    setTasks([...tasks, newTask])
    console.log(newTask)
    console.log(tasks)
    setNewTask({
      title: '',
      description: '',
      id: ''
    })
  }

  /*onHandlerTitle = (t) => {
    console.log(t)
  }   <------- el hook onChangeText se acciona cuando se modifica, teclea o borra cualquier parte del texto, y en este caso, en esta funcion que se establecio recibia como par[ametro el texto y lo consologeaba*/

  const onHandlerTitle = (t) => {
    const id = uuid.v4()
    setNewTask ({...newTask, title: t, id})
    /* console.log(newTask) */
  }

  const onHandlerDescription = (t) => {
    setNewTask ({...newTask, description: t})
  }

  const onHandlerModalDelete = (id) => {
    setIdSelected(id)
    setModalVisible(true)
    //console.log(id)
    //setTasks(tasks.filter(task => task.id != id))
  }

  const deleteTask = () => {
    setTasks(tasks.filter(task => task.id != idSelected ))
  }

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput value={newTask.title} onChangeText={onHandlerTitle} placeholder='Ingrese título' style={styles.input}/>
        <TextInput value={newTask.description} onChangeText={onHandlerDescription} placeholder='Ingrese descripción' style={styles.input}/>
        <Button color="#F5CEA7" title='Add' onPress={addTask}/>
        {/*<Text>{newTask}</Text>*/}
      </View>
      <View style={styles.taskContainer}>
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
                              <View style={styles.taskCard}>
                                <Text style={styles.texto}>{item.title}</Text>
                                <Button color="#F5CEA7" title='Del' onPress={() => onHandlerModalDelete(item.id)}/>
                              </View>
          )}
        />
        <Modal
          visible = {modalVisible}
        >
          <View>
            <Text>¿Estás seguro que quieres eliminar?</Text>
            <Button title='Sí' onPress={ () => {
              deleteTask()
              console.log ("Eliminado")
              setModalVisible(false)
              }} />
            <Button title='No' onPress={ () => setModalVisible(false)} />
          </View>

        </Modal>
      </View>

      {/*<ScrollView style={styles.taskContainer}>
        {
          tasks.map(task => (<View key={task.id} style={styles.taskCard}>
                              <Text style={styles.texto}>{task.title}</Text>
                              <Button color="#F5CEA7" title='Del'/>
                            </View> )
                    )
        }
      </ScrollView> */}

      

      {
        /*
      <View style={styles.cardContainer}>

        <View style={styles.card}>
          <Text style={styles.textCard}>Card 1</Text>
          <Button color="#F46AA3" title='Añadir'></Button>
        </View>

        <View style={styles.card}>
          <Text style={styles.textCard}>Card 2</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.textCard}>Card 3</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.textCard}>Card 4</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.textCard}>Card 5</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.textCard}>Card 6</Text>
        </View>

      </View>
        */
      }

    </View>
  )

}


export default App

const styles = StyleSheet.create({

  container:{
    backgroundColor:"#DBF4F5", 
    flex:1,
    paddingTop:30
  },

  inputContainer:{

    alignItems: "center",
    justifyContent: "space-around"
  },

  input:{
    width: 300,
    borderWidth: 2, 
    margin: 10, 
    paddingVertical: 5, 
    paddingHorizontal: 15, 
    borderRadius: 20, 
    backgroundColor:"#fff",
    borderColor: "#fff"
  },

  taskContainer:{
    /*alignItems: "center",*/
    gap: 25,
    marginVertical: 20
  },

  taskCard:{
    flexDirection: "row",
    backgroundColor:"#36F5EA",
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    marginVertical: 10
  },

  texto:{
    backgroundColor: "#81F5B2",
    borderWidth: 2,
    margin: 5,
    paddingVertical:4,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderColor: "#81F5B2",
    fontSize:16,
    width: "70%",
  },


  /*

  cardContainer:{
    marginVertical:30,
    backgroundColor: "#DAE1F5",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  },

  card:{
    backgroundColor: "#F582D1",
    width: 90,
    height: 130,
    margin: 10,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },

  card3:{
    backgroundColor: "#F582D1",
    width: 90,
    height: 140,
    margin: 10,
    padding: 10,
    borderRadius: 20
  },

  textCard:{
    color: "white",
    fontSize: 16
  }

  */
  







})