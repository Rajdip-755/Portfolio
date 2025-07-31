import { useParams } from 'react-router-dom';
import { blogs } from './blog-data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);

  if (!blog) return <p>Blog not found.</p>;

  return (
    <section style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: 'var(--color-accent)', fontSize: '2rem' }}>{blog.title}</h2>

      {/* Carousel */}
      {blog.images?.length > 0 && (
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          style={{ margin: '30px 0', borderRadius: '12px' }}
        >
          {blog.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index}`}
                style={{ width: '100%', borderRadius: '12px', maxHeight: '400px', objectFit: 'cover' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
        {blog.content}
      </p>
    </section>
  );
}
