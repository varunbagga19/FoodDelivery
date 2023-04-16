import {View,Text,StyleSheet,Pressable} from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import {AntDesign} from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
const dish = restaurants[0].dishes[0];

const DishDetailScreen = () => {

    const [quantity,setQuantity] = useState(1);
    const navigation = useNavigation();

    const onMinus = () => {
        if(quantity > 1){
             setQuantity(quantity - 1)
        }
    };

    const onPlus = () => {
        setQuantity(quantity + 1)
    };
    const getTotal =()=>{
        return (dish.price *quantity).toFixed(2)
    }
    return (
        <View style={styles.page}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.separator}/>

            <View style={styles.row}>
                <AntDesign  
                 name="minuscircleo" 
                 size={60} 
                 color={"black"}
                 onPress={()=>{
                  if(quantity>1){
                    setQuantity(quantity-1)
                  }
                 }}
                 />
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign 
                 name="pluscircleo"
                 size={60} 
                 color={"black"} 
                 onPress={onPlus}
                 />
            </View>

            <Pressable onPress={()=> navigation.navigate("Basket")} style={styles.button}>
                <Text  style={styles.buttonText}>Add {quantity} item to basket &#8226; ($ {getTotal()}) </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        flex:1,
        width:'100%',
        paddingVertical:40,
        padding:10
    },
    name:{
        fontSize:30,
        fontWeight:'600',
        marginVertical:10,
    },
    description:{
        color:"grey"
    },
    separator:{
        height:1,
        backgroundColor:"lightgrey",
        marginVertical:10,
    },
    row:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center',
        marginVertical:50
    },
    quantity:{
        fontSize:25,
        fontWeight:'bold',
        marginHorizontal:40
    },
    button:{
        backgroundColor:"black",
        marginTop:"auto",
        padding:20,
        alignItems:"center"
    },
    buttonText:{
        color:"white",
        fontWeight:"bold",
        fontSize:20
    }
});

export default DishDetailScreen