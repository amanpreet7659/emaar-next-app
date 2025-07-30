import { Search, Globe, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-emaar-dark text-white border-b border-gray-800">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-gray-800">
          <div className="flex items-center space-x-6">
            <Link
              href="/careers"
              className="hover:text-emaar-gold transition-colors"
            >
              CAREERS
            </Link>
            <Link
              href="/investor-relations"
              className="hover:text-emaar-gold transition-colors"
            >
              INVESTOR RELATIONS
            </Link>
            <Link
              href="/community"
              className="hover:text-emaar-gold transition-colors"
            >
              COMMUNITY
            </Link>
            <Link
              href="/sustainability"
              className="hover:text-emaar-gold transition-colors"
            >
              SUSTAINABILITY
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <select className="bg-transparent border-none text-white text-sm">
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-emaar-gold"
            >
              <User className="w-4 h-4 mr-2" />
              MY ACCOUNT
            </Button>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-wider">EMAAR</span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-emaar-gold data-[state=open]:text-emaar-gold">
                  PROPERTIES
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/properties/featured"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Featured Properties
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Discover our latest luxury developments
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/properties/dubai"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Dubai
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Premium properties in Dubai
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/properties/international"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          International
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Global property portfolio
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/communities"
                  className="text-white hover:text-emaar-gold transition-colors font-medium"
                >
                  COMMUNITIES
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/lifestyle"
                  className="text-white hover:text-emaar-gold transition-colors font-medium"
                >
                  LIFESTYLE
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/about"
                  className="text-white hover:text-emaar-gold transition-colors font-medium"
                >
                  ABOUT EMAAR
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/news"
                  className="text-white hover:text-emaar-gold transition-colors font-medium"
                >
                  NEWS
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className="text-white hover:text-emaar-gold transition-colors font-medium"
                >
                  CONTACT
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search properties..."
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 pl-10 w-64"
              />
            </div>

            <Button className="lg:hidden" variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
