import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>Blog</h1>
      <h2>personal blog site for random notes.</h2>

      <Features />

      <div className="explanation">
            <p>Find my links below.</p>

        <ul>
        <li><a href="https://www.inoreader.com/u/wogong">inoreader</a></li>
        <li><a href="https://www.instapaper.com/p/wogong">instapaper</a></li>
        <li><a href="https://pinboard.in/u:wogong">pinboard</a></li>
        <li><a href="https://github.com/wogong">github</a></li>
        <li><a href="https://www.douban.com/people/wogong38/">douban</a></li>
        <li><a href="https://twitter.com/wogong0">twitter</a></li>
        <li><a href="https://weibo.com/wogong38">weibo</a></li>
        <li><a href="https://www.instagram.com/wogong">instagram</a></li>
        </ul>

        <p>Contact me.</p>

        <ul>
        <li>email</li>
        <li><code class="language-plaintext highlighter-rouge">gpg --recv-key 09DD1201</code></li>
        <li><a href="http://telegram.me/wogong">telegram.me/wogong</a></li>
        </ul>
      </div>
    </div>
  </>
)
