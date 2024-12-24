import React from 'react'
import clasess from './loading.module.css'

const MealsLoadingPage = () => {
  return (
    <p className={clasess.loading}>Fetching meals...</p>
  )
}

export default MealsLoadingPage