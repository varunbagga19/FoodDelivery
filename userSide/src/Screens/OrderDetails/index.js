import { View, Text,Image} from 'react-native'
import React from 'react'
import orders from '../../../assets/data/orders.json'
import styles from './styles'
import { FlatList } from 'react-native';
import restaurants from "../../../assets/data/restaurants.json"
import BasketDishItem from '../../components/BasketDishItem';
const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View style={styles.page}>
    <Image 
    source={{uri: order.Restaurant.image }} 
    style={styles.image}
    resizeMode="cover"
    />
    <View style={styles.container}>
      <Text style={styles.title} >{order.Restaurant.name}</Text>
      <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>

      <Text style={styles.menu}>Your orders</Text>
    </View>
</View>
  )
}

const OrderDetails = () =>{
    return(
        <FlatList
        ListHeaderComponent={OrderDetailsHeader} 
        data = {restaurants[0].dishes}
        renderItem = {({item}) => <BasketDishItem basketDish ={item} />}
        />
    )
}

export default OrderDetails