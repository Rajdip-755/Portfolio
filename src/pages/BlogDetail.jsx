import { useParams, useNavigate } from 'react-router-dom';
import { blogs } from './blog-data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Navbar from '../components/Navbar/Navbar';

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(b => b.id === id);

  if (!blog) return <p>Blog not found.</p>;

  return (
    <>
      <Navbar />
      <section style={{ padding: '100px 24px 80px', maxWidth: '800px', margin: '0 auto' }}>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            marginBottom: '1.5rem',
            background: 'var(--color-accent)',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          ← Back
        </button>

        {/* Blog Title */}
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
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    maxHeight: '400px',
                    objectFit: 'cover',
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Blog Content */}
        <p
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'var(--color-text)',
            whiteSpace: 'pre-line',
          }}
        >
          {blog.content}
        </p>
      </section>
    </>
  );
}
