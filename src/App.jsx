import { useState } from 'react'

export default function App() {
  const opdrachten = [
    {
      titel: 'Snackbar',
      hint: 'Hier komen saus en snacks samen.',
      opdracht: 'Maak een groepsfoto alsof jullie een geheime deal sluiten.',
      politie: 'Melding: verdachte groep gezien bij snackbar.'
    },
    {
      titel: 'Kerkhof',
      hint: 'Zoek de plek waar stilte begint.',
      opdracht: 'Maak een foto alsof jullie een zombieaanval overleven.',
      politie: 'Spoedmelding: politie zoekt 5 jongens van 12-13 jaar.'
    },
    {
      titel: 'School',
      hint: 'Ga naar de plek waar jongeren dagelijks vastzitten.',
      opdracht: 'Maak een foto waarbij één persoon gedragen wordt.',
      politie: 'Agenten zijn onderweg naar jullie locatie.'
    }
  ]

  const [huidigeOpdracht, setHuidigeOpdracht] = useState(0)
  const [fase, setFase] = useState('hint')
  const [foto, setFoto] = useState(null)
  const [punten, setPunten] = useState(100)

  const item = opdrachten[huidigeOpdracht]

  function speelSirene() {
    const audio = new Audio(
      'https://actions.google.com/sounds/v1/emergency/police_siren.ogg'
    )

    audio.volume = 0.5
    audio.play()
  }

  function volgendeLocatie() {
    if (huidigeOpdracht < opdrachten.length - 1) {
      setHuidigeOpdracht(huidigeOpdracht + 1)
      setFase('hint')
      setFoto(null)
    }
  }

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
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          background: '#1c1c1c',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 0 20px rgba(0,0,0,0.5)'
        }}
      >
        <h1 style={{ color: '#ff3b3b' }}>OP ZOEK NAAR DE BUIT</h1>

        <h2>Punten: {punten}</h2>

        <div
          style={{
            background: '#2b2b2b',
            padding: '20px',
            borderRadius: '15px',
            marginTop: '20px'
          }}
        >
          <h2>{item.titel}</h2>

          {fase === 'hint' && (
            <>
              <p>
                <strong>Hint:</strong> {item.hint}
              </p>

              <button
                onClick={() => setFase('opdracht')}
                style={buttonStyle}
              >
                Plek gevonden
              </button>
            </>
          )}

          {fase === 'opdracht' && (
            <>
              <p>
                <strong>Opdracht:</strong> {item.opdracht}
              </p>

              <button
                onClick={() => setFase('upload')}
                style={buttonStyle}
              >
                Opdracht uitgevoerd
              </button>
            </>
          )}

          {fase === 'upload' && (
            <>
              <p>
                <strong>Upload bewijsfoto:</strong>
              </p>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0]

                  if (file) {
                    setFoto(URL.createObjectURL(file))
                  }
                }}
              />

              {foto && (
                <>
                  <img
                    src={foto}
                    alt="bewijs"
                    style={{
                      width: '100%',
                      marginTop: '20px',
                      borderRadius: '15px'
                    }}
                  />

                  <button
                    onClick={() => {
                      speelSirene()
                      setPunten(punten - 10)
                      setFase('politie')
                    }}
                    style={buttonStyle}
                  >
                    Bewijs versturen
                  </button>
                </>
              )}
            </>
          )}

          {fase === 'politie' && (
            <>
              <div
                style={{
                  background: '#500',
                  padding: '20px',
                  borderRadius: '15px',
                  marginTop: '20px'
                }}
              >
                <h3>POLITIEBERICHT</h3>

                <p>{item.politie}</p>
              </div>

              <button
                onClick={volgendeLocatie}
                style={buttonStyle}
              >
                Vlucht naar volgende locatie
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
