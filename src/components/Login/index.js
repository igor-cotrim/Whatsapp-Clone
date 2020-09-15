import React from 'react';

import Api from '../../Api'
import './styles.css';

function Login({onReceive}) {
  async function handleFacebookLogin(){
    let result = await Api.fbPopup();
    if(result){
      onReceive(result.user)
    } else{
      alert("Erro!");
    }
  }

  return(
    <div className="login">
      <button onClick={handleFacebookLogin}>Logar com o Facebook</button>
    </div>
  )
}

export default Login;