import React, { useState } from 'react'
import Modal from './Modal'

const MAin = () => {
    const data = [
        {
            "id": "swiss-alps-adventure",
            "title": "Swiss Alps Adventure",
            "subtitle": "Explore breathtaking peaks, pristine lakes, and alpine villages on a guided tour.",
            "heroImage": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80",
            "details": {
                "duration": "7 Days / 6 Nights",
                "groupSize": "Max 12 People",
                "location": "Switzerland",
                "price": "$1,850 / person"
            },
            "overview": "Embark on an unforgettable journey through the heart of the Swiss Alps. This tour combines thrilling hikes, scenic mountain train rides, and cozy traditional stays. Perfect for nature lovers and adventurers looking to experience Europe's most iconic alpine landscapes.",
            "highlights": [
                "Guided cable car ride to Matterhorn Glacier",
                "Scenic journey on the Glacier Express train",
                "Daily breakfast & authentic Swiss dinners",
                "Professional certified alpine guide"
            ]
        },
        {
            "id": "tokyo-neon-culture",
            "title": "Tokyo Neon & Heritage Explorer",
            "subtitle": "Discover the vibrant contrast between ancient traditions and futuristic cityscape in Japan.",
            "heroImage": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
            "details": {
                "duration": "5 Days / 4 Nights",
                "groupSize": "Max 10 People",
                "location": "Tokyo, Japan",
                "price": "$1,450 / person"
            },
            "overview": "Dive headfirst into Japan's dynamic capital. Experience peaceful morning tea ceremonies at centuries-old shrines before exploring high-tech electronic districts, Michelin-starred street food, and neon-lit skyline views.",
            "highlights": [
                "Private guided walking tour of Senso-ji and Shibuya",
                "Traditional tea ceremony experience in Asakusa",
                "Day trip to Mount Fuji and Lake Kawaguchiko",
                "All-inclusive food sampling tour in Omoide Yokocho"
            ]
        },
        {
            "id": "rome-ancient-wonders",
            "title": "Rome & Amalfi Coast Escape",
            "subtitle": "Immerse yourself in ancient imperial history, coastal luxury, and authentic Italian dining.",
            "heroImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
            "details": {
                "duration": "6 Days / 5 Nights",
                "groupSize": "Max 15 People",
                "location": "Rome & Amalfi, Italy",
                "price": "$1,680 / person"
            },
            "overview": "Uncover thousands of years of Western history in Rome before unwinding along the cliffside villages of the Amalfi Coast. Perfect for culture enthusiasts, history lovers, and foodies alike.",
            "highlights": [
                "Skip-the-line access to the Colosseum and Vatican Museums",
                "Sunset boat cruise along the Positano coastline",
                "Hands-on pasta and gelato making class in Rome",
                "Private wine tasting at a Campania vineyard"
            ]
        },
        {
            "id": "paris-romance-art",
            "title": "Parisian Art & Elegance",
            "subtitle": "Walk through world-class museums, historic boulevards, and charming bohemian quarters.",
            "heroImage": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
            "details": {
                "duration": "4 Days / 3 Nights",
                "groupSize": "Max 8 People",
                "location": "Paris, France",
                "price": "$1,290 / person"
            },
            "overview": "Indulge in the world capital of fashion, gastronomy, and art. Stroll along the Seine, explore Montmartre's hidden art studios, and marvel at masterpieces inside the Louvre with an expert art historian.",
            "highlights": [
                "VIP evening entrance to the Louvre Museum",
                "Sip champagne on a private Seine River cruise",
                "Guided pastry and croissant tasting tour in Le Marais",
                "Day excursion to the Palace of Versailles"
            ]
        },
        {
            "id": "dubai-desert-luxury",
            "title": "Dubai Desert & Horizon",
            "subtitle": "Experience ultramodern architectural marvels and luxury desert safari adventures.",
            "heroImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
            "details": {
                "duration": "5 Days / 4 Nights",
                "groupSize": "Max 10 People",
                "location": "Dubai, UAE",
                "price": "$1,920 / person"
            },
            "overview": "Experience the ultimate fusion of modern luxury and Arabian heritage. Rise to the top of the world's tallest building, shop in traditional spice souks, and spend a night under the stars in a luxury desert camp.",
            "highlights": [
                "Fast-track entry to Burj Khalifa At the Top lounge",
                "4x4 dune bashing and luxury desert bedouin camp night",
                "Private yacht cruise around Dubai Marina and Palm Jumeirah",
                "Guided heritage walk through Al Fahidi Historic District"
            ]
        },
        {
            "id": "barcelona-gothic-gaudi",
            "title": "Barcelona Architecture & Tapas",
            "subtitle": "Soak in Mediterranean sunshine, iconic Gaudí designs, and rich Catalan gastronomy.",
            "heroImage": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1600&q=80",
            "details": {
                "duration": "5 Days / 4 Nights",
                "groupSize": "Max 12 People",
                "location": "Barcelona, Spain",
                "price": "$1,380 / person"
            },
            "overview": "Discover the vibrant capital of Catalonia. Marvel at the whimsical architecture of Antoni Gaudí, lose yourself in the narrow alleyways of the Gothic Quarter, and sample tapas at world-famous food markets.",
            "highlights": [
                "Priority entrance to La Sagrada Família and Park Güell",
                "Evening tapas and wine tour in El Born district",
                "Authentic Catalan flamenco show in a historic venue",
                "Coastal bike ride along Barceloneta Beach"
            ]
        }
    ]
const [ismodalOpen,setIsmodalopen]=useState(false)
    const [modal, setModal] = useState("")
    function closeModal() {
        setIsmodalopen(false)
        
    }
    return (
        <>
            <div className='flex flex-wrap mt-30'>
                {data.map((ele) => {
                    return (
                        <>
                            <div className="bg-white rounded-2xl p-5 shadow-lg overflow-hidden border border-gray-100 max-w-xl mx-auto my-6 hover:shadow-xl transition-shadow duration-300 flex flex-col">

                                {/* Hero Image Section */}
                                <div className="relative h-64 w-full overflow-hidden">
                                    <img
                                        src={ele.heroImage}
                                        alt={ele.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>

                                {/* Header Title & Subtitle */}
                                <div className="p-6 pb-4">
                                    <h1 className="text-2xl font-bold text-gray-900 mb-1">{ele.title}</h1>
                                    <p className="text-gray-600 text-sm leading-relaxed">{ele.subtitle}</p>
                                </div>

                                {/* Details Section */}
                                <div className="px-6 pb-6">
                                    <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-3">Tour Details</h2>

                                    <div className="grid grid-cols-2 gap-3 bg-gray-50 p-4 rounded-xl text-sm border border-gray-100">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-gray-500 font-medium">Duration</span>
                                            <span className="font-semibold text-gray-800">{ele.details.duration}</span>
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="text-xs text-gray-500 font-medium">Group Size</span>
                                            <span className="font-semibold text-gray-800">{ele.details.groupSize}</span>
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="text-xs text-gray-500 font-medium">Location</span>
                                            <span className="font-semibold text-gray-800">{ele.details.location}</span>
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="text-xs text-gray-500 font-medium">Price</span>
                                            <span className="font-semibold text-emerald-600">{ele.details.price}</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                              setIsmodalopen(true)
                              setModal(ele)
                                    }}
                                    type="button"
                                    className="w-full sm:w-auto bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                                >
                                    Book Now
                                </button>
                            </div>


                        </>
                    )
                })}
                {ismodalOpen==true?<Modal form={modal} closeModal={closeModal} />:""}
            </div>
        </>
    )
}

export default MAin