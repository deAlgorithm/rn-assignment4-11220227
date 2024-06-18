import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const JobCard = ({ job }) => (
    <View style={styles.jobCard}>
        <View style={styles.jobItem}>
            <View style={styles.logo}>
                <Image source={{ uri: job.logo }} style={styles.jobLogo} />
            </View>
           
            <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>{job.title}</Text>
            <Text style={styles.jobCompany}>{job.company}</Text>
            </View> 
        </View>
        
        <View style={styles.jobDetails}>
            <Text style={styles.jobSalary}>{job.salary}</Text>
            <Text style={styles.jobLocation}>{job.location}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    jobCard: {
        backgroundColor: '#5386e4',
        borderRadius: 30,
        padding: 20,
        margin: 5,
        width: 280,
        height: 180,
        elevation: 2,
        flexDirection: 'column',
        justifyContent:'space-between',
    },
    jobItem:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 10,
    },
    logo: {
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        width: 60,
        height: 60,
    },
    jobLogo: {
        width: 50,
        height: 50,
        borderRadius: 20,
        marginBottom: 10,
    },
    jobInfo: {
        marginBottom: 10,
    },
    jobTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    
    jobCompany: {
        fontSize: 14,
        color: 'white',
    },
    jobDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    jobSalary: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    jobLocation: {
        fontSize: 18,
        color: 'white',
    },
});

export default JobCard;
