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
    },
    {
      type: 'hint',
      titel: 'KERKHOF',
      tekst:
        'Zoek de plek waar stilte begint. Kijk goed om je heen en ga even zitten.',
      qr: 'KERKHOF456',
      code: '2948'
    },
    {
      type: 'opdracht',
      titel: 'ZOMBIEAANVAL',
      tekst:
        'Maak een foto alsof jullie een zombieaanval proberen te overleven.'
    },
    {
      type: 'hint',
      titel: 'SCHOOL',
      tekst:
        'Steek de weg over naar de plek waar jongeren dagelijks vastzitten.',
      qr: 'SCHOOL999',
      code: '6403'
    },
    {
      type: 'extra',
      titel: 'VERMOMMING',
      tekst:
        'Verander jullie uiterlijk. Ruil onderling één kledingstuk en maak hier een bewijsfoto van.'
    },
    {
      type: 'politie',
      titel: 'SPOEDMELDING',
      tekst:
        'De politie heeft een signalement ontvangen van 5 jongens van ongeveer 12 tot 13 jaar oud.'
}
