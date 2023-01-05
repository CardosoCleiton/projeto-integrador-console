import React from 'react'
import ProductGet from './enpoints/ProductGet'
import ProductPost from './enpoints/ProductPost'
import TokenPost from './enpoints/TokenPost'
import UserPost from './enpoints/UserPost'
import './style_api.css'

export const Api = () => {
  return (
    <div className = 'test'>

      <section>
      <h2>USE POST</h2>
      <br/>
      <br/>
      <UserPost/>
      </section>

      <section>
      <h2>TOKEN POST</h2>
      <TokenPost/>
      </section>

      <section>
      <h2>PRODUCT POST</h2>
      <ProductPost/>
      </section>

      <section>
      <h2>PRODUCT GET</h2>
      <ProductGet/>
      </section>


    </div>
  )
}

export default Api
