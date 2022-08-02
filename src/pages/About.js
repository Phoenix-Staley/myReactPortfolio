import React from "react";
import selfie from "../assets/images/sunsetBackgroundSquare.jpg";

const styles = {
  heroSubtitle: {
    "backgroundColor": "rgb(17, 30, 48)",
    "fontSize": "xx-large",
    "padding": "5px",
    "borderRadius": "15%",
    "borderStyle": "outset",
    "borderColor": "rgb(12, 25, 43)"
  }
}

export default function Home() {
  return (
    <div>
      <div className="hero" alt="The word developer on a dark background surrounded by yellow angle brackets">
        <img src={selfie} alt="Phoenix Staley in a white cardigan, wearing square glasses, with the sunset in the background" class="pineapple-shirt" />
        <h2 class="hero-subtitle" style={styles.heroSubtitle}>Keeping Current</h2>
      </div>

      <main class="flex-container main-section" id="about-me">
            <aside class="sidebar flex-container">
                <h2 class="section-heading">About Me</h2>
            </aside>
            <div class="content">
                <p>
                    Welcome to my website! I'm a nonbinary developer currently enrolled in a full-stack JavaScript bootcamp through the
                    University of Washington.
                    I've been fascinated about computers and the internet since I was a kid. I began programming video games on Roblox in
                    middle school. Ever since then my drive to continue learning and developing programs has never ceased.
                </p>
                <br />
                <p>
                  On the portfolio page linked above you can view projects I have developed, either with a team or by myself.
                </p>
            </div>
        </main>
    </div>
  );
}
