import React from 'react'

export function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#">
              <img
                id="git"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                width="45"
                height="45"
                alt="GithubLogo"
              />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Octodex</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="https://octodex.github.com/faq/">FAQ</a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li id="twitter">
            <a href="https://twitter.com/githubdesign">
              <span>Follow us on Twitter</span>
              <img src="/src/twitter.png" height="30" width="30" />
            </a>
          </li>
          <li id="back">
            <a href="https://github.com/">
              <span>Back to GitHub.com</span> <span id="alt">Back</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
