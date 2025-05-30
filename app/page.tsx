import Image from "next/image";
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Alana Portacio
      </h1>
      <div className="my-4 flex justify-center">
        <Image
          src="/alana.jpeg"
          alt="Alana Portacio"
          width={180}
          height={180}
          className="rounded-full"
        />
      </div>
      <div className="space-y-2 text-sm">
        <p>
          I'm a Speech Pathologist and Research Assistant at Catholic Education Western Australia and Curtin University in the Greater Perth Area.
        </p>
        <p>
          I specialise in early intervention and paediatrics—with a particular focus on hearing loss, neurodiversity, trauma/mental health, and motor speech conditions. I am passionate about delivering family-centred, strengths-based, and neuro-affirming interventions that empower caregivers, educators, and children. I am also dedicated to mentoring and educating early-career Speech Pathologists.
        </p>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
