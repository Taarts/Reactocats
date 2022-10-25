import React from 'react'

type octocatProps = {
  name: string
  image: string
  link: string
  authorLink: string
  catNum: number
  authorImg: string
}

export function Octocat(props: octocatProps) {
  return (
    <div className="octocat">
      <a href={props.name}>
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
          {props.catNum}
          <a href={props.name}>
            <strong>{props.name}</strong>
          </a>
        </li>
        <li>
          <a href={props.authorLink}>
            <img
              className="small"
              src={props.authorImg}
              width="24px"
              height="24px"
              alt={props.authorLink}
            />
          </a>
        </li>
      </ul>
    </div>
  )
}
