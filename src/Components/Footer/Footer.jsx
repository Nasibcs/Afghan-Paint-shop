import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/nasibburhan.M" },
    { icon: FaTwitter, href: "https://x.com/i/flow/login" },
    { icon: FaInstagram, href: "https://www.instagram.com/" },
    { icon: FaYoutube, href: "https://www.youtube.com/" },
  ];

 const menuLinks = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Products", link: "/products" },
  { label: "Contact", link: "/contact" },
];

  const contactInfo = [
    { label: "Address:", value: "Kabul, Afghanistan" },
    { label: "Phone:", value: "+93795582109" },
    { label: "Email:", value: "afghanpaint@gmail.com" },
  ];

  return (
    <footer className="bg-[#0f252a] text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <h2 className="text-2xl font-extrabold text-red-500">
            AFGHAN <span className="text-white">PAINT</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed text-justify">
            Afghan Paint produces high-quality paints for interiors, exteriors, 
            and waterproofing needs. Using premium raw materials and modern 
            technology, we deliver durable, eco-friendly, and easy-to-apply products.
          </p>
          <div className="flex space-x-4 mt-6">
            {socialLinks.map(({ icon: Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="p-2 rounded-full bg-gray-800 hover:bg-red-500 transition transform hover:scale-110 shadow-md"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="md:pl-6 md:border-l md:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-white">Menu</h3>
<ul className="space-y-3 text-sm">
  {menuLinks.map(({ label, link }, i) => (
    <li key={i}>
      <a
        href={link}
        className="hover:text-red-500 transition relative group"
      >
        {label}
        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-red-500 transition-all group-hover:w-full"></span>
      </a>
    </li>
  ))}
</ul>

        </div>

        <div className="md:pl-6 md:border-l md:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          {contactInfo.map((info, idx) => (
            <p key={idx} className="text-sm mb-2">
              <span className="font-semibold">{info.label}</span> {info.value}
            </p>
          ))}
        </div>
      </div>

      <div className="text-center border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Afghan Paint. All Rights Reserved.  
        <br /> Designed & Developed By{" "}
        <a
          href="https://www.linkedin.com/in/nasib-burhan-ab446235b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 transition font-medium"
        >
          Nasibullah Burhan
        </a>
      </div>
    </footer>
  );
}
