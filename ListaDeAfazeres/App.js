import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

export default function App() {
  const [ task, setTask] = useState(['Nathan', 'Gabriel', 'Almeida'])//salva lista de tarefas
  const [ newTask, setNewTask] = useState('') // salva os dados do input

  return (
    <>
      <View style={styles.container}>
        <View style={styles.Body}>
          <FlatList style={styles.FlatList}>

          </FlatList>
        </View>
        <View style={styles.Form}>
          <TextInput
            style={styles.Input}
            autoCorrect={true}
            placeholder="Adicione uma nova tarefa"
            maxLength={25}
            placeholderTextColor="#999"

          />
          <TouchableOpacity style={styles.Button}>
            <Ionicons name="md-checkmark-circle" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#92c7de',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
  },

  Body: {
    flex: 1

  },
  Form: {
    padding: 0,
    height: 60,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: '#eee',
    /*     padding: 0,
        height: 60,
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 13,
        borderTopWidth: 20,
        borderColor: '#eee' */
  },
  Input: {
    flex: 1,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#eee'
  },
  Button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c6cce',
    borderRadius: 4,
    marginLeft: 10,

  },
  FlatList: {
    flex: 1,
    marginTop: 5,

  }


});
