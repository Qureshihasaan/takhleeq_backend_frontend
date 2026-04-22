import React from "react";
import { Download, Share2, Heart, Trash2 } from "lucide-react";

// Mock Data
const myDesigns = [
  { id: 1, title: "Cyberpunk Cityscape", date: "2 Hours ago", img: "/api/placeholder/400/400", likes: 24 },
  { id: 2, title: "Ethereal Forest", date: "Yesterday", img: "/api/placeholder/400/400", likes: 56 },
  { id: 3, title: "Neon Nights", date: "Oct 12, 2023", img: "/api/placeholder/400/400", likes: 112 },
  { id: 4, title: "Space Odyssey", date: "Oct 10, 2023", img: "/api/placeholder/400/400", likes: 89 },
  { id: 5, title: "Abstract Waves", date: "Oct 05, 2023", img: "/api/placeholder/400/400", likes: 45 },
  { id: 6, title: "Minimalist Portrait", date: "Oct 01, 2023", img: "/api/placeholder/400/400", likes: 231 },
];

const MyDesignsPage = () => {
  return (
    <div className="min-h-screen bg-backgroundColor p-paddingLarge">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-marginLarge gap-4">
          <div>
            <h1 className="text-3xl font-fontWeightBold text-textColorMain mb-2">My Designs</h1>
            <p className="text-textColorMuted">Manage, view, and organize all your creative masterpieces.</p>
          </div>
          <button className="bg-primaryColor text-white px-6 py-2.5 rounded-borderRadiusMd hover:bg-primaryColor/90 transition-all shadow-md shadow-primaryColor/20 font-fontWeightMedium">
            Create New Design
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-spacingUnit">
          {myDesigns.map((design) => (
            <div key={design.id} className="group relative rounded-borderRadiusLg overflow-hidden bg-surfaceColor border border-borderColor shadow-sm hover:shadow-xl transition-all duration-300">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-borderColor">
                <img src={design.img} alt={design.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                
                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-paddingMedium">
                  
                  {/* Action Bar */}
                  <div className="flex items-center justify-between gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-2">
                      <button className="w-10 h-10 rounded-borderRadiusFull bg-white/20 hover:bg-primaryColor flex items-center justify-center text-white backdrop-blur-md transition-colors">
                        <Download size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-borderRadiusFull bg-white/20 hover:bg-primaryColor flex items-center justify-center text-white backdrop-blur-md transition-colors">
                        <Share2 size={18} />
                      </button>
                    </div>
                    <button className="w-10 h-10 rounded-borderRadiusFull bg-white/20 hover:bg-red-500/80 flex items-center justify-center text-white backdrop-blur-md transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Details */}
              <div className="p-paddingMedium">
                <h3 className="text-textColorMain font-fontWeightBold text-fontSizeLg mb-1 truncate">{design.title}</h3>
                <div className="flex justify-between items-center text-fontSizeSm text-textColorMuted">
                  <span>{design.date}</span>
                  <div className="flex items-center gap-1">
                    <Heart size={14} className="text-primaryColor" />
                    <span>{design.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyDesignsPage;
