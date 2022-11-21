import React from 'react'
import './navigation.scss'

export function Navigation() {
  return (
    <div className="d-sa">
      <header className="mb-6 ">
        <div className="container">
          <nav className="red-outline d-flex flex-items-center text-gray nav-space">
            <div className="left-hand-side">
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
            </div>
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
      </header>
    </div>
  )
}

// Path: src/components/octocat.tsx
