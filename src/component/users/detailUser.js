import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
}from 'react-native';
import {URL_API} from '../../service/serviceUrl';

class detailUser extends Component{
    constructor(props){
        super(props);
        this.state = {isLoading:false};
    }
    static navigationOptions={
        title:'Detail User',
        headerStyle:{
            backgroundColor: '#73C6B6'
        }
    }
    deleteUser=async id=>{
        let urlDelete = URL_API +'user/delete/'+id;
        this.setState({isLoading:true})
        try{
            let response = await fetch(urlDelete)
            response = await response.json()
            this.setState({
                isLoading:false
            })
            alert(response.message);
            this.props.navigation.push('ListUsers')
        }catch(err){
            console.error(err)
        }
    }
    render(){
        const {navigation} = this.props; // definisikan navigation sebagai this.props
        let id = JSON.stringify(navigation.getParam('id'));
        let name = JSON.stringify(navigation.getParam('name','default desc'));
        let username = JSON.stringify(
            navigation.getParam('username','default desc')
        )
        let email = JSON.stringify(
            navigation.getParam('email', 'default completed')
        )
        let city = JSON.stringify(
            navigation.getParam('address','default city').city
        )
        console.log(navigation)

        if(this.state.isLoading){
            return(
                <View style={{flex:1,padding:20}}>
                    <Text>Loading....</Text>
                </View>
            )
        }else{
            return(
                <View style={styles.container}>
                    <Text>Details Activity</Text>
                    <Text>itemId: {id}</Text>
                    <Text>name: {name}</Text>
                    <Text>username: {username}</Text>
                    <Text>email: {email}</Text>
                    <Text>city: {city}</Text>
                    <Button title="Delete User" onPress={()=>this.deleteUser(id)}/>
                    <Button
                        title="Go to List Users"
                        onPress={()=>navigation.push('ListUsers')}
                    />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        borderWidth:0.5,
        borderColor: '#d6d7da'
    },
    headerText: {
        fontSize:20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    }
})

export default detailUser;

//https://reactnavigation.org/docs/en/params.html