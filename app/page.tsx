import Carousel from '@/components/carousel'

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-mono)]">
      <div>
        <h1 className="text-4xl font-extrabold text-center m-4">
          This is my Portfolio
        </h1>
      </div>
      <div className="pl-20 pr-20">
        <Carousel />
      </div>
    </main>
  )
}
