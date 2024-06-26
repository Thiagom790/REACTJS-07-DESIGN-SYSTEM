import { colors } from '@thiagom790-ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return (
    <div style={{ border: '1px solid #000' }}>
      {Object.entries(colors).map(([key, color]) => (
        <div
          key={key}
          style={{
            backgroundColor: color,
            padding: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
            }}
          >
            <strong>${key}</strong>
            <span>{color}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
