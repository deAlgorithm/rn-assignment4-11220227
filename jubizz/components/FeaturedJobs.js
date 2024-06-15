import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import JobCard from './JobCard';

const FeaturedJobs = ({ jobs }) => (
    <View style={styles.featuredJobs}>
        <View style={styles.header}>
            <Text style={styles.sectionTitle}>Featured Jobs</Text>
            <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
            ))}
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    featuredJobs: {
        padding: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    seeAll: {
        color: '#95969D',
        textAlign: 'right',
        fontSize: 14,
    },
});

export default FeaturedJobs;
