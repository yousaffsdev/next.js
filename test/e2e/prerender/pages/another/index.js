import Link from 'next/link'
import fs from 'fs'
import path from 'path'

export async function getStaticProps() {
  const text = fs
    .readFileSync(path.join(process.cwd(), 'world.txt'), 'utf8')
    .trim()
  return {
    props: {
      world: text,
      time: new Date().getTime(),
    },
    revalidate: true,
  }
}

export default ({ world, time }) => (
  <>
    <p>hello {world}</p>
    <span id="anotherTime">time: {time}</span>
    <Link href="/">
      <a id="home">to home</a>
    </Link>
    <br />
    <Link href="/something">
      <a id="something">to something</a>
    </Link>
  </>
)
