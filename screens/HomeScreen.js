import React, {useLayoutEffect, useState, useEffect} from 'react'
import { StatusBar} from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native'
import CustomListItem from '../components/CustomListItem'
import {Avatar} from 'react-native-elements'
import {AntDesign, SimpleLineIcons} from "@expo/vector-icons"
import {auth , db} from "../firebase"

const HomeScreen = ({navigation}) => {
    const [chats,setChats]=useState([]);

    const signOutUser=()=>{
        auth.signOut().then(()=>{
            navigation.replace('Login')
        })
    }



    useEffect(() => {
        const unsubscribe= db.collection('chats').onSnapshot(snapshot=>(
            setChats(snapshot.docs.map(doc=>({
                id: doc.id,
                data: doc.data()
            })))
        ))
        return unsubscribe
    }, [])

    useLayoutEffect(()=>{
       navigation.setOptions({
           title :'Signal',
           headerStyle:{backgroundColor:'white'},
           headerTitleStyle:{color:'black', marginRight:175},
           headerTintColor:'black',
         
           headerLeft:()=>(
            <View style={{marginLeft:20}}>
                <TouchableOpacity  onPress={signOutUser} activeOpacity={0.4}>
                <Avatar rounded size={45}                  
                    source={{uri:auth?.currentUser?.photoURL}}
                    
                    />

                </TouchableOpacity>
                
            </View>
           ),

           headerRight:()=>(
               <View style={{
                   flexDirection:'row',
                   justifyContent:'space-between',
                   width:80,
                   marginRight: 20,
               }}>
                <TouchableOpacity activeOpacity={0.1}>
                    <AntDesign name='camerao' size={24} color='black'/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.1}>
                    <SimpleLineIcons onPress={()=> navigation.navigate('AddChat')} name='pencil' size={24} color='black'/>
                </TouchableOpacity>

               </View>
           )

         
       })

    },[navigation])

    const enterChat = (id,chatName)=>{
        navigation.navigate('Chat',{
            id,
            chatName,
        })
    }

    return (
        
        <SafeAreaView >
            <StatusBar style ='light'/>
           <ScrollView style={styles.container}>
            {chats.map(({id, data:{chatName}})=>(

                <CustomListItem  key={id} id={id} chatName={chatName} enterChat={enterChat}/>
            ))}
            

           </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        height:'100%',
    }
})
