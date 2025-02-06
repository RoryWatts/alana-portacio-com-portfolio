import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Rory Watts
      </h1>
      <div className="space-y-2 text-sm">
        <p>
          {`I'm the CEO of `}
          <a href="https://forecasthealth.org" className="underline hover:text-gray-600">
            Forecast Health International
          </a>
          {`, a company that makes mathematical models for health, 
            and makes the software that uses those models.`}
        </p>
        <p>
          I like reading, computers, linux, AI, music, singing, walking, my family and friends.
        </p>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
