import Link from 'next/link'
import { useRouter } from 'next/router'

const Page = () => (
  <>
    <Link href={`${useRouter().basePath}/other-page`}>
      <a id="other-page-link">
        <h1>Hello World</h1>
      </a>
    </Link>
  </>
)

export default Page
