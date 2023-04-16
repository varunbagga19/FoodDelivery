import {View,Text,StyleSheet,FlatList} from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import BasketDishItem from '../../components/BasketDishItem';

const restaurant = restaurants[0];



const Basket = () => {

    // const [quantity,setQuantity] = useState(1);
    return (
        <View style={styles.page}>
            <Text style={styles.name}>{restaurant.name}</Text>

            <Text style={
                {fontWeight:"bold",
                 marginTop:20,
                  fontSize:19}}>Your items</Text>

            <FlatList 
            data = {restaurant.dishes}
            renderItem = {( {item} ) => <BasketDishItem basketDish={item}/>}
            />
          
            <View style={styles.separator}/>


            <View style={styles.button}>
                <Text  style={styles.buttonText}> Create Order </Text>
            </View>
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
        fontSize:24,
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
        marginVertical:15
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
    },
    quantityContainer:{
        backgroundColor:"lightgrey",
        paddingHorizontal:5,
        marginRight:5,
        paddingVertical:2,
        borderRadius:3
    }
});

export default Basket