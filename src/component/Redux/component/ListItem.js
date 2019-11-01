import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = props => {
    return(
        <TouchableOpacity>
            <View style={styles.listItems}>
                <Text>{props.number} {props.result}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItems:{
        width:'100%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#ffffff'
    },
})

export default ListItem;