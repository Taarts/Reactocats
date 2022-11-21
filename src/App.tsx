import React from 'react'
import { Navigation } from './components/navigation/Navigation'
import { Octocat } from './components/octocat/Octocat'
import octocats from './octocats.json'

export function App() {
  const catsFromData = octocats.map((octocat) => (
    <Octocat
      key={octocat.number}
      number={octocat.number}
      name={octocat.name}
      image={octocat.image}
      link={octocat.link}
      authorLink={octocat.authors[0].link}
      authorImage={octocat.authors[0].image}
    />
  ))

  return (
    <div className="main-content">
      <Navigation />
      <main>
        <article>{catsFromData} </article>
      </main>
    </div>
  )
}
