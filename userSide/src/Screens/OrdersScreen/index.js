import { View, Text,FlatList } from 'react-native'
import OrdersListItem from '../../components/OrderListItem'
import orders from '../../../assets/data/orders.json'
import React from 'react'

const OrdersScreen = () => {
  return (
    <View style = {{
      flex:1,
      width:"100%",
      paddingTop:50}}>
     <FlatList 
     data ={orders}
     renderItem={({item}) => <OrdersListItem order ={item}/>}
     />
    </View>
  )
}

export default OrdersScreen