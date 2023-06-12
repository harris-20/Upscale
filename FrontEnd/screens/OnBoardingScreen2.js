import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import * as Progress from 'react-native-progress';

const OnBoardingScreen2 = () => {
    const [nameFocusState,setNameFocusState] = useState(false);
    const [professionFocusState,setProfessionFocusState] = useState(false);
    const [bioFocusState,setBioFocusState] = useState(false);
    const[progress,setProgress]=useState(0);

    useEffect(()=>{
      setTimeout(() => {
        setProgress(0.6)
      }, 200);
    })
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
      <Text style={styles.progressTitle}>2/3</Text>
    <Progress.Bar progress={progress} width={null} animated color='#9CD681'  unfilledColor='#D9D9D9' borderWidth={0} animationType='timing' />
      </View>

      <View style={styles.topContainer}>
      <Text style={styles.title}>We need to know better !</Text>
      <Text style={styles.subTitle}>Help us to seek more new features</Text>
    </View>

    <View style={styles.inputContainer}>
      <TextInput style={nameFocusState ? styles.mailInputFocused : styles.mailInput} placeholder='Your Name'  onBlur={()=>setNameFocusState(false)} onFocus={()=>setNameFocusState(true)}/>
      <TextInput style={professionFocusState ? styles.mailInputFocused : styles.mailInput} placeholder='Your profession'  onBlur={()=>setProfessionFocusState(false)} onFocus={()=>setProfessionFocusState(true)}/>
      <TextInput multiline={true} numberOfLines={10} style={bioFocusState ? styles.textAreaInputFocused : styles.textAreaInput} placeholder='Write about yourself in small sentences...'  onBlur={()=>setBioFocusState(false)} onFocus={()=>setBioFocusState(true)}/>
      <TouchableOpacity style={styles.loginBtn} >
          <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
    </View>

    </View>
  )
}

export default OnBoardingScreen2

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FAFCFB',
        display:'flex',
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:40,
        paddingTop:40,
        paddingBottom:200
      },
      topContainer:{
        width:'100%',
        gap:4,
      },
      inputContainer:{
        alignItems:'center',
        gap:10,
      },
      title:{
          fontSize:28,
          fontFamily:'SourceSans3-SemiBold'
      },
      subTitle:{
          fontSize:14,
          fontWeight:'400',
          fontFamily:'SourceSans3-Regular',
          color:"#636363"
      },
      progressTitle:{
        fontSize:20,
        fontWeight:'400',
        fontFamily:'SourceSans3-SemiBold',
        marginBottom:8
    },
      mailInput:{
          width:320,
          height:46,
          fontSize:14,
          fontFamily:'SourceSans3-Regular',
          paddingHorizontal:20,
          backgroundColor:'#FBFBFB',
          borderRadius:5,
          borderWidth:1,
          borderColor: '#A9A9A9'
      },
      mailInputFocused:{
          width:320,
          height:46,
          fontSize:14,
          fontFamily:'SourceSans3-Regular',
          paddingHorizontal:20,
          backgroundColor:'#FBFBFB',
          borderRadius:5,
          borderWidth:1,
          borderColor: '#5237C0'
      },
      textAreaInput:{
        width:320,
        height:128,
        fontSize:14,
        fontFamily:'SourceSans3-Regular',
        // paddingBottom:20,
        paddingTop:12,
        paddingHorizontal:20,
        backgroundColor:'#FBFBFB',
        borderRadius:5,
        borderWidth:1,
        borderColor: '#A9A9A9'
    },
    textAreaInputFocused:{
        width:320,
        height:128,
        fontSize:14,
        fontFamily:'SourceSans3-Regular',
        // paddingBottom:70,
        paddingTop:12,
        paddingHorizontal:20,
        backgroundColor:'#FBFBFB',
        borderRadius:5,
        borderWidth:1,
        borderColor: '#5237C0'
    },
      loginBtn:{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          width:263,
          height:47,
          backgroundColor:'#5237b0',
          borderRadius:42,
          marginTop:30
      },
      loginText:{
          color:'#FEFEFE',
          fontFamily:'SourceSans3-Regular',
      },
})