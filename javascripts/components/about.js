var about = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-left">
            <h2 className="section-heading">About Me</h2>
            <hr className="light"/>
            <p className="text-faded">
              I studied accounting and finance at the University of Colorado, but I was always drawn to the
              technology scene. After graduating, I went to work for a Denver-based CPA firm, where I worked primarily
              with
              Hedge Funds, Private Equity Funds and High-Net-Worth Family Offices providing a variety of accounting
              services.
              All the while, I was actively trying to work my way into the tech world, but I didn't believe that I had
              the required
              skill-set to provide the type of impact that I'd like to make.

              After several years at the CPA firm, I finally decided to pursue my passion.
              So... I quit my job and entered a 6-month Full-Stack Web Development program (the program was called
              gSchool through
              Galvanize in Denver, CO).
              It was easily one of the best decisions I've made in my life and now I'm absolutely obsessed with all
              things programming.

              I now work as a developer at a start-up in Denver called P2Bi, which is a crowd-lending platform for early
              stage, high
              growth companies. We offer revolving lines of credit ranging from $250,000 to $5,000,000.</p>
          </div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  React.createElement(about),
  document.getElementById('about')
);
