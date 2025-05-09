'use client';
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from 'next/image';

const travelPackages = [
  {
    id: 1,
    title: "Ramdan Umrah Package",
    image: "/images/photo2.jpg",
    description: "5-star luxury package with VIP services and Haram-view rooms.",
    price: "$2,799",
    inclusions: ["Private transfers", "Haram-view hotel", "Daily guidance"],
    media: [
      { type: "tiktok", url: "https://vm.tiktok.com/ZMBKds6yf/", thumbnail: "/images/thumb1.jpg", duration: "1:30" },
      { type: "tiktok", url: "https://vm.tiktok.com/ZMBKd4Txu/", thumbnail: "/images/thumb2.jpg", duration: "1:30" },
      { type: "image", url: "/images/gal1.jpg", alt: "photo" },
      { type: "image", url: "/images/gal2.jpg", alt: "photo" },
      { type: "image", url: "/images/gal3.jpg", alt: "photo" },
      { type: "image", url: "/images/gal4.jpg", alt: "photo" },
      { type: "image", url: "/images/gal5.jpg", alt: "photo" }
    ]
  },
  {
    id: 2,
    title: "Coupls Umrah Package",
    image: "/images/photo.jpg",
    description: "Special arrangements for families with children and elderly.",
    price: "$2,199",
    inclusions: ["Family rooms", "Childcare", "Group discounts"],
    media: [
      { type: "tiktok", url: "https://vm.tiktok.com/ZMBKduxNm/", thumbnail: "/images/thumb2.jpg", duration: "1:15" },
      { type: "tiktok", url: "https://vm.tiktok.com/ZMBKR1sVa/", thumbnail: "/images/thumb1.jpg", duration: "1:15" },
      { type: "image", url: "/images/c1.jpg", alt: "photo" },
      { type: "image", url: "/images/c2.jpg", alt: "photo" },
      { type: "image", url: "/images/c3.jpg", alt: "photo" },
      { type: "image", url: "/images/c4.jpg", alt: "photo" },
      { type: "image", url: "/images/c5.jpg", alt: "photo" },
      { type: "image", url: "/images/c6.jpg", alt: "photo" },
      { type: "image", url: "/images/c7.jpg", alt: "photo" },
      { type: "image", url: "/images/c8.jpg", alt: "photo" },
      { type: "image", url: "/images/c9.jpg", alt: "photo" }
    ]
  },
  {
    id: 3,
    title: "Coupls Umrah Package",
    image: "/images/photo.jpg",
    description: "Special arrangements for families with children and elderly.",
    price: "$2,199",
    inclusions: ["Family rooms", "Childcare", "Group discounts"],
    media: [
      { type: "tiktok", url: "https://vm.tiktok.com/ZMBKduxNm/", thumbnail: "/images/thumb2.jpg", duration: "1:15" },
      { type: "tiktok", url: "https://vm.tiktok.com/ZMBKR1sVa/", thumbnail: "/images/thumb1.jpg", duration: "1:15" },
      { type: "image", url: "/images/c1.jpg", alt: "photo" },
      { type: "image", url: "/images/c2.jpg", alt: "photo" },
      { type: "image", url: "/images/c3.jpg", alt: "photo" },
      { type: "image", url: "/images/c4.jpg", alt: "photo" },
      { type: "image", url: "/images/c5.jpg", alt: "photo" },
      { type: "image", url: "/images/c6.jpg", alt: "photo" },
      { type: "image", url: "/images/c7.jpg", alt: "photo" },
      { type: "image", url: "/images/c8.jpg", alt: "photo" },
      { type: "image", url: "/images/c9.jpg", alt: "photo" }
    ]
  },
  {
    id: 4,
    title: "Coupls Umrah Package",
    image: "/images/photo.jpg",
    description: "Special arrangements for families with children and elderly.",
    price: "$2,199",
    inclusions: ["Family rooms", "Childcare", "Group discounts"],
    media: [
      { type: "tiktok", url: "https://vm.tiktok.com/ZMBKduxNm/", thumbnail: "/images/thumb2.jpg", duration: "1:15" },
      { type: "tiktok", url: "https://vm.tiktok.com/ZMBKR1sVa/", thumbnail: "/images/thumb1.jpg", duration: "1:15" },
      { type: "image", url: "/images/c1.jpg", alt: "photo" },
      { type: "image", url: "/images/c2.jpg", alt: "photo" },
      { type: "image", url: "/images/c3.jpg", alt: "photo" },
      { type: "image", url: "/images/c4.jpg", alt: "photo" },
      { type: "image", url: "/images/c5.jpg", alt: "photo" },
      { type: "image", url: "/images/c6.jpg", alt: "photo" },
      { type: "image", url: "/images/c7.jpg", alt: "photo" },
      { type: "image", url: "/images/c8.jpg", alt: "photo" },
      { type: "image", url: "/images/c9.jpg", alt: "photo" }
    ]
  },
  {
    id: 5,
    title: "Ramdan Umrah Package",
    image: "/images/photo2.jpg",
    description: "5-star luxury package with VIP services and Haram-view rooms.",
    price: "$2,799",
    inclusions: ["Private transfers", "Haram-view hotel", "Daily guidance"],
    media: [
      { type: "tiktok", url: "https://vm.tiktok.com/ZMBKds6yf/", thumbnail: "/images/thumb1.jpg", duration: "1:30" },
      { type: "tiktok", url: "https://vm.tiktok.com/ZMBKd4Txu/", thumbnail: "/images/thumb2.jpg", duration: "1:30" },
      { type: "image", url: "/images/gal1.jpg", alt: "photo" },
      { type: "image", url: "/images/gal2.jpg", alt: "photo" },
      { type: "image", url: "/images/gal3.jpg", alt: "photo" },
      { type: "image", url: "/images/gal4.jpg", alt: "photo" },
      { type: "image", url: "/images/gal5.jpg", alt: "photo" }
    ]
  },
  {
    id: 6,
    title: "Coupls Umrah Package",
    image: "/images/photo.jpg",
    description: "Special arrangements for families with children and elderly.",
    price: "$2,199",
    inclusions: ["Family rooms", "Childcare", "Group discounts"],
    media: [
      { type: "tiktok", url: "https://vm.tiktok.com/ZMBKduxNm/", thumbnail: "/images/thumb2.jpg", duration: "1:15" },
      { type: "tiktok", url: "https://vm.tiktok.com/ZMBKR1sVa/", thumbnail: "/images/thumb1.jpg", duration: "1:15" },
      { type: "image", url: "/images/c1.jpg", alt: "photo" },
      { type: "image", url: "/images/c2.jpg", alt: "photo" },
      { type: "image", url: "/images/c3.jpg", alt: "photo" },
      { type: "image", url: "/images/c4.jpg", alt: "photo" },
      { type: "image", url: "/images/c5.jpg", alt: "photo" },
      { type: "image", url: "/images/c6.jpg", alt: "photo" },
      { type: "image", url: "/images/c7.jpg", alt: "photo" },
      { type: "image", url: "/images/c8.jpg", alt: "photo" },
      { type: "image", url: "/images/c9.jpg", alt: "photo" }
    ]
  }
];

const PackageModal = ({ pkg, open, onClose }: { pkg: typeof travelPackages[0]; open: boolean; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<'videos' | 'photos'>('videos');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const videos = pkg.media?.filter(m => m.type === 'tiktok') || [];
  const photos = pkg.media?.filter(m => m.type === 'image') || [];

  return (
    <>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="bg-[#111111] border-[#FFD700] text-white max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex justify-between items-start">
              <DialogTitle className="font-serif text-2xl text-[#FFD700]">{pkg.title}</DialogTitle>
            </div>
            <div className="w-20 h-0.5 bg-[#FFD700] mt-2 rounded-full"></div>
          </DialogHeader>

          <div className="space-y-6">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-[#FFD700]/30">
              <Image src={pkg.image} alt={pkg.title} fill className="object-conatin" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-serif text-xl text-[#FFD700]">Package Includes</h3>
                <ul className="space-y-2 text-gray-300">
                  {pkg.inclusions.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#FFD700] mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="font-serif text-xl text-[#FFD700] mt-6">Description</h3>
                <p className="text-gray-300">{pkg.description}</p>
              </div>

              <div className="space-y-6">
                <div className="border border-[#FFD700]/30 p-4 rounded-lg">
                  <h3 className="font-serif text-xl text-[#FFD700] mb-3">Pricing</h3>
                  <div className="text-gray-300">
                    Starting from <span className="text-[#FFD700] text-2xl">{pkg.price}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <a 
                    href="https://t.me/themuhrimtours" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10">
                      Contact Agent
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {(videos.length > 0 || photos.length > 0) && (
              <div className="mt-8">
                <div className="flex border-b border-[#FFD700]/30 mb-4">
                  {videos.length > 0 && (
                    <button
                      className={`pb-2 px-4 font-serif ${activeTab === 'videos' ? 'text-[#FFD700] border-b-2 border-[#FFD700]' : 'text-gray-400'}`}
                      onClick={() => setActiveTab('videos')}
                    >
                      Videos ({videos.length})
                    </button>
                  )}
                  {photos.length > 0 && (
                    <button
                      className={`pb-2 px-4 font-serif ${activeTab === 'photos' ? 'text-[#FFD700] border-b-2 border-[#FFD700]' : 'text-gray-400'}`}
                      onClick={() => setActiveTab('photos')}
                    >
                      Photos ({photos.length})
                    </button>
                  )}
                </div>

                {activeTab === 'videos' ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {videos.map((video, i) => (
                      <a
                        key={i}
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative aspect-[9/16] rounded-md overflow-hidden border border-[#FFD700]/30 group"
                        itemScope
                        itemType="https://schema.org/VideoObject"
                      >
                        <meta itemProp="name" content={`${pkg.title} Tour`} />
                        <Image
                          src={video.thumbnail || '/images/default-thumbnail.jpg'}
                          alt={`Video: ${pkg.title}`}
                          fill
                          className="object-contain"
                          itemProp="thumbnailUrl"
                        />
                        <div className="absolute inset-0 bg-black/30 flex flex-col justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="self-end bg-black/70 px-2 py-1 rounded text-xs text-white">
                            {video.duration}
                          </div>
                          <div className="flex justify-center">
                            <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center">
                              ▶
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {photos.map((photo, i) => (
                      <div 
                        key={i} 
                        className="relative aspect-square rounded-md overflow-hidden border border-[#FFD700]/30 cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setSelectedPhoto(photo.url)}
                      >
                        <Image
                          src={photo.url}
                          alt={photo.alt || `Photo: ${pkg.title}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Photo Viewer Modal */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="bg-[#111111] border-[#FFD700] text-white max-w-4xl p-0">
          {selectedPhoto && (
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selectedPhoto}
                alt="Full size photo"
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

const PackageCard = ({ pkg, onClick }: { pkg: typeof travelPackages[0]; onClick: () => void }) => (
  <Card className="bg-[#111111] rounded-lg overflow-hidden border border-[#FFD700] shadow-lg transition-shadow duration-300 hover:shadow-gold-md shadow-[#FFD700] h-full flex flex-col">
    <div className="relative aspect-video">
      <Image
        src={pkg.image}
        alt={pkg.title}
        fill
        className="object-conver border-b border-[#FFD700]/30"
      />
    </div>
    <CardContent className="p-5 flex flex-col flex-grow relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent"></div>
      <h3 className="text-lg font-serif font-semibold text-white mb-3 mt-2">
        {pkg.title}
      </h3>
      <div className="flex-grow"></div>
      <div className="flex justify-start mt-4">
        <Button
          onClick={onClick}
          className="bg-[#FFD700] text-black py-2 px-4 rounded font-semibold hover:bg-yellow-400 transition duration-300 text-sm"
        >
          See More
        </Button>
      </div>
    </CardContent>
  </Card>
);

const useCarousel = () => {
  const [api, setApi] = useState<CarouselApi>(undefined);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
    return () => {
      api.off("select", () => {});
    };
  }, [api]);

  return { api, setApi, current, count };
};

const Recent = () => {
  const [selectedPackage, setSelectedPackage] = useState<typeof travelPackages[0] | null>(null);
  const { api, setApi, current, count } = useCarousel();
  const [isMobile, setIsMobile] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isMobile || !api) return;

    const interval = setInterval(() => {
      if (current === count - 1) {
        api.scrollTo(0); // Go back to first item
      } else {
        api.scrollNext(); // Go to next item
      }
    }, 3000); // 4 seconds interval

    return () => clearInterval(interval);
  }, [isMobile, api, current, count]);

  return (
    <section id="packages" className="bg-black min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-yellow-400 to-[#FFD700]">
            Recent Travel Packages
          </h2>
          <p className="mt-3 text-base text-gray-300 sm:mt-4 max-w-2xl mx-auto">
            Discover our most popular Umrah packages
          </p>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mt-4 rounded-full"></div>
        </div>

        {!isMobile ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onClick={() => setSelectedPackage(pkg)}
              />
            ))}
          </div>
        ) : (
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent>
              {travelPackages.map((pkg) => (
                <CarouselItem key={pkg.id} className="basis-full">
                  <div className="p-1 h-full">
                    <PackageCard
                      pkg={pkg}
                      onClick={() => setSelectedPackage(pkg)}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-4">
              <CarouselPrevious 
                className="static transform-none bg-black border-[#FFD700]/50 text-[#FFD700] hover:bg-[#FFD700]/10"
                onClick={() => api?.scrollPrev()}
              />
              <div className="flex items-center text-sm text-[#FFD700]">
                {current + 1} / {count}
              </div>
              <CarouselNext 
                className="static transform-none bg-black border-[#FFD700]/50 text-[#FFD700] hover:bg-[#FFD700]/10"
                onClick={() => api?.scrollNext()}
              />
            </div>
          </Carousel>
        )}

        {selectedPackage && (
          <PackageModal
            pkg={selectedPackage}
            open={!!selectedPackage}
            onClose={() => setSelectedPackage(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Recent;