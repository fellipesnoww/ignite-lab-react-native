import { Heading, VStack, Icon, useTheme } from 'native-base';
import React, { useState } from 'react';
import {Envelope, Eye, Key} from "phosphor-react-native";
import Logo from '../assets/logo_primary.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native';

export default function Signin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const {colors} = useTheme();

    function handleSignin(){

        if(!email || !password){
            return Alert.alert('Erro', 'E-mail e/ou senha inválidos')
        }
    }

    return(
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
            <Logo />
            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse sua conta
            </Heading>

            <Input 
                placeholder="E-mail"
                mb={4}
                InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4}/>}
                onChangeText={setEmail}
            />
            <Input 
                mb={8}
                placeholder="Senha"
                InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
                secureTextEntry
                onChangeText={setPassword}                
            />
            <Button title="Entrar" w="full" onPress={handleSignin}/>
        </VStack>
    )
}
