import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';
import FeaturedJobs from './FeaturedJobs';
import PopularJobs from './PopularJobs';
import Head from './head';
import { featuredJobs, popularJobs } from './jobs';

const User = () => {
    return (
        <View style={styles.container}>
            <Head
                name="OTABIL ISHAQUE"
                email="ishaqueotabill44@gmail.com"
                avatar="https://lh3.googleusercontent.com/a/AEdFTp5kp2v9mR_0ZFHCEnj10I9GNuiH09bdCxUq1Gq_KA=s96-c" // Replace with the actual image URL
      />
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
