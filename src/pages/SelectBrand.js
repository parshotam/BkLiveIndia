import React from "react"
import { StyleSheet, Image, Text, View,  ImageBackground } from "react-native"

import { TextInput } from 'react-native-paper';

import { Button } from 'react-native-paper';
import bkking from '../../assets/Burger-King.png';
import menu from '../../assets/img/menu_new.png';
import pope from '../../assets/img/pope.png';



const SelectBrand = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [passwordVisible, setPasswordVisible] = React.useState(true);
    const [password, setPassword] = React.useState('');


    return (
        <>
        <View style={styles.header}>
            <Image
                style={styles.Group737}
                source={menu}
            />
            <Image
                style={styles.bkking}
                source={bkking}
            />
        </View>
        
            <View>
                <Text style={styles.brandName}>Select Brand</Text>
            </View>
        <View style={styles.brandList}>
            
            <View style={styles.selectbrand}>
                <View style={styles.brandround}>
                <Image
                    style={styles.bkking}
                    source={bkking}
                />
                </View>
                <Text style={styles.brandtype}>India Limited</Text>
            </View>
            {/* <Text style={styles.brandtype}>India Limited</Text> */}
            <View style={styles.selectbrand}>
                <View style={styles.brandround}>
                    <Image
                        style={styles.bkking}
                        source={bkking}
                    />
                </View>
                <Text  style={styles.brandtype}>Indonesia</Text>
            </View>
            <View style={styles.selectbrand}>
                <View style={styles.brandround}>
                    <Image
                        style={styles.bkking}
                        source={pope}
                    />
                </View>
                <Text style={styles.brandtype}>Indonesia</Text>
            </View>
        </View>
        </>
    )
}



const styles = StyleSheet.create({
    header:{
        // display: "flex",
        // boxSizing: 'border',
        height:120,
        width:'100%',
        // position: 're',
        // left: '-21.6%',
        // right: '-21.87%',
        // top: '-7.64%',
        // bottom: '83.99%',
        background: '#F5EADC',
        backgroundColor:'#F5EADC',
        // borderBottomRightRadius: 381,
        // borderBottomLeftRadius: 382
        transform : [ { scaleX : 1.5 } ],
        borderBottomStartRadius : 230,
        borderBottomEndRadius : 200,
    },
    Group737: {
        // display: "flex",
        // flexDirection: "row",
        position: "absolute",
        top: 60,
        left:80,
        // none: "0px",
        width: 22,
        height: 23,
        // padding:2,
        // borderWidth:1,
        // borderColor:'green'
        
      },
      brandtype:{
        // alignItems: 'center',
        // justifyContent: 'center',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:10
      },
      brand:{
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        width: '100%',
        // height:30,
        borderWidth:1,
        borderColor:'red',
        alignItems: 'center',
        justifyContent: 'center',
      },
      brandList:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        // borderWidth:1,
        // borderColor:'green',
        padding:20
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // display: "flex",
        // flexDirection: "row",
      },
      brandround:{
        borderColor:'#F48233',
        backgroundColor: '#F5EADC',
        borderWidth:1,
        borderRadius:80,
        width:146,
        height:146
      },
      selectbrand:{
          width:156, 
          margin:9,
          height:165, 
          padding:5,
        //   borderWidth:1,
        //   borderColor:'#F48233',
        // marginLeft:'auto',
        // marginRight:'auto'
        // alignItems: 'center',
        // justifyContent: 'center',
        },
      brandName: {
          color: '#000000',
          opacity: 0.6, 
          fontSize:22, 
          fontWeight:600,
          alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
        width:'100%',
        left:'33.51%',
        right:'33.51%',
        },
      bkking: {
        // display: "flex",
        // flexDirection: "row",
        // position: "absolute",
        // top: 60,
        // left:'44.51%',
        // right:'44.51%',
        // none: "0px",
        width: 71.07,
        height: 72.28,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'auto',
        marginBottom:'auto',
        // padding:2,
        // borderWidth:1,
        // borderColor:'green'
        
      },
      Group66684: {
        width: 25,
        height: 25,
        marginRight: 117,
      },
})
export default SelectBrand;