/**
 * SnapItShot — Abhishek Arya Editorial Photography Data
 * Curated high-resolution editorial photography from Unsplash
 */

export const siteSettings = {
  brandName: "SnapItShot",
  photographerName: "Abhishek Arya",
  tagline: "A visual language built through light",
  location: "Based in India — Available Worldwide",
  email: "hello@snapitshot.com",
  phone: "+91 98765 43210",
  instagram: "snapitshot.arya",
  pinterest: "snapitshot",
  behance: "snapitshot",
  bioHeadline: "I look for the moments between the moments.",
  bio: "I'm an Indian editorial & documentary photographer drawn to honest moments, natural light, and the quiet spaces between spoken words. My work is about creating photographs that feel lived rather than staged.",
  aboutPrinciples: [
    { number: "01", title: "OBSERVE", text: "Watching the rhythm of light and emotion without disrupting the natural flow." },
    { number: "02", title: "WAIT", text: "Patience is everything. The most honest frames exist in the pauses between poses." },
    { number: "03", title: "PRESERVE", text: "Preserving the atmosphere and authenticity so memories endure unchanged." }
  ],
  specialties: ["Portraits", "Weddings", "Travel", "Landscapes", "Lifestyle"],
};

export const heroSlides = [
  {
    id: "hero-1",
    title: "Mountain Solitude",
    category: "Landscapes",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=85",
    caption: "Himachal Pradesh, India · Twilight"
  },
  {
    id: "hero-2",
    title: "The Golden Gaze",
    category: "Portraits",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2400&q=85",
    caption: "Varanasi, India · Morning Glow"
  },
  {
    id: "hero-3",
    title: "Old Courtyard Reverie",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2400&q=85",
    caption: "Jaipur, Rajasthan · Golden Hour"
  }
];

export const selectedWork = [
  {
    id: "sw-1",
    number: "01",
    title: "Golden Hour Reverie",
    category: "PORTRAITS",
    aspect: "aspect-[3/4]",
    gridSpan: "col-span-12 lg:col-span-5 row-span-2",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=85",
    location: "Pushkar, India",
    year: "2025"
  },
  {
    id: "sw-2",
    number: "02",
    title: "Streets of Tuscany",
    category: "TRAVEL",
    aspect: "aspect-[16/10]",
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=85",
    location: "Florence, Italy",
    year: "2024"
  },
  {
    id: "sw-3",
    number: "03",
    title: "Sunset Promises",
    category: "WEDDINGS",
    aspect: "aspect-[16/10]",
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-3",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    location: "Udaipur, India",
    year: "2025"
  },
  {
    id: "sw-4",
    number: "04",
    title: "Silent Ridges",
    category: "LANDSCAPES",
    aspect: "aspect-[16/9]",
    gridSpan: "col-span-12 sm:col-span-7 lg:col-span-4",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    location: "Ladakh, India",
    year: "2024"
  },
  {
    id: "sw-5",
    number: "05",
    title: "Afternoon Stillness",
    category: "LIFESTYLE",
    aspect: "aspect-[4/3]",
    gridSpan: "col-span-12 sm:col-span-5 lg:col-span-3",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=85",
    location: "Goa, India",
    year: "2025"
  }
];

export const collections = [
  {
    id: "portraits",
    slug: "portraits",
    number: "01",
    title: "PORTRAITS",
    descriptor: "People · Emotions · Stories",
    description: "Intimate and honest human portraiture capturing individuality, vulnerability, and unguarded truth.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85",
    count: 24
  },
  {
    id: "weddings",
    slug: "weddings",
    number: "02",
    title: "WEDDINGS",
    descriptor: "Love · Moments · Forever",
    description: "Cinematic, non-intrusive documentary wedding photography honoring timeless rituals and spontaneous joy.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    count: 38
  },
  {
    id: "travel",
    slug: "travel",
    number: "03",
    title: "TRAVEL",
    descriptor: "Places · Cultures · Perspectives",
    description: "Visual journeys traversing architectural wonder, historical alleyways, and the vibrant tapestry of global cultures.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=85",
    count: 42
  },
  {
    id: "landscapes",
    slug: "landscapes",
    number: "04",
    title: "LANDSCAPES",
    descriptor: "Nature · Serenity · Beyond",
    description: "Expansive horizons, raw natural elements, and ethereal mountain light capturing the grandeur of Earth.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    count: 29
  },
  {
    id: "lifestyle",
    slug: "lifestyle",
    number: "05",
    title: "LIFESTYLE",
    descriptor: "Everyday · Authentic · Real",
    description: "Celebrating the poetry in everyday domestic rituals, quiet mornings, craftsmanship, and companionship.",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1600&q=85",
    count: 19
  }
];

