const SelectedHome = (props: any) => {
  const home = props?.props?.home?.[0];

  return (
    <div className=" flex-row justify-self-center max-w-[992px] h-auto">
      <div className="flex justify-self-center">
        <div className="grid grid-cols-4 gap-4">
          <div className="min-h-[300px] col-span-2 rounded-r-lg">
            <img src={home.image_url} />
          </div>
          <img src={home.image_10} />
          <img src={home.image_20} />
        </div>
      </div>
      <div className="flex-row justify-self-center p-4">
        <div>{home.title}</div>
        <p>{home.description}</p>
      </div>
    </div>
  );
};

export default SelectedHome;
