import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import "./styles.css"

const Home = () => {

    const [qrCode, setQrCode] = useState("")
    const [input, setInput] = useState("")

    const HandleGenerateQrCode = () => {
        setQrCode(input)
        setInput(" ")
    }

    return (
        <div className='wrapper'>
            <h3>QR Code Scanner</h3>
            <div>
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" name="qr-code" placeholder='Enter name here' />
            </div>
            <div>
                <QRCode
                    id='qr-code'
                    value={qrCode}
                />
            </div>
            <button disabled={input && input.length !== "" ? false : true} onClick={HandleGenerateQrCode}>Generate</button>
        </div>
    )
}

export default Home