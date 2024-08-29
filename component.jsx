/**
 * v0 by Vercel.
 * @see https://v0.dev/t/P3m0PO9nmGI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] text-white">
      <div className="max-w-4xl w-full px-6 py-12 bg-[#1f1f1f] rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h2 className="text-2xl font-bold">John Doe's Shop & Linktree</h2>
              <p className="text-sm text-muted-foreground">@johndoeshop</p>
            </div>
            <Tabs defaultValue="links" className="animate-fade-in">
              <TabsList className="flex gap-4">
                <TabsTrigger value="links">Links</TabsTrigger>
                <TabsTrigger value="shop">Shop</TabsTrigger>
              </TabsList>
              <TabsContent value="links" className="animate-fade-in">
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="#"
                    className="bg-[#2b2b2b] rounded-lg p-4 flex flex-col gap-2 items-center hover:bg-[#3b3b3b] transition-colors duration-300 ease-in-out"
                    prefetch={false}
                  >
                    <InstagramIcon className="w-6 h-6" />
                    <span className="text-sm">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#2b2b2b] rounded-lg p-4 flex flex-col gap-2 items-center hover:bg-[#3b3b3b] transition-colors duration-300 ease-in-out"
                    prefetch={false}
                  >
                    <TwitterIcon className="w-6 h-6" />
                    <span className="text-sm">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#2b2b2b] rounded-lg p-4 flex flex-col gap-2 items-center hover:bg-[#3b3b3b] transition-colors duration-300 ease-in-out"
                    prefetch={false}
                  >
                    <LinkedinIcon className="w-6 h-6" />
                    <span className="text-sm">LinkedIn</span>
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#2b2b2b] rounded-lg p-4 flex flex-col gap-2 items-center hover:bg-[#3b3b3b] transition-colors duration-300 ease-in-out"
                    prefetch={false}
                  >
                    <YoutubeIcon className="w-6 h-6" />
                    <span className="text-sm">YouTube</span>
                  </Link>
                </div>
              </TabsContent>
              <TabsContent value="shop" className="animate-fade-in">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="bg-[#2b2b2b] rounded-lg p-4 flex flex-col gap-4 hover:bg-[#3b3b3b] transition-colors duration-300 ease-in-out">
                    <img
                      src="/placeholder.svg"
                      alt="Product 1"
                      width={200}
                      height={200}
                      className="rounded-lg object-cover w-full aspect-square"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-semibold">Product 1</h3>
                      <p className="text-sm text-muted-foreground">Description of Product 1</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold">$19.99</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-[#3b3b3b] hover:text-white transition-colors duration-300 ease-in-out"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2b2b2b] rounded-lg p-4 flex flex-col gap-4 hover:bg-[#3b3b3b] transition-colors duration-300 ease-in-out">
                    <img
                      src="/placeholder.svg"
                      alt="Product 2"
                      width={200}
                      height={200}
                      className="rounded-lg object-cover w-full aspect-square"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-semibold">Product 2</h3>
                      <p className="text-sm text-muted-foreground">Description of Product 2</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold">$24.99</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-[#3b3b3b] hover:text-white transition-colors duration-300 ease-in-out"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2b2b2b] rounded-lg p-4 flex flex-col gap-4 hover:bg-[#3b3b3b] transition-colors duration-300 ease-in-out">
                    <img
                      src="/placeholder.svg"
                      alt="Product 3"
                      width={200}
                      height={200}
                      className="rounded-lg object-cover w-full aspect-square"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-semibold">Product 3</h3>
                      <p className="text-sm text-muted-foreground">Description of Product 3</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold">$29.99</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-[#3b3b3b] hover:text-white transition-colors duration-300 ease-in-out"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2b2b2b] rounded-lg p-4 flex flex-col gap-4 hover:bg-[#3b3b3b] transition-colors duration-300 ease-in-out">
                    <img
                      src="/placeholder.svg"
                      alt="Product 4"
                      width={200}
                      height={200}
                      className="rounded-lg object-cover w-full aspect-square"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-semibold">Product 4</h3>
                      <p className="text-sm text-muted-foreground">Description of Product 4</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold">$34.99</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-[#3b3b3b] hover:text-white transition-colors duration-300 ease-in-out"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2b2b2b] rounded-lg p-4 flex flex-col gap-4 hover:bg-[#3b3b3b] transition-colors duration-300 ease-in-out">
                    <img
                      src="/placeholder.svg"
                      alt="Product 5"
                      width={200}
                      height={200}
                      className="rounded-lg object-cover w-full aspect-square"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-semibold">Product 5</h3>
                      <p className="text-sm text-muted-foreground">Description of Product 5</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold">$39.99</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-[#3b3b3b] hover:text-white transition-colors duration-300 ease-in-out"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2b2b2b] rounded-lg p-4 flex flex-col gap-4 hover:bg-[#3b3b3b] transition-colors duration-300 ease-in-out">
                    <img
                      src="/placeholder.svg"
                      alt="Product 6"
                      width={200}
                      height={200}
                      className="rounded-lg object-cover w-full aspect-square"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-semibold">Product 6</h3>
                      <p className="text-sm text-muted-foreground">Description of Product 6</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold">$44.99</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-[#3b3b3b] hover:text-white transition-colors duration-300 ease-in-out"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
