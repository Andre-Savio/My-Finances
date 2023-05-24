import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacityBase } from 'react-native';
import { MotiView,} from 'moti'

export default function Balance({saldo, gastos}) {
 const [showBalance, setShowBalance] = useState (false)

 return (
    

    
    <MotiView 
    style={styles.container}
    from={{
        rotateX: '-100deg',
        opacity: 0
    }}
    animate={{
        rotateX: 0,
        opacity: 1
    }}
    transition={{
        type: 'timing',
        delay: 500,
        duration: 900

    }}

    >    
            
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    { showBalance ? (
                        <Text style={styles.balance}>{saldo}</Text>)
                        : (<View style={styles.skeleton}>
                        </View>
                    )}
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expenses}>{gastos}</Text>
                </View>
            </View>

   </MotiView>
   

   

   
   
  );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex:99,

    },
    item:{

    },
    itemTitle:{
        fontSize: 20,
        color: '#DADADA'
    },
    content:{
        flexDirection:'row',
        alignItems:'center'
    },
    currencySymbol:{
        color:'#DADADA',
        marginRight:6
    },
    balance:{
        fontSize: 22,
        color: '#2ecc71'
    },
    expenses:{
        fontSize: 22,
        color: '#e74c3c'
    },
    skeleton:{
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8
    }
})