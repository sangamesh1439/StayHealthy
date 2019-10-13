import React, { useState, Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Container, Header, Content, Button, Icon } from 'native-base';
import { CurvedButton, TimeSelection, Counter, ModalTitle } from '../../../../../common/components';
import { colors } from '../../../../../common/theme/colors';

const MakeReservationModalComponent = (props) => {
    const [peopleCounter, setPeopleCounter] = useState(2);
    const [selectedHour, setSelectedHour] = useState("");

    const { name, shortDescription,uri } = props.restaurant;
    return (
        <Modal
            onBackdropPress={props.hideModal}
            animationType="slide"
            transparent={true}
            visible={props.visible}
            onRequestClose={props.hideModal}>

            <View style={{ marginTop: 190, flex: 1, backgroundColor: colors.WHITE, borderRadius: 10, }}>
                <View>
                    <ModalTitle title={"Reservation"} hideModal={props.hideModal} />

                    <View style={{ margin: 20, width: 600, flexDirection: "row" }}>
                        <View style={{ marginRight: 80 }}>
                            <Text style={{ fontSize: 20 }}>{name}</Text>
                            <Text style={{ opacity: 0.5, fontSize: 15, width: 120 }}>{shortDescription}</Text>
                        </View>
                        <View style={{ alignSelf: "center" }}>
                            <Image style={{ width: 100, borderRadius: 10, height: 80 }}
                                source={{
                                    uri
                                }} />
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: colors.WHITE_LIGHT }} />

                    <View style={{ margin: 20 }}>
                        <Counter peopleCounter={peopleCounter} setPeopleCounter={setPeopleCounter} />
                        <TimeSelection setSelectedHour={setSelectedHour} />
                    </View>

                    <Button onPress={() => {
                        props.hideModal()
                    }} style={{ backgroundColor: "black", margin: 20, borderRadius: 5 }}>
                         <Icon type={"AntDesign"} name='apple1' style={{position:"absolute", marginLeft:100,color: "white" }} />

                        <Text style={{ color: "white",flex:1, textAlign:"center", fontSize:30 }}>  Pay </Text>
                    </Button>
                </View>
            </View>

        </Modal>
    );

}

export const MakeReservationModal = MakeReservationModalComponent 