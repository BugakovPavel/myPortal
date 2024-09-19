import React, { useState } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { ThreeDots } from 'react-loader-spinner'
import styles from './MyMap.module.css'

export default function MyMap() {
  const [loading, setLoading] = useState(true)
  const mapState = {
    center: [55.71316572220023, 37.62022087085814],
    zoom: 16,
  }
  const handleLoad = () => {
    setLoading(false)
  }

  return (
    <div className={styles.mapBody}>
      {loading && (
        <div className={styles.loader}>
          <ThreeDots color="#00BFFF" height={100} width={100} />
          <p>Loading map...</p>
        </div>
      )}
      <YMaps query={{ apikey: '573d0f6f-dc86-49a7-8aca-4093eba12fe5' }}>
        <Map state={mapState} width="100%" height="100%" onLoad={handleLoad}>
          <Placemark geometry={[55.71316572220023, 37.62022087085814]} />
        </Map>
      </YMaps>
    </div>
  )
}
