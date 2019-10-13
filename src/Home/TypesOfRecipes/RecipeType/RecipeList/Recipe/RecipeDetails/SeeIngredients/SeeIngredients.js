import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';
import { colors } from '../../../../../../../common/theme/colors';
import { FlatList } from 'react-native-gesture-handler';
import { Container, Header, Content, Button, Icon } from 'native-base';
import { CurvedButton, ModalTitle } from '../../../../../../../common/components';

const SeeIngredientsComponent = (props) => {

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
                        data={[
                            {
                                id: 1,
                                name: "Floor",
                                quantity: "½",
                                quantityUnit: "cups"
                            }, {
                                id: 1,
                                name: "Floor",
                                quantity: "⅔",
                                quantityUnit: "cups"
                            }, {
                                id: 1,
                                name: "Floor",
                                quantity: "2",
                                quantityUnit: "cups"
                            }, {
                                id: 1,
                                name: "Floor",
                                quantity: "2",
                                quantityUnit: "cups"
                            }, {
                                id: 1,
                                name: "Floor",
                                quantity: "2",
                                quantityUnit: "cups"
                            }, {
                                id: 1,
                                name: "Floor",
                                quantity: "2",
                                quantityUnit: "cups"
                            }, {
                                id: 1,
                                name: "Floor",
                                quantity: "2",
                                quantityUnit: "cups"
                            },

                        ]}
                        renderItem={({ item, index }) => (

                            <View>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}>
                                    <View style={{ height: 20, width: 20, margin: 10, borderRadius: 10, borderColor: colors.GREEN, borderWidth: 2 }} />
                                    <View style={{ height: 20, width: 20, margin: 10, borderRadius: 10, backgroundColor: colors.GREEN, opacity: 0.5 }} />
                                    <View >
                                        <Text style={{ marginTop: 5, fontSize: 20 }}>{item.name} </Text>
                                        <Text style={{ opacity: 0.5, marginBottom: 5, fontSize: 12 }}>{item.quantity} {item.quantityUnit} </Text>
                                    </View>

                                </View>
                                <View style={{ height: 1, backgroundColor: colors.WHITE_LIGHT }}>
                                </View>
                            </View>
                            // <Recipe {...props} recipe={item} />
                        )}
                        keyExtractor={recipe => recipe.id}
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