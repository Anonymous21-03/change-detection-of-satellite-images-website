import './styles/Features.css'

const Features = () => {
  const scrollToFeatures = event => {
    event.preventDefault() // Prevent default form submission behavior
    const featuresSection = document.getElementById('features')
    featuresSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='container-feature' id='features'>
      <div className='feature'>
        <div className='heading'>Land Cover Classification</div>
        <div className='con'>
          <p>
            Land cover classification categorizes Earth's surface into distinct
            types like water, forest, or urban areas. This process, often aided
            by satellite imagery and machine learning, helps us understand and
            monitor land use patterns, analyze environmental changes, and make
            informed decisions about resource management.
          </p>
        </div>
        <div className='getStarted'>
          <button onClick={scrollToFeatures}>
            Try Land cover classification
          </button>
        </div>
      </div>

      <div className='feature'>
        <div className='heading'>Change detection</div>
        <div className='con'>
          <p>
            Change detection in satellite imagery analyzes differences between
            images of the same area captured at different times. It helps us
            identify modifications like deforestation, urban expansion, or
            natural disasters. T his valuable information supports various
            fields, including environmental monitoring, urban planning, a nd
            disaster management, allowing us to track changes over time and make
            informed decisions for a sustainable future.
          </p>
        </div>
        <div className='getStarted'>
          <button onClick={scrollToFeatures}>Try Change Detection</button>
        </div>
      </div>
      <div className='feature'>
        <div className='heading'>Vegetation Monitoring</div>
        <div className='vegcon'>
          <p>
            Satellites act as our watchful eyes, monitoring the health of
            Earth's vegetation. From vast forests to local farms, they reveal
            subtle changes in health, like drought stress or deforestation. This
            information empowers us to protect and manage this vital resource.
          </p>
        </div>
        <div className='getStarted'>
          <button onClick={scrollToFeatures}>Try Vegetation Monitoring</button>
        </div>
      </div>
    </div>
  )
}

export default Features
