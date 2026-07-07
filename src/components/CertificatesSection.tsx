import { ExternalLink } from "lucide-react";

type Certificate = {
  name: string;
  date: string;
  img: string;
};

const certificates: Certificate[] = [
  {
    name: "Advanced CSS",
    date: "24-02-2025",
    img: "/certificates/AdvancedCSS.jpg",
  },
  {
    name: "React for Beginners",
    date: "12-05-2025",
    img: "/certificates/ReactForBeginners.jpg",
  },
  {
    name: "React in Action",
    date: "15-05-2025",
    img: "/certificates/ReactInAction.jpg",
  },
  {
    name: "Git and Github for Beginners",
    date: "18-08-2025",
    img: "/certificates/GitAndGithubForBeginners.jpg",
  },
  {
    name: "Git and Github basics Course",
    date: "04-09-2025",
    img: "/certificates/GitAndGithubBasics.jpg",
  },

  {
    name: "Hour of code with Minecraft",
    date: "20-05-2026",
    img: "/certificates/HourOfCodeMinecraftCertificate.jpg",
  }
];

const CertificateCard = ({ certificate }: { certificate: Certificate }) => (
  <div className="group bg-card/10 dark:bg-card rounded-lg overflow-hidden shadow-xs card-hover">
    <div className="overflow-hidden">
      <img src={certificate.img} alt={certificate.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{certificate.name}</h3>
      <p className="text-muted-foreground mb-4 text-sm">{certificate.date}</p>
      <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            <a
              href={certificate.img}
              target="_blank"
              rel="noopener noreferrer" //prevent security issues, stops the new tab from accessing the page in odd ways and avoids sending referrer info in some cases
              className="text-white darktext-foreground/80 hover:text-black dark:hover:text-primary transition-colors duration-300"
            >
              {" "}
              <ExternalLink size={20} />{" "}
            </a>
          </div>
      </div>
    </div>
  </div>
  );

  export const CertificatesSection = () => {
    return (
      <section id="certificates" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="text-primary">Certificates</span>
        </h2>
        <p className="text-center text-white dark:text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of the certificates I've earned through online courses I have taken and seminars I have attended.
      </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate) => (
            <CertificateCard key={certificate.name} certificate={certificate} />
          ))}
        </div>
      </div>
      </section>
    )
  }