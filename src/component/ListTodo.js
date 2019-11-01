import React, {Component} from 'react';
import {
  View, 
  Button, 
  Text, 
  FlatList,
  TouchableOpacity
  } from 'react-native';
import {URL_API} from '../service/serviceUrl'

class ListTodo extends Component {
  static navigationOptions = {
    title: 'Fetch List Todo',
    headerStyle: {
      backgroundColor: '#73C6B6'
    },
  };
  constructor(props){
    super(props);
    this.state = {isLoading:true, dataSource: ''};
  }
  componentDidMount() {
   this.fetchTodo();
  }
  fetchTodo = async()=>{ //function asynchronous untuk proses fetch
    try{
      let response = await fetch(URL_API + 'todo/list')
      response = await response.json();
      console.log('response API');
      console.log(response.content);
      this.setState({
        isLoading:false,
        dataSource: response.content // tampung data dalam state.dataSource
      })
    }catch(err){
      console.log('oop '+err)
    }
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}
      />
    )
  }

  listTodo(){
    let countTodo = this.state.dataSource.length; //hitung jumlah data
    let titleBar = 'List Todos';
    if(countTodo == 0){
      titleBar='Todo empty'
    }
    if(this.state.isLoading){//jika state isLoading true jalan perintah ini, jika tidak maka tampilkan data
      return(
        <View style={{flex:4,padding:20}}>
          <Text>Loading...</Text>
        </View>
      );
    }else{
      return(
        <View style={{flex: 1, paddingTop: 20}}>
          <Text style={{paddingTop: 30, paddingLeft: 30}}>
            {titleBar}
          </Text>
          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={({item})=>(
              <TouchableOpacity onPress={()=>this.gotDetail(item)}>
                <Text>title: {item.title} </Text>
                <Text>description: {item.description} </Text>
                <Text>Completed status: {JSON.stringify(item.completed)}</Text>
                <Text>dateActivity: {item.dateActivity}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={({id})=>id}
          />
        </View>
      )
    }
  }

  gotDetail = item => {
    this.props.navigation.navigate('Detail',item)
  };

  render(){
    return(
      <View style={{flex:1, paddingTop:20}}>
        {this.listTodo()}
        <Button 
          title="Go to new Profile"
          onPress={() => this.props.navigation.push('Profile')}
        />
        <Button 
          title="Create Todo"
          onPress={() => this.props.navigation.push('createTodo')}
        />
        
      </View>
    )
  }
}
export default ListTodo;