import React, { useState, useEffect } from 'react';
// day1
import d11 from '../assets/day1/1.jpg';
import d12 from '../assets/day1/2.jpg';
import d13 from '../assets/day1/3.jpg';
import d14 from '../assets/day1/4.jpg';
import d15 from '../assets/day1/5.jpg';
import d16 from '../assets/day1/6.jpg';
import d17 from '../assets/day1/7.jpg';
// day2
import d21 from '../assets/day2/1.jpg';
import d22 from '../assets/day2/2.jpg';
import d23 from '../assets/day2/3.jpg';
import d24 from '../assets/day2/4.jpg';
import d25 from '../assets/day2/5.jpg';
import d26 from '../assets/day2/6.jpg';
import d27 from '../assets/day2/7.jpg';
import d28 from '../assets/day2/8.jpg';
import d29 from '../assets/day2/9.jpg';
// day3
import d31 from '../assets/day3/1.jpg';
import d32 from '../assets/day3/2.jpg';
import d33 from '../assets/day3/3.jpg';
import d34 from '../assets/day3/4.jpg';
import d35 from '../assets/day3/5.jpg';
import d36 from '../assets/day3/6.jpg';
import d37 from '../assets/day3/7.jpg';
import d38 from '../assets/day3/8.jpg';
import d39 from '../assets/day3/9.jpg';
import d310 from '../assets/day3/10.jpg';
import d311 from '../assets/day3/11.jpg';
// day4
import d41 from '../assets/day4/1.jpg';
import d42 from '../assets/day4/2.jpg';
import d43 from '../assets/day4/3.jpg';
import d44 from '../assets/day4/4.jpg';
import d45 from '../assets/day4/5.jpg';
import d46 from '../assets/day4/6.jpg';
import d47 from '../assets/day4/7.jpg';
import d48 from '../assets/day4/8.jpg';
// day4
import d51 from '../assets/day5/1.jpg';
import d52 from '../assets/day5/2.jpg';
import d53 from '../assets/day5/3.jpg';
import d54 from '../assets/day5/4.jpg';
import d55 from '../assets/day5/5.jpg';
import d56 from '../assets/day5/6.jpg';
import d57 from '../assets/day5/7.jpg';
import d58 from '../assets/day5/8.jpg';
import d59 from '../assets/day5/9.jpg';
import d510 from '../assets/day5/10.jpg';
import d511 from '../assets/day5/11.jpg';
import d512 from '../assets/day5/12.jpg';
// day6
import d61 from '../assets/day6/1.jpg';
import d62 from '../assets/day6/2.jpg';
import d63 from '../assets/day6/3.jpg';
import d64 from '../assets/day6/4.jpg';
import d65 from '../assets/day6/5.jpg';
import d66 from '../assets/day6/6.jpg';
import d67 from '../assets/day6/7.jpg';
import d68 from '../assets/day6/8.jpg';

const Blog = () => {
  const [selectedImage, setSelectedImage] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
    setSelectedImage({});
  };

  const handleMainImageClick = () => {
    if (selectedBlog && selectedBlog.images.length > 1) {
      const currentImage = selectedImage['modal'] || selectedBlog.images[0];
      const currentIndex = selectedBlog.images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % selectedBlog.images.length;
      setSelectedImage({ ...selectedImage, modal: selectedBlog.images[nextIndex] });
    }
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const blogs = [
    {
      title: 'DAY 1: Capital Adventures: Landing & Landmarks',
      images: [d11, d12, d13, d14, d15, d16, d17],
      date: 'April 07, 2025',
      description: 'Our journey began with a sense of excitement and anticipation as we touched down at Ninoy Aquino International Airport, marking the official start of our educational tour. The bustling energy of Manila greeted us warmly, setting the tone for a day steeped in history, culture, and discovery.\n\nOur first stop was Luneta Park, also known as Rizal Park—a green oasis in the heart of the city. More than just a park, this iconic landmark stands as a symbol of national pride and remembrance. Standing before the monument of Dr. José Rizal, we were reminded of the power of knowledge, courage, and the vital role of technology in preserving and sharing history.\n\nNext, we stepped into the walled city of Intramuros, where time seemed to pause. The Manila Cathedral, with its grandeur and spiritual atmosphere, impressed upon us the intersection of faith, art, and architecture. Then came our deep dive into the past at Fort Santiago. We explored its storied grounds—from the ancient stone walls to the iconic gate—each corner echoing with tales of resistance and sacrifice.\n\nThe most haunting yet powerful part of our visit was the dungeon, a solemn space where countless lives were lost during colonial times. Being in that dimly lit chamber, surrounded by centuries-old stones, gave us a chilling yet meaningful reminder of the cost of freedom and the importance of preserving truth through digital archiving and historical tech.\n\nAs the sun began to set, we shifted from heritage to modern marvels and made our way to the Mall of Asia—one of the largest malls in Asia. Beyond its impressive scale, the mall represents innovation, urban development, and the digital age. It reminded us that the IT industry isn’t confined to labs and offices but is deeply embedded in modern life—from retail tech to digital marketing and smart infrastructure.\n\nOur first day was more than just a tour; it was a journey through time—past, present, and future—all connected by the thread of technology and the endless possibilities it offers.'
    },
    {
      title: 'DAY 2: Access Granted: Inside Subic’s Nerve Centers',
      images: [d21, d22, d23, d24, d25, d26, d27, d28, d29],
      date: 'April 08, 2025',
      description: 'As the sun rose on our second day, we traded the urban buzz of Manila for the strategic calm of Subic, a place where discipline meets innovation. Known for its organized infrastructure and unique autonomy, Subic offered us a rare glimpse into how a community can function with precision, efficiency, and smart governance. What awaited us was more than just a tour—it was a behind-the-scenes experience of how systems and technology power a progressive city. \n\nWe began at the Subic Bay Exhibition and Convention Center, where the foundations of this once-American naval base came to life through engaging exhibits and presentations. Learning about Subic’s transformation from a military stronghold to a modern economic hub gave us a greater appreciation for how adaptive reuse, strategic planning, and forward-thinking leadership can reshape a region’s identity. For us IT students, it was a lesson in how technology is essential in managing growth and preserving legacy at the same time. \n\nOur next stop was the Subic Port Administration, a hive of structured activity. We witnessed firsthand how digital systems streamline complex logistics, from the scheduling of cargo ships to the automated computation of port fees. The integration of real-time monitoring and smart tracking systems highlighted how essential IT is in keeping global trade efficient and secure. It was fascinating to see how code, data, and infrastructure interact to support international commerce. \n\nFinally, we visited Subic Law Enforcement, where we discovered one of the most unique aspects of the Subic Freeport Zone—its independent legal framework. Unlike most cities in the Philippines, Subic enforces its own set of laws and regulations, separate from the national system. It is regulated by Subic Bay Metropolitan Authority (SBMA) This autonomy allows it to implement specialized policies for order and safety. We learned how technology plays a role in surveillance, traffic systems, and crime prevention—offering a glimpse into how IT supports the backbone of a self-sustained city. \n\nBy the end of the day, we didn’t just see Subic—we understood it. From its rich historical roots to its modern-day efficiency and autonomy, Subic revealed how smart systems, strong governance, and innovation can build a model community.'
    },
    {
      title: 'DAY 3: Discoveries in Time: Nature’s Past and National Pride',
      images: [d31, d32, d33, d34, d35, d36, d37, d38, d39, d310, d311],
      date: 'April 09, 2024',
      description: 'Our third day was a captivating journey through nature’s wonders and the heart of our nation’s history. We began at the National Museum of Natural History, where one exhibit stood out—the giant crocodile named Lolong, once the largest crocodile ever recorded. Seeing Lolong’s preserved remains reminded us of the incredible biodiversity that the Philippines holds and the importance of conservation. The museum’s use of interactive displays and digital storytelling brought Lolong’s story to life, showing how technology helps us understand and protect endangered species. \n\nIn the afternoon, we visited the Quezon City Memorial Circle, a place that honors the memory of former President Manuel Quezon, whose grave lies at the center of the park. Standing by his resting place gave us a profound sense of respect for his contributions to our country. Nearby, we saw the collection of presidential cars, each telling its own story of leadership and history. \n\nThe memorial’s thoughtful design and modern lighting technology created a solemn yet inspiring atmosphere, reminding us how innovation can honor legacy. \n\nThis day connected us deeply to both nature and nation. It showed how technology and history work together to preserve memories—whether of a giant crocodile or a great leader—and inspired us as future IT professionals to carry forward this tradition of preservation and innovation.'
    },
    { 
      title: 'DAY 4: Currency & Current: A Day at BSP & Hytec Power',
      images: [d41, d42, d43, d44, d45, d46, d47, d48],
      date: 'April 10, 2024',
      description: 'Our fourth day was a fascinating dive into two crucial sectors that drive the economy—finance and technology. We began at the Bangko Sentral ng Pilipinas (BSP), where we learned about the intricate processes behind currency creation and the strategic management of the nation’s gold reserves. The staff walked us through the high-tech facilities where new bills are printed, explaining the sophisticated security features embedded in every note to prevent counterfeiting. It was eye-opening to see how technology plays a key role in maintaining the integrity of our money. Additionally, we learned about the central bank’s gold reserves—how they buy, store, and secure precious metals to strengthen the nation’s financial stability. It was a perfect example of how both innovation and security are essential in managing a nation’s economy. \n\nAfter gaining insight into the world of money, we shifted gears to Hytec Power Incorporated, where technology was front and center. The company gave us an impressive look at the cutting-edge solutions they offer across multiple industries. We explored their construction vehicle simulator, which provides operators with virtual training before they step into real machines, reducing risk and improving efficiency. The automated welding machine demonstrated how precision engineering and robotics enhance manufacturing processes. In addition, we were introduced to their power generation systems, which are crucial in meeting the energy demands of various industries. \n\nWhat stood out were the automatic weather stations and the remote monitoring systems, which collect and analyze environmental data in real time. These technologies play a critical role in ensuring accurate data collection for industries that depend on weather forecasting and environmental awareness. The use of e-learning platforms and robots for research and data collection highlighted the role of technology in education, training, and research—allowing Hytec to develop intelligent systems that improve efficiency and accuracy across sectors. \n\nHytec also manufactures machines that cater to the specific needs of companies, showing us how technological advancements in industrial machinery are tailored to meet the unique demands of different industries. It was a clear demonstration of how innovation drives not just progress, but practical solutions for businesses worldwide. \n\nBy the end of the day, we were inspired by the seamless integration of technology in both finance and industry. Whether it was securing our nation’s money supply or innovating machinery that powers industries, it became clear that technology is the backbone of modern progress.'
    },
    {
      title: 'DAY 5: Navigating the City: Tech on the Move',
      images: [d51, d52, d53, d54, d55, d56, d57, d58, d59, d510, d511, d512],
      date: 'April 11, 2024',
      description: 'Day five of our educational tour gave us an exclusive look at the systems that keep Metro Manila moving. From traffic surveillance to rail control, we saw how technology powers the flow of millions of commuters every day—and how IT plays a vital role behind the scenes. \n\nWe started at the Traffic Engineering Center of the MMDA, where we were welcomed into their state-of-the-art Metrobase Surveillance Center. Massive screens displayed live footage from hundreds of CCTVs strategically installed across the metro. It was impressive to see how this real-time monitoring helps manage traffic congestion, detect incidents, and respond to emergencies. The MMDA team explained their protocols when dealing with power outages in critical areas—they switch to backup systems and coordinate with local units to maintain traffic surveillance and communication. It showed us how essential IT infrastructure, redundancy, and data flow are in citywide operations. \n\nNext, we visited the Light Rail Transit Authority (LRT Line 2), where we got a glimpse into how urban rail systems operate. We experienced riding the train firsthand, then visited their maintenance facility—not to observe maintenance in action, but to learn how the entire system is managed. Their team walked us through how they maintain the trains, ensure safety standards, and schedule regular inspections. We also got to see their Central Control Room, where they monitor train movement, manage track switching, and oversee station surveillance. It was impressive to see how technology ensures the safety and reliability of thousands of passengers each day. \n\nThis day showed us how vital IT is to urban transportation. From traffic monitoring to rail system management, everything relies on data, communication networks, and automated systems. As future IT professionals, we left inspired—knowing that the skills we are building today could one day contribute to making cities smarter, safer, and more efficient.'
    },
    {
      title: 'DAY 6: Peaks of Discovery: A Baguio Day Well Spent',
      images: [d61, d62, d63, d64, d65, d66, d67, d68],
      date: 'April 12, 2024',
      description: 'Our sixth day took us to the cool, cultural heart of the highlands—Baguio City—where every stop brought a new layer of insight into nature, history, and identity. Though it was a city tour, it felt like a journey through the soul of the Cordilleras. \n\nWe began at the Strawberry Farm in La Trinidad, where the vibrant fields stretched out before us. Although we didn’t enter the actual farm, just seeing it was enough to appreciate the region’s agricultural richness. The farm stands as a symbol of sustainable local livelihood and how farming, tourism, and community support can coexist to boost regional growth. It reminded us that behind every strawberry sold is a story of hard work and tradition. \n\nOur next destination was the Chinese Bell Church, a quiet and graceful space reflecting the deep cultural ties between the Filipino and Chinese communities. The intricate architecture and serene surroundings offered a moment of peace and spiritual reflection. It was a reminder of how faith and diversity are beautifully woven into the fabric of Philippine society. \n\nThe day took a patriotic turn as we arrived at the Philippine Military Academy (PMA). Touring the grounds and seeing cadets in uniform offered a glimpse into the discipline and commitment it takes to be a leader in service to the country. The PMA stands as a pillar of honor and resilience, inspiring us to lead with integrity—whether in technology, governance, or any field we choose. \n\nLastly, we took in the sweeping views at Mines View Park, one of Baguio’s most iconic and scenic spots. Surrounded by local crafts, cultural displays, and a panoramic view of the mountains, it was the perfect way to end the day. It captured Baguio’s charm—where nature meets culture, and tradition meets modern life. \n\nThis day wasn’t just about the places we visited—it was about the stories they told. From symbols of spirituality and service to scenic beauty and local pride, we experienced a deeper connection to the culture that makes the Philippines truly unique.'
    }
  ];

  const renderDescription = (description, limit = false) => {
    const paragraphs = description.split('\n\n');
    const paragraphsToRender = limit ? paragraphs.slice(0, 1) : paragraphs;
    return paragraphsToRender.map((paragraph, index) => (
      <p key={index} className="blog-description-paragraph">
        {paragraph}
      </p>
    ));
  };

  return (
    <section id="blog">
      <div className="container">
        <h2>Travel & Tours Blog</h2>
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-gallery">
                <img
                  src={selectedImage[index] || blog.images[0]}
                  alt={blog.title}
                  className="blog-img"
                />
                <div className="thumbnail-container">
                  {blog.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${blog.title} thumbnail ${idx + 1}`}
                      className="thumbnail"
                      onClick={() => setSelectedImage({ ...selectedImage, [index]: img })}
                    />
                  ))}
                </div>
              </div>
              <div className="blog-info">
                <h3>{blog.title}</h3>
                <p className="blog-date">{blog.date}</p>
                <div className="blog-description">
                  {renderDescription(blog.description, true)}
                </div>
                <button
                  className="blog-link"
                  onClick={() => openModal(blog)}
                  aria-label={`Read more about ${blog.title}`}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedBlog && (
        <div className="blog-modal-overlay" onClick={closeModal}>
          <button className="blog-modal-close" onClick={closeModal} aria-label="Close modal">
            <i className="fas fa-times"></i>
          </button>
          <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedBlog.title}</h3>
            <p className="blog-modal-date">{selectedBlog.date}</p>
            <div className="blog-modal-gallery">
              <img
                src={selectedImage['modal'] || selectedBlog.images[0]}
                alt={selectedBlog.title}
                className="blog-modal-img"
                onClick={handleMainImageClick}
                role="button"
                aria-label="Click to view next image"
              />
              <div className="thumbnail-container">
                {selectedBlog.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${selectedBlog.title} thumbnail ${idx + 1}`}
                    className="thumbnail"
                    onClick={() => setSelectedImage({ ...selectedImage, modal: img })}
                  />
                ))}
              </div>
            </div>
            <div className="blog-modal-description">
              {renderDescription(selectedBlog.description, false)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;