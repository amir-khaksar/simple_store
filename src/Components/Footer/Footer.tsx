import { useFooterData } from "../Footer/api/Footer";

const Footer = () => {
  const { data, isLoading, error } = useFooterData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading footer.</div>;

  const { logo, tagline, menuItems, copyright, bottomLinks } = data;

  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href={logo?.url}>
                  <img
                    src={logo?.src}
                    alt={logo?.alt}
                    title={logo?.title}
                    className="h-10"
                  />
                </a>
                <p className="text-xl font-semibold">{logo?.title}</p>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems?.map((section: any, idx: number) => (
              <div key={idx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link: any, i: number) => (
                    <li key={i} className="font-medium hover:text-primary">
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks?.map((link: any, idx: number) => (
                <li key={idx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
