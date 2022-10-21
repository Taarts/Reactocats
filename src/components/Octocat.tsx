import React from 'react'

type octocatProps = {
  name: string
  creator: string
  catNum: string
}

export function Octocat(props: octocatProps) {
  return (
    <div className="octocat">
      <a href={`https://octodex.github.com//${props.name}/`}>
        <img
          className="kitty"
          src={`https://octodex.github.com//images/${props.name}.png`}
          width="400"
          height="400"
          alt={props.name}
        />
      </a>
      <ul className="tagged">
        <li>
          <text>{props.catNum}</text>
          <a href={`https://octodex.github.com//${props.name}/`}>
            <strong>{props.name}</strong>
          </a>
        </li>
        <li>
          <a href={`https://github.com/${props.creator}`}>
            <img
              className="small"
              src={`https://github.com/${props.creator}.png`}
              width="24px"
              height="24px"
              alt={props.creator}
            />
          </a>
        </li>
      </ul>
    </div>
  )
}
