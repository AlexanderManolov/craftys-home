import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Loading from '../loading'

const Home = () => {
  return (
    <>
      <ClerkLoading>
        <Loading />
      </ClerkLoading>
      <ClerkLoaded>
        <header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
        <main className='flex flex-col items-center justify-between p-24'>
          Home Page
        </main>
      </ClerkLoaded>
    </>
  )
}

export default Home
