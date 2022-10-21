import React from 'react'
import { Navigation } from './components/Navigation'
import { Octocat } from './components/Octocat'

export function App() {
  return (
    <div className="main-content">
      <Navigation />
      <main>
        <article>
          <Octocat name="Octogatos" />
          <Octocat name="Terracottocat_Single" />
          <Octocat name="surftocat" />
        </article>
      </main>
    </div>
  )
}
