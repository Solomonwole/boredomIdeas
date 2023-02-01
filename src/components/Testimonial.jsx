import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { VscCircleFilled, VscCircleOutline } from "react-icons/vsc";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      author: "Carrie R. Dineen",
      image: image1,
      quote:
        "I was always struggling with boredom until I found BoredomIdeas. The website has been a lifesaver for me, providing an endless stream of fun activity ideas that keep me entertained and engaged. Whether I'm looking for indoor or outdoor activities, BoredomIdeas always has something new and exciting to suggest. I love how user-friendly the website is and how quickly it generates ideas based on my interests. If you're looking for a solution to boredom, I highly recommend checking out BoredomIdeas - you won't be disappointed! ❤️❤️❤️❤️❤️!!!",
    },
    {
      author: "Randy J. Leon",
      image: image2,
      quote:
        "BoredomIdeas is a lifesaver for those days when you just don't know what to do. It's amazing how a simple website can generate so many unique and fun activity ideas. I've tried a lot of things that I never would have thought of on my own, and it's always a great time. I highly recommend giving it a try if you're ever feeling stuck for things to do!",
    },
    {
      author: "Karen P. Estrada",
      image: image3,
      quote:
        "BoredomIdeas is the perfect solution for those moments when you don't know what to do. The website offers a wide range of fun activity ideas that are sure to cure any boredom. From creative crafts to outdoor adventures, there's something for everyone. No more staring at a blank wall, BoredomIdeas has got you covered!",
    },
  ];

  // useEffect(() => {
  //   setInterval(() => {
  //     if (currentIndex === testimonials.length - 1) {
  //       setCurrentIndex(0);
  //     } else {
  //       setCurrentIndex(currentIndex + 1);
  //     }
  //   }, 7000);
  // }, [currentIndex, testimonials.length]);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 1);
  };
  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <Box>
        <Message>
          <ImQuotesLeft className="icon" />
          &nbsp; {testimonials[currentIndex].quote} &nbsp;
          <ImQuotesRight className="icon" />
        </Message>

        <Author>
          <img
            src={testimonials[currentIndex].image}
            alt=""
            className="profile"
          />
          <div className="">
            {testimonials[currentIndex].author}

            <div className="flex">
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
            </div>
          </div>
        </Author>

        <Pag>
          <div className="btn">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={index === currentIndex ? "active" : ""}
              >
                {index === currentIndex ? (
                  <VscCircleFilled className="icon" />
                ) : (
                  <VscCircleOutline className="icon" />
                )}
              </span>
            ))}
          </div>
        </Pag>
      </Box>
    </>
  );
};

export default Testimonials;

const Box = styled.div`
  margin: 30px 0;
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Message = styled.div`
  line-height: 38px;
  margin-bottom: 20px;
  min-height: 200px;
  text-align: center;

  .icon {
    color: rgb(35, 61, 255);
  }
`;
const Author = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 38px;
  margin-bottom: 20px;

  .flex {
    display: flex;
    align-items: center;
  }
  .profile {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 10px;
    margin-top: 5px;
  }

  .star {
    color: rgb(35, 61, 255);
  }
`;

const Pag = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .btn {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    color: rgb(35, 61, 255);
  }
`;
