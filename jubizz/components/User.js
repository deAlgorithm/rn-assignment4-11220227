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
                avatar="https://media.licdn.com/dms/image/D4D03AQHV4e812MZtUA/profile-displayphoto-shrink_100_100/0/1718264970727?e=1724284800&v=beta&t=0MgQzxtmqnnkrO0FCMWZkfQVkJPPnGfcoWyaf8vRvLU"
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
