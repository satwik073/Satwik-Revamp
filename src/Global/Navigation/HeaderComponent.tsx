import { BoxTypeIdentifier } from '@/Constants/__config_parameters'
import React from 'react'


const HeaderComponent = () => {
  return (
    <React.Fragment>
        <BoxTypeIdentifier.Default className='w-full h-16 bg-white'>
            <HeaderComponent />
        </BoxTypeIdentifier.Default>
    </React.Fragment>
  )
}

export default HeaderComponent