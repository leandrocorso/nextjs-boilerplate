import Head from 'next/head'

import Logo from 'assets/logo.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Meu app</title>
        <Logo />
      </Head>

      <main>Meu app</main>
    </div>
  )
}

export default Home
