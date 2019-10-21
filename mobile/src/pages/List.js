import React, {useEffect, useState} from 'react';
import { SafeAreaView, Image, StyleSheet, AsyncStorage, ScrollView } from 'react-native';
import Spotlist from '../components/Spotlist';

import logo from '../../assets/logo.png';

export default function List() {

    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray);
        })
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            
            <ScrollView>
                {techs.map(tech => <Spotlist key={tech} tech={tech} />)}
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 32,
        marginBottom: 24
    },
});