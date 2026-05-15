import React, { useState } from 'react'

const stappen = [
  {
    type: 'hint',
    titel: 'QR CODE GEVONDEN',
    tekst: 'Jullie missie start waar zout, saus en snacks samenkomen.'
  },
  {
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
    type: 'opdracht',
    titel: 'OPDRACHT',
    tekst: 'Maak een foto waarbij één persoon gedragen wordt door de rest van het team.'
  },
  {
    type: 'opdracht',
    titel: 'EXTRA OPDRACHT',
    tekst: 'Maak een foto alsof jullie betrapt zijn terwijl jullie iets illegaals doen.'
  },
  {
    type: 'politie',
    titel: 'SIRENEBERICHT',
    tekst: 'WEEWOO WEEWOO. Agenten zijn onderweg naar jullie omgeving. Zorg dat jullie verdwijnen voordat de politie arriveert.'
  },
  {
    type: 'hint',
    titel: 'QR CODE GEVONDEN',
    tekst: 'Achter iets dat bepaalt wie mag rijden of stoppen hangt jullie volgende opdracht.'
  },
  {
    type: 'opdracht',
    titel: 'OPDRACHT',
    tekst: 'Maak een foto alsof jullie worden achtervolgd en nergens veilig zijn.'
  },
  {
    type: 'opdracht',
    titel: 'EXTRA OPDRACHT',
    tekst: 'Ga allemaal rug tegen rug staan en maak een bewijsfoto.'
  },
  {
    type: 'politie',
    titel: 'POLITIEBERICHT',
    tekst: 'Getuigen melden verdachte jongens in de buurt van verkeersborden. Blijf bewegen en blijf uit handen van de politie.'
  },
  {
    type: 'hint',
    titel: 'QR CODE GEVONDEN',
    tekst: 'Ga naar de plek waar mensen eindeloos rondjes rijden. Aan de overkant wacht jullie volgende opdracht.'
  },
  {
    type: 'opdracht',
    titel: 'OPDRACHT',
    tekst: 'Maak een foto terwijl jullie allemaal exact dezelfde pose aannemen.'
  },
  {
    type: 'opdracht',
    titel: 'EXTRA OPDRACHT',
    tekst: 'Doe alsof één van jullie gearresteerd wordt en maak een bewijsfoto.'
  },
  {
    type: 'politie',
    titel: 'SIRENEBERICHT',
    tekst: 'Politieauto’s rijden in jullie omgeving. Vermijd opvallend gedrag en ga direct verder.'
  },
  {
    type: 'opdracht',
    titel: 'OPDRACHT',
    tekst: 'Maak een foto alsof jullie stiekem iemand bespioneren.'
  },
  {
    type: 'opdracht',
    titel: 'EXTRA OPDRACHT',
    tekst: 'Maak een foto terwijl iedereen zich achter één persoon probeert te verstoppen.'
  },
  {
    type: 'politie',
    titel: 'POLITIEBERICHT',
    tekst: 'Bewoners hebben melding gemaakt van verdachte bewegingen in de wijk. Zorg dat jullie niet herkend worden.'
  },
  {
    type: 'opdracht',
    titel: 'OPDRACHT',
    tekst: 'Maak een foto alsof jullie compleet verdwaald zijn.'
  },
  {
    type: 'opdracht',
    titel: 'EXTRA OPDRACHT',
    tekst: 'Maak een foto waarbij iedereen een zo bang mogelijk gezicht trekt.'
  },
  {
    type: 'politie',
    titel: 'SIRENEBERICHT',
    tekst: 'Sirenes komen dichterbij. Jullie hebben nog maar weinig tijd om uit handen van de politie te blijven.'
  },
  {
    type: 'hint',
    titel: 'QR CODE GEVONDEN',
    tekst: 'Nog 1 laatste tussenstop voordat de eindlocatie onthuld wordt.'
  },
  {
    type: 'opdracht',
    titel: 'OPDRACHT',
    tekst: 'Maak een foto alsof jullie eindelijk de geheime eindlocatie ontdekt hebben.'
  },
  {
    type: 'hint',
    titel: 'NIEUWE HINT',
    tekst: 'De eindlocatie ligt waar warmte, water en bubbels samenkomen.'
  },
  {
    type: 'opdracht',
    titel: 'EXTRA OPDRACHT',
    tekst: 'Laat 1 persoon uit de groep een liedje zingen voor hij de volgende hint krijgt.'
  },
  {
    type: 'politie',
    titel: 'POLITIEBERICHT',
    tekst: 'De politie denkt dat jullie onderweg zijn naar een schuilplaats. Verplaats jullie snel.'
  },
  {
    type: 'hint',
    titel: 'QR CODE GEVONDEN',
    tekst: 'Zoek de plek waar mensen bubbelen.'
  },
  {
    type: 'opdracht',
    titel: 'OPDRACHT',
    tekst: 'Loop achter elkaar en doe alsof jullie waggelende ganzen zijn tot jullie het eindpunt bereikt hebben.'
  },
  {
    type: 'politie',
    titel: 'LAATSTE MELDING',
    tekst: 'Het lijkt erop dat jullie de politie voorlopig hebben afgeschud…'
  },
  {
    type: 'opdracht',
    titel: 'EXTRA OPDRACHT',
    tekst: 'Maak een overwinningsfoto alsof jullie ontsnapt zijn.'
  },
  {
    type: 'politie',
    titel: 'POLITIEBERICHT',
    tekst: 'De politie trekt zich voorlopig terug. Interpol neemt het onderzoek over.'
  },
  {
    type: 'einde',
    titel: 'EINDOPDRACHT',
    tekst: 'Zet alle verzamelde letters in de juiste volgorde.'
  }
]

export default function App() {
  const [stap, setStap] = useState(0)
  const [foto, setFoto] = useState(null)

  const huidigeStap = stappen[stap]

  function volgendeStap() {
    setFoto(null)

    if (stap < stappen.length - 1) {
      setStap(stap + 1)
    }
  }

  function speelSirene() {
    const audio = new Audio(
      'https://actions.google.com/sounds/v1/emergency/police_siren.ogg'
    )

    audio.volume = 0.5
    audio.play()
  }

  React.useEffect(() => {
    if (huidigeStap.type === 'politie') {
      speelSirene()
    }
  }, [stap])

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
          background: '#1f1f1f',
          padding: '30px',
          borderRadius: '20px'
        }}
      >
        <h1 style={{ color: '#ff3b3b' }}>OP ZOEK NAAR DE BUIT</h1>

        <div
          style={{
            background:
              huidigeStap.type === 'politie' ? '#500' : '#2b2b2b',
            padding: '20px',
            borderRadius: '15px',
            marginTop: '20px'
          }}
        >
          <h2>{huidigeStap.titel}</h2>

          <p style={{ lineHeight: '1.7' }}>{huidigeStap.tekst}</p>

          {huidigeStap.type === 'hint' && (
            <button style={buttonStyle} onClick={volgendeStap}>
              QR code gevonden
            </button>
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

                  <button style={buttonStyle} onClick={volgendeStap}>
                    Bewijs versturen
                  </button>
                </>
              )}
            </>
          )}

          {huidigeStap.type === 'politie' && (
            <button
              style={buttonStyle}
              onClick={volgendeStap}
            >
              Vluchten
            </button>
          )}

          {huidigeStap.type === 'einde' && (
            <button style={buttonStyle}>MISSIE VOLTOOID - BUIT GEVONDEN</button>
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
