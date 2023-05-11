import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
 } from 'react-native';
 import { AnimatePresence, MotiText} from 'moti'

export default function Movements({data}) {
 const [showValue, setShoeValue] = useState(false) 

 return (
   <TouchableOpacity style={styles.container} onPress={() => setShoeValue(!showValue)}>
    <Text style={styles.date}>{data.date}</Text>

    <View style={styles.content}>
        
        <Text style={styles.label}>{data.label}</Text>
        { showValue ? (
            <AnimatePresence exitBeforeEnter>
                <MotiText 
                style={data.type === 1 ? styles.value : styles.expenses }
                from={{
                    translateX: 100,
                }}
                animate={{
                    translateX: 0,
                }}
                transition={{
                    type: 'spring',
                    durantion: 500
                }}
                >{data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}</MotiText>
            </AnimatePresence>
        ) : (
            <AnimatePresence exitBeforeEnter>
                <View 
                style={styles.skeleton}
                >
                
                </View>
            </AnimatePresence>
        )}
    </View>
   </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:24,
        borderBottomWidth: 0.5,
        borderBottomColor:'#DADADA'
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:2,
        marginBottom: 8,
    },
    date:{
        color:'#DADADA',
        fontWeight:'bold'
    },
    label:{
        fontSize:16,
        fontWeight:'bold',
    },
    value:{
        fontSize:16,
        fontWeight:'bold',
        color:'#2ecc71'
    },
    expenses:{
        fontSize:16,
        fontWeight:'bold',
        color:'#e74c3c'
    },
    skeleton:{
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8
    }
})