import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';
import FeaturedJobs from './FeaturedJobs';
import PopularJobs from './PopularJobs';
import { featuredJobs, popularJobs } from './jobs';

const User = () => {
    return (
        <View style={styles.container}>
            <SearchBar />
            <FeaturedJobs jobs={featuredJobs} />
            <PopularJobs jobs={popularJobs} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default User;
