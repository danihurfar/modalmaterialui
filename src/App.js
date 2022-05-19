import React, { useState } from 'react';
import { Modal, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmark
  } from "@fortawesome/free-solid-svg-icons";


const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    widht: 400,
    backgroundColor: '#c2608ea9',

    boxShadow: theme.shadows[20],
    padding: "30px 30px 16px",
    top: '10%',
    left: '10%',
    transform: 'traslate(-50%, -50%)',
  },
  textfield: {
    width: '100%'
  },
  container: {
    textAlign: 'center'
  }
}));

function App() {
  const styles = useStyles();

  const [modal, setModal] = useState(true);
  const abrirCerrarModal = () => {
    setModal(!modal);
  }


  const body = (
    <div className={styles.modal}>
      <div align="right">
      <Button onClick={() => abrirCerrarModal()}>
        <FontAwesomeIcon icon={faXmark}> </FontAwesomeIcon>
      </Button>
      
      </div>
      <div className="container mt-3">
        <div className="row ">
          <div className="col">
            <div className="mt-1 mb-3 lb-text-center lb-w-60 mx-auto lb-go-green-message">
              <span className="">
                Hi everyone!!! How are you? <br />
                <br />
                HELP US GO GREEN ♻️, no more paper 📝 <br />
                <br />
                We’ve been trying for a few months now to go green ♻️and
                we’ve come a long way but we need your help to go all the
                way. <br />
                <br />
                Please no more paper!❌ <br />
                <br />
                Please fill all the information that the system requires for
                your check in <br />
                <br />
                ♻️THINK GREEN, THINK CLEAN ♻️
              </span>
            </div>
          </div>
        </div>
      </div>
      <br></br>      
    </div>
  )
  return (
    <div className={styles.container} >
      <Button onClick={() => abrirCerrarModal()}>Abrir Modal</Button>
      <Modal
        open={modal}
        onClose={abrirCerrarModal}>
        {body}
      </Modal>
      <TextField label="Nombre" className={styles.Textfield} />
      <br></br>
      <TextField label="Apellidos" className={styles.Textfield} />
      <br></br>
      <TextField label="Correo Electrónico" className={styles.Textfield} />

      <TextField label="Nombre" className={styles.Textfield} />
      <br></br>
      <TextField label="Apellidos" className={styles.Textfield} />
      <br></br>
      <TextField label="Correo Electrónico" className={styles.Textfield} />

      <TextField label="Nombre" className={styles.Textfield} />
      <br></br>
      <TextField label="Apellidos" className={styles.Textfield} />
      <br></br>
      <TextField label="Correo Electrónico" className={styles.Textfield} />

      <TextField label="Nombre" className={styles.Textfield} />
      <br></br>
      <TextField label="Apellidos" className={styles.Textfield} />
      <br></br>
      <TextField label="Correo Electrónico" className={styles.Textfield} />

      <TextField label="Nombre" className={styles.Textfield} />
      <br></br>
      <TextField label="Apellidos" className={styles.Textfield} />
      <br></br>
      <TextField label="Correo Electrónico" className={styles.Textfield} />

      <TextField label="Nombre" className={styles.Textfield} />
      <br></br>
      <TextField label="Apellidos" className={styles.Textfield} />
      <br></br>
      <TextField label="Correo Electrónico" className={styles.Textfield} />

      <TextField label="Nombre" className={styles.Textfield} />
      <br></br>
      <TextField label="Apellidos" className={styles.Textfield} />
      <br></br>
      <TextField label="Correo Electrónico" className={styles.Textfield} />

      <TextField label="Nombre" className={styles.Textfield} />
      <br></br>
      <TextField label="Apellidos" className={styles.Textfield} />
      <br></br>
      <TextField label="Correo Electrónico" className={styles.Textfield} />

      <TextField label="Nombre" className={styles.Textfield} />
      <br></br>
      <TextField label="Apellidos" className={styles.Textfield} />
      <br></br>
      <TextField label="Correo Electrónico" className={styles.Textfield} />
    </div>

  );
}

export default App;
