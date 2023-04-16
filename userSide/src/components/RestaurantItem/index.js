import { StyleSheet, Text, View,Image,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RestaurantItem = ({restaurants}) => {
const navigation = useNavigation();

  const onPress =()=>{
    navigation.navigate("Restaurant",{id:restaurants.id})
  };

  return( 
<Pressable onPress={onPress} style={styles.restaurantContainer}>
      <Image
       source={{
        uri:restaurants.image,
        }}
        style={styles.image}>
        </Image>
        <View style = {styles.row}>
            <View>
                    <Text style={styles.name}>{restaurants.name}</Text>
                    <Text style={styles.subtitle}>$  {restaurants.deliveryFee} &#8226; {restaurants.minDeliveryTime} - {restaurants.maxDeliveryTime} min
                    </Text>
            </View>

            <View style={styles.rating}>
                <Text>{restaurants.rating}</Text>
            </View>


        </View>
    </Pressable>
   );
};

export default RestaurantItem ;

const styles = StyleSheet.create({
    restaurantContainer:{
      width: "100%",
      marginVertical:10,
    },
    image:{
      width:"100%",
      aspectRatio:5/3,
      marginBottom:5,
    },
    name:{
      fontSize:18,
      fontWeight:"bold",
      marginVertical:5
    },
    subtitle:{
      color:"grey",
    },
    row:{
        flexDirection:'row',
        alignItems:"center"
    },
    rating:{
        marginLeft:"auto",
        backgroundColor:'lightgray',
        width:30,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    }
  
  });
  