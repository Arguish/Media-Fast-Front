import React, { useState, useEffect } from 'react'

const MediaCard = ({ cardContent, cover }) => {
  const [turn, setTurn] = useState(true)
  const [Ready, setReady] = useState(false)
  useEffect(() => {
    cardContent ? setReady(true) : setReady(false)
  }, [cardContent])

  if (Ready) {
    return (
      <>
        <div
          draggable={true}
          onClick={() => setTurn(!turn)}
          style={{
            margin: '20px',
            width: '300px',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            transform: `rotateY(${turn ? 0 : 180}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'all 500ms',
            userSelect: 'none',
            cursor: 'pointer',
          }}
          className="father"
        >
          <div style={card1}>
            <div style={paper1}>
              <img
                draggable={false}
                style={image}
                src={cardContent.image}
                alt=""
              />
            </div>
          </div>
          <div style={card2}>
            <div style={paper2}>
              <h4 style={{ color: 'black', margin: '5px' }}>
                {cardContent.type === 'movie'
                  ? ''
                  : 'Episode: ' +
                    cardContent.season +
                    ' x ' +
                    cardContent.season_episodes}
              </h4>
              <hr style={{ color: 'black', margin: '5px' }} />
              <p style={{ color: 'black', padding: '20px', margin: '5px' }}>
                {cardContent.description}
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default MediaCard

const card1 = {
  // display: 'absolute',
  border: '10px solid black',
  width: '300px',
  height: '400px',
  display: 'grid',
  placeContent: 'center',
  backgroundColor: '#e94',
  boxShadow: '5px 10px 5px 3px #00000055',
  transform: 'perspective(12cm) translateX(10px)',
  backfaceVisibility: 'hidden',
  transition: 'all 500ms',
  userSelect: 'none',
  cursor: 'pointer',
}
const card2 = {
  border: '10px solid black',
  width: '300px',
  height: '400px',
  display: 'grid',
  placeContent: 'center',
  backgroundColor: '#e94',
  boxShadow: '5px 10px 5px 3px #00000055',
  backfaceVisibility: 'hidden',
  transition: 'all 500ms',
  transform: 'rotateY(180deg) perspective(12cm) translateX(270px)',
  userSelect: 'none',
  cursor: 'pointer',
}
const paper1 = {
  boxShadow: '3px 3px 5px black',
  width: '260px',
  height: '360px',
  display: 'grid',
  placeContent: 'center',
  overflow: 'hidden',

  backgroundColor: 'antiquewhite',
  userSelect: 'none',
  cursor: 'pointer',
}
const paper2 = {
  boxShadow: '3px 3px 5px black',
  width: '260px',
  height: '360px',
  display: 'grid',
  alignItems: 'end',
  placeContent: 'center',

  backgroundColor: 'antiquewhite',
  userSelect: 'none',
  cursor: 'pointer',
}

const image = {
  padding: '5px',
  boxSizing: 'border-box',
  maxWidth: '100%',
  maxHeight: '100%',
  margin: '2px auto',
  border: '0.1px dashed black',
  gridArea: '1/3/1/3',
  objectFit: 'scale-down',
  mixBlendMode: 'multiply',
  userSelect: 'none',
  cursor: 'pointer',
}
