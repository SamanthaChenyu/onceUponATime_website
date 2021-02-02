import React from "react";
import Intro from "./component/intro/Intro";
import MBIntro from "./component/intro/MBIntro";
import ParallaxContent from "./component/content/ParallaxContent";
import ResponsiveCarousel from "./component/content/ResponsiveCarousel";
import { useMediaQuery } from "react-responsive";
import createICON from "./images/createICON.gif";
import editICON from "./images/editICON.gif";
import drawICON from "./images/drawICON.gif";
import ONE from "./images/one.png";
import TWO from "./images/two.png";
import THREE from "./images/three.png";
import Introduce1 from "./images/Introduce1.png";
import Introduce2 from "./images/Introduce2.png";
import Introduce3 from "./images/Introduce3.png";
import Container from "./component/layout/StyledContent";
import Header from "./component/header/Header";
import AboutUs from "./images/ABOUTUS.png";
import News from "./images/news.png";

const Home = () => {
  window.scrollTo(0, 0);
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1280 });
    return isDesktop ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 1279 });
    return isMobile ? children : null;
  };
  return (
    <>
      <Header />
      <Desktop>
        <Intro />
      </Desktop>
      <Mobile>
        <MBIntro />
      </Mobile>
      <div id="Information" className="element">
        <ParallaxContent
          animate
          ipadImage={Introduce1}
          numberImage={ONE}
          icon={createICON}
          title={`個人創作\n互動對話影音繪本`}
          description="『 從前從前 』能幫助您快速創建屬於自己的互動故事，您可以在不同場景中編輯與加入各種角色，簡易及方便地讓您享受到製作影音繪本的樂趣。"
        />
        <ParallaxContent
          animate={false}
          ipadImage={Introduce2}
          numberImage={TWO}
          icon={editICON}
          title={`紀錄對話\n親密感極佳的有聲書`}
          description="內建螢幕錄影與外部錄音功能，錄影過程中可任意切換場景，替角色配上獨特的聲音，不僅好玩，更能加深親子之間有趣以及美好的回憶。"
        />
        <ParallaxContent
          animate
          ipadImage={Introduce3}
          numberImage={THREE}
          icon={drawICON}
          title={`繪製角色\n創造屬於自己的貼圖`}
          description="支援Apple Pencil繪圖功能，讓您即時創作想要的角色與圖案，讓互動繪本更具個人特色與魅力！"
        />
      </div>
      <div id="About" className="element">
        <ResponsiveCarousel titleImg={AboutUs} />
      </div>
      <div id="News" className="element">
        <ResponsiveCarousel titleImg={News} content />
      </div>
    </>
  );
};

const PrivacyPolicy = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header Privacy />
      <Container style={{ paddingTop: 100 }}>
        <h1>Privacy Policy</h1>

        <p style={{ textAlign: "right" }}>October 20, 2019</p>

        <p>
          從前從前 ("us", "we", or "our") operates the 從前從前 mobile
          application (hereinafter referred to as the "Service").
        </p>

        <p>
          This page informs you of our policies regarding the collection, use,
          and disclosure of personal data when you use our Service and the
          choices you have associated with that data. Our Privacy Policy for
          從前從前 is created with the help of the{" "}
          <a href="https://www.privacypolicies.com/free-privacy-policy-generator/">
            PrivacyPolicies.com Privacy Policy Generator
          </a>
          .
        </p>

        <p>
          We use your data to provide and improve the Service. By using the
          Service, you agree to the collection and use of information in
          accordance with this policy. Unless otherwise defined in this Privacy
          Policy, the terms used in this Privacy Policy have the same meanings
          as in our Terms and Conditions.
        </p>

        <h2 style={{ paddingTop: 50 }}>Information Collection And Use</h2>

        <p>
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </p>

        <h3>Types of Data Collected</h3>

        <h4>Personal Data</h4>

        <p>
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you ("Personal Data"). Personally identifiable information
          may include, but is not limited to:
        </p>

        <ul>
          <li>Cookies and Usage Data</li>
        </ul>

        <h4>Usage Data</h4>

        <p>
          When you access the Service with a mobile device, we may collect
          certain information automatically, including, but not limited to, the
          type of mobile device you use, your mobile device unique ID, the IP
          address of your mobile device, your mobile operating system, the type
          of mobile Internet browser you use, unique device identifiers and
          other diagnostic data ("Usage Data").
        </p>

        <h4>Tracking & Cookies Data</h4>
        <p>
          We use cookies and similar tracking technologies to track the activity
          on our Service and hold certain information.
        </p>
        <p>
          Cookies are files with small amount of data which may include an
          anonymous unique identifier. Cookies are sent to your browser from a
          website and stored on your device. Tracking technologies also used are
          beacons, tags, and scripts to collect and track information and to
          improve and analyze our Service.
        </p>
        <p>
          You can instruct your browser to refuse all cookies or to indicate
          when a cookie is being sent. However, if you do not accept cookies,
          you may not be able to use some portions of our Service. You can learn
          more how to manage cookies in the{" "}
          <a href="https://privacypolicies.com/blog/how-to-delete-cookies/">
            Browser Cookies Guide
          </a>
          .
        </p>
        <p>Examples of Cookies we use:</p>
        <ul>
          <li>
            <strong>Session Cookies.</strong> We use Session Cookies to operate
            our Service.
          </li>
          <li>
            <strong>Preference Cookies.</strong> We use Preference Cookies to
            remember your preferences and various settings.
          </li>
          <li>
            <strong>Security Cookies.</strong> We use Security Cookies for
            security purposes.
          </li>
        </ul>

        <h2 style={{ paddingTop: 50 }}>Use of Data</h2>

        <p>從前從前 uses the collected data for various purposes:</p>
        <ul>
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>
            To allow you to participate in interactive features of our Service
            when you choose to do so
          </li>
          <li>To provide customer care and support</li>
          <li>
            To provide analysis or valuable information so that we can improve
            the Service
          </li>
          <li>To monitor the usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>

        <h2 style={{ paddingTop: 50 }}>Transfer Of Data</h2>
        <p>
          Your information, including Personal Data, may be transferred to — and
          maintained on — computers located outside of your state, province,
          country or other governmental jurisdiction where the data protection
          laws may differ than those from your jurisdiction.
        </p>
        <p>
          If you are located outside Taiwan and choose to provide information to
          us, please note that we transfer the data, including Personal Data, to
          Taiwan and process it there.
        </p>
        <p>
          Your consent to this Privacy Policy followed by your submission of
          such information represents your agreement to that transfer.
        </p>
        <p>
          從前從前 will take all steps reasonably necessary to ensure that your
          data is treated securely and in accordance with this Privacy Policy
          and no transfer of your Personal Data will take place to an
          organization or a country unless there are adequate controls in place
          including the security of your data and other personal information.
        </p>

        <h2 style={{ paddingTop: 50 }}>Disclosure Of Data</h2>

        <h3>Legal Requirements</h3>
        <p>
          從前從前 may disclose your Personal Data in the good faith belief that
          such action is necessary to:
        </p>
        <ul>
          <li>To comply with a legal obligation</li>
          <li>To protect and defend the rights or property of 從前從前</li>
          <li>
            To prevent or investigate possible wrongdoing in connection with the
            Service
          </li>
          <li>
            To protect the personal safety of users of the Service or the public
          </li>
          <li>To protect against legal liability</li>
        </ul>

        <h2 style={{ paddingTop: 50 }}>Security Of Data</h2>
        <p>
          The security of your data is important to us, but remember that no
          method of transmission over the Internet, or method of electronic
          storage is 100% secure. While we strive to use commercially acceptable
          means to protect your Personal Data, we cannot guarantee its absolute
          security.
        </p>

        <h2 style={{ paddingTop: 50 }}>Service Providers</h2>
        <p>
          We may employ third party companies and individuals to facilitate our
          Service ("Service Providers"), to provide the Service on our behalf,
          to perform Service-related services or to assist us in analyzing how
          our Service is used.
        </p>
        <p>
          These third parties have access to your Personal Data only to perform
          these tasks on our behalf and are obligated not to disclose or use it
          for any other purpose.
        </p>

        <h2 style={{ paddingTop: 50 }}>Links To Other Sites</h2>
        <p>
          Our Service may contain links to other sites that are not operated by
          us. If you click on a third party link, you will be directed to that
          third party's site. We strongly advise you to review the Privacy
          Policy of every site you visit.
        </p>
        <p>
          We have no control over and assume no responsibility for the content,
          privacy policies or practices of any third party sites or services.
        </p>

        <h2 style={{ paddingTop: 50 }}>Children's Privacy</h2>
        <p>
          Our Service does not address anyone under the age of 18 ("Children").
        </p>
        <p>
          We do not knowingly collect personally identifiable information from
          anyone under the age of 18. If you are a parent or guardian and you
          are aware that your Children has provided us with Personal Data,
          please contact us. If we become aware that we have collected Personal
          Data from children without verification of parental consent, we take
          steps to remove that information from our servers.
        </p>

        <h2 style={{ paddingTop: 50 }}>Changes To This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
        <p>
          We will let you know via email and/or a prominent notice on our
          Service, prior to the change becoming effective and update the
          "effective date" at the top of this Privacy Policy.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>

        <h2 style={{ paddingTop: 50 }}>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <ul>
          <li>
            Email:　
            <a
              href="mailto:youremailaddress"
              style={{ color: "#2b9dff", textDecoration: "underline" }}
            >
              onceuponatime-story@outlook.com
            </a>
          </li>
          <li>
            Website:　
            <a
              href="https://www.onceuponatime-story.com/"
              style={{ color: "#2b9dff", textDecoration: "underline" }}
            >
              https://www.onceuponatime-story.com/
            </a>
          </li>
        </ul>
      </Container>
    </>
  );
};

export { Home, PrivacyPolicy };
