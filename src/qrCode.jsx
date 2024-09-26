import React from 'react'
import QRCode from "react-qr-code";
import '../src/assets/qrCode.css'



export const QrCode = () => {
    const [text, setText] = React.useState('')


    const onGenerateText = (e) => {
        setText(e.target.value)
    }

  return (
    <section className="qrCodeSect">
      <h1> Make your <br/> QR CODE</h1>
      <QRCode value={text} />
   
    <div className="inputHere">
        <input className="qrInput" type="text" value={text} onChange={(e) => {
            onGenerateText(e)
        }} placeholder="Enter your text"/>
    </div>
    </section>
  );
};
