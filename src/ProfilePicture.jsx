function ProfilePicture() {
  const imageUrl = "./src/assets/pp.jpg";

  const handleClick = (e) => {
    e.target.style.display = "none";
  };

  return <img src={imageUrl} onClick={(e) => handleClick(e)}></img>;
}

export default ProfilePicture;
