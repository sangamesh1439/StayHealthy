import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';
import { colors } from '../../../../../../../common/theme/colors';
import { FlatList } from 'react-native-gesture-handler';
import { Container, Header, Content, Button, Icon } from 'native-base';
import { CurvedButton, ModalTitle } from '../../../../../../../common/components';

const Ingredient = ({ ingredient }) => {
    return (<View>
        <View style={{
            flexDirection: "row",
            alignItems: "center"
        }}>
            <View style={{ height: 20, width: 20, margin: 10, borderRadius: 10, borderColor: colors.GREEN, borderWidth: 2 }} />
            <View >
                <Text style={{ marginTop: 5, fontSize: 20 }}>{ingredient.name} </Text>
                <Text style={{ opacity: 0.5, marginBottom: 5, fontSize: 12 }}>{ingredient.quantity} {ingredient.quantityUnit} </Text>
            </View>

        </View>
        <View style={{ height: 1, backgroundColor: colors.WHITE_LIGHT }}>
        </View>
    </View>)
}

const SeeIngredientsComponent = (props) => {
    // Alert.alert(JSON.stringify(props.ingredients));
    return (
        <Modal
            onBackdropPress={props.hideModal}
            animationType="slide"
            transparent={true}
            visible={props.visible}
            onRequestClose={props.hideModal}>

            <View style={{ marginTop: 150, flex: 1, backgroundColor: colors.WHITE, borderRadius: 10, }}>
                <View>
                    <ModalTitle title={"Ingredients"} hideModal={props.hideModal} />

                    <FlatList
                        style={{
                            flexGrow: 0, marginTop: 0,
                            backgroundColor: colors.WHITE,
                            borderRadius: 10
                        }}
                        data={props.ingredients}
                        renderItem={({ item, index }) => (
                            <Ingredient ingredient={item} />
                        )}
                        keyExtractor={(recipe, index) => index}
                    />
                    <CurvedButton title={"Add to Reminders"} onPress={() => {
                        props.hideModal()
                    }} />
                </View>
            </View>
        </Modal>
    );
}

export const SeeIngredients = SeeIngredientsComponent 