import Title from "../Title";

const ServiceArea = () => {
  return (
    <div>
      <div>
        <Title heading="Service Area" des="" />

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 justify-center xl:w-[80%] w-full mx-auto p-10">
          <div className="flex flex-col gap-4">
            <h5 className="border-b-2 border-b-gray-300 py-2 font-bold">
              Ontario
            </h5>
            <ul className="grid grid-cols-2 gap-2">
              <li>Ancaster</li>
              <li>Barrie</li>
              <li>Binbrook</li>
              <li>Brantford</li>
              <li>Cambridge</li>
              <li>Guelph</li>
              <li>Hamilton</li>
              <li>Kitchener/Waterloo</li>
              <li>London</li>
              <li>Niagara Falls</li>
              <li>Ottawa</li>
              <li>Simcoe</li>
              <li>St. Catharines</li>
              <li>Waterdown</li>
              <li>Welland</li>
              <li>Woodstock</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="border-b-2 border-b-gray-300 py-2 font-bold">GTA</h5>
            <ul className="grid grid-cols-2 gap-2">
              <li>Ajax</li>
              <li>Brampton</li>
              <li>Burlington</li>
              <li>Newmarket</li>
              <li>Oakville</li>
              <li>Oshawa</li>
              <li>Caledon</li>
              <li>Pickering</li>
              <li>Etobicoke</li>
              <li>Scarborough</li>
              <li>Markham</li>
              <li>Toronto</li>
              <li>Milton</li>
              <li>Vaughan</li>
              <li>Mississauga</li>
              <li>Whitby</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="border-b-2 border-b-gray-300 py-2 font-bold">
              British Columbia
            </h5>
            <ul className="grid grid-cols-2 gap-2">
              <li>Abbotsford</li>
              <li>New Westminster</li>
              <li>Burnaby</li>
              <li>North Vancouver</li>
              <li>Chilliwack</li>
              <li>Pitt Meadows</li>
              <li>Coquitlam</li>
              <li>Port Coquitlam</li>
              <li>Delta</li>
              <li>Richmond</li>
              <li>Langley</li>
              <li>Squamish</li>
              <li>Maple Ridge</li>
              <li>Surrey</li>
              <li>Mission</li>
              <li>West Vancouver</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
