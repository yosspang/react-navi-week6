import React,{Component} from 'react';
import{
    StyleSheet, 
    Text, 
    View, 
    Button
}from 'react-native';


class ProfileActivity extends Component{
    static navigationOptions={
        title:"Profile",
        headerStyle:{
            backgroundColor:"#73c6b6"
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>Data Diri Activity</Text>
                <View style={styles.loremContainer}>
                    <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Redux" onPress={()=>this.props.navigation.navigate("Redux")}/>
                    <Button title="Profile" onPress={()=>this.props.navigation.navigate("Profile")}/>
                    <Button title="Got to new List Todo" onPress={()=>this.props.navigation.push("ListTodo")}/>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
  container:{
      flex:1,
      justifyContent:"space-around",
      alignItems:"center",
      backgroundColor:"#F5FCFF"
  },
  headerText:{
      fontSize:20,
      textAlign:"center",
      margin:10,
      fontWeight:"bold"
  },
  loremContainer:{
      width:'60%',
      alignItems:'center'
  },
  buttonContainer:{
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'row',
    width:'100%'
  }
});

export default ProfileActivity; 