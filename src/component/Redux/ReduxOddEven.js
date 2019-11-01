import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, FlatList} from 'react-native';
import ListItem from './component/ListItem';
import {connect} from 'react-redux';
import {checkOddEven} from './actions';
import {bindActionCreators} from 'redux'

class ReduxOddEven extends Component{
    state = {
        inputNumber: ''
    };

    numberSubmitHandler = () => {
        if(this.state.inputNumber.trim() == ''){
            return;
        }
        this.props.add(this.state.inputNumber);
    }
    inputNumberChangeHandler = value => {
        this.setState({
            inputNumber: value
        })
    }
    numbersOutput = () => {
        return(
            <FlatList
                style={styles.listContainer}
                data={this.props.dataNumbers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={info => <ListItem number={info.item.value} result={info.item.message}/>}
            />
        )
    }

    render(){
        console.log(this.props);
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Input Number"
                        style={styles.numberInput}
                        value={this.state.inputNumber}
                        onChangeText={this.inputNumberChangeHandler}
                    />
                    <Button
                        title="Add"
                        style={styles.numberButton}
                        onPress={this.numberSubmitHandler}
                    />
                </View>
                <View style={styles.listContainer}>{this.numbersOutput()}</View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container:{
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    inputContainer:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%'
    },
    numberInput:{
        width: '70%',
    },
    numberButton:{
        width: '30%'
    },
    listContainer:{
        width: '100%'
    },
});

const mapStateToProps = state => { 
    return {
        dataNumbers: state.dataNumbers.numbers
    }
};

const mapDispatchToProps = dispatch => { 
    return bindActionCreators( 
        {add: checkOddEven}, 
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxOddEven);
