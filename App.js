import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

const App = () => {

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput placeholder='Ingrese tarea' style={styles.input}/>
        <Button color="#F5CEA7" title='ADD'/>
      </View>

      <View style={styles.taskContainer}>
        <View style={styles.taskCard}>
          <Text style={styles.texto}>Tarea 1</Text>
          <Button color="#F5CEA7" title='Del'/>
        </View>

        <View style={styles.taskCard}>
          <Text style={styles.texto}>Tarea 2</Text>
          <Button color="#F5CEA7" title='Del'/>
        </View>

        <View style={styles.taskCard}>
          <Text style={styles.texto}>Tarea 3</Text>
          <Button color="#F5CEA7" title='Del'/>
        </View>

        <View style={styles.taskCard}>
          <Text style={styles.texto}>Tarea 4</Text>
          <Button color="#F5CEA7" title='Del'/>
        </View>

      </View>

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
    flexDirection:"row",
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
    alignItems: "center",
    gap: 25,
  },

  taskCard:{
    flexDirection: "row",
    backgroundColor:"#36F5EA",
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
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

  /*card3:{
    backgroundColor: "#F582D1",
    width: 90,
    height: 140,
    margin: 10,
    padding: 10,
    borderRadius: 20
  },*/

  textCard:{
    color: "white",
    fontSize: 16
  }







})