import React, { useEffect, useState } from 'react'

const stappen = [
  {
    qr: 'SNACKBAR123',
    code: '4821',
  {
    type: 'hint',
    titel: 'QR CODE GEVONDEN',
    tekst: 'Jullie missie start waar zout, saus en snacks samenkomen.'
  },
  {
    qr: 'SNACKBAR-OPDRACHT',
    code: '7314',
    type: 'opdracht',
    titel: 'OPDRACHT',
    tekst: 'Maak een foto alsof jullie een geheime deal sluiten.'
  },
  {
    type: 'opdracht',
    titel: 'EXTRA OPDRACHT',
    tekst: 'Maak een groepsfoto zonder dat iemand de grond raakt.'
  },
  {
    type: 'politie',
    titel: 'POLITIEBERICHT',
    tekst: 'De politie heeft camerabeelden ontvangen van 5 jongens bij een snackbar. Verlaat de locatie direct en blijf uit handen van de politie.'
  },
  {
    type: 'hint',
    titel: 'QR CODE GEVONDEN',
    tekst: 'Zoek de plek waar stilte begint. Kijk goed om je heen en ga even zitten.'
  },
  {
    type: 'opdracht',
    titel: 'OPDRACHT',
    tekst: 'Maak een foto alsof jullie een zombieaanval proberen te overleven.'
  },
  {
    type: 'hint',
    titel: 'QR CODE GEVONDEN',
    tekst: 'Steek de weg over naar de plek waar jongeren dagelijks vastzitten.'
  },
  {
    type: 'opdracht',
    titel: 'EXTRA OPDRACHT',
    tekst: 'Verander jullie uiterlijk. Ruil onderling één kledingstuk en maak hier een bewijsfoto van.'
  },
  {
    type: 'politie',
    titel: 'POLITIEBERICHT',
    tekst: 'Spoedmelding: de politie heeft een signalement ontvangen van 5 jongens van ongeveer 12 tot 13 jaar oud. Ga snel naar de volgende locatie.'
  },
  {
    type: 'einde',
    titel: 'INTERPOL ZOEKT JULLIE',
    tekst: 'MISSIE VOLTOOID - DE BUIT IS GEVONDEN.'
  }
]

export default function App() {
  const [stap, setStap] = useState(0)
  const [foto, setFoto] = useState(null)
  const [punten, setPunten] = useState(100)
  const [timer, setTimer] = useState(3600)
  const [flash, setFlash] = useState(false)
  const [qrInput, setQrInput] = useState('')
  const [qrFout, setQrFout] = useState(false)

  const huidigeStap = stappen[stap]

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (huidigeStap.type === 'politie') {
      speelSirene()
      setFlash(true)

      setTimeout(() => {
        setFlash(false)
      }, 3000)
    }
  }, [stap])

  function speelSirene() {
    const audio = new Audio(
      'https://actions.google.com/sounds/v1/emergency/police_siren.ogg'
    )

    audio.volume = 0.5
    audio.play()
  }

  function checkQr() {
    if (
      qrInput.toUpperCase() === huidigeStap.qr ||
      qrInput === huidigeStap.code
    ) {
      setQrFout(false)
      setQrInput('')
      volgendeStap()
    } else {
      setQrFout(true)
    }
  }

  function volgendeStap() {
    setFoto(null)

    if (stap < stappen.length - 1) {
      setStap(stap + 1)
    }
  }

  const minuten = Math.floor(timer / 60)
  const seconden = timer % 60

  return (
    <div
      style={{
        background: flash ? '#5c0000' : '#111',
        transition: '0.3s',
        minHeight: '100vh',
        color: 'white',
        padding: '30px',
        fontFamily: 'Arial'
      }}
    >
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          background: '#1f1f1f',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 0 30px rgba(0,0,0,0.5)'
        }}
      >
        <h1 style={{ color: '#ff3b3b' }}>OP ZOEK NAAR DE BUIT</h1>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={scoreStyle}>Score: {punten}</div>
          <div style={scoreStyle}>
            Tijd: {minuten}:{seconden.toString().padStart(2, '0')}
          </div>
        </div>

        <div
          style={{
            background:
              huidigeStap.type === 'politie' ? '#500' : '#2b2b2b',
            padding: '20px',
            borderRadius: '15px'
          }}
        >
          <h2>{huidigeStap.titel}</h2>

          <p style={{ lineHeight: '1.7' }}>{huidigeStap.tekst}</p>

          {huidigeStap.type === 'hint' && (
            <>
              <input
                type='text'
                placeholder='Scan QR of vul 4-cijferige code in'
                value={qrInput}
                onChange={(e) => setQrInput(e.target.value)}
                style={inputStyle}
              />

              {qrFout && (
                <p style={{ color: '#ff4d4d', marginTop: '10px' }}>
                  Verkeerde QR code
                </p>
              )}

              <button style={buttonStyle} onClick={checkQr}>
                QR CODE SCANNEN
              </button>
            </>
          )}

          {huidigeStap.type === 'opdracht' && (
            <>
              <input
                type='file'
                accept='image/*'
                onChange={(e) => {
                  const file = e.target.files[0]

                  if (file) {
                    setFoto(URL.createObjectURL(file))
                  }
                }}
                style={{ marginTop: '20px' }}
              />

              {foto && (
                <>
                  <img
                    src={foto}
                    alt='bewijs'
                    style={{
                      width: '100%',
                      marginTop: '20px',
                      borderRadius: '15px'
                    }}
                  />

                  <button
                    style={buttonStyle}
                    onClick={() => {
                      setPunten(punten - 5)
                      volgendeStap()
                    }}
                  >
                    FOTO VERSTUREN
                  </button>
                </>
              )}
            </>
          )}

          {huidigeStap.type === 'politie' && (
            <>
              <div style={alertStyle}>POLITIEALERT</div>

              <button style={buttonStyle} onClick={volgendeStap}>
                VLUCHTEN
              </button>
            </>
          )}

          {huidigeStap.type === 'einde' && (
            <>
              <h2 style={{ color: '#ff3b3b' }}>
                EINDSCORE: {punten}
              </h2>

              <button style={buttonStyle}>
                MISSIE VOLTOOID
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const buttonStyle = {
  marginTop: '20px',
  padding: '14px 20px',
  border: 'none',
  borderRadius: '12px',
  background: '#ff3b3b',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer'
}

const scoreStyle = {
  background: '#2b2b2b',
  padding: '10px 15px',
  borderRadius: '10px'
}

const inputStyle = {
  marginTop: '20px',
  width: '100%',
  padding: '14px',
  borderRadius: '10px',
  border: 'none',
  background: '#333',
  color: 'white'
}

const alertStyle = {
  background: '#ff0000',
  padding: '12px',
  marginTop: '20px',
  borderRadius: '10px',
  fontWeight: 'bold',
  animation: 'pulse 1s infinite'
}
