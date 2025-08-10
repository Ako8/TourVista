import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Mountain, 
  Star, 
  MapPin, 
  Wifi, 
  Car, 
  Utensils, 
  Flame, 
  Trees, 
  Waves,
  Shield,
  Clock,
  Users,
  Heart,
  Award,
  Phone,
  Mail
} from "lucide-react";
import { Link } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const features = [
  { icon: Mountain, title: "Mountain Views", description: "Stunning panoramic views of the Caucasus Mountains" },
  { icon: Trees, title: "Forest Location", description: "Surrounded by pristine Georgian forest" },
  { icon: Wifi, title: "High-Speed WiFi", description: "Stay connected with reliable internet" },
  { icon: Car, title: "Free Parking", description: "Secure parking available for all guests" },
  { icon: Utensils, title: "Local Cuisine", description: "Authentic Svan dishes and Georgian specialties" },
  { icon: Flame, title: "Fire Pit", description: "Cozy evenings around the communal fire pit" },
  { icon: Waves, title: "Wellness Area", description: "Relaxation and wellness facilities" },
  { icon: Shield, title: "24/7 Security", description: "Safe and secure environment" }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "USA",
    rating: 5,
    text: "An absolutely magical experience! The domes are incredibly comfortable and the mountain views are breathtaking."
  },
  {
    name: "Marco Rossi",
    country: "Italy", 
    rating: 5,
    text: "Perfect blend of luxury and nature. The staff was amazing and the food was exceptional."
  },
  {
    name: "Anna Schmidt",
    country: "Germany",
    rating: 5,
    text: "Best glamping experience ever! The location is stunning and the facilities are top-notch."
  }
];

const stats = [
  { number: "4.9", label: "Guest Rating", icon: Star },
  { number: "150+", label: "Happy Guests", icon: Users },
  { number: "24/7", label: "Guest Support", icon: Clock },
  { number: "100%", label: "Satisfaction", icon: Heart }
];

const galleryImages = [
  {
    src:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/714347215.jpg?k=ee0c520e7be00ff5bc4f37ef777764c1a0c435be0dc9539f03af7ca8ac8a0321&o=",
    alt: "Cozy glamping dome interior",
  },
  {
    src:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/714346758.jpg?k=99e1bf525b687b2fa1a13ebbb823509475fbe988e87a44b8a20774abcfde64d0&o=",
    alt: "Caucasus mountain sunrise",
  },
  {
    src:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/714346765.jpg?k=39116091486256b30bb37422c909fdfca630f5202ab967c9a3847a2186e3ef28&o=",
    alt: "Forest trail near the site",
  },
  {
    src:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/714347219.jpg?k=ed38dacf48b82532321fcf501eb56026e20aa51acb34722b99092a8faa82cc56&o=",
    alt: "Evening campfire ambiance",
  },
  {
    src:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/714347212.jpg?k=7f196ec84ab1730073fd32a2fe783773d2bb895ff0b9cf57cc5f19876004ef4d&o=",
    alt: "River and valley view",
  },
  {
    src:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/714350873.jpg?k=bf58422fe5cedb7493085c7490399e606b93a96d331b4fbf028b27a138a1ab4f&o=",
    alt: "Starry night over domes",
  },
];

export default function About() {
  const [activeSection, setActiveSection] = useState("story");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 glassmorphism z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/home" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Tour</span>
          </Link>
          
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <Mountain className="text-white w-5 h-5" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold">Glamp Peaks Mestia</h1>
              <p className="text-xs text-gray-300">Luxury Glamping</p>
            </div>
          </Link>
        </div>
      </header>

      {/* Navigation Tabs */}
      <section className="sticky top-20 glassmorphism z-40">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8 py-4 overflow-x-auto">
            {[
              { id: "story", label: "Our Story" },
              { id: "features", label: "Features" },
              { id: "testimonials", label: "Reviews" },
              { id: "location", label: "Location" },
              { id: "contact", label: "Contact" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeSection === tab.id
                    ? "bg-foreground/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <main className="max-w-7xl mx-auto px-4 py-16 pt-28">
        {activeSection === "story" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-16"
          >
            {/* Story */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-6">Our Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Born from a passion for adventure and sustainable tourism, Glamp Peaks Mestia represents a new way to experience the untamed beauty of Georgia's Svaneti region.
                  </p>
                  <p>
                    Our unique geodesic domes offer an unprecedented level of comfort while maintaining harmony with the surrounding environment. Each dome is carefully positioned to maximize privacy while offering breathtaking views of the Caucasus Mountains.
                  </p>
                  <p>
                    We believe that luxury shouldn't come at the expense of nature. That's why every aspect of our facility has been designed with sustainability in mind, from solar power systems to locally-sourced materials.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={"https://cf.bstatic.com/xdata/images/hotel/max1024x768/714348808.jpg?k=66828314678bc6706840006edd24cb3811dc7ccd84acd14104b87953911eb5fe&o="}
                        alt={"Glamp Peaks Mestia"}
                        className="aspect-[4/3] w-full h-full object-cover rounded-xl hover:opacity-90 transition"
                        loading="lazy"
                      />
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Image Gallery */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-semibold">Gallery</h4>
                <p className="text-sm text-muted-foreground">Tap an image to view full size</p>
              </div>
              <div className="relative">
                <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                  <CarouselContent>
                    {galleryImages.map((image) => (
                      <CarouselItem key={image.src} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Dialog>
                            <DialogTrigger asChild>
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="aspect-[4/3] w-full h-full object-cover rounded-xl hover:opacity-90 transition"
                                loading="lazy"
                              />
                            </DialogTrigger>
                            <DialogContent className="max-w-5xl bg-black/90 p-0 border-white/10">
                              <img src={image.src} alt={image.alt} className="w-full h-auto rounded-md" />
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="bg-foreground/10 border-foreground/20 text-foreground hover:bg-foreground/15" />
                  <CarouselNext className="bg-foreground/10 border-foreground/20 text-foreground hover:bg-foreground/15" />
                </Carousel>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}

        {activeSection === "features" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-4">Premium Features</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every detail has been carefully crafted to ensure your stay is both comfortable and memorable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glassmorphism p-6 rounded-2xl hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                     <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}

        {activeSection === "testimonials" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-4">Guest Experiences</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear what our guests have to say about their unforgettable stays.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glassmorphism p-6 rounded-2xl"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.country}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {activeSection === "location" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-4">Our Location</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the pristine beauty of Svaneti, one of Georgia's most spectacular regions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Mestia, Svaneti Region</h4>
                    <p className="text-muted-foreground">
                      Located in the heart of Upper Svaneti, our glamping site offers unparalleled access to some of the most stunning mountain scenery in the Caucasus.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mountain className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">UNESCO World Heritage</h4>
                    <p className="text-muted-foreground">
                      Svaneti is recognized by UNESCO for its unique medieval architecture and pristine mountain landscapes.
                    </p>
                  </div>
                </div>

                <div className="glassmorphism p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Getting Here</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 2.5 hours drive from Zugdidi</li>
                    <li>• 4 hours drive from Kutaisi</li>
                    <li>• 6 hours drive from Tbilisi</li>
                    <li>• Airport transfer available</li>
                  </ul>
                </div>
              </div>

              <div className="aspect-square rounded-2xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2914.4153716793608!2d42.75799799999999!3d43.074762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDA0JzI5LjEiTiA0MsKwNDUnMjguOCJF!5e0!3m2!1sen!2sge!4v1754857354132!5m2!1sen!2sge" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === "contact" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ready to plan your adventure? We're here to help make your stay unforgettable.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="glassmorphism p-6 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-400" />
                      <span>+995 123 456 789</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span>info@glamppeaksmestia.ge</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-purple-400" />
                      <span>Mestia, Svaneti Region, Georgia</span>
                    </div>
                  </div>
                </div>

                <div className="glassmorphism p-6 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4">Awards & Recognition</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span>Best Glamping Experience 2024</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span>TripAdvisor Certificate of Excellence</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Trees className="w-5 h-5 text-green-400" />
                      <span>Sustainable Tourism Award</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glassmorphism p-6 rounded-2xl">
                <h4 className="text-xl font-semibold mb-4">Send us a Message</h4>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 rounded-lg bg-white border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 rounded-lg bg-white border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full p-3 rounded-lg bg-white border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-400 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 rounded-lg hover:from-green-500 hover:to-blue-600 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.section>
        )}
      </main>

      {/* Footer */}
      <footer className="glassmorphism mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <Mountain className="text-white w-4 h-4" />
            </div>
            <span className="font-bold">Glamp Peaks Mestia</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2025 Glamp Peaks Mestia. All rights reserved. | Luxury Glamping in Svaneti, Georgia
          </p>
        </div>
      </footer>
    </div>
  );
}