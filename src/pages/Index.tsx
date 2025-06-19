import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { 
  Play, 
  Download, 
  Mail, 
  Phone, 
  Instagram, 
  Youtube, 
  Film, 
  Camera, 
  Edit3, 
  Palette, 
  Monitor,
  Star,
  MapPin,
  User,
  Award,
  Briefcase,
  MessageSquare
} from "lucide-react";
import { Description } from "@radix-ui/react-toast";
import { title } from "process";
import { 
  FaEnvelope, FaYoutube, FaFacebook, FaInstagram, 
  FaTiktok, FaXTwitter, FaLinkedin, FaTelegram, FaGithub, FaGlobe 
} from 'react-icons/fa6';

const iconStyles = {
  envelope:   { color: '#EA4335' }, // Gmail Red
  youtube:    { color: '#FF0000' },
  facebook:   { color: '#1877F3' },
  instagram:  { color: '#E4405F' },
  tiktok:     { color: '#fff' },    // White
  x:          { color: '#fff' },    // White
  linkedin:   { color: '#0A66C2' },
  telegram:   { color: '#229ED9' },
  github:     { color: '#fff' },    // White
  globe:      { color: '#4CAF50' }
};

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Event Coverage:- Livestreaming/ Photography",
      description: "Professional event documentation with cinematic storytelling approach",
      category: "Corporate Event Coverage",
      tools: ["Premiere Pro", "After Effects", "Canon R5 "],
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Kenya Paraplegic Organization Documentary",
      description: "In-depth documentary showcasing the impact of KPO's work in the community",
      category: "Documentaries",
      tools: ["Final Cut Pro", "DaVinci Resolve", "Sony FX"],
      thumbnail: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Content",
      description: "Engaging YouTube video production for a local content creator, focusing on spreading the gospel of GOD,lifestyle and travel,Politics/football,content strategy, and audience engagement",
      category: "YouTube/Facebook/Instagram/TikTok/X",
      tools: ["livestreaming", "OBS Studio" , "Adobe Premiere Pro" ,"Final Cut Pro" , " DaVinci Resolve"],
      thumbnail: "https://i.postimg.cc/h4m8JrPT/495390099-679511234852033-2870589732951527553-n.jpg      npm install react-icons      npm install react-icons"
    },
    {
      id: 4,
      title: "Brand Commercial",
      description: "Cinematic commercial for a local brand, highlighting their products and values",
      category: "Commercial",
      tools: ["Cinema 4D", "After Effects", "Premiere Pro"],
      thumbnail: "https://i.postimg.cc/HkGC6JWM/mmmmmmmmm.jpg=crop"
    }
  ];

  const services = [
    {
      icon: <Film className="w-8 h-8" />,
      title: "Livestreaming/productions",
      description: "High-quality streaming for weddings, conferences, church services, and music events,Real-time audience engagement tools",
        },
    {
      icon: <Edit3 className="w-8 h-8" />,
      title: " Branding & Design",
      description: "Visual identity creation, including logo design, brand guidelines, and marketing materials for businesses and individuals"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Event Coverage",
      description: "Photography (Events, Lifestyle, Studio),Videography (Events, Weddings, Corporate),Drone Shots & Aerial Coverage",
    },
    {
      icon: <Youtube className="w-8 h-8" />,
      title: "YouTube Strategy",
      description: "YouTube channel management, content strategy, video editing, and audience growth strategies for creators and brands"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Digital Strategy",
      description: "Comprehensive digital media strategy development, including content planning, audience targeting, and platform optimization"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Design",
      description: "Engaging and responsive web design for brands and individuals,including portfolio sites and e-commerce solutions"
    }
  ];

  const testimonials = [
    {
      name: "Mr. Fred Saisi",
      role: "Director",
      company: "Red House Media",
      content:
        "Dennis delivered exceptional quality work that exceeded our expectations. His cinematic approach brought our brand story to life.",
    },
    {
      name: "Mr. Summary Wafula ",
      role: "Director/Producer",
      company: "summarycreativelimited",
      content:
        "Professional, creative, and reliable. Dennis captured our event beautifully and delivered the final video ahead of schedule.",
    },
    {
      name: "Mr. Oliver Ishiva",
      role: "Web Developer",
      company: "Ambrel Technologies",
      content:
        "Working with Dennis transformed our YouTube channel. His strategic approach and editing skills significantly increased our engagement.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-red-500">
            Dennis <span className="text-white">Kibet</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {["home", "about", "portfolio", "services", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-red-400 ${
                    activeSection === section ? "text-red-400" : "text-gray-300"
                  }`}
                >
                  {section}
                </button>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="animate-fade-in">
            <p className="text-red-400 text-lg mb-4 uppercase tracking-wider">
              Welcome to my world
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-red-500">Dennis Kibet</span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-300 mb-8">
              Digital Media Producer & Storyteller
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Passionate about photography, streaming/video production, &
              creating compelling visual narratives that connect, inspire, and
              drive results. From Kenya with love for cinematic storytelling.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full"
                onClick={() => scrollToSection("portfolio")}
              >
                <Play className="w-5 h-5 mr-2" />
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-3 rounded-full"
                onClick={() => scrollToSection("contact")}
              >
                Let's Collaborate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-8 h-8 text-red-500" />
                <h2 className="text-4xl font-bold">Who I Am?</h2>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                I am a passionate Digital Media Producer from Kenya with a
                strong focus in visual storytelling Photography, Livestraming
                productions, I love to craft engaging narratives and always
                learn from my surroundings.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                With over 4 years of experience in Photography, Stream/video
                production, content creation, and digital strategy, I've helped
                brands and individuals tell their stories through compelling
                visual content that resonates with audiences across Kenya and
                beyond.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-red-400" />
                  <div>
                    <p className="font-semibold">4+ Years</p>
                    <p className="text-gray-400 text-sm">Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-red-400" />
                  <div>
                    <p className="font-semibold">100+ Projects</p>
                    <p className="text-gray-400 text-sm">Completed</p>
                  </div>
                </div>
              </div>

              <Button className="bg-red-600 hover:bg-red-700 mt-6">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-1">
                <img
                  src="https://i.postimg.cc/g24mjSsc/kibet-image.jpg"
                  alt="Dennis Kibet"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My Portfolio</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my best digital media projects, each crafted with
              attention to detail and storytelling excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-slate-900 border-slate-800 overflow-hidden group hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-red-500/20 text-red-400 border-red-500/30">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive digital media solutions tailored to bring your
              vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-slate-950 border-slate-800 p-6 hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-gray-400 text-lg">
              Feedback from amazing people I've worked with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-900 border-slate-800 p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-red-400 text-sm">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Let’s Work <span className="text-red-500">Together</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              I’m excited to hear about your next big idea. Whether it’s a
              project, brand launch, livestream, or visual campaign — let’s
              create something extraordinary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8 text-sm md:text-base">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-red-500" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400">kibetdennis4136@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-red-500" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-400">+254 700 545 425</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-500" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-400">Nairobi, Kenya</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-4 pt-6">
                {/* <Button
                  size="icon"
                  variant="outline"
                  className="border-slate-700 hover:border-red-500 transition-all duration-300"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </Button> */}
                {/* <Button
                  size="icon"
                  variant="outline"
                  className="border-slate-700 hover:border-red-500 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </Button> */}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-slate-950 border border-slate-800 p-8 shadow-xl hover:shadow-red-700/20 transition-shadow duration-300">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      required
                      className="bg-slate-900 border-slate-700 focus:border-red-500 focus:ring-red-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      required
                      type="email"
                      className="bg-slate-900 border-slate-700 focus:border-red-500 focus:ring-red-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    required
                    className="bg-slate-900 border-slate-700 focus:border-red-500 focus:ring-red-500"
                    placeholder="Let’s talk about..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    required
                    rows={5}
                    className="bg-slate-900 border-slate-700 focus:border-red-500 focus:ring-red-500"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 transition duration-300 font-semibold"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Dennis Kibet. All rights reserved. Guru Creations limited.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <a href="mailto:kibetdennis4136@gmail.com" title="Email">
              <FaEnvelope size={24} style={iconStyles.envelope} />
            </a>
            <a
              href="https://youtube.com/@gurucreationltd"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
            >
              <FaYoutube size={24} style={iconStyles.youtube} />
            </a>
            <a
              href="https://facebook.com/denniskibet"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FaFacebook size={24} style={iconStyles.facebook} />
            </a>
            <a
              href="https://instagram.com/denniskibet"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FaInstagram size={24} style={iconStyles.instagram} />
            </a>
            <a
              href="https://tiktok.com/@yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              title="TikTok"
            >
              <FaTiktok size={24} style={iconStyles.tiktok} />
            </a>
            <a
              href="https://x.com/@Dennis_2kibet"
              target="_blank"
              rel="noopener noreferrer"
              title="X"
            >
              <FaXTwitter size={24} style={iconStyles.x} />
            </a>
            <a
              href="https://linkedin.com/in/denniskibet"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin size={24} style={iconStyles.linkedin} />
            </a>
            <a
              href="https://telegram.me/denniskibet"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
            >
              <FaTelegram size={24} style={iconStyles.telegram} />
            </a>
            <a
              href="https://github.com/Kibet-Dennis"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub size={24} style={iconStyles.github} />
            </a>
            <a
              href="https://kibet-dennis.github.io/guru-creations/"
              target="_blank"
              rel="noopener noreferrer"
              title="Website"
            >
              <FaGlobe size={24} style={iconStyles.globe} />
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div> // This closes the div opened after "return ("
  );
};

export default Index;

