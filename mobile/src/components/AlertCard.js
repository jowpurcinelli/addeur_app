import React from 'react';
import { Modal, Card, Text, Button } from '@ui-kitten/components';

export default () => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (  
    <Modal
      visible={isOpen}    
      backdropStyle={styles.backdrop}    
      onBackdropPress={() => setVisible(false)}
    >
    
      <Card disabled={true} style={styles.container}>

        <Text>Processing your order</Text>
        <Button 
          onpress={() => setIsOpen(false)}
          style={styles.button}
        >
          Dismiss
        </Button>
      </Card>
    </Modal>
  );
};


const styles = StyleSheet.create({

  container: {
    padding: 16,
  },

  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },

  button: {
    marginTop: 16
  },
});