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
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false} // Hide the vertical scroll indicator
        />
    </View>
);

const styles = StyleSheet.create({
    popularJobs: {
        flex: 1, // Ensure the container uses the full available space
        padding: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20, // Add margin to separate header from the list
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    seeAll: {
        color: '#95969D',
        textAlign: 'right',
        fontSize: 13,
    },
});

export default PopularJobs;
