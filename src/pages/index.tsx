import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bruno Wego - Senior Software Engineer | SRE | UI/UX Hobbyist</title>
        <meta name="description" content="Problem Solver. Collaborator. Friendly. Passion for learning. Resourceful. Resilient. Detail-Oriented. Enthusiastic. Self-Motivated." />
        <link rel="icon" type="image/png" href="https://assets.brunowego.com/favicon.png" />
      </Head>

      <main className='container mx-auto px-4'>
        <h1>
          Hey, I&apos;m Bruno! 👨🏻‍💻
        </h1>

        <p>
          Problem Solver. Collaborator. Friendly. Passion for learning. Resourceful. Resilient. Detail-Oriented. Enthusiastic. Self-Motivated.
        </p>
      </main>

      <footer className='container mx-auto px-4'>
        Dedicate yourself every day.
      </footer>
    </>
  )
}

export default Home
