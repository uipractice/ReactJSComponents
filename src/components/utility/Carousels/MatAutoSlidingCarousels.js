import React, { useState } from 'react';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { Slide } from 'material-auto-rotating-carousel';
import { red, blue, green } from '@mui/material/colors'
import { Button } from '@mui/material';

function MatAutoSlidingCarousels() {
  const [state, setState] = useState(true);

  return (
    <div style={{ position: 'relative', width: '100%', marginTop: '10px' }}>
      <Button onClick={() => setState({ open: true })}>Open carousel</Button>
      <AutoRotatingCarousel
        label='Click me to Close'
        open={state.open}
        onClose={() => setState({ open: false })}
        onStart={() => setState({ open: false })}
        style={{ position: 'absolute' }}
      >
        <Slide
          media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' alt='' />}
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title='This is a very cool feature'
          subtitle='Just using this will blow your mind.'
        />
        <Slide
          media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' alt='' />}
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title='Ever wanted to be popular?'
          subtitle='Well just mix two colors and your are good to go!'
        />
        <Slide
          media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' alt='' />}
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title='May the force be with you'
          subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
        />
      </AutoRotatingCarousel>
    </div>
  )
}

export default MatAutoSlidingCarousels;