import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import RestaurantsDetailsScreen from '../Screens/RestaurantsDetailsScreen';
import { FontAwesome,Entypo } from '@expo/vector-icons'; 
import Basket from '../Screens/Basket';
import OrdersScreen from '../Screens/OrdersScreen';
import OrderDetails from '../Screens/OrderDetails';
import DishListItems from '../components/DishListItem';
import DishDetailScreen from '../Screens/DishDetailScreen';
import BasketDishItem from '../components/BasketDishItem';
const Stack = createNativeStackNavigator();

const RootNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomeTabs" component={HomeTabs}/>
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

const HomeTabs =()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name="Home"
            component={HomesStackNavigator} 
            options={{
                tabBarIcon:({color}) => <FontAwesome name="home" size={24} color="color" />
                }}
             />
            <Tab.Screen 
            name="Orders" 
            component={OrderStackNavigator} 
            options={{
                tabBarIcon:({color}) =>( <Entypo name="open-book" size={24} color="black" />
                )}}/>
            <Tab.Screen 
            name="Profile"
            component={OrdersScreen}
            options={{
                tabBarIcon:({color}) =>( <FontAwesome name="user" size={24} color={color} />
                )}}/>
        </Tab.Navigator>
    )
}

const HomesStack = createNativeStackNavigator();

const HomesStackNavigator = () =>{
    return(
        <HomesStack.Navigator>
            <HomesStack.Screen 
            name='Restaurants'
            component={HomeScreen} 
            />
            <HomesStack.Screen 
            name='Restaurant'
            component={RestaurantsDetailsScreen} 
            />
            <HomesStack.Screen
                name="Dish"
                component={DishDetailScreen}
            />
            <HomesStack.Screen
                name="Basket"
                component={Basket}
            />
        </HomesStack.Navigator>
    )
}

const OrderStack = createNativeStackNavigator();

const OrderStackNavigator = () =>{
    return(
        <OrderStack.Navigator>
            <OrderStack.Screen 
            name='Orders'
            component={OrdersScreen} 
            />
            <OrderStack.Screen 
            name='Order'
            component={OrderDetails} 
            />
        </OrderStack.Navigator>
    )
}
export default RootNavigator;