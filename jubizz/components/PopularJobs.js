import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import JobsCard from './jobsCard';

const PopularJobs = ({ jobs }) => (
    <View style={styles.popularJobs}>
        <View style={styles.header}>
            <Text style={styles.sectionTitle}>Popular Jobs</Text>
            <TouchableOpacity>
                <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
        </View>
        <FlatList
            data={jobs}
            renderItem={({ item }) => <JobsCard job={item} />}
            keyExtractor={(item) => item.id}
        />
    </View>
);

const styles = StyleSheet.create({
    popularJobs: {
        padding: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    seeAll: {
        color: '#95969D',
        textAlign: 'right',
        fontSize: 13,
    },
 
});

export default PopularJobs;
