import { ImageResponse } from '@vercel/og'

export const dynamic = 'force-static'

export const alt = 'COLLAB - Jam Band | Real-time Collaborative Jamming'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          collab
        </div>
        
        <div
          style={{
            fontSize: 36,
            color: 'white',
            textAlign: 'center',
            fontWeight: '500',
          }}
        >
          Music In Your Hands
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 