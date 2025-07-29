import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import './home-desktop.css'

const HomeDesktop = (props) => {
  return (
    <div className="home-desktop-container1">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div id="home" className="home-desktop-home-desktop">
        <div className="home-desktop-navbar1">
          <div className="home-desktop-container2">
            <div className="home-desktop-content10">
              <div className="home-desktop-company-logo1">
                <img
                  src="/external/ChatGPT image Jul 7, 2025, 08_30_01 PM.png"
                  alt="chatgpt"
                  className="home-desktop-chatgpt"
                />
              </div>
            </div>
            <div className="home-desktop-column10" id="home">
              <div className="home-desktop-navlinks">
                <div className="home-desktop-link1">
                  <a href="#home" className="home-desktop-text10 TextRegularNormal">
                    Home
                  </a>
                </div>
                <div className="home-desktop-link2">
                  <a href="#about" className="home-desktop-text11 TextRegularNormal">
                    About Us
                  </a>
                </div>
                <div className="home-desktop-link3">
                  <a href="#programs" className="home-desktop-text12 TextRegularNormal">
                    Programs And Services
                  </a>
                </div>
                <div className="home-desktop-link4">
                  <div className="home-desktop-nav-link-dropdown">
                    <a href="#contact" className="home-desktop-text13 TextRegularNormal">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="home-desktop-actions1">
                
              </div>
            </div>
          </div>
        </div>
        <div className="home-desktop-header36" id="home">
          <div className="home-desktop-hero-row" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 100}}>
            <div className="home-desktop-hero-left" style={{flex: 1, minWidth: 0, paddingRight: 120}}>
              <div className="home-desktop-content12">
                <div className="home-desktop-content13">
                  <span className="home-desktop-text16 HeadingH1">
                    Charitable Support for Memory loss, Cognitive impairment and cardiovascular health
                  </span>
                  <span className="home-desktop-text17 TextMediumNormal">
                    <span>
                    Welcome to Ma Alu Theresia Memory Rescue and Glitter of Hope Health Inc., 
                    a non-profit organization dedicated to supporting individuals and families 
                    affected by memory loss, related cognitive impairment, and cardiovascular 
                    health issues through charitable initiatives and community-driven programs. 
                    We believe that everyone deserves to live with dignity and purpose, regardless of 
                    their health challenges. Our mission is to provide innovative programs, education, 
                    support, and resources to address these challenges using holistic, non-pharmacological approaches.
                    </span>
                    <br></br>
                    <span>
                      We Use innovative, holistic, and non-pharmacological approaches to achieve our mission.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                    Join Us<br />
                    We're committed to making a difference in the lives of individuals and families
                    affected by memory loss, cognitive impairment, and cardiovascular health issues. 
                    Join us in our mission to provide support, resources, and community engagement. 
                    Together, we can enhance the quality of life for those affected and create a more 
                    compassionate and supportive community.
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-desktop-hero-right" style={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
              <img
                src="/external/alzball.jpg"
                alt="AlzBall"
                className="home-desktop-alz-ball"
                style={{maxWidth: 720, width: '100%', borderRadius: 24, boxShadow: '0 2px 12px rgba(16,28,24,0.08)'}}
              />
              <div className="homepage-footnote" style={{fontSize: '0.6rem'}}>
                The image above is a demonstration of how Resident Agent Eric Nvenge of Ma Alu Theresia Memory Rescue and Glitter of Hope Health Inc., a dedicated friend, is playing balloon volleyball with his family friend James Ivey, age 93, who has been living with memory impairment and the effects of a stroke. Eric's friendship and support made significant differences in James' life, and their interactions showcase the positive impact of social engagement and community connection.
              </div>
            </div>
          </div>
        </div>
        <div id="about" className="home-desktop-portfolio5">
          <div className="home-desktop-container3">
            <div className="home-desktop-section-title1">
              <div className="home-desktop-content14">
                <span className="home-desktop-text26 HeadingH2">
                  Guided by charitable principles, we honor the memory of two
                  remarkable Women.
                </span>
              </div>
            </div>
            <div className="home-desktop-content15">
              <div className="home-desktop-portfolio-list">
                <div className="home-desktop-row1">
                  <div className="home-desktop-card1">
                    <img
                      src="/external/Ma_Alu.jpg"
                      alt="Ma_Alu"
                      className="home-desktop-ma-alu"
                    />
                    <div className="home-desktop-content16">
                      <div className="home-desktop-content-top1">
                        <div className="home-desktop-text27">
                          <span className="home-desktop-text28 HeadingH5">
                            Ma Alu Elizabeth Nvenge (1955-2022)<br />
                            Mother of 3 Children<br />
                            Died of heart Attack
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-desktop-card2">
                    <img
                      src="/external/Ma_Theresa.jpg"
                      alt="Ma_Theresa"
                      className="home-desktop-ma-theresa"
                    />
                    <div className="home-desktop-content17">
                      <div className="home-desktop-content-top2">
                        <div className="home-desktop-text29">
                          <span className="home-desktop-text30 HeadingH5">
                            Ma Theresa Nvenge (1934-2016)<br />
                            Mother of 12 Children<br />
                            Died of complications of Memory loss
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Team Section Start */}
            <div className="home-desktop-team-section" style={{marginTop: '48px'}}>
              <div className="home-desktop-section-title-team">
                <span className="HeadingH3">Meet Our Team</span>
              </div>
              <div className="home-desktop-team-list" style={{display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px'}}>
                <div className="home-desktop-team-card" style={{maxWidth: 320, textAlign: 'center'}}>
                  <img src="/external/placeholderimage8203-333q-300h.png" alt="Eric Nvenge" style={{width: 160, height: 160, objectFit: 'cover', borderRadius: '50%', marginBottom: 16}} />
                  <div className="HeadingH5" style={{marginBottom: 8}}>Eric Nvenge</div>
                  <div className="TextRegularNormal">
                    Founder of Ma AluTheresia Memory Rescue and Glitter of Hope Health Inc., brings a strong background in pharmacy and community health. With a Bachelor of Pharmacy and multiple certifications in pharmacy compounding, clinical research, and disability services, Eric has a strong background in pharmacy and volunteering and engaging with an individual and a family friend James Ivey, 92 in memory building activities for over two years. He is committed to supporting individuals and families affected by memory loss and cardiovascular issues through community-based initiatives.
                  </div>
                </div>
                <div className="home-desktop-team-card" style={{maxWidth: 320, textAlign: 'center'}}>
                  <img src="/external/placeholderimage8203-333q-300h.png" alt="Michel Balla" style={{width: 160, height: 160, objectFit: 'cover', borderRadius: '50%', marginBottom: 16}} />
                  <div className="HeadingH5" style={{marginBottom: 8}}>Michel Balla</div>
                  <div className="TextRegularNormal">
                    A dedicated board member of Ma AluTheresia Memory Rescue and Glitter of Hope Health Inc. With over 5 years of experience supporting individuals with developmental disabilities, he holds certifications in medication management, clinical research, and IT. Michel is passionate about promoting cognitive health and applies creative strategies to help individuals with memory loss, reflecting his deep commitment to improving lives.
                  </div>
                </div>
                <div className="home-desktop-team-card" style={{maxWidth: 320, textAlign: 'center'}}>
                  <img src="/external/placeholderimage8203-333q-300h.png" alt="Sugar Ebere Raymond" style={{width: 160, height: 160, objectFit: 'cover', borderRadius: '50%', marginBottom: 16}} />
                  <div className="HeadingH5" style={{marginBottom: 8}}>Sugar Ebere Raymond</div>
                  <div className="TextRegularNormal">
                    Member of the foundation, holds a Master’s degree in Information Technology from the University of Cincinnati. With a background in pharmacy and experience as a Clinical Research Associate, he bridges healthcare and technology to develop innovative solutions that support individuals with memory loss and cognitive challenges. His multidisciplinary expertise drives the organization's mission to improve health outcomes through research, technology, and community engagement.
                  </div>
                </div>
              </div>
            </div>
            {/* Team Section End */}
          </div>
        </div>
        <div className="home-desktop-layout239">
          <div className="home-desktop-container4">
            <div className="home-desktop-section-title2">
              <div className="home-desktop-tagline-wrapper">
                <span className="home-desktop-text31 HeadingTagline">
                </span>
              </div>
              <div className="home-desktop-content18">
                <span className="home-desktop-text32 HeadingH2">
                  Empowering the Elderly, Enriching Lives
                </span>
                <span className="home-desktop-text33 TextMediumNormal">
                  Our NGO is dedicated to improving the quality of life for
                  elderly individuals. We believe in fostering a community where
                  seniors feel valued, supported, and engaged.
                </span>
              </div>
            </div>
            <div className="home-desktop-content19">
              <div className="home-desktop-row2">
                <div className="home-desktop-column12">
                  <img
                    src="/external/exercising.jpeg"
                    alt="exercising"
                    className="home-desktop-exercising"
                  />
                  <div className="home-desktop-content20">
                    <span className="home-desktop-text34 HeadingH4">
                      Our Vision and Mission
                    </span>
                    <span className="home-desktop-text35 TextRegularNormal">
                    Vision: To use our resources to promote memory and heart health 
                    through non-profit, community-centered activities that improve 
                    quality of life.
                    <br></br>
                    <br></br>

                    Mission: To provide engaging, non-pharmacological activities that help 
                    people keep their minds active, build strong social connections, 
                    and support healthy lifestyles to prevent memory decline and heart 
                    disease.
                    </span>
                  </div>
                </div>
                <div className="home-desktop-column13">
                  <img
                    src="/external/games.jpeg"
                    alt="games"
                    className="home-desktop-games"
                  />
                  <div className="home-desktop-content21">
                    <span className="home-desktop-text36 HeadingH4">
                      Games And Activities
                    </span>
                    <span className="home-desktop-text37 TextRegularNormal">
                      <br></br>
                      <span>
                        We provide a variety of games and activities like riding a fixed exercise bike,
                        playing cards, balloon volleyball, Peg puzzle, coloring together,
                        walk together, dancing to the music from their past as way to rebuild memoryy to
                        help recall emotions, improve physical function. to keep
                        our elderly individuals engaged and active.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="home-desktop-column14">
                  <img
                    src="/external/draft-playing.jpg"
                    alt="draft-playing"
                    className="home-desktop-draft-playing"
                  />
                  <div className="home-desktop-content22">
                    <span className="home-desktop-text41 HeadingH4">
                      Our Approach: Holistic and Non-Pharmacological Approach
                    </span>
                    <span className="home-desktop-text42 TextRegularNormal">
                      <span>
                        Holistic Approach: We consider the physical, emotional,
                        mental, and social well-being of each individual,
                        engaging them in - Emotional Support, Counseling,
                        Physical Activities, Social Engagement, community
                        Building.
                      </span>
                      <br></br>
                      <span>
                        Non-Pharmacological Approach: We utilize Methods that
                        don&apos;t rely on medication to prevent, treat or
                        manage health conditions, such as cognitive behavioral
                        therapy.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-desktop-actions3">
              
            </div>
          </div>
        </div>
        <div id="goals" className="home-desktop-layout3">
          <div className="home-desktop-container5">
            <div className="home-desktop-component">
              <div className="home-desktop-content23">
                <span className="home-desktop-text49 HeadingH3">
                  Goals And Objectives
                </span>
                <span className="home-desktop-text50 TextMediumNormal">
                  <span>
                    Provide education and support for individuals and families
                    affected by memory loss and cognitive impairment.
                  </span>
                  <br></br>
                  <span>
                    Foster community engagement, social interaction, and support
                    networks for individuals and families affected by memory
                    loss.
                  </span>
                  <br></br>
                  <span>
                    Address cardiovascular health and well-being through
                    education and preventive programs.
                  </span>
                </span>
              </div>
              <img
                src="/external/bible-reading.jpg"
                alt="bible-reading"
                className="home-desktop-bible-reading"
              />
            </div>
          </div>
        </div>
        <div id="programs" className="home-desktop-layout246">
          <div className="home-desktop-container6">
            <div className="home-desktop-section-title3">
              <div className="home-desktop-column15">
                <span className="home-desktop-text56 HeadingH3">
                  Programs And Services
                </span>
              </div>
              <div className="home-desktop-column16">
                <span className="home-desktop-text57 TextMediumNormal">
                  List of Programs: Memory and Cognitive Building Activities,
                  Cardiovascular Health Workshops, Program For Lifestyle
                  Changes, Counterfeit medication awareness and Spiritual
                  Support.
                </span>
              </div>
            </div>
            <div className="home-desktop-content24">
              <div className="home-desktop-row3">
                <div className="home-desktop-list-item1">
                  <div className="home-desktop-content25">
                    <div className="home-desktop-icon-relume1">
                      <img
                        src="/external/explore8203-akp6.svg"
                        alt="explore8203"
                        className="home-desktop-explore"
                      />
                    </div>
                    <span className="home-desktop-text58 HeadingH5">
                      Memory and Cognitive Building Activities
                    </span>
                    <span className="home-desktop-text59 TextRegularNormal">
                      <span>Cognitive Stimulation</span>
                      <br></br>
                      <span>Physical Activities</span>
                      <br></br>
                      <span>Social interactions</span>
                    </span>
                  </div>
                </div>
                <div className="home-desktop-list-item2">
                  <div className="home-desktop-content26">
                    <div className="home-desktop-icon-relume2">
                      <img
                        src="/external/volunteeractivism8203-uh7g.svg"
                        alt="volunteeractivism8203"
                        className="home-desktop-volunteeractivism"
                      />
                    </div>
                    <span className="home-desktop-text65 HeadingH5">
                      Cardiovascular Health Workshops
                    </span>
                    <span className="home-desktop-text66 TextRegularNormal">
                      <span>Education on Heart Health</span>
                      <br></br>
                      <span>Heart Disease Awareness</span>
                      <br></br>
                      <span>Prevention</span>
                      <br></br>
                      <span>Stress Management</span>
                    </span>
                  </div>
                </div>
                <div className="home-desktop-list-item3">
                  <div className="home-desktop-content27">
                    <div className="home-desktop-icon-relume3">
                      <img
                        src="/external/event8203-xk8h.svg"
                        alt="event8203"
                        className="home-desktop-event"
                      />
                    </div>
                    <span className="home-desktop-text74 HeadingH5">
                      Program For Lifestyle Changes
                    </span>
                    <span className="home-desktop-text75 TextRegularNormal">
                      Promote a healthy lifestyle that encourages, supports and
                      facilitate habits and behaviors contributing to overall
                      physical, mental and emotional wellbeing to support a
                      robust supply chain that guarantees high quality medicine
                      in communities.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-desktop-layout232">
          <div className="home-desktop-container7">
            <div className="home-desktop-row4">
              <div className="home-desktop-column17">
                <div className="home-desktop-content28">
                  
                </div>
                <div className="home-desktop-action1">
                  
                </div>
              </div>
              <div className="home-desktop-column18">
                <div className="home-desktop-content29">
                  <span className="home-desktop-text80 TextRegularNormal">
                    <span>
                      We rely on volunteers to help us deliver our programs and
                      services, including roles such as:
                    </span>
                    <br></br>
                    <span>Program Assistants</span>
                    <br></br>
                    <span>Event Planners</span>
                    <br></br>
                    <span>Administrative Support</span>
                  </span>
                </div>
                <div className="home-desktop-action2">
                  
                </div>
              </div>
              <div className="home-desktop-column19">
                <div className="home-desktop-content30">
                  
                </div>
                <div className="home-desktop-action3">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-desktop-contact19" id="contact">
          <div className="home-desktop-container8">
            <div className="home-desktop-section-title4">
              <div className="home-desktop-content31">
                <span className="home-desktop-text92 HeadingH2">
                  Contact us
                </span>
                <span className="home-desktop-text93 TextMediumNormal">
                  Ma Alu Theresa Memory Rescue And Glitter of Hope Health Inc.
                </span>
              </div>
            </div>
            <div className="home-desktop-content32">
              <div className="home-desktop-row5">
                <div className="home-desktop-content33">
                  <img
                    src="/external/iconenvelope8203-iawf.svg"
                    alt="Iconenvelope8203"
                    className="home-desktop-iconenvelope"
                  />
                  <div className="home-desktop-contact-info1">
                    <div className="home-desktop-content34">
                      <span className="home-desktop-text94 HeadingH4">
                        Email
                      </span>
                    </div>
                    <span className="home-desktop-text95 TextRegularNormal">
                      nvengeeric@yahoo.com
                    </span>
                  </div>
                </div>
                <div className="home-desktop-content35">
                  <img
                    src="/external/iconphone8203-yfkg.svg"
                    alt="Iconphone8203"
                    className="home-desktop-iconphone"
                  />
                  <div className="home-desktop-contact-info2">
                    <div className="home-desktop-content36">
                      <span className="home-desktop-text96 HeadingH4">
                        Phone
                      </span>
                    </div>
                    <span className="home-desktop-text97 TextRegularLink">
                      240-310-5210
                    </span>
                  </div>
                </div>
                <div className="home-desktop-content37">
                  <img
                    src="/external/iconmap8203-bjvk.svg"
                    alt="Iconmap8203"
                    className="home-desktop-iconmap"
                  />
                  <div className="home-desktop-contact-info3">
                    <div className="home-desktop-content38">
                      <span className="home-desktop-text98 HeadingH4">
                        Office
                      </span>
                    </div>
                    <span className="home-desktop-text99 TextRegularLink">
                      10312 Garson Terrace, Lanham, MD 20706
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-desktop-footer7">
          <div className="home-desktop-container9">
            <div className="home-desktop-content39">
              <div className="home-desktop-logo">
                <div className="home-desktop-company-logo2">
                  <img
                    src="/external/ChatGPT image Jul 7, 2025, 08_30_01 PM.png"
                    alt="chatgpt"
                    className="home-desktop-chatgpt"
                  />
                </div>
              </div>
              <div className="home-desktop-links">
                <span className="home-desktop-text100 TextSmallSemiBold">
                  Volunteer Today
                </span>
                <span className="home-desktop-text101 TextSmallSemiBold">
                  Donate Now
                </span>
                <span className="home-desktop-text102 TextSmallSemiBold">
                  Programs And Services
                </span>
                <span className="home-desktop-text103 TextSmallSemiBold">
                  Contact Us
                </span>
              </div>
            </div>
            <div className="home-desktop-credits">
              <img
                src="/external/divider8203-kv2n.svg"
                alt="Divider8203"
                className="home-desktop-divider"
              />
              <div className="home-desktop-row6">
                <span className="home-desktop-text104 TextSmallNormal">
                  © 2025 Helping Hands. All rights reserved.
                </span>
                <div className="home-desktop-footer-links">
                  <span className="home-desktop-text105 TextSmallLink">
                    Privacy Policy
                  </span>
                  <span className="home-desktop-text106 TextSmallLink">
                    Terms of Use
                  </span>
                  <span className="home-desktop-text107 TextSmallLink">
                    Cookie Preferences
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDesktop
