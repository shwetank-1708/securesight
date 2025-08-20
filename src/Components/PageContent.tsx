interface PageContentProps {
  src: string;
  heading: string;
  bold1: string;
  normal1: string;
  bold2: string;
  normal2: string;
  bold3: string;
  normal3: string;
  bold4: string;
  normal4: string;
}

const PageContent: React.FC<PageContentProps> = ({
  src,
  heading,
  bold1,
  normal1,
  bold2,
  normal2,
  bold3,
  normal3,
  bold4,
  normal4,
}) => {
  return (
    <div className="flex gap-10 lg:flex-row flex-col items-center shadow-2xl rounded-2xl p-8">
      <img src={src} className="lg:w-[35%] w-full rounded-2xl" />
      <div className="flex flex-col gap-4 w-full">
        <h3 className="text-2xl font-bold">{heading}</h3>
        <ul className="list-disc list-inside flex flex-col gap-2">
          {bold1 && normal1 && (
            <li>
              <span className="font-bold">{bold1}</span> -{" "}
              <span>{normal1}</span>
            </li>
          )}
          {bold2 && normal2 && (
            <li>
              <span className="font-bold">{bold2}</span> -{" "}
              <span>{normal2}</span>
            </li>
          )}
          {bold3 && normal3 && (
            <li>
              <span className="font-bold">{bold3}</span> -{" "}
              <span>{normal3}</span>
            </li>
          )}
          {bold4 && normal4 && (
            <li>
              <span className="font-bold">{bold4}</span> -{" "}
              <span>{normal4}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PageContent;
