import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Faq from "react-faq-component";

const data = {
  
  rows: [
    {
      title: "What technologies do you specialize in?",
      content: `I specialize in Full-Stack Development using Django (Python), React (Vite), REST APIs, and PostgreSQL. I also use Tailwind CSS for responsive UIs and integrate AI features using OpenAI & Gemini.`,
    },
    {
      title: "Can you build both frontend and backend?",
      content: `Yes! I develop scalable backends using Django and modern, interactive frontends with React & Tailwind. I deliver complete full-stack solutions.`,
    },
    {
      title: "Do you work on freelance projects?",
      content: `Yes, I work independently on freelance and personal projects, handling everything from planning and development to deployment.`,
    },
    {
      title: "Do you follow any project management methodology?",
      content: `Yes, I follow Agile practices, especially Scrum. I serve as a Scrum Master and manage sprint planning, backlog grooming, and sprint reviews.`,
    },
    {
      title: "Can you integrate AI or chatbot features?",
      content: `Absolutely! I’ve developed chatbot systems using OpenAI and Gemini APIs, integrated into React and Django applications.`,
    },
    {
      title: "How can I contact you for a project?",
      content: `You can email me at muhammadabuhurairah22@gmail.com or use the contact form on the website.`,
    },
  ],
};

const styles = {
  bgColor: "transparent",
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "gray",
  arrowColor: "black", // White arrow in both themes
};

const Faqs = () => {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen transition-colors duration-300">
      <Navbar color="bg-gray-900" />
      <div className="pt-24 px-5 md:px-10 pb-16">
        <h1 className="text-center font-bold text-[22px] md:text-[28px] tracking-wide mb-6 text-black dark:text-white">
          Frequently Asked Questions
        </h1>
        <div className="w-full max-w-4xl mx-auto text-black dark:text-white">
          <Faq data={data} styles={styles} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faqs;
