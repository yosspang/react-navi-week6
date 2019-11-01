import React, {Component} from 'react';
import {
  View, 
  Button, 
  Text, 
  FlatList,
  TouchableOpacity
  } from 'react-native';
import {URL_API} from '../../service/usersUrl'

class ListUsers extends Component {
  static navigationOptions = {
    title: 'Fetch List User',
    headerStyle: {
      backgroundColor: '#73C6B6'
    },
  };
  constructor(props){
    super(props);
    this.state = {isLoading:true, dataSource: ''};
  }
  componentDidMount() {
   this.fetchUsers();
  }
  fetchUsers = async()=>{ //function asynchronous untuk proses fetch
    try{
      let response = await fetch(URL_API+'users')
      response = await response.json();
      console.log('response API');
      console.log(response);
      this.setState({
        isLoading:false,
        dataSource: response // tampung data dalam state.dataSource
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

  listUsers(){
    let countUser = this.state.dataSource.length; //hitung jumlah data
    let titleBar = 'List Users';
    if(countUser == 0){
      titleBar='Users empty'
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
                <Text>name: {item.name} </Text>
                <Text>username: {item.username} </Text>
                <Text>email: {item.email} </Text>
                <Text>city: {item.address.city}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={({id})=>id}
          />
        </View>
      )
    }
  }

  gotDetail = item => {
    this.props.navigation.navigate('DetailUser',item)
  };

  render(){
    return(
      <View style={{flex:1, paddingTop:20}}>
        {this.listUsers()}
        <Button 
          title="Go to new Profile"
          onPress={() => this.props.navigation.push('Profile')}
        />
        <Button 
          title="Create User"
          onPress={() => this.props.navigation.push('createUser')}
        />
        
      </View>
    )
  }
}
export default ListUsers;