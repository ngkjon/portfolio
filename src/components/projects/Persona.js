
import React from 'react';
import '../../App.css';
import { Fade } from 'react-awesome-reveal';


import ReturnNavbar from './ReturnNavbar'


const Train = () => {
    return (
        <div className="projbody">
        <ReturnNavbar/>
        <h1 className='heading'>
        <Fade bottom cascade delay={200} duration={200}>user research personas</Fade></h1>
        <Fade bottom cascade duration={2000}></Fade>
        <img src='https://www.dl.dropboxusercontent.com/s/6bl7vjarr2df7fe/persona.png?dl=0'></img>
        
        <Fade bottom cascade delay={200} duration={200}><h2>background</h2>
        <p>as a student thinking about looking for co-ops and also future full-time employment opportunities, i needed a public-viewable place to centralize all my work in addition to storing any resources deemed fit to present to future employers as well as for myself as more and more jobs require some way to validate the claims made by the applicant in resumés.</p>
        </Fade>
        
        <Fade bottom cascade delay={200} duration={200}><h2>situation impact statement</h2>
        <p>design an online portfolio that can be used by myself to display projects, work and give employers a brief description of who i am that is easy to update, intuitive to navigate and ideally free to host.</p>
        </Fade>

        <Fade bottom cascade delay={200} duration={200}><h2>usability goals</h2>
        <p>usability is defined as the extent to which a product can be used by specified users to achieve specific goals with effectiveness, efficiency and satisfaction in a specified context of use</p>
        </Fade>

        <Fade bottom cascade delay={200} duration={200}><h2>user experience goals</h2>
        <p>user experience encompasses all end-to-end user interactions. the ux goals identify how the user should be feeling after interacting with the design.[cgm w01] i have classified the ux goals from two user perspectives, that of the designer and that of a viewer.</p>
        <p>effortless: updating the portfolio should be effortless to encourage frequent changes so viewers will always look at an up-to-date portfolio
</p>
        <p>enjoyable: the portfolio should generate a pleasurable experience for the viewer to make it memorable</p>
        <p>intuitive: the portfolio should be intuitive to navigate</p>
        </Fade>
        
        <Fade bottom cascade delay={200} duration={200}><h2>stakeholder map</h2>
        <p>a stakeholder map is used to consolidate and communicate key players in the design in which we build upon later through user research. as we move along this project and stakeholders and interactions between them are developed we may iterate on this and switch to a more web-like format to clearly show connections between the constituents.</p>
        <img src='https://www.dl.dropboxusercontent.com/s/163h2as2k0jhpdo/Screen%20Shot%202020-02-16%20at%201.48.44%20AM.jpg?dl=0'></img>
        <p>although a relatively simple scope at face value (just the two primary users), upon re-evaluating the situation i was able to draw out more potential stakeholders and players in the scenario and get a better picture of types of users that i may want to design for. 
by clearly organizing primary, secondary and tertiary users, one can tell at a glance to what stakes a user holds to the scenario.
with this format connections between entities are not drawn explicitly, which may be less effective when wanting to group some users together to design for a user experience tailored to them. an example of this is if i wanted to share my portfolio publicly instead of sending it directly to contacts, i would design an experience for employers and companies on a web page and share the link via job posting sites and on application web forms. </p>
        </Fade>

        <Fade bottom cascade delay={200} duration={200}><h2>mind-mapping</h2>
        <p>mind-mapping is a way to visually organize information based on association of concepts with the ability to capture hierarchical relationships between ideas.[danny ho w02]
the workshop with danny ho (week 2) provided a great template to build this portfolio scenario as it focused on mind-mapping the coop process for a design student.</p>
        <img src='https://www.dl.dropboxusercontent.com/s/ge3ewiqo8jkjy1r/Screen%20Shot%202020-01-15%20at%2011.37.00%20AM.jpg?dl=0'></img>
        <p>the stakeholder map divided our users into primary, secondary and tertiary. then we took our two primary users and created a mind map to lay out an organized hierarchy of components pertaining to our two primary users. by filling out the mind map we can observe thinking patterns and how certain items get mentally organized. for example we can see that the mind map of the recruiter largely focuses on the application package which may suggest that this is potentially a key focus point in the user journey of the recruiter. a downfall of the mind maps is that it can get cluttered with ideas easily and in the ideation stage it is hard to organize and think of ideas as you go. i would recommend a similar approach to the workshop where individuals work amongst themselves to create a mind map and then coming together to view everyone’s different interpretations and hierarchies and then from there start drawing out a summarized mind map.</p>
        </Fade>

        <Fade bottom cascade delay={200} duration={200}><h2>proto-personas</h2>
        <p>proto-persona provides a light way to get customer-centered thinking and build empathy for a product without having to invest in lots of time and money into research and data collection.[uxt1 p.132]
the proto-persona worksheet was used as a base for drafting out a full-fledged persona for the project. it was iterated on after gathering feedback (such as from the w04 critique workshop).</p>
        <p>as proto-personas creation often happens before resources are spent on research and data collection, these artifacts only scrape the very surface and their accuracy is not guaranteed, the assumptions made for the above personas are stated below:</p>
        <img></img>
        <p>from drafting these make-shift personas for the critique workshop, i was already thinking more about the stakeholders and relevant users than i had prior. benefits of this exercise is the cost effectiveness of creating these and generating empathy in the designer. 
although there was no supporting evidence for assumptions made in the personas, the assumptions made and points highlighted will provide good starting points to perform user research on later on to either validate or refute. </p>
        </Fade>

        <Fade bottom cascade delay={200} duration={200}><h2>secondary research</h2>
        <p>to refine our personas, we will conduct secondary research. secondary research provides context on what has been done and what hasn’t.[umd p.154] there is a lot of information online addressing this scenario thus it is a promising starting point before investing time and money onto primary research. 
in order to conduct secondary research, we will be applying various different techniques:</p>
        <p>a modified fly on the wall approach through reading online forums and blogs to gather necessary information</p>
        <p>market research to see how other designers in the space have chosen to present their portfolios</p>
        </Fade>

        <Fade bottom cascade delay={200} duration={200}><h3>fly on the wall</h3>
        <p>fly on the wall observation is a method of gathering information unobtrusively by looking and listening to behaviours and conversations without direct participation or interference. [umd p.90]
this approach will be applied to read and analyze forum discussions and blog posts about applying to design jobs. the change in the originally defined method is that it will be performed from a vantage point of our own internet browser instead of observation of real life behaviour. 
my strategy for finding discussion content that i could apply was to use a combination of a set of keywords on popular forum sites such as reddit, and google.
</p>
        <p>keywords: &#123;design, job, application, portfolio, help, critique, advice&#125;</p>
        <p>i started by browsing several design related communities on reddit. with my set of keywords i looked for posts where people talked inquired about critiques, recruiting and interviews. i was able to gain insight on what pains and learnings applicants and recruiters go through in addition to some of their values and goals. i even stumbled upon a ‘getting started‘ doc written for ux beginners on the reddit community r/userexperience.
other communities that i looked into: r/web_design, r/graphic_design, r/webdev, r/interiordesign, r/design_critiques
i then searched on google with the same keywords for standalone articles and blogs relating to designer recruitment.  with luck, there were a lot of articles regarding how recruiters evaluate applications in the design industry.</p>
        <p>displaying a variety of work to show skill diversity is important, it shows that you can pick-up whatever the new trend becomes. [rusticpixel 2019]
be able to boil down content for a reviewer who may give each applicant a 1 minute review ~(6 images, 100 words)[wang 2019]
expected nowadays to have a portfolio website. [young 2019]] 
managers and directors of design lead busy schedules and so they will only have time to spend minutes to seconds reviewing a single application[fleck 2019]
digital portfolios provide immediate access to evaluate a candidate making it prefered over physical copies[prokhorova 2018]
curate something that shows recent work, and breadth and depth [prokhorova 2018]
applicants may be spending their time in the wrong places [stechyshyn 2016]</p>
        <p>while reddit provided a more personable scenario, the blogs found through google search were targeted to address the public and provide insight on the recruiting process which was equally insightful. many of the articles were written by individuals who work for familiar companies in the design space such as figma, dribbble, etc.
diving into the secondary research definitely provided more depth and insight into the stakeholders involved and allows us to start drawing backed assumptions for our persona such as the appeal of conciseness and clear preference of digital portfolio for its convenience moreover, we were able to validate assumptions made prior such as how busy full-times are. a downfall to the forums approach is you find yourself either sifting through a bunch of transcripts hoping to come across a relevant conversation, or you have picked the type of conversation you want to look for and now you peruse the internet under the assumption that someone else has had this or a similar conversation. in both cases there is a chance that you spend time searching for something that may not have existed. 
one thing i found myself curious about when applying this method of user research on the design forums was what becomes of  the “hawthorne effect”? (the tendency of people to change their behaviour when they know they are being studied or observed.[umd p.90]) although the poster may not intend for the audience of their posts to be so broad, they must know that their questions and responses will live on the internet and others may come across them in the future for their own answers.. note: this was not as applicable to the blog posts and articles as those are written with the public as an intended audience. </p>
        </Fade>

        <Fade bottom cascade delay={200} duration={200}><h3>market research</h3>
        <p>market research is the collection of data about entities in a market (people, companies, etc) in order to analyze and better understand what that group needs. [shopify ]
to conduct market research, i will be looking a collection of other designer portfolios as well at application forms for several ui/ux positions.  i found two repositories to gather various designer portfolios from: cssmania freelance, and dribbble.</p>
        <p>i viewed a total of 20 portfolios of designers and although each had a very unique aesthetic, the foundation was a single web page with a navigation element that would scroll you down the page to the appropriate section you clicked on. all the pages had core elements of an about blurb, the portfolio of work and a contact element to reach the individual. 
i viewed a total of 20 random job postings for ui/ux or user research and every application form had a field to share portfolio information.</p>
        <p>although the sample size may be too small to draw any major conclusions about the designer job market and portfolio trends, there is definitely a strong trend for individuals to have a single scroll page digital portfolio and for applications to require/mention sharing of portfolios.
the single page design of all the portfolios i encountered reinforced that conciseness is likely valued by recruiters as the simple single page layout presents navigation and information in a very intuitive format for the user. additionally, the simplicity of this layout highlights the usability goal of being easy to learn as the more intuitive, the likelier that the recruiter had an enjoyable experience.
this approach was different from fly on the wall in that instead of taking a “vantage” point to observe and collect data, i was tasked with directly interacting with other products (portfolios and application forms) to gather information and draw conclusions.</p>
        </Fade>




        <a href='https://www.dropbox.com/s/rqj6bpiw8ln2lic/URP%20-%20Personas.pdf?dl=0'>read more</a>
      </div>
    );
}
 
// export default home;
// function App() {
//   return (

//   );
// }

export default Train;
