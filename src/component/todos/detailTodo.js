import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
}from 'react-native';
import {URL_API} from '../../service/serviceUrl';

class detailTodo extends Component{
    constructor(props){
        super(props);
        this.state = {isLoading:false};
    }
    static navigationOptions={
        title:'Detail Todo',
        headerStyle:{
            backgroundColor: '#73C6B6'
        }
    }
    deleteTodo=async id=>{
        let urlDelete = URL_API +'todo/delete/'+id;
        this.setState({isLoading:true})
        try{
            let response = await fetch(urlDelete)
            response = await response.json()
            this.setState({
                isLoading:false
            })
            alert(response.message);
            this.props.navigation.push('ListTodo')
        }catch(err){
            console.error(err)
        }
    }
    updateTodo = item => {
        this.props.navigation.navigate('UpdateTodo',item)
      };
    render(){
        const {navigation} = this.props; // definisikan navigation sebagai this.props
        let id = JSON.stringify(navigation.getParam('id'));
        let title = JSON.stringify(navigation.getParam('title','default desc'));
        let description = JSON.stringify(
            navigation.getParam('description','default desc')
        )
        let completed = JSON.stringify(
            navigation.getParam('completed', 'default completed')
        )
        let dateActivity = JSON.stringify(
            navigation.getParam('dateActivity','default dateActivity')
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
                    <Text>title: {title}</Text>
                    <Text>description: {description}</Text>
                    <Text>completed: {completed}</Text>
                    <Text>dateActivity: {dateActivity}</Text>
                    <Button title="Delete todo" onPress={()=>this.deleteTodo(id)}/>
                    <Button
                        title="Go to List todo"
                        onPress={()=>navigation.push('ListTodo')}
                    />
                    <Button title="Update todo" onPress={()=>this.updateTodo(this.props)}/>
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

export default detailTodo;

//https://reactnavigation.org/docs/en/params.html