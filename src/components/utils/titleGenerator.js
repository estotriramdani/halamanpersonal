const titleGenerator = (pageName) => {
  const firstLetter = pageName[0].toUpperCase();
  return firstLetter + pageName.substr(1);
};

export default titleGenerator;
