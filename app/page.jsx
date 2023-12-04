import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='text-center head_text'> 
        Discover and Share
        <br className="max-md:hidden" />
        <span className="text-3xl orange_gradient">AI-Powered Prompts</span>
        </h1>
    <p className="decs text-center">
        Nextgen is a community of writers and readers who love to create and share AI-generated prompts.
    </p>
    <Feed />
    </section>
  )
}

export default Home