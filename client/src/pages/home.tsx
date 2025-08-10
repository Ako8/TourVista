import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { 
  Menu, 
  X, 
  Mountain, 
  House, 
  Bed, 
  Trees, 
  UtensilsCrossed, 
  Waves, 
  Flame,
  Phone,
  MapPin,
  Star
} from "lucide-react";
import { FaFacebook, FaInstagram, FaAirbnb } from "react-icons/fa";
import { HiGlobeAlt } from "react-icons/hi";
import { useIsMobile } from "@/hooks/use-mobile";

interface Room {
  id: string;
  name: string;
  icon: any;
  color: string;
}

const rooms: Room[] = [
  { id: "71r4N", name: "Overview", icon: Mountain, color: "text-blue-400" },
  { id: "hn48x", name: "Glamping Domes", icon: House, color: "text-green-400" },
  { id: "hn48C", name: "Interior View", icon: Bed, color: "text-purple-400" },
  { id: "hn48z", name: "Forest Area", icon: Trees, color: "text-emerald-400" },
  { id: "hn4xc", name: "Dining Area", icon: UtensilsCrossed, color: "text-orange-400" },
  { id: "hn4g5", name: "Wellness Area", icon: Waves, color: "text-cyan-400" },
  { id: "hn4gh", name: "Fire Pit", icon: Flame, color: "text-red-400" },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("71r4N");
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const selectRoom = (roomId: string) => {
    setSelectedRoom(roomId);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [sidebarOpen]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("sidebar");
      const toggle = document.getElementById("sidebarToggle");
      
      if (sidebarOpen && sidebar && toggle && 
          !sidebar.contains(event.target as Node) && 
          !toggle.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [sidebarOpen]);

  const kuulaUrl = `https://kuula.co/share/collection/71r4N?logo=-1&info=0&fs=0&vr=0&gyro=0&thumbs=1&inst=0`;

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Kuula 360° Tour Iframe */}
      <iframe
        src={kuulaUrl}
        className="w-full h-screen border-none"
        allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
        allowFullScreen
        scrolling="no"
        title="360° Virtual Tour"
        referrerPolicy="no-referrer-when-downgrade"
        frameBorder="0"
      />

      {/* Sidebar Toggle Button */}
      <motion.button
        id="sidebarToggle"
        onClick={toggleSidebar}
        className={`fixed top-4 glassmorphism glassmorphism-hover p-3 rounded-lg z-50 transition-all duration-200 ${
          sidebarOpen ? 'left-[21rem] lg:left-[25rem]' : 'left-4'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {sidebarOpen ? (
          <X className="text-white text-lg" />
        ) : (
          <Menu className="text-white text-lg" />
        )}
      </motion.button>

      {/* Left Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            id="sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-0 top-0 h-full w-80 lg:w-96 glassmorphism z-40"
          >
            <div className="p-6 h-full flex flex-col">
              {/* Header with Logo */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Mountain className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-white">Glamp Peaks</h1>
                    <p className="text-sm text-gray-300">Mestia</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">Luxury Glamping Experience in Svaneti</p>
              </div>

              {/* Navigation Menu */}
              <nav className="flex-1 overflow-y-auto">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
                  Virtual Tour
                </h3>
                
                <div className="space-y-2">
                  {rooms.map((room) => {
                    const IconComponent = room.icon;
                    const isActive = selectedRoom === room.id;
                    
                    return (
                      <motion.button
                        key={room.id}
                        onClick={() => selectRoom(room.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-200 border ${
                          isActive 
                            ? "bg-white/20 border-white/30" 
                            : "border-transparent hover:bg-white/10 hover:border-white/20"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-3">
                          <IconComponent className={`${room.color} w-5 h-5`} />
                          <span className="text-white font-medium">{room.name}</span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </nav>

              {/* Footer Info */}
              <div className="mt-8 pt-6 border-t border-white/20 space-y-4">
                <div className="text-sm text-gray-300 space-y-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-blue-400 w-4 h-4" />
                    <span>Mestia, Svaneti, Georgia</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="text-yellow-400 w-4 h-4" />
                    <span>4.9 · Luxury Glamping</span>
                  </div>
                </div>
                
                <Link 
                  href="/about"
                  className="block w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all text-center"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VR Mode Indicator */}
      <div className="fixed top-4 right-4 glassmorphism p-2 rounded-lg z-40">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-xs text-gray-300">VR Ready</span>
        </div>
      </div>

      {/* Bottom Social Bar */}
      <div className="fixed bottom-0 left-0 right-0 glassmorphism z-30">
        <div className="px-4 py-3 lg:px-6 lg:py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="text-blue-400 w-4 h-4" />
                <span className="text-gray-300">+995 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="text-green-400 w-4 h-4" />
                <span className="text-gray-300">Mestia, Svaneti Region</span>
              </div>
            </div>

            {/* Social & Booking */}
            <div className="flex items-center justify-between sm:justify-end space-x-4">
              {/* Social Media */}
              <div className="flex items-center space-x-3">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaFacebook className="text-lg" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram className="text-lg" />
                </motion.a>
              </div>

              {/* Booking Buttons */}
              <div className="flex items-center space-x-2">
                <motion.a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiGlobeAlt className="w-4 h-4" />
                  <span>Booking.com</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaAirbnb className="w-4 h-4" />
                  <span>Airbnb</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
