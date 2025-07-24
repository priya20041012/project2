import React from 'react'

import Header from '../Header';
import Pricing from '../Pricing';
import Footer from '../Footer';
const layout = ({children}) => {
  return (
    <div>
              <Header />
        <div className=' flex'>
            <Pricing/>
            <main>{children}</main>
        </div>
        <Footer />
    </div>
  )
}

export default layout
