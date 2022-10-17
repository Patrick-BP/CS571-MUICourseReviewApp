import React, { useState, useEffect } from 'react';
import { StyleSheet, Platform, SafeAreaView, View, Image, TextInput, FlatList, Text } from 'react-native';
import Course from './Course';
import axios from 'axios'
axios.defaults.baseURL='http://localhost:3000'
import Header from './Header';

// const data = [
//     { title: 'Web Application Programming', faculty: 'Asaad Saad', code: 'CS472', rating: 4 },
//     { title: "Modern Web Application", faculty: "Asaad Saad", code: "CS572", rating: 5 },
//     { title: "Enterprise Architecture", faculty: "Joe Bruen", code: "CS557", rating: 4 },
//     { title: "Algorithms", faculty: "Clyde Ruby", code: "CS421", rating: 5 },
//     { title: "Object Oriented JavaScript", faculty: "Keith Levi", code: "CS372", rating: 3 },
//     { title: "Big Data", faculty: "Prem Nair", code: "CS371", rating: 5 },
//     { title: "Web Application Architecture", faculty: "Rakesh Shrestha", code: "CS377", rating: 5 },
//     { title: "Big Data Analytics", faculty: "Mrudula Mukadam", code: "CS378", rating: 5 },
// ];

export default function CoursesList() {
const [list, setList] = useState([])
const [input, setInput] =  useState("")
  
function liveSearch(text){
    
    if(text){
        setInput(text)
        setList((prev)=> prev.filter((Course)=> Course.title.toLowerCase().includes(input.toLowerCase())))
    }else{
        
        setList(data)
        setInput(text)
    }
    
}
useEffect(() => {
    (async function fetch(){
    const response = await axios.get('/courses')
    setList(response.data)
    })()
  
}, []);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#FFFFFF',
                paddingTop: Platform.OS === 'android' ? 30 : 0,
                paddingBottom: 200,
                marginBottom:50
            }}>
              
            <View>
                <Header />
                <TextInput placeholder='Live Search' style ={styles.input} value={input} onChangeText={(text)=>liveSearch(text)} />
                <FlatList
                data={list}
                 renderItem={({item})=><Course  data={item}/> }
                 keyExtractor={(item, index)=>index}
                />
            </View >
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#F5F5F5',
    },
});