export const featuredPhotographData = {
  number: "04 / 06",
  title: "THE QUIET MOMENT",
  subtitle: "A single frame can hold a thousand emotions, long after the moment has passed.",
  slides: [
    {
      id: "fp-1",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=85",
      thumb: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=300&q=80",
      caption: "Lakeside Sunrise at Dal Lake, Srinagar",
      storySlug: "quiet-morning-dal-lake"
    },
    {
      id: "fp-2",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2200&q=85",
      thumb: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      caption: "Amber Gaze, Delhi Portrait Series",
      storySlug: "faces-of-varanasi"
    },
    {
      id: "fp-3",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=2200&q=85",
      thumb: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=300&q=80",
      caption: "Echoes of Red in Venetian Twilight",
      storySlug: "whispers-of-italy"
    },
    {
      id: "fp-4",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=85",
      thumb: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80",
      caption: "Dolomite Solitude Before Twilight",
      storySlug: "peaks-of-ladakh"
    },
    {
      id: "fp-5",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=2200&q=85",
      thumb: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80",
      caption: "Sunlit Repose, Coastal Studio",
      storySlug: "coastal-afternoons"
    }
  ]
};

export const photographerProfile = {
  name: "Abhishek Arya",
  role: "Fine-Art & Editorial Photographer",
  location: "Based in New Delhi, India · Available Worldwide",
  bioShort: "A person behind the photographs, drawn to light, people and the stories in between.",
  bioLong: "Abhishek Arya is a visual artist and photographer specializing in documentary portraiture, cinematic wedding chronicles, and landscape essays. Over the past decade, Abhishek has documented human emotion across 14 countries, with an eye tuned strictly to natural light and unspoken intimacy.",
  portraitImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85",
  secondaryImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=85"
};

export const stories = [
  {
    slug: "a-day-in-old-delhi",
    title: "A Day in Old Delhi",
    collection: "Travel",
    location: "Old Delhi, India",
    date: "October 2025",
    excerpt: "Streets, people, morning mist, and countless untold stories woven through ancient arches.",
    heroImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2200&q=85",
    images: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85"
    ]
  },
  {
    slug: "shadows-over-ladakh",
    title: "Shadows Over Ladakh",
    collection: "Landscapes",
    location: "Nubra Valley, India",
    date: "August 2025",
    excerpt: "Where prayer flags flutter against sharp mountain ridges and silence stretches for miles.",
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=85",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85"
    ]
  }
];

export const faqs = [
  {
    question: "Do you travel for commissioned work?",
    answer: "Yes, absolutely. Abhishek regularly travels across India and internationally for weddings, portraits, and editorial assignments."
  },
  {
    question: "How far in advance should we reach out?",
    answer: "For destination weddings, we recommend reaching out 6 to 12 months in advance. For portrait and editorial commissions, 3 to 6 weeks is usually ideal."
  },
  {
    question: "How do you approach a photoshoot?",
    answer: "My approach is unhurried and observant. Rather than stiff posing, I curate an environment of comfort and let natural chemistry and genuine moments unfold in organic light."
  },
  {
    question: "What is the turnaround time for receiving the final photographs?",
    answer: "Portrait sessions are delivered within 2–3 weeks. Full wedding collections and digital stories are delivered within 6–8 weeks, with preview highlights sent within 72 hours."
  }
];
