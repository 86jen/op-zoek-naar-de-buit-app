import { useState } from 'react'

export default function App() {
  const opdrachten = [
    {
      titel: 'Snackbar',
      hint: 'Hier komen saus en snacks samen.',
      opdracht: 'Maak een groepsfoto alsof jullie iets verdachts bespreken.',
      politie: 'Melding: verdachte groep gezien bij snackbar.'
    },
    {
      titel: 'Kerkhof',
      hint: 'Zoek de plek waar stilte woont.',
      opdracht: 'Doe alsof jullie een zombieaanval overleven.'
    }
  ]

  const [huidigeOpdracht, setHuidigeOpdracht] = useState(0)

  function volgendeOpdracht() {
    if (huidigeOpdracht < opdrachten.length - 1) {
      setHuidigeOpdracht(huidigeOpdracht + 1)
    }
  }

  const item = opdrachten[huidigeOpdracht]

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Op zoek naar de buit</h1>

      <div
        style={{
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '20px'
        }}
      >
        <h2>{item.titel}</h2>

        <p>
          <strong>Hint:</strong> {item.hint}
        </p>

        <p>
          <strong>Opdracht:</strong> {item.opdracht}
        </p><p>
  <strong>Politie:</strong> {item.politie}
</p>

        <button
          onClick={volgendeOpdracht}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            cursor: 'pointer'
          }}
        >
          Volgende opdracht
        </button>
      </div>
    </div>
  )
}
