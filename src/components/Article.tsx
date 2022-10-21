import React from 'react'

type articleProps = {}

export function article(props: articleProps) {
  return (
    <article className="card">
      <div className="card-content">
        <img className="octocat" src={props.octocatUrl} />
      </div>
    </article>
  )
}
