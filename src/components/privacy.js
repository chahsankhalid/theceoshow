import React,{useEffect} from "react";
import Navcomponent from "./navbar";
import { IoIosArrowUp } from 'react-icons/io';
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollSmoother)

export const Privacy = () => {
  useEffect(() => {
    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        smoothTouch: 0.1,
        effects: true,
    });
    // smoother.effects('.parentIneerParalax', {speed: "auto"})
    var backtoTop = document.getElementById("back-to-top");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backtoTop.classList.add('active')
        }
        else {
            backtoTop.classList.remove('active')
        }
        // backtoTop.style.transform = "rotate(" + window.pageYOffset + "deg)";
    })
}, [])
  return (
    <>
    <a id="back-to-top" href="#" className="back-to-top" role="button"><IoIosArrowUp className="upicon"/></a>
      <Navcomponent />
      <div className="container">
        <div className="row">
          <div className="privacy">
            <h1>1- Introduction</h1>
            <br />
            <ol>
              <li>
                The Game Company (“TGC,” “us,” “we,” or “our”) operates
                http://thegamecompany.ai/ and related software applications and
                any other features, tools, online and downloadable products,
                materials, or other services offered from time to time by TGC
                (together the “Service”). We also recognize that people who use
                TGC's Service (“you” or “Users”) value their privacy.
                <br />
                <br />
                This Privacy Policy details important information regarding the
                collection, use and disclosure of User information collected
                when you use the Service as well as the choices available to you
                regarding our use of your personal information. TGC provides
                this Privacy Policy to help you make an informed decision about
                whether to use or continue using the Service. We will not use or
                share your personal information with anyone except as described
                in this Privacy Policy.
              </li>
              <li>
                This Privacy Policy should be read in conjunction with our Terms
                of Service. By accessing the Service, you are consenting to the
                information collection and use practices described in this
                Privacy Policy.
              </li>
              <li>
                Your use of the Service and any information you provide through
                the Service remains subject to the terms of this Privacy Policy
                and our Terms of Service, as each may be updated from time to
                time.
              </li>
              <li>
                Any questions, comments or complaints that you might have should
                be emailed to info@thegamecompany.ai .
              </li>
            </ol>

            <h1>2- Information Collection and Use</h1>
            <br />
            <ol>
              <li>
                By using our Service and by submitting information to us through
                your use of our Service then this Privacy Policy will apply. You
                provide certain personal information to TGC when choosing to
                participate in the various activities on the Service such as
                certain personally identifiable information, as well as
                non-personal and/or aggregated data.
              </li>
              <li>
                We collect this information for the purpose of creating and
                managing your accounts with us and our commercial partners (if
                and as applicable to you) and for identifying and communicating
                with you, providing the activities and features available on the
                Service (such as game stats, game sessions, coins, and rewards),
                and improving the Service. The personal information we collect
                from you generally may include data:
                <ol className="loweralpha">
                  <li>
                    For access to the Service, you must create an account and
                    profile. You will need to provide information, some of which
                    is personally identifiable including name, email address,
                    login username, password, date of birth and other optional
                    information such as game aliases, public profile details,
                    address and phone number.
                  </li>
                  <li>
                    When you use the Service and the activities available
                    through the Service you may be asked to provide additional
                    information as necessary for us to provide the Service c. We
                    track game play data and statistics including scores, game
                    stats, game play sessions, coins and rewards, some of which
                    will be publicly available
                  </li>
                  <li>
                    If you participate in an event managed and administered by a
                    third-party organizer, your personal information will be
                    provided to such organizer only in order to operate the
                    event and publicly report the results. If you don't want
                    your personal information provided to an organizer, then do
                    not participate in such third-party events.
                  </li>
                  <li>
                    We may collect information that our software or your browser
                    sends whenever you use the Service (“Log Data”). This Log
                    Data may include information such as your computer’s IP
                    address, browser type, browser version, the pages of our
                    Service that you visit, the time and date of your visit, the
                    time spent on those pages, cookies, hardware you use to
                    access our software or webpages, and other statistics. Log
                    Data does not contain message content and is not routinely
                    deleted.
                  </li>
                  <li>
                    When signing in through the Steam OpenID provider, users
                    will be authenticated using their but not limited to 64-bit
                    SteamID, as Battle.net’s ‘BattleTag’, Riot ID, SSO provider,
                    Google, Twitch, Twitter or Facebook. Information available
                    from this SteamID may also be collected, including, but not
                    limited to, user’s purchased games and other behaviors, game
                    lists, lists, playtime, badges, wish lists, achievements,
                    friends, online status and groups
                  </li>
                  <li>
                    When you opt in to receive the TGC newsletter, you will
                    receive marketing communications and other marketing
                    materials based on user activities in any of our LAN
                    centers. You may unsubscribe at any time by clicking
                    unsubscribe at the bottom of the email or by updating your
                    preferences on your account profile.
                  </li>
                </ol>
              </li>
              <li>
                In addition to the above, we may need to verify your identity in
                order for you to use some aspects of the Service. For purposes
                of verification, we may also collect the following personal
                information from you (for regulatory compliance obligations
                around know your customer and anti-money laundering
                requirements, provision of this information, when requested, is
                a mandatory condition of using our Service):
                <ol className="loweralpha">
                  <li>Contact details (telephone number, email address)</li>
                  <li>Date and place of birth, gender, place of citizenship</li>
                  <li>Bank account information and/or credit card details</li>
                  <li>Your status as a politically exposed person</li>
                  <li>Source of funds & proof of address</li>
                  <li>
                    Passport information and/or driver’s license information or
                    government issued identification card to verify your
                    identity
                  </li>
                  <li>Permanent and temporary address</li>
                  <li>
                    Transaction history and account balances in connection with
                    your use of certain Services
                  </li>
                  <li>tax-related information; and</li>
                  <li>
                    other information as may be required to verify you in
                    accordance with applicable laws and regulations.
                  </li>
                </ol>
              </li>
              <li>
                Mobile Applications. Certain mobile products and services
                (“Products”) are currently supported by third party advertising
                partners that serve advertisements (“Third Party Advertisers”),
                including behavioral, location or interest-based advertising
                (“Interest Based Advertising”) within our Services. These
                Third-Party Advertisers use technology to serve the
                advertisements and may link to them directly into our Products.
                They may automatically receive your device ID, IP address or
                geo-location data (limited to country/region) when this happens.
                <br />
                <br />
                When you use our mobile app, we also may collect mobile device
                information like operating system and hardware type, numbers or
                codes that are unique to your particular device (such as IDFA or
                an Android Ad ID), device information, default device language,
                the location of your device (at a GPS level), and app usage
                information. This data also may be linked to your other
                information, including your location data.
                <br />
                <br />
                Upon request we can provide you with our Third-Party Advertisers
                and Partners used within certain Products for information
                regarding their privacy practices.
                <br />
                <br />
                Your mobile device may provide you with the ability to limit
                this functionality.
                <br />
                <br />
                iOS (versions 10-13) – On your iOS device (iPhone or iPad), open
                “Settings , Privacy , Advertising” and turn on “Limit Ad
                Tracking” to opt-out of interest-based ads. Please see
                additional information from Apple here:
                https://support.apple.com/en-us/HT202074
                <br />
                <br />
                iOS (version 14.5+) – On your iOS device (iPhone or iPad) open
                “Settings , Privacy , Tracking” and turn off “Allow Apps to
                Request to Track”
                <br />
                <br />
                Android – Open the Settings app on your Android phone, tap Ads
                and enable “Opt out of interest-based ads”.
                <br />
                <br />
                Please note that if you opt out of certain Interest Based
                Advertising, you may continue to receive contextual ads based on
                other non-personal information, such as ads related to the
                content of the Product you are using.
              </li>
              <br />
              <br />
              <h1>3. The way TGC Uses Your Personal Information</h1>
              <br />
              <br />
              <ol>
                <li>
                  We use your personal information to operate, maintain, and
                  provide to you the features and functionality of the Service,
                  including but not limited to the following:
                  <ol className="loweralpha">
                    <li>
                      providing you with our products and services, including
                      our games;
                    </li>
                    <li>processing and responding to enquiries;</li>
                    <li>personalizing your use of the Service;</li>
                    <li>
                      alerting you to new features, special events, products and
                      services, or certain third-party products or services in
                      which we think you will be interested;
                    </li>
                    <li>
                      enforcing the legal terms that govern your use of the
                      Service;
                    </li>
                    <li>
                      identity verification services, anti-fraud services and
                      other service providers; and
                    </li>
                    <li>
                      integrity and match verification activities related to
                      TGC’s affiliates such as partnered events.
                    </li>
                  </ol>
                </li>
              </ol>
              <li>
                We may use your information (both personal and non-personal
                information) to send you marketing and advertising content,
                including sending you advertising through multiple channels,
                such as direct mail, email, push notifications and display
                media. We may send you advertising or content regarding our
                products and services, or products and services that we market
                on behalf of another company, such as a sports team, a sports
                venue, or other entity.
              </li>
              <li>
                We may use your information to communicate with you about:
                <ol className="loweralpha">
                  <li>
                    our products and services in which you may be interested
                    provided that you have not requested otherwise;
                  </li>
                  <li>
                    newsletters and information for which you have signed up;
                    and
                  </li>
                  <li>
                    non-marketing or administrative purposes (such as notifying
                    you of major changes to the Service or for customer service
                    purposes).
                  </li>
                </ol>
              </li>
              <li>
                We use your information to improve the quality and design of our
                Service and to create new features, promotions, functionality,
                and services such as by storing, tracking, and analyzing user
                preferences and trends.
              </li>
              <li>
                We also use cookies, clear gifs, log file information, and
                mobile app information such as device identifiers for purposes
                such as (a) remembering information so that you will not have to
                re-enter it during your visit or the next time you visit our
                Service; (b) providing custom, personalized content and
                information; (c) monitoring the effectiveness of our marketing
                campaigns; (d) monitoring aggregate metrics such as total number
                of visitors, pages viewed, etc.; and (e) tracking your entries,
                submissions, and status in promotions, and contests. You can
                learn more about how these technologies are used in the Section
                below, Third Party Advertising and Analytics.
              </li>
              <li>
                We may anonymize, de-identify, or aggregate your information for
                any legitimate business purposes, including for reporting and
                research, or advertising. Such anonymized and/or aggregated data
                does not personally identify you. Sometimes, this information
                may be used to target more relevant content or offers to you
                across different devices – for instance, we may provide you with
                offers and content on your mobile device, based on your
                web-based activity.
              </li>
              <li>
                We will retain personal information as long as necessary to
                fulfil these purposes unless the law requires us to keep it for
                a longer period of time. To provide security and business
                continuity for the activities described here, we make backups of
                certain data, which we may retain for longer than the original
                data.
              </li>
              <br />
              <h1>4. When TGC Disloses Information</h1>
              <ol>
                <li>
                  We may disclose the information we collect or receive from you
                  to agents, or other businesses, or service providers who
                  process your information on our behalf in order to provide or
                  operate the Service. For instance, these entities may have
                  access to your information for purposes including (but not
                  limited to) accounting, hosting, marketing, promotional and
                  email services, customer and technical support, and for the
                  purpose of and paying withdrawals and processing such
                  information on our behalf, and in each case, may use the
                  information to make improvements to the services they provide
                  to us. Our agreements with these service providers limit the
                  kinds of information they can use or process and require them
                  to use reasonable efforts to keep your personal information
                  secure.
                </li>
                <li>
                  When you choose to share information with social media
                  services about your activities on TGC by, for example,
                  connecting your social media account to our Service, then TGC
                  may share your personal information and information about your
                  use of the Service with such social media sites. Please make
                  sure to read the terms and privacy statements of such sites
                  prior to connecting to our Service in this way. The Service
                  offers publicly accessible information sharing such as
                  usernames/aliases, linked game accounts, game scores and stats
                  games played, prizes redeemed, membership level, join date,
                  rankings and coins earned. You should be aware that any
                  information you provide in these areas may be read, collected,
                  and used by others who access them. To request removal of your
                  personal information, contact us at info@thegamecompany.ai. In
                  some cases, we may not be able to remove your personal
                  information, in which case we will let you know if we are
                  unable to do so and why.
                </li>
                <li>Intentionally omitted.</li>
                <li>
                  Where you have provided your consent, we may share your
                  personal information with selected third parties for their
                  commercial or marketing use in conjunction with your
                  relationship with TGC or as part of a specific program or
                  feature.
                </li>
                <li>
                  In addition, we may disclose to third parties various types of
                  your information for targeted online or mobile advertising, as
                  further described in the Section titled “Third Party
                  Advertising and Analytics” to help us with our business
                  activities such as an email service provider, Google Analytics
                  or an event management company. These companies are authorized
                  to use your personal information only as necessary to provide
                  these services to us. Examples are:
                  <ol className="circleorder">
                    <li>
                      When we send you an email via our service provider, they
                      are provided your email address.
                    </li>
                    <li>
                      When you participate in an event, your personal
                      information may be provided to an event management
                      contractor to contact you about the event.
                    </li>
                    <li>
                      Services such as Google Analytics collect, monitor and
                      analyze our aggregated user information in order to
                      improve our Service or make the information collected more
                      useful.
                    </li>
                    <li>
                      We may also disclose your information, both personal and
                      non-personal:
                    </li>
                    <li>
                      As required by law such as to comply with a subpoena, or
                      similar legal process.
                    </li>
                    <li>
                      When we believe in good faith that disclosure is necessary
                      to protect our rights, protect your safety or the safety
                      of others, investigate fraud, or respond to a government
                      request.
                    </li>
                    <li>
                      To any other third party with your prior consent to do so.
                    </li>
                    <li>
                      We may provide services jointly sponsored by other
                      companies. Their use of your information is subject to
                      their own privacy policies. When you use these joint
                      services, you are giving us permission to disclose your
                      personal information to such other companies and to be
                      contacted by them so that they can inform you about those
                      services. You will be notified when another company is
                      involved in a service provided. If you do not want your
                      personal information shared, do not participate in such
                      services.
                    </li>
                  </ol>
                </li>
              </ol>
              <li>
                We also may share personal information in other situations with
                your consent.
              </li>
              <li>
                TGC also reserves the right to disclose personal information
                that TGC believes, in good faith, is appropriate or necessary to
                enforce our Terms of Service, take precautions against liability
                or harm, to investigate and respond to third-party claims or
                allegations, to respond to court orders or official requests, to
                comply with state and federal regulations, including but not
                limited to sharing with appropriate tax authorities, to protect
                the security or integrity of our Service, to report violations
                of TGC’s eligibility rules to third parties, including employers
                of individuals affiliated with other daily fantasy sites, and to
                protect the rights, property, or safety of TGC, our users or
                others.
              </li>
              <li>
                In the event that TGC is involved in a merger, acquisition,
                sale, bankruptcy, insolvency, reorganization, receivership,
                assignment for the benefit of creditors, or the application of
                laws or equitable principles affecting creditors' rights
                generally, or other change of control, there may be a disclosure
                of your personal information to another entity related to such
                event.
              </li>
              <li>
                Recipients of the data disclosures described in this Privacy
                Policy are located in the United States and elsewhere in the
                world, including where privacy laws may not provide as much
                protection as your country.
              </li>
              <br />
              <br />
              <h1>5. Legal Bases for Processing Personal Data</h1>
              <br />
              <br />
              <li>
                Some laws require companies to tell you about the legal grounds
                they rely on to process your personal information. To the extent
                those laws apply, we process your personal information:
                <ol className="loweralpha">
                  <li>Customer service</li>
                  <li>Marketing</li>
                  <li>Protecting our players, personnel and property</li>
                  <li>Analyzing and improving our business</li>
                  <li>Processing job applications</li>
                  <li>Managing legal issues</li>
                </ol>
              </li>
              <li>
                We may also process personal data for the legitimate interests
                of our affiliates or business partners, such as to offer special
                events or contests or assist with marketing.
              </li>
              <li>
                Processing for the contract: Some Personal Data we process about
                you is for the performance of a contract to which you are a
                party or in order to take steps at your request prior to
                entering into a contract with us and to meet our contractual
                obligations with our players.
              </li>
              <li>
                Consent: Where required by law, and in some other cases, we
                handle personal data on the basis of your implied or express
                consent.
              </li>
              <li>
                Legal compliance: We need to use and disclose personal data in
                certain ways to comply with our legal obligations. In some
                cases, we have to process your Personal Data to comply with
                legal obligations, including those applicable to financial
                services institutions, such as under the Bank Secrecy Act and
                other anti-money laundering laws. You may not be eligible for
                certain Services if we cannot collect the Personal Data
                necessary to meet our legal obligations.
              </li>
              <br />
              <br />
              <h1>6. Your Choices</h1>
              <br />
              <br />
              <ol>
                <li>
                  TGC will process your personal information in accordance with
                  this Privacy Policy, and as part of that TGC provides you with
                  certain choices about how we process your personal
                  information. These choices are set out below.
                </li>
                <li>
                  You can access and update certain personal information TGC
                  holds about you at any time by logging into your account via
                  the Service and change information about yourself and the
                  account itself. You can also unsubscribe to marketing emails
                  and newsletters by using the 'unsubscribe' feature in the
                  communication.
                </li>
                <li>
                  We may occasionally send display media to you, in a targeted
                  way, whether through web or mobile browsers or mobile
                  applications. You may opt out of many third parties that
                  support and send this type of targeting advertising by going
                  to www.aboutads.info, and you may learn more about this type
                  of advertising in the below Section titled “Third Party
                  Advertising and Analytics.” You may opt out of tracking for
                  mobile advertising through the settings on most smartphones,
                  and you may learn more about these settings through those
                  mobile device platforms, i.e., Google (here) and Apple (here).
                  (Please note that these companies may change either the way
                  these settings operate, the content or the availability of
                  these pages.)
                </li>
                <li>
                  We may occasionally send you push notifications to your mobile
                  device. You can turn off certain push notifications in the
                  account settings of any mobile app by TGC or any of its
                  affiliates. You can also turn off push notifications specific
                  to our Service in the settings on your iOS device, or through
                  the application manager in your Android device
                </li>
                <li>
                  Subject to some important legal limitations, users in Canada
                  can contact us as described below to make additional requests,
                  such as to request access to, correction or deletion of
                  certain personal information we store; to receive a copy of
                  certain personal information they provided to us in portable
                  form or to request that we share it with a third party; to
                  request restrictions on the use of their personal information;
                  to object to our use of their personal information; or to
                  withdraw consent to use their personal information (which will
                  not affect the legality of any processing that happened before
                  the request takes effect). Please note that we may reject
                  requests which risk the privacy of others or are unreasonable
                  or repetitive, frivolous, would require disproportionate
                  effort or for which access is not otherwise required by local
                  law.
                </li>
                <li>
                  For example, Canadian users can contact us to opt out of all
                  processing of their personal information for direct marketing
                  purposes (in addition to the unsubscribe option described
                  here).
                </li>
                <li>
                  Can reach us as described below with any other concerns,
                  requests or complaints regarding our data collection, data use
                  or data transfer. You also have a right to file a privacy
                  complaint with the relevant privacy regulator, but we
                  respectfully invite you to allow us to try to resolve the
                  matter directly. We will attempt to answer your questions and
                  satisfy your concerns in a timely and complete manner.
                </li>
                <br />
                <br />
                <h1>7. How do we safeguard and transfer your information?</h1>
                <br />
                <br />
                <ol>
                  <li>
                    We are committed to protecting the security of your personal
                    information. We use a variety of security technologies and
                    procedures to help protect your personal information from
                    unauthorized access, use, or disclosure.
                  </li>
                  <li>
                    While neither we, nor any other organization, can guarantee
                    the security of information processed online, we do have
                    appropriate security measures in place to protect your
                    personal information. For example, we store the personal
                    information you provide on computer systems with limited
                    access that are located in facilities to which access is
                    limited.
                  </li>
                  <li>
                    To further protect your privacy and security, we reserve the
                    right to take reasonable steps (such as requesting your
                    password) to verify your identity before granting you
                    profile access or making corrections.
                  </li>
                  <li>
                    Additionally, you should ensure your password is kept secret
                    at all times. You will be responsible for maintaining the
                    secrecy of your password and account information.
                  </li>
                </ol>
                <br />
                <br />
                <h1>8. Children's Information</h1>
                <ol>
                  <li>
                    Protecting the privacy of young children is especially
                    important to TGC. For that reason, TGC does not knowingly
                    collect or maintain personal data or non-personally
                    identifiable information from underage users other than as
                    permitted by law in support of our internal operations.
                  </li>
                  <li>
                    In this Privacy Policy any reference to underage users
                    refers to those under the age of consent to the processing
                    of personal data in their country of residence:
                    <br />
                    <br />
                    Croatia, Germany, Hungary, Ireland, Luxembourg, Malta,
                    Netherlands, Poland, Romania, Slovakia - 16 or under Czech
                    Republic, France, Greece, Slovenia - 15 or under Austria,
                    Bulgaria, Cyprus, Italy, Lithuania, Spain - 14 or under
                    United States, United Kingdom and any EU countries not
                    listed above - 13 or under
                  </li>
                </ol>

                <br />
                <br />
                <h1>9. California Residents</h1>
                <ol>
                  <li>
                    The California Consumer Privacy Act 2018 (the “CCPA”),
                    Privacy Rights for California Minors in a Digital World and
                    the California Shine the Light law provide California
                    residents with certain rights regarding the processing of
                    their personal data.
                  </li>
                  <li>
                    Your California Privacy Rights California Civil Code Section
                    1798.83 (“Shine the Light”) permits our customers who are
                    California residents to request, once per calendar year, the
                    following information from us:
                  </li>
                  <li>
                    a list of the kinds of personal information that we have
                    disclosed to third parties for direct marketing purposes
                    during the preceding calendar year; and
                  </li>
                  <li>
                    the names and addresses of all of the third parties that
                    received personal information from us for direct marketing
                    purposes during the preceding calendar year.
                  </li>
                </ol>
                <p>
                  For inquiries regarding our disclosure policy, please contact
                  us as described above. Requests must include “California
                  Privacy Rights Request” in the first line of the description
                  and include your name, street address, city, state, and ZIP
                  code.
                </p>
                <br />
                <br />
                <p>
                  California Business and Professions Code Section 22581
                  (“California Privacy Rights for Minor Users”) permits you, if
                  you are a California resident under the age of 18, to view,
                  correct or remove information provided by you or publicly
                  posted by you. For inquiries regarding our disclosure policy,
                  please contact us as described below in Section 10 “Your
                  questions and how to contact us”. Requests must include
                  “California Privacy Rights Request” in the first line of the
                  description and include your name, street address, city,
                  state, and ZIP code. Any enquiries from underage users will be
                  deleted upon completion.
                </p>
                <br />
                <br />
                <p>
                  Your Rights under the California Consumer Privacy Act (the
                  “CCPA”) Our customers who are California residents have the
                  following rights under the CCPA:
                </p>
                <ol>
                  <li>
                    The right to request the deletion of their personal
                    information;
                  </li>
                  <li>
                    With respect to the collection of personal information, the
                    right to request, not more than twice in any twelve (12)
                    month period, the following: (i) categories of personal
                    information we have collected about that consumer; (ii)
                    categories of sources from which the personal information is
                    collected; (iii) business or commercial purpose for
                    collecting or selling personal information; (iv) categories
                    of third parties with whom we share personal information;
                    and (v) specific pieces of personal information we have
                    collected about you;
                  </li>
                  <li>
                    With respect to the sale and/or disclosure of personal
                    information, the right to request, not more than twice in
                    any twelve (12) month period, the following: (i) categories
                    of personal information that we have collected about the
                    consumer; (ii) categories of personal information that we
                    have sold about the consumer and the categories of third
                    parties to whom the personal information was sold, by
                    category or categories of personal information for each
                    third party to whom the personal information was sold; and
                    (iii) categories of personal information that we have
                    disclosed about the consumer for a business purpose;
                  </li>
                  <li>
                    The right to opt-out of the sale of personal information;
                    and
                  </li>
                  <li>
                    {" "}
                    The right to not be discriminated against for exercising any
                    of the above described rights.
                  </li>
                </ol>
                <p>
                  Do Not Sell My Personal Information To exercise any of your
                  rights under the CCPA, please contact us via email and be
                  ready to provide your name, address, and email. We may ask for
                  other information in order to confirm your identity. Any
                  information we receive from you in order to confirm your
                  identity will solely be used for such verification purposes.
                </p>
                <p>
                  You may also designate an authorized agent to make a request
                  on your behalf. If you choose to designate an agent, please be
                  sure the agent can
                  <ol>
                    <li>
                      provide written permission from you for the agent to make
                      the request on your behalf, and
                    </li>
                    <li>provide proof of his or her own identity.</li>
                  </ol>
                </p>
                <p>
                  Further Disclosures Under the CCPA During the past twelve (12)
                  months, we have collected the following categories of personal
                  information from the following sources, for the following
                  purposes, and have shared them with the following third party
                  service providers:
                  <br />
                  <br />
                  Personal Identifiers & contact information: Information you
                  give us when you sign up to access our Services, or other
                  information you choose to give us. Our purposes for collecting
                  this information are:
                  <ol className="circleorder">
                    <li>
                      To create your profile and so you can access our Services;
                    </li>
                    <li>To provide Services you request;</li>
                    <li>To identify you when you sign-in;</li>
                    <li>To give you access to your user preferences;</li>
                    <li>To contact you for your views on our Services;</li>
                    <li>
                      To allow participation in special events or contests (if
                      specifically approved by you)
                    </li>
                    <li>
                      For marketing purposes, based on your communication
                      preferences.
                    </li>
                  </ol>
                </p>
              </ol>
              <br />
              <br />
              <h1>11. EEA, UK and Switzerland only</h1>
              <br />
              <br />
              With respect to personal data of individuals from the European
              Economic Area (“EEA”), the United Kingdom (“UK”) or Switzerland,
              our legal basis for collecting and using the personal data will
              depend on the personal data concerned and the specific context in
              which we collect it. TGC will generally collect personal data from
              you or a third party only where: (a) we have your consent to do
              so, (b) where we need the personal data to perform a contract with
              you (e.g. to deliver the services you have requested), or (c)
              where the processing is in our or a third party’s legitimate
              interests (and not overridden by your data protection interests or
              fundamental rights and freedoms).
              <br />
              <br />
              <h1>12. International Transfers of your Personal data</h1>
              <br />
              <br />
              <p>
                We are a global company. Information about you may be stored and
                processed in the European Economic Area, the United States or
                any other country in which TGC or agents or contractors maintain
                facilities, and by accessing our websites and using our mobile
                apps, software and services, you consent to the transfer of your
                information outside of your country. Such countries may have
                laws which are different, and potentially not as protective as
                the laws of your own country.
                <br />
                <br />
                Whenever we share personal data originating in the EEA, the UK
                or Switzerland, we will rely on lawful measures to transfer that
                data, such as the Privacy Shield or the EU standard contractual
                clauses. If you reside in the EEA, UK or other regions with laws
                governing data collection and use, please note that you are
                agreeing to the transfer of your personal data to the United
                States and other jurisdictions in which we operate. By providing
                your personal data, you consent to any transfer and processing
                in accordance with this Policy.
              </p>
              <br />
              <br />
              <h1>13. Links to Other Sites</h1>
              <br />
              <br />
              <p>
                Our Service may contain links to other sites that are not
                operated by us. If you click on a third-party link, you will be
                directed to that third party’s site. We strongly advise you to
                review the privacy policy of every site you visit. We have no
                control over, and assume no responsibility for, the content,
                privacy policies, or practices of any third-party sites or
                services.
              </p>
              <br />
              <br />
              <h1>14. Changes to This Privacy Policy</h1>
              <br />
              <br />
              <p>
                We reserve the right to update or change our Privacy Policy at
                any time and you should check this Privacy Policy periodically.
                Your continued use of the Service after we post any
                modifications to the Privacy Policy on this page will constitute
                your acknowledgment of the modifications and your consent to
                abide and be bound by the modified Privacy Policy.
                <br />
                <br />
                If we make any material changes to this Privacy Policy, we will
                notify you either through the email address you have provided
                us, or by placing a prominent notice on our website.
              </p>
              <br />
              <br />
              <h1>15. Contact Us</h1>
              <br />
              <br />
              <p>
                If you have any questions about this Privacy Policy, please
                contact us.
                <br />
                <br />
                By email at: info@thegamecompany.ai
              </p>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
