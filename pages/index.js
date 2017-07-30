import React from 'react'

import { add10 } from '../util/logic'

const IndexPage = props =>
  <div>
    <h1>This is just a test, dogs!</h1>
    <h2>
      But, 2 + 10 does equal {add10(2)}...
    </h2>
    <style jsx global>{`
      body,
      html {
        height: 100%;
        background-color: #333;
        font-family: Menlo, monospace;
      }
    `}</style>
    <style jsx>{`
      div {
        text-align: center;
      }
      h1 {
        color: papayawhip;
      }
      h2 {
        color: white;
      }
    `}</style>
  </div>

export default IndexPage
