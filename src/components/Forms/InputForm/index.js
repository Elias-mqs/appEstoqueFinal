import React from 'react';
import { Text, TextInput } from 'react-native';
import { Controller } from 'react-hook-form'


export default function InputForm({ styleTitle, styleInput, placeholder, name, title, control, onSubmitEditing, register, secureTextEntry, keyboardType, phTextColor }) {

    return (
        <>
            <Controller
                control={control}
                name={name}
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                    <>
                        <Text style={styleTitle}>{title}</Text>
                        <TextInput
                            keyboardType={keyboardType}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            style={styleInput}
                            onSubmitEditing={onSubmitEditing}
                            ref={register}
                            secureTextEntry={secureTextEntry}
                            placeholderTextColor={phTextColor}
                        />
                    </>
                )}
            />
        </>
    )
}