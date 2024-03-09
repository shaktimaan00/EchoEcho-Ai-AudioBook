import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Header from "./components/Header"

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center min-h-[100dvh]">
      <Header/>
      <main className="flex-1">
      <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex flex-col items-center justify-center space-y-4 gap-12 px-4 md:px-6 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                AI-powered Audiobooks
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Listen to your favorite books narrated by AI. Create your own audio podcasts or audiobooks.
              </p>
            </div>
            <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/create"
              >
                Get Started
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border  border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:grid-cols-[1fr_600px] lg:gap-10">
            <div className="space-y-2 lg:items-start lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Listen to your favorite books
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Access a wide range of genres and bestsellers. Personalize your listening experience with our AI
                narrator.
              </p>
            </div>
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:order-last"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:grid-cols-[1fr_600px] lg:gap-10">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
            <div className="space-y-2 lg:items-start lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Create your own audiobooks
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Turn your text into speech. Record your own podcasts. Let your voice be heard.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:grid-cols-[1fr_600px] lg:gap-10">
            <div className="space-y-2 lg:items-start lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Personalized recommendations
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover new books based on your preferences. Our AI analyzes your listening habits to provide you with
                the perfect suggestions.
              </p>
            </div>
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:grid-cols-[1fr_600px] lg:gap-10">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
            <div className="space-y-2 lg:items-start lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Family-friendly content</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let your kids enjoy audiobooks. We offer a curated selection of children's stories and educational
                content.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:grid-cols-[1fr_600px] lg:gap-10">
            <div className="space-y-2 lg:items-start lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Exclusive content</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Access audiobooks that you won't find anywhere else. We partner with authors and publishers to bring you
                original and exclusive stories.
              </p>
            </div>
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:grid-cols-[1fr_600px] lg:gap-10">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
            <div className="space-y-2 lg:items-start lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sleep stories</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Relax and unwind with our collection of soothing sleep stories. Let the gentle narration lull you into a
                peaceful slumber.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:grid-cols-[1fr_600px] lg:gap-10">
            <div className="space-y-2 lg:items-start lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Podcasts on the go</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Listen to your favorite podcasts wherever you are. Catch up on the latest episodes and explore new
                shows.
              </p>
            </div>
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:grid-cols-[1fr_600px] lg:gap-10">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
            <div className="space-y-2 lg:items-start lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">On-the-go learning</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Expand your mind with our collection of educational audio content. Learn new languages, explore history,
                and dive into science.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:grid-cols-[1fr_600px] lg:gap-10">
            <div className="space-y-2 lg:items-start lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Thrilling adventures</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Immerse yourself in captivating stories of mystery, romance, and suspense. Let our audiobooks transport
                you to other worlds.
              </p>
            </div>
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Discover the Best Stories</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Browse our collection of AI-generated audiobooks across different genres and categories.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-2 lg:gap-12">
              <Card className="w-full max-w-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">The Art of Mindfulness</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Embrace the present moment with this guide to mindfulness.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full max-w-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">The Science of Happiness</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Discover the secrets to a happier life with this eye-opening audiobook.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full max-w-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">The Mystery of the Missing Diamond</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Join detective Emma as she solves the case of the missing diamond in this thrilling adventure.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full max-w-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">The Epic Quest: A Fantasy Adventure</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Embark on an epic quest through the enchanted forest in this magical fantasy.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View All
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Listen to the Future</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Experience the next generation of audiobooks with our AI-generated platform.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet our Customers</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Trusted by the best teams in the world. We help teams of all sizes.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
              </div>
              <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Contact Sales
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
    </main>
  );
}

  // import Link from "next/link"

  // export default function Component() {
  //   return (
  //     <div className="flex flex-col min-h-[100dvh]">
  //       <header className="px-4 lg:px-6 h-14 flex items-center">
  //         <Link className="flex items-center justify-center" href="#">
  //           <MountainIcon className="h-6 w-6" />
  //           <span className="sr-only">Acme Inc</span>
  //         </Link>
  //         <nav className="ml-auto flex gap-4 sm:gap-6">
  //           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
  //             Features
  //           </Link>
  //           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
  //             Pricing
  //           </Link>
  //           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
  //             About
  //           </Link>
  //           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
  //             Contact
  //           </Link>
  //         </nav>
  //       </header>
  //       <main className="flex-1">
          
  //         <section className="w-full py-12 md:py-24 lg:py-32 border-t">
  //           <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:grid-cols-[1fr_600px] lg:gap-10">
  //             <div className="space-y-2 lg:items-start lg:text-left">
  //               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Support</h2>
  //               <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
  //                 Have a question or need assistance? Our support team is here to help. Reach out to us and we'll get back
  //                 to you as soon as possible.
  //               </p>
  //             </div>
  //             <img
  //               alt="Image"
  //               className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
  //               height="400"
  //               src="/placeholder.svg"
  //               width="600"
  //             />
  //           </div>
  //         </section>
  //       </main>
  //       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
  //         <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
  //         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
  //           <Link className="text-xs hover:underline underline-offset-4" href="#">
  //             Terms of Service
  //           </Link>
  //           <Link className="text-xs hover:underline underline-offset-4" href="#">
  //             Privacy
  //           </Link>
  //         </nav>
  //       </footer>
  //     </div>
  //   )
  // }