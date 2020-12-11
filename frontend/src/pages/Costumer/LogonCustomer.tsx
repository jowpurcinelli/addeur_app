import React, {useCallback, useRef} from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import {FormHandles} from "@unform/core";

import { useAuth } from '../../hooks/auth';
//import getValidationErrors from '../../utils/getValidationErrors';


import '../../../images/Costumer.png';


interface LogonFormData {
  phone_number: string;
  
}



const LogonCostumer = () => {
  const {signIn} = useAuth();
  const navigation = useNavigation();
  const passwordInputRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);  

  const handleLogon = useCallback(
    async (data: LogonFormData) => {
      try{
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          phone_number: Yup.string()
            .email('Check your number ')
            .required('Email obrigatório'),

          password: Yup.string().required('Password necessary'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login');
      }
    },
    [signIn],
  );

  return (
    <View>
      


    </View>
      }
    }
  
  
  
  )




}