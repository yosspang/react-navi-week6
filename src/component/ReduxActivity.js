import React,{Component} from 'react';
import{
    StyleSheet,
    View,
    Button
} from 'react-native';
import Redux from './Redux/Redux';

class ReduxActivity extends Component{
    static navigationOptions = {
        title: 'Home',
        headerStyle: {backgroundColor:'#03A9F4'},
        headerTintColor:'#fff',
        headerTitleStyle:{fontWeight:'bold'},
    };
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.reduxContainer}><Redux/></View>
                <View style={styles.buttonContainer}>
                    <Button title="Redux" onPress={()=>this.props.navigation.navigate("Redux")}/>
                    <Button title="Profile" onPress={()=>this.props.navigation.navigate("Profile")}/>
                    <Button title="Users" onPress={()=>this.props.navigation.navigate("ListUsers")}/>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'space-around',
        alignItems:'center', 
        backgroundColor:'#F5FCFF'
    },
    headerText:{
        fontSize:20, 
        textAlign:'center',
        margin:10, 
        fontWeight:'bold'
    },
    reduxContainer:{
        flex:3,
        width: '80%'
    },
    buttonContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row',
        width:'100%'
    }
});

export default ReduxActivity;