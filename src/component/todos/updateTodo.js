import React, {Component} from 'react';
import {
  View, 
  Button, 
  Text, 
  TextInput,
  Picker,
  DatePickerAndroid,
  TouchableOpacity,
  StyleSheet
  } from 'react-native';
import {URL_API} from '../../service/serviceUrl'

class updateTodo extends Component {
    constructor(props) {
        super(props);
        this.state ={
            title: '',
            description: '',
            userId: '',
            completed: '',
            dateActivity: '',
            date: new Date(),
            dateText: 'Pick a date'
        }
        this.showDatePicker.bind(this);
    }
    
    static navigationOptions = {
        title: 'Update Todo',
        headerStyle: {
            backgroundColor: '#73C6B6'
        }
    }
    
    showDatePicker = async(options) => {
        try{
            const{action,year,month,day} = await DatePickerAndroid.open(options);
            if (action !== DatePickerAndroid.dismissedAction){
                let date = new Date(year, month, day);
                let newState = {};
                newState['date'] = date;
                newState['dateActivity'] = date.toLocaleDateString("en-US");
                this.setState(newState);
            }
        }catch({code,message}){
            console.warn('error', code, message)
        }
    };

    UpdateTodo = async(id)=>{
        console.log(this.state);
        if(!this.state.title){
            return alert ('title required')
        }
        if(!this.state.description){
            return alert ('description required')
        }
        if(!this.state.userId){
            return alert ('userId required')
        }
        if(!this.state.dateActivity){
            return alert ('date required')
        }
        let urlUpdate = URL_API + 'todo/update/'+id;
        try{
            let response = await fetch(urlUpdate,{
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(this.state),
            })
            response = await response.json()
            alert(response.message)
            this.props.navigation.push('ListTodo')
        }catch(err){
            console.error(err)
        }
    }
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
        return(
            <View style={styles.container}>
                <Text style = {styles.headerText}>Create Todo</Text>
                <Text>Todo Title</Text>
                <TextInput
                    style = {{height: 40}}
                    placeholder = "Masukkan Title"
                    onChangeText = {inputTitle => this.setState({title: inputTitle})}
                    value = {title}
                />
                <Text>Todo Description</Text>
                <TextInput
                    style={{height:40}}
                    placeholder="Masukkan description"
                    onChangeText={inputDescription => 
                        this.setState({description: inputDescription})
                    }
                    value = {description}
                />
                <Text>Todo User ID</Text>
                <TextInput
                    style =  {{height: 40}}
                    placeholder = "masukkan UserID"
                    onChangeText = {inputUserId => this.setState({userId: inputUserId})}
                    value = {id}
                />
                <Text>Todo Status</Text>
                <Picker
                    selectedValue={completed}
                    style={{height:50, width:300}}
                    onValueChange= {(itemValue,itemIndex)=>
                    this.setState({completed: itemValue})}
                >
                    <Picker.Item label = "Choose status" value = "" />
                    <Picker.Item label = "Un Complete" value = '0' />
                    <Picker.Item label = "Completed" value = "1" />
                </Picker>

                <Text>Todo Date Activity</Text>
                <TextInput value={dateActivity} editable={false}/>
                <Button
                    title={dateActivity}
                    onPress={()=>this.showDatePicker({date:this.state.date})} 
                />
                <Button title="Update" onPress={()=>{this.UpdateTodo(id)}}/>
                <Button title="Go to List Todo" onPress={()=>this.props.navigation.push('List Todo')}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    }
});

export default updateTodo;