import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const JobsCard = ({ job }) => (
    <View style={styles.jobCard}>
        <View style={styles.jobItem}>
            <View style={styles.logo}>
                <Image source={{ uri: job.logo }} style={styles.jobLogo} />
            </View>
           
         
           
        </View>
        <View style={styles.jobInfo}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobCompany}>{job.company}</Text>
        </View> 
        <View style={styles.jobDetails}>
            <Text style={styles.jobSalary}>{job.salary}</Text>
            <Text style={styles.jobLocation}>{job.location}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    jobCard: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 20,
        marginBottom: 20,
        height:80,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    jobItem:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
    },
    logo: {
       
        justifyContent:'center',
        alignItems:'center',
        marginTop:45,
        borderRadius:10,
    },
    jobLogo: {
        width: 60,
        height: 60,
        borderRadius: 20,
        marginBottom: 10,
    },
    jobInfo: {
        flexDirection:'column',
        gap: 15,
        marginLeft: -40,
    },
    jobTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0D0D26'
    },
    
    jobCompany: {
        fontSize: 16,
        color: 'gray',
    },
    jobDetails: {
        flexDirection: 'column',
        gap:15,
    },
    jobSalary: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0D0D26',
    },
    jobLocation: {
        fontSize: 16,
        color: 'gray',
    },
});

export default JobsCard;
