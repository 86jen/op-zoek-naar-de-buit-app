import { useState, useEffect, useRef } from 'react'

export default function App() {
  const stappen = [
    {
      type: 'hint',
      titel: 'STARTLOCATIE',
      tekst: 'Jullie missie start waar zout, saus en snacks samenkomen.',
      qr: 'SNACKBAR123',
      code: '4821'
    },
    {
      type: 'opdracht',
      titel: 'SNACKBAR',
      tekst: 'Maak een foto alsof jullie een geheime deal sluiten.'
    },
    {
      type: 'extra',
      titel: 'EXTRA OPDRACHT',
      tekst: 'Maak een groepsfoto zonder dat iemand de grond raakt.'
    },
    {
      type: 'politie',
      titel: 'POLITIE MELDING',
      tekst:
        'De politie heeft camerabeelden ontvangen van 5 jongens bij een snackbar. Verlaat de locatie direct en blijf uit handen van de politie.'
    }
  ]

  const [gestart, setGestart] = useState(false)
  const [stap, setStap] = useState(0)
  const [punten, setPunten] = useState(100)
  const [tijd, setTijd] = useState(90 * 60)
  const [qrInput, setQrInput] = useState('')
  const [foto, setFoto] = useState(null)
  const sireneRef = useRef(null)

  const huidigeStap = stappen[stap]

  useEffect(() => {
    if (!gestart) return

    const interval = setInterval(() => {
      setTijd((prev) => {
        if (prev <= 0) return 0
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [gestart])

  useEffect(() => {
    if (huidigeStap?.type === 'politie') {
      if (sireneRef.current) {
        sireneRef.current.play()
      }
    }
  }, [stap])

  function volgendeStap() {
    setFoto(null)
    setQrInput('')

    if (stap < stappen.length - 1) {
      setStap(stap + 1)
    }
  }

  function checkQr() {
    if (
      qrInput.trim().toUpperCase() === huidigeStap.qr ||
      qrInput.trim() === huidigeStap.code
    ) {
      volgendeStap()
    } else {
      alert('Verkeerde QR-code of noodcode')
      setPunten((p) => p - 5)
    }
  }

  function uploadFoto(e) {
    const file = e.target.files[0]

    if (file) {
      setFoto(URL.createObjectURL(file))
      setPunten((p) => p + 10)
    }
  }

  const minuten = Math.floor(tijd / 60)
  const seconden = tijd % 60

  const cardStyle = {
    background: '#1b1b1b',
    color: 'white',
    borderRadius: '20px',
    padding: '25px',
    marginTop: '25px',
    boxShadow: '0 0 25px rgba(0,0,0,0.4)'
  }

  const buttonStyle = {
    marginTop: '20px',
    background: '#d40000',
    color: 'white',
    border: 'none',
    padding: '15px 25px',
    borderRadius: '12px',
    fontSize: '18px',
    cursor: 'pointer'
  }

  if (!gestart) {
    return (
      <div
        style={{
          background: '#111',
          minHeight: '100vh',
          color: 'white',
          padding: '30px',
          fontFamily: 'Arial'
        }}
      >
        <div style={cardStyle}>
          <h1 style={{ color: '#ff2b2b' }}>OP ZOEK NAAR DE BUIT</h1>

          <p style={{ lineHeight: '1.8' }}>
            Vannacht zijn 5 jonge criminelen ontsnapt.
            <br />
            <br />
            De politie is direct een zoektocht gestart.
            <br />
            <br />
            Jullie missie:
            <br />
            blijf uit handen van de politie.
          </p>

          <button style={buttonStyle} onClick={() => setGestart(true)}>
            MISSIE STARTEN
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        background: '#101010',
        minHeight: '100vh',
        color: 'white',
        padding: '25px',
        fontFamily: 'Arial'
      }}
    >
      <audio
        ref={sireneRef}
        src='https://actions.google.com/sounds/v1/emergency/police_siren.ogg'
      />

      <h1 style={{ color: '#ff2b2b' }}>OP ZOEK NAAR DE BUIT</h1>

      <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
        <h2>Score: {punten}</h2>
        <h2>
          Tijd: {minuten}:{seconden.toString().padStart(2, '0')}
        </h2>
      </div>

      <div
        style={{
          ...cardStyle,
          background:
            huidigeStap.type === 'politie' ? '#4d0000' : '#1b1b1b'
        }}
      >
        <h2>{huidigeStap.titel}</h2>

        <p style={{ fontSize: '20px', lineHeight: '1.7' }}>
          {huidigeStap.tekst}
        </p>

        {huidigeStap.type === 'hint' && (
          <>
            <input
              value={qrInput}
              onChange={(e) => setQrInput(e.target.value)}
              placeholder='Scan QR-code of vul noodcode in'
              style={{
                marginTop: '20px',
                padding: '15px',
                width: '100%',
                borderRadius: '12px',
                border: 'none',
                fontSize: '18px'
              }}
            />

            <button style={buttonStyle} onClick={checkQr}>
              QR / NOODCODE CONTROLEREN
            </button>
          </>
        )}

        {(huidigeStap.type === 'opdracht' ||
          huidigeStap.type === 'extra') && (
          <>
            <input
              type='file'
              accept='image/*'
              onChange={uploadFoto}
              style={{ marginTop: '20px' }}
            />

            {foto && (
              <img
                src={foto}
                alt='bewijs'
                style={{
                  width: '100%',
                  marginTop: '20px',
                  borderRadius: '15px'
                }}
              />
            )}

            {foto && (
              <button style={buttonStyle} onClick={volgendeStap}>
                VERDER
              </button>
            )}
          </>
        )}

        {huidigeStap.type === 'politie' && (
          <button style={buttonStyle} onClick={volgendeStap}>
            SNEL VERDER
          </button>
        )}
      </div>
    </div>
  )
}
