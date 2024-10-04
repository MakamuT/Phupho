import React from "react";

const About = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img
              src={require("../assets/Phupho.png")} 
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-16">.
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center lg:text-left">
              About Us
            </h2>
            <p className="text-gray-600 mb-8 text-center lg:text-left">
              Imagine a world where everyone has access to the digital skills
              they need to succeed, regardless of their background or abilities.
              Our platform is making that vision a reality by providing a
              user-friendly, inclusive space for people to learn and grow. With
              our platform, you'll gain the essential digital skills you need to
              thrive in today's digital age, from basic computer skills to more
              advanced topics. Our courses are designed to be easy to follow,
              even if you have limited tech experience, and our platform is
              built with the latest technologies to ensure a fast, secure, and
              seamless learning experience. By choosing our platform, you're not
              only investing in your own future, but also helping to create a
              more inclusive and equitable digital landscape. Join us in
              bridging the gap in digital learning and
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">
              Why Choose Us?
            </h3>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
              <ul className="list-disc list-inside text-gray-600 lg:mr-8 mb-6 lg:mb-0">
                <li className="hover:text-blue-500 transition duration-300 ease-in-out">
                  Easy to Use: Our platform is designed to be simple and easy to
                  navigate, even if you're not tech-savvy. You'll get
                  step-by-step guidance and interactive courses to help you
                  learn at your own pace.
                </li>
                <li className="hover:text-blue-500 transition duration-300 ease-in-out">
                  Accessible from Anywhere: You can access our platform from any
                  device, including your mobile phone or tablet. You can even
                  download content to learn offline, so you can keep learning
                  even without internet.
                </li>
                <li className="hover:text-blue-500 transition duration-300 ease-in-out">
                  Learning that Fits You: Our platform uses artificial
                  intelligence to recommend courses that fit your needs and
                  interests. You'll get a personalized learning experience
                  that's tailored just for you.
                </li>
                <li className="hover:text-blue-500 transition duration-300 ease-in-out">
                  Designed for Everyone: Our platform is designed to be
                  accessible to people with disabilities. We've included
                  features like voice navigation, screen reader support, and
                  high-contrast modes to make sure everyone can learn.
                </li>
              </ul>
              <ul className="list-disc list-inside text-gray-600">
                <li className="hover:text-blue-500 transition duration-300 ease-in-out">
                  Supportive Community: You'll have access to a community of
                  learners and experts who can answer your questions and provide
                  support. You'll never feel alone or stuck in your learning
                  journey.
                </li>
                <li className="hover:text-blue-500 transition duration-300 ease-in-out">
                  By choosing Phupho, you'll get a learning platform that's
                  designed to help you succeed, no matter your technical
                  abilities or background. We believe that everyone deserves
                  access to digital learning, and we're committed to making that
                  a reality
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;