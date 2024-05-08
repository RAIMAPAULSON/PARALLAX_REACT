import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './TextBlock'
import logo from './assets/wanderlust.png'

function App() {

  return (
    <>
      <div>
        <Parallax pages={2} style={{ top: '0', left: '0' }} className='animation'>

          <ParallaxLayer offset={0} speed={1.0}>
            <div className='animation_layer parallax' id='backgroundcolor'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={4.1}>
            <div className='animation_layer parallax' id='moon'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={-0.5}>
            <div className='animation_layer parallax' id='cloud'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={2.7}>
            <div className='animation_layer parallax' id='logo'>
              <img className='imageWL' src={logo} alt="" />
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.75}>
            <div className='animation_layer parallax' id='mountain'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.32}>
            <div className='animation_layer parallax' id='man'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.45}>
            <div className='animation_layer parallax' id='jungle4'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.40}>
            <div className='animation_layer parallax' id='manonmountain'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.35}>
            <div className='animation_layer parallax' id='jungle5'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.25} >
            <TextBlock />
          </ParallaxLayer>
        </Parallax>
      </div>


    </>
  )
}

export default App
