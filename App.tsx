import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface TransferSuccessPopupProps {
  visible: boolean;
  onClose: () => void;
}

//const TransferSuccessPopup = ({ visible, onClose }) =>
const TransferSuccessPopup: React.FC<TransferSuccessPopupProps> = ({
  visible,
  onClose,
}) =>  {
  return (
    <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >

    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Your Transfer was Successful</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
        </View>
        <View

/>
  
        <View style={styles.modalContent}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Transaction Id</Text>
            <Text style={styles.infoValue}>1667378939</Text>
                     
          </View>
        
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Status</Text>
            <Text style={styles.infoValueCompleted}>Completed</Text>
            
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>From</Text>
            <Text style={styles.infoValue}>                    ZAR Account</Text>
            <Text style={styles.infoValue}>               30,000</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>To</Text>
            <Text style={styles.infoValue}>                    USD Margin Account</Text>
            <Text style={styles.infoValue}>   1,847.90</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Conversion Rate</Text>
            <Text style={styles.infoValue}> 1 ZAR = 0.053 USD</Text>
            

          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Timestamp</Text>
            <Text style={styles.infoValue}>                 22/10/23 at 09:23 AM</Text>
          </View>
        </View>
        <View style={styles.modalFooter}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1}> Contact Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={onClose}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    
  </Modal>
);
};

const styles = StyleSheet.create({
centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
},
modalView: {
  margin: 20,
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 20,
  alignItems: 'center',
 // shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
modalHeader: {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: 0.5, height: 0.3, backgroundColor: '#00563F',
  marginBottom: 20,
},
modalTitle: {
  fontWeight: 'bold',
color:'white',
  fontSize: 20,
 },
modelline:{
  borderBottomColor: 'black',
borderBottomWidth:StyleSheet.hairlineWidth,

},
closeButton: {
  
},

closeButtonText: {
  fontSize: 28, 
 color:'white',
},
modalContent: {
  width: '100%',
  marginBottom: 25,
  fontSize:17,
 
},
infoRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
  fontSize:17,
  borderBottomColor: '#36454F',
borderBottomWidth:StyleSheet.hairlineWidth,

},
infoLabel: {
  fontWeight: 'bold',
},
infoValue: {
 
},
infoValueCompleted: {
  backgroundColor:'#90EE90',
  color: 'green',
  
},
modalFooter: {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
},
button1: {
  backgroundColor: 'white',
  
  borderRadius: 20,
  paddingVertical: 10,
  paddingHorizontal: 20,
  elevation: 2,
  borderColor:'#023020',
  borderWidth:1,
},
 button2: {
  backgroundColor: '#023020',
  borderRadius: 20,
  paddingVertical: 10,
  paddingHorizontal: 50,
  elevation: 2,
  
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
 },
buttonText1: {
  color: '#023020',
  fontWeight: 'bold',
  textAlign: 'center',
 
},
});

export default TransferSuccessPopup;