const Avatar = ({ imgSrc, name }) => {
  return (
    <div className="flex gap-2 items-center bg-gray-300 p-2 rounded-lg shadow-sm">
      <img
        className="w-[2rem] h-[2rem] rounded-full object-fill"
        src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1727979151/PORTFOLIO/original_picture_rq8bmg.jpg"
        alt={`${name}'s profile`}
      />
      <div className="text-sm">
        <h1 className="text-xs">Nathaniel Owusu</h1>
      </div>
    </div>
  );
};

export default Avatar;
