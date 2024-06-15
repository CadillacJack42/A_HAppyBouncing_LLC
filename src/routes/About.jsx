import "../css/About.css";

export const About = () => {
  return (
    <>
      <main className="main">
        <h1 className="about-title">A Happy Bouncing LLC</h1>
        <p className="texts">
          Edgar Vargas: <a href="tel:+1-702-418-6686">(702) 418-6686</a>
        </p>
      </main>
      <div>
        <h2 className="headline">History</h2>
        <p className="texts about">
          Established in 2017. A Happy Bouncing is a locally owned and operated
          Las Vegas business servicing all of Clark County.
        </p>
        <h2 className="headline">About the Owner</h2>
        <p className="texts about">
          I started A Happy Bouncing after I was diagnosed with cancer and could
          no longer work in my field of 20 years. I wanted a business that I
          could leave behind for my family in case I could no longer provide for
          them. I'm Happy to say that I am now in remission and doing well with
          my treatments.
        </p>
      </div>
    </>
  );
};
