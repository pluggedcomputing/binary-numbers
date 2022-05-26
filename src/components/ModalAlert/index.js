import React from "react";
import {Modal, View, Text} from "react-native";

import {PropTypes} from 'prop-types';

import CustomButton from "../CustomButton";
import styles from "./styles";


const ModalAlert= props => {
    const {onCancel, isVisible, level} = props;
    return (
      <Modal
        transparent
        visible={isVisible}
        animationType="slide"
        onRequestClose={onCancel}

        >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.textModal}>
              Você não pode acessar a 
              <Text style={[styles.textModal,styles.levelIndicator]}> FASE {level} </Text> ainda. Ela só estará disponível após você passar pelas fases anteriores. 
            </Text>

            <CustomButton text="OK" onPress={onCancel} />

          </View>
        </View>
      </Modal>
    );
};

ModalAlert.propTypes = {
    level: PropTypes.string.isRequired,
    isVisible: PropTypes.bool,
    onCancel: PropTypes.func.isRequired
  };

  ModalAlert.defaultProps = {
    isVisible: false,
  };

export default ModalAlert;