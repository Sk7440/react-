function Footer() {
  let footer = [
    {
      heading: "FOOTER",
      p: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
      e: "Powered by w3.css",
    },
  ];
  let blogPost = [
    {
      imgsrc: "https://www.w3schools.com/w3images/workshop.jpg",
      h2: "Lorem",
      p: "Sed mattis nunc",
    },
    {
      imgsrc: "https://www.w3schools.com/w3images/gondol.jpg",
      h2: "ipsum",
      p: "Sed mattisdjfhafs nunc",
    },
  ];
  let populartags = [
    {
      h2: "travel",
    },
    {
      h2: "New york",
    },
    {
      h2: "dinner",
    },
    {
      h2: "salmon",
    },
    {
      h2: "france",
    },
    {
      h2: "drinks",
    },
    {
      h2: "ideas",
    },
    {
      h2: "flavours",
    },
    {
      h2: "cuisine",
    },
    {
      h2: "chicken",
    },
    {
      h2: "travel",
    },
    {
      h2: "fried",
    },
    {
      h2: "fish",
    },
    {
      h2: "DUCK",
    },
  ];
  return (
    <>
      <div class="footer-parent">
        <div class="footer">
          {footer.map((ele) => {
            return (
              <>
                <h2>{ele.heading}</h2>
                <h4>{ele.p}</h4>
                <h4>{ele.e}</h4>
              </>
            );
          })}
        </div>
        <div class="blogspot">
            <h1>Blog Posts</h1>
            <div>

          {blogPost.map((ele) => {
              return (
                  <>
              <div class="imgs">

                <img src={ele.imgsrc} alt="" />
              </div>
                <h3>{ele.h2}</h3>
                <h3>{ele.p}</h3>
              </>
            );
        })}
        </div>
        </div>
        <div class="tags">
            <h1>Popular tags</h1>
            <div class="tags-child">

          {populartags.map((ele) => {
              return (
                  <>
                <h4>{ele.h2}</h4>
              </>
            );
        })}
        </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
