import React from "react";
import Navbar from "../components/Navbar";

const Stats = () => {
  return (
    <div className="stats stats-vertical md:stats-horizontal shadow">
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Total Likes</div>
        <div className="stat-value text-primary">25.6K</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Page Views</div>
        <div className="stat-value text-secondary">2.6M</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
        <div className="stat-value">86%</div>
        <div className="stat-title">Tasks done</div>
        <div className="stat-desc text-secondary">31 tasks remaining</div>
      </div>
    </div>
  );
};

interface FeatureType {
  url: string;
  title: string;
  subtitle: string;
}

const DownloadLink = () => {
  const fileUrl = "https://pdfobject.com/pdf/sample.pdf"; // Replace with your file link

  const handleDownload = (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "your-file.pdf"; // Specify the filename
    link.target = "_blank"; // Opens in a new tab or background
    document.body.appendChild(link); // Append to the document
    link.click(); // Programmatically click the link
    document.body.removeChild(link); // Remove the link after download
  };

  return (
    <div>
      <a
        href={fileUrl} // This is still needed for accessibility
        onClick={handleDownload} // Handle the click event
        className="btn btn-outline capitalize"
      >
        Get Earwise now
      </a>
    </div>
  );
};

const Feature = ({ url, title, subtitle }: FeatureType) => {
  const fallbackUrl = "https://via.placeholder.com/150"; // Placeholder URL for missing images

  return (
    <div className="w-full md:w-4/12 mt-10">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            className="aspect-square object-cover"
            src={url || fallbackUrl} // Fallback to a placeholder image if `url` is empty
            alt={title || "Feature Image"}
          />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">{title}</h2>
          <p>{subtitle}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      {/* HERO */}
      <div className="hero bg-base-2 h-96 relative">
        {/* BLUR */}
        <div className="w-full h-auto right-0 bottom-0 bg-pink-2">
          <div className="w-full h-96 bg-purple-100 rounded-full filter blur-3xl mx-auto"></div>
        </div>
        <div className="hero-content text-center">
          <div className="bg-pink-2 flex flex-col items-center">
            <h1 className="text-2xl md:text-5xl font-bold">
              Earwise Hearing Test App{" "}
            </h1>
            <p className="py-6 w-11/12 md:w-6/12 text-sm md:text-lg">
              The Earwise Hearing Test app is an easy and reliable assessment of
              your hearing, delivering understandable results in just 5 minutes.
            </p>
            <DownloadLink />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 bg-pink-3 self-end">
          <img
            src="https://a-us.storyblok.com/f/1016477/428x424/e7b164c83d/modal_image.png"
            className="mx-auto"
          />
        </div>
        <div className="w-full md:w-6/12 bg-blue-3">
          <div className="mx-auto flex flex-row justify-center items-center bg-red-4">
            <div className="w-10/12 md:w-4/12 mockup-phone mx-auto -mb-16">
              <div className="camera"></div>
              <div className="display">
                <img
                  src="https://cdn.vox-cdn.com/thumbor/fDw8ECz4NdbSs6MFC3mXTbrXznk=/0x0:1080x2400/775x1722/filters:focal(540x1200:541x1201)/cdn.vox-cdn.com/uploads/chorus_asset/file/23888906/Screenshot__Jul_20__2022_11_12_54_AM_.png"
                  className="flex flex-1"
                />
                {/* <div className="artboard artboard-demo phone-1">Hi.</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      {/* <div className="w-full">
        <div className="w-fit mx-auto my-20 md:my-52">
          <Stats />
        </div>
      </div> */}

      {/* TESTIMONIAL */}
      <div className="w-full mt-10 md:mt-44">
        <div className="w-10/12 md:w-7/12 mx-auto flex flex-col md:flex-row md:space-x-16">
          <Feature
            url="https://media.istockphoto.com/id/1127542345/photo/close-up-portrait-of-nice-lovely-sweet-attractive-calm-peaceful-conecnrated-focused-girl.jpg?s=612x612&w=0&k=20&c=krUDEb7Xj0qV1c0E-9GZBRU9gigojB-oFvzyS5ngXUw="
            title={"Personalized Diagnostic Reports"}
            subtitle={
              "EarWise analyzes your hearing data to create a personalized diagnostic score"
            }
          />
          <Feature
            url={
              "https://t3.ftcdn.net/jpg/05/87/43/00/360_F_587430030_zoUr6CtyPJAo58NDKXUB7XIB4ZVTNJYg.jpg"
            }
            title={"Actionable Recommendations"}
            subtitle={
              "The app provides specific recommendations to improve and protect your hearing."
            }
          />
          <Feature
            url={
              "https://media.istockphoto.com/id/2156190297/video/music-earphones-and-black-man-in-gym-for-fitness-streaming-podcast-or-audio-radio-mature-and.jpg?s=640x640&k=20&c=r3PcM9cWsmFMFwy1ubYyYxR98oLyQmtchkDdW7V3ZwA="
            }
            title={"Quick and Easy Test"}
            subtitle={
              "The EarWise hearing test is simple and fast, taking only 5 minutes to complete.It provides clear and understandable results"
            }
          />
        </div>
      </div>

      <div className="w-full">
        <div className="w-10/12 md:w-7/12 flex space-y-4 flex-col justify-center items-center bg-purple-200 h-52 mx-auto my-20 md:my-44 rounded-3xl">
          <div className="text-2xl text-center md:text-4xl font-extrabold text-gray-700 ">
            Would you like to know more?
          </div>
          {/* <div className="text-xs md:text-base text-center">
            Read our FAQ or contact Customer Support
          </div> */}
        </div>
      </div>

      <div className="w-full">
        <div className="w-10/12 md:w-8/12 mx-auto bg-purple-500 rounded-3xl md:rounded-full mb-16 flex flex-col items-center justify-center py-9">
          <div className="text-2xl md:text-4xl mb-7 text-center text-white font-extrabold">
            Start your hearing wellbeing journey with Earwise
          </div>
          <DownloadLink />
        </div>
      </div>

      <div className="w-full mb-40">
        <div className="w-8/12 mx-auto text-center space-y-8 divide-y">
          <div className="text-sm pt-8">
            EarWise is an innovative web app designed to address the challenges
            faced by individuals with sensorineural hearing loss (SNHL),
            particularly in Ontario and India. SNHL, which affects speech
            comprehension and listening in various environments due to inner ear
            or auditory nerve damage, often leads to social isolation and
            psychological distress.
          </div>

          <div className="text-sm pt-8">
            Current treatments, such as hearing aids and cochlear implants, lack
            the ability to provide personalized adjustments for fluctuating
            conditions, leaving many without adequate support. EarWise fills
            this gap by offering personalized diagnostic reports based on user
            health data, comparing hearing parameters against ideal ranges.
          </div>

          <div className="text-sm pt-8">
            The platform empowers users to take proactive measures for their
            hearing health, providing actionable insights and tailored
            recommendations to enhance well-being. By offering accessible,
            data-driven tools, EarWise aims to improve the quality of life for
            those affected by hearing impairments.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
