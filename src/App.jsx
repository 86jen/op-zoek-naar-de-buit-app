export default function App() {
  const opdrachten = [
    {
      titel: 'Snackbar',
      hint: 'Hier komen saus en snacks samen.',
      opdracht: 'Maak een groepsfoto alsof jullie iets verdachts bespreken.'
    },
    {
      titel: 'Kerkhof',
      hint: 'Zoek de plek waar stilte woont.',
      opdracht: 'Doe alsof jullie een zombieaanval overleven.'
    }
  ]

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Op zoek naar de buit</h1>

      {opdrachten.map((item, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            padding: '20px',
            marginBottom: '20px',
            borderRadius: '10px'
          }}
        >
          <h2>{item.titel}</h2>
          <p><strong>Hint:</strong> {item.hint}</p>
          <p><strong>Opdracht:</strong> {item.opdracht}</p>
        </div>
      ))}
    </div>
  )
}
