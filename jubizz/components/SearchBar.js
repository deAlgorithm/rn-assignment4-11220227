import React from 'react';
import { View,Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => (
    <View style={styles.searchBar}>
        <View style={styles.searchInputContainer}>
            <Ionicons marginLeft={10} name="search" size={20} color="#95969D" />
            <TextInput
                placeholder="Search a job or position"
                style={styles.searchInput}
            />
        </View>
        <TouchableOpacity style={styles.filterIcon}>
            <Image source={{ uri: 'https://img.icons8.com/?size=100&id=awV5wdoQCBuZ&format=png&color=000000' }} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        margin: 20,
        gap:20,
       
      
       
    },
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        padding: 5,
        borderRadius:15,
        backgroundColor:'#F2F2F3',

    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        padding: 7,
        fontSize:15,
    },
    filterIcon: {
        padding: 10,
        height:50,
        width:50,
        backgroundColor:'#F2F2F3',
        borderRadius:15,
    },
});

export default SearchBar;
