import {
  Search,
  Calendar,
  MapPin,
  Camera,
  Play,
  ArrowRight,
  Star,
  Download,
  Apple,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-wide">
              ROSEHILL AT DUBAI HILLS ESTATE
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Contemporary 3 and 4 bedroom townhouses in a lush green
              neighborhood
            </p>
            <Button className="bg-emaar-gold text-black hover:bg-emaar-gold/90 px-8 py-3 text-lg font-medium">
              EXPLORE ROSEHILL
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Properties" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dubai-hills">
                      Dubai Hills Estate
                    </SelectItem>
                    <SelectItem value="downtown">Downtown Dubai</SelectItem>
                    <SelectItem value="marina">Dubai Marina</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1m-2m">AED 1M - 2M</SelectItem>
                    <SelectItem value="2m-5m">AED 2M - 5M</SelectItem>
                    <SelectItem value="5m+">AED 5M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-emaar-dark text-white hover:bg-emaar-dark/90 h-11">
                <Search className="w-4 h-4 mr-2" />
                SEARCH
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group cursor-pointer hover:shadow-lg transition-all">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                    alt="Communities 360° Tour"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <Camera className="absolute top-4 right-4 w-6 h-6 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    COMMUNITIES 360° TOUR
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Experience immersive virtual tours of our communities before
                    visiting
                  </p>
                  <Button
                    variant="outline"
                    className="border-emaar-dark text-emaar-dark hover:bg-emaar-dark hover:text-white"
                  >
                    TAKE A TOUR
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-lg transition-all">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                    alt="International Projects"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    INTERNATIONAL PROJECTS
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover Emaar's global portfolio of luxury developments
                  </p>
                  <Button
                    variant="outline"
                    className="border-emaar-dark text-emaar-dark hover:bg-emaar-dark hover:text-white"
                  >
                    EXPLORE PROJECTS
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-lg transition-all">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                    alt="Discover Our Blogs"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    DISCOVER OUR BLOGS
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Stay updated with the latest news, insights, and lifestyle
                    trends
                  </p>
                  <Button
                    variant="outline"
                    className="border-emaar-dark text-emaar-dark hover:bg-emaar-dark hover:text-white"
                  >
                    READ MORE
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Premium Properties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6">
                PREMIUM DUBAI PROPERTIES IN THE BEST LOCATIONS
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our portfolio is positioned at the heart of the city's most
                dynamic neighborhoods and districts that enable a premium
                lifestyle for our residents. From Dubai Creek Harbour to Dubai
                Hills Estate, Downtown Dubai, and Dubai Marina, Emaar has
                created some of the world's most prestigious addresses offering
                a diverse range of properties from apartments and townhouses to
                luxury villas and penthouses.
              </p>
              <Button className="bg-emaar-dark text-white hover:bg-emaar-dark/90">
                EXPLORE ALL PROPERTIES
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2053&auto=format&fit=crop"
                  alt="Dubai Creek Harbour"
                  width={300}
                  height={160}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <Image
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2053&auto=format&fit=crop"
                  alt="Dubai Marina"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                  alt="Downtown Dubai"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <Image
                  src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2053&auto=format&fit=crop"
                  alt="Dubai Hills Estate"
                  width={300}
                  height={160}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-light">FEATURED COMMUNITIES</h2>
            <Button
              variant="ghost"
              className="text-emaar-dark hover:text-emaar-gold"
            >
              VIEW ALL <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "CREEK BEACH",
                location: "RESORT",
                subtitle: "EMAAR BEACHFRONT LIVING",
                image:
                  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2053&auto=format&fit=crop",
              },
              {
                name: "CREEK GATE",
                location: "RESORT",
                subtitle: "COMMUNITY REDEFINED",
                image:
                  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2053&auto=format&fit=crop",
              },
              {
                name: "ARABIAN RANCHES 3",
                location: "RESORT",
                subtitle: "ALLURE BY ARADA + EMAAR",
                image:
                  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2053&auto=format&fit=crop",
              },
              {
                name: "THE HEIGHTS COUNTRY",
                location: "CLUB & WELLNESS",
                subtitle: "RESERVE NOW",
                image:
                  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2053&auto=format&fit=crop",
              },
            ].map((community, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-lg transition-all overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={community.image}
                      alt={community.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold text-lg">
                        {community.name}
                      </h3>
                      <p className="text-sm opacity-90">{community.location}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 font-medium">
                      {community.subtitle}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6">
                THE ONE APP YOU NEED FOR ALL YOUR PROPERTY NEEDS
              </h2>
              <p className="text-gray-600 mb-8">
                Discover, explore, and purchase your dream property with our
                comprehensive mobile application. From virtual tours to payment
                plans, everything you need is at your fingertips.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emaar-dark rounded-full flex items-center justify-center">
                    <Search className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Property search</h4>
                    <p className="text-sm text-gray-600">
                      Advanced search filters
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emaar-dark rounded-full flex items-center justify-center">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Virtual tours</h4>
                    <p className="text-sm text-gray-600">360° property views</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emaar-dark rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Booking</h4>
                    <p className="text-sm text-gray-600">
                      Schedule site visits
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emaar-dark rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Easy Online process</h4>
                    <p className="text-sm text-gray-600">
                      Streamlined purchasing
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-black text-white hover:bg-black/90 flex items-center space-x-2">
                  <Apple className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </Button>
                <Button className="bg-black text-white hover:bg-black/90 flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
                alt="Mobile App Preview"
                width={400}
                height={600}
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emaar-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:text-emaar-gold transition-colors"
                  >
                    Site Map
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emaar-gold transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emaar-gold transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emaar-gold transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">COMMUNITIES</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:text-emaar-gold transition-colors"
                  >
                    Dubai Hills Estate
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emaar-gold transition-colors"
                  >
                    Downtown Dubai
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emaar-gold transition-colors"
                  >
                    Dubai Marina
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emaar-gold transition-colors"
                  >
                    Arabian Ranches
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">ABOUT EMAAR</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:text-emaar-gold transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emaar-gold transition-colors"
                  >
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emaar-gold transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emaar-gold transition-colors"
                  >
                    News & Media
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">EMAAR PROPERTIES</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:text-emaar-gold transition-colors"
                  >
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emaar-gold transition-colors"
                  >
                    Financial Reports
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emaar-gold transition-colors"
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emaar-gold transition-colors"
                  >
                    Awards
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-2xl font-bold">EMAAR</span>
              <span className="text-sm text-gray-400">
                © 2024 Emaar Properties PJSC. All rights reserved.
              </span>
            </div>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-emaar-gold"
              >
                Follow us
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
