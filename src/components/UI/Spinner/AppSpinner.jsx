import React from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader'
import './Spinner.css'
const AppSpinner = () => {
    const renderSpinner=()=>{
      return(
        <div className='spinner'>
          <ScaleLoader loading={true} size={200} color={'var(--primary-scale-spinner)'}/>
        </div>
      )
    }
  return (
    <>
      {renderSpinner()}
    </>
  )
}

export default AppSpinner
