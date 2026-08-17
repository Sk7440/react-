function About() {
  let about = [
    {
      info: "About Me, The Food Man",
      imgsrc: "https://www.w3schools.com/w3images/chef.jpg",
      intro: "I am Who I Am!",
      explain: "With Passion For Real, Good Food",
      paragraph:
        "Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
    },
  ];
  return (
    <>
      <div class="about">
        {about.map((ele) => {
          return (
            <>
              <h4>{ele.info}</h4>
              <div class="imgs">

              <img src={ele.imgsrc} alt="" />
              </div>
              <h2>{ele.intro}</h2>
              <h5>{ele.explain}</h5>
              <p>{ele.paragraph}</p>
            </>
          );
        })}
      </div>
    </>
  );
}
export default About