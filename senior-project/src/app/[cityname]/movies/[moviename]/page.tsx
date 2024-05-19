"use client";
import React from "react";
import { BsShare } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import "./MoviePage.css";
// import MovieCarousel from "@/components/moviecarousel/MovieCarousel";
import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import CelebCard from "@/components/CelebCard/CelebCard";

const MoviePage = () => {
  const pathname = usePathname();

  const movie = {
    wideposter:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/srikanth-et00354108-1712743850.jpg",
    portraitposter:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/srikanth-et00354108-1712743850.jpg",
    title: "Jawan",
    rating: 8.5,
    halls: ["2D", "3D"],
    languages: ["Telugu", "Hindi", "English"],
    duration: "2h 15m",
    type: "Action/Thriller",
    releasedate: "Sep 3, 2023",
    cast: [
      {
        _id: "1",
        name: "Shah R K",
        role: "Actor",
        imageUrl:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajkummar-rao-1043890-20-12-2017-03-34-28.jpg",
      },
      {
        _id: "1",
        name: "Shah R K",
        role: "Actor",
        imageUrl:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajkummar-rao-1043890-20-12-2017-03-34-28.jpg",
      },
      {
        _id: "1",
        name: "Shah R K",
        role: "Actor",
        imageUrl:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajkummar-rao-1043890-20-12-2017-03-34-28.jpg",
      },
      {
        _id: "1",
        name: "Shah R K",
        role: "Actor",
        imageUrl:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajkummar-rao-1043890-20-12-2017-03-34-28.jpg",
      },
      {
        _id: "1",
        name: "Shah R K",
        role: "Actor",
        imageUrl:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajkummar-rao-1043890-20-12-2017-03-34-28.jpg",
      },
      {
        _id: "1",
        name: "Shah R K",
        role: "Actor",
        imageUrl:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajkummar-rao-1043890-20-12-2017-03-34-28.jpg",
      },
      {
        _id: "1",
        name: "Shah R K",
        role: "Actor",
        imageUrl:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajkummar-rao-1043890-20-12-2017-03-34-28.jpg",
      },
      {
        _id: "1",
        name: "Shah R K",
        role: "Actor",
        imageUrl:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajkummar-rao-1043890-20-12-2017-03-34-28.jpg",
      },
    ],
    crew: [
      {
        _id: "1",
        name: "Atlee",
        role: "Director",
        imageUrl:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tushar-hiranandani-2409-24-03-2017-14-30-39.jpg",
      },
      {
        _id: "1",
        name: "Atlee",
        role: "Director",
        imageUrl:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tushar-hiranandani-2409-24-03-2017-14-30-39.jpg",
      },
      {
        _id: "1",
        name: "Atlee",
        role: "Director",
        imageUrl:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tushar-hiranandani-2409-24-03-2017-14-30-39.jpg",
      },
      {
        _id: "1",
        name: "Atlee",
        role: "Director",
        imageUrl:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tushar-hiranandani-2409-24-03-2017-14-30-39.jpg",
      },
      {
        _id: "1",
        name: "Atlee",
        role: "Director",
        imageUrl:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tushar-hiranandani-2409-24-03-2017-14-30-39.jpg",
      },
      {
        _id: "1",
        name: "Atlee",
        role: "Director",
        imageUrl:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tushar-hiranandani-2409-24-03-2017-14-30-39.jpg",
      },
      {
        _id: "1",
        name: "Atlee",
        role: "Director",
        imageUrl:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tushar-hiranandani-2409-24-03-2017-14-30-39.jpg",
      },
      {
        _id: "1",
        name: "Atlee",
        role: "Director",
        imageUrl:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tushar-hiranandani-2409-24-03-2017-14-30-39.jpg",
      },
      {
        _id: "1",
        name: "Atlee",
        role: "Director",
        imageUrl:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tushar-hiranandani-2409-24-03-2017-14-30-39.jpg",
      },
    ],
    about:
      "A high-octane action thriller that outlines the emotional journey of a man who is set to rectify the wrongs in society.",
  };

  return (
    <div className="moviepage">
      <div
        className="c1"
        style={{
          backgroundImage: `url(${movie.wideposter})`,
        }}
      >
        <div className="c11">
          <div className="left">
            <div
              className="movie_poster"
              style={{
                backgroundImage: `url(${movie.portraitposter})`,
              }}
            >
              <p>In cinemas</p>
            </div>
            <div className="movie_details">
              <p className="title">{movie.title}</p>
              <p className="rating">
                <BsFillStarFill className="star" />
                &nbsp;&nbsp;
                {movie.rating}/10
              </p>
              <div className="halls_languages">
                <p className="halls">
                  {movie.halls.map((hall, index) => {
                    return <span key={index}>{hall} </span>;
                  })}
                </p>
                <p className="languages">
                  {movie.languages.map((language, index) => {
                    return <span key={index}>{language} </span>;
                  })}
                </p>
              </div>
              <p className="duration_type_releasedat">
                <span className="duration">{movie.duration}</span>
                <span>•</span>
                <span className="type">{movie.type}</span>
                <span>•</span>
                <span className="releasedat">{movie.releasedate}</span>
              </p>
              <a href={`${pathname}/buytickets`} className="linkstylenone">
                <button className="bookbtn">Book Tickets</button>
              </a>
            </div>
          </div>
          <div className="right">
            <button className="sharebtn">
              <BsShare className="shareicon" />
              Share
            </button>
          </div>
        </div>
      </div>
      <div className="c2">
        <h1>About the Movie</h1>
        <p>{movie.about}</p>
        <div className="line"></div>
        <h1>Cast</h1>
        <div className="circlecardslider">
          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 2,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 2,
              },
              "@1.50": {
                slidesPerView: 6,
                spaceBetween: 2,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {movie.cast.map((cast, index) => {
              return (
                <SwiperSlide key={index}>
                  <CelebCard {...cast} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="line"></div>
        <h1>Crew</h1>
        <div className="circlecardslider">
          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 2,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 2,
              },
              "@1.50": {
                slidesPerView: 6,
                spaceBetween: 2,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {movie.crew.map((cast, index) => {
              return (
                <SwiperSlide key={index}>
                  <CelebCard {...cast} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="line"></div>
        <h1>Your might also like</h1>
        <MovieCarousel />
      </div>
    </div>
  );
};

export default MoviePage;
