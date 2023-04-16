import {View,Text,Image,FlatList,StyleSheet} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import DishListItems from '../../components/DishListItem';
import restaurants from "../../../assets/data/restaurants.json";
import Header from "./Header"
import styles from './styles';
import { useRoute,useNavigation } from '@react-navigation/native';
const restaurant =  restaurants[0];

const RestaurantsDetailsScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const id = route.params.id;
    return (
    <View style={styles.page}>
       
        <FlatList
            ListHeaderComponent={() => <Header restaurant={restaurant}/>}
            data={restaurant.dishes}
            renderItem={({item})=> <DishListItems dish={item}
            KeyExtractor ={(item) => item.name}
             />}
        />
         {/* <Ionicons
         onPress={()=>navigation.goBack()}
          name='arrow-back-circle'
          size={45}
          color="grey"
          style={styles.iconContainer}
          /> */}

    </View>
    )
}

export default RestaurantsDetailsScreen

