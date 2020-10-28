import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <Link href="/foo">/foo</Link>
        </h1>
        Locale: {router.locale}
        <Image width={500} height={500} src="/epic.jpg" alt="epic" />
      </main>
    </div>
  )
}
