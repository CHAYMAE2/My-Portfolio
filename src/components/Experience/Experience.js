import React from "react";
import VerticalTimeline from "./VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimelineElement";
import './VerticalTimeline.css';
import './VerticalTimelineElement.css';

function Experience() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'hsl(283, 91.30%, 45.10%)', color: '#fff', textAlign: 'left' }}
        contentArrowStyle={{ borderRight: '7px solid  hsl(283, 91.30%, 45.10%)' }}
        date="Feb 2025 - Aug 2025"
        iconStyle={{ background: 'hsl(283, 91.30%, 45.10%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0px' }}
        icon={<img src="/images/axa_logo.png" alt="AXA Logo" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
      >
        <h3 className="vertical-timeline-element-title"> Project Manager | GIE AXA - AXA France </h3>
        <h4 className="vertical-timeline-element-subtitle">Paris, France</h4>
        <p>Ongoing</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'hsl(283, 91.30%, 45.10%)', color: '#fff', textAlign: 'left' }}
        contentArrowStyle={{ borderRight: '7px solid  hsl(283, 91.30%, 45.10%)' }}
        date="Sep 2024 - Jan 2025"
        iconStyle={{ background: 'hsl(283, 91.30%, 45.10%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0px' }}
        icon={<img src="/images/axa_logo.png" alt="AXA Logo" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
      >
        <h3 className="vertical-timeline-element-title"> Data and Process Analyst | GIE AXA </h3>
        <h4 className="vertical-timeline-element-subtitle">Paris, France</h4>
        <p>
          • Evaluating and implementing inclusive insurance practices and policies, ensuring accessibility and equity in insurance offerings. <br />
          • Researching and analyzing industry trends, regulatory changes, and best practices related to medical underwriting and inclusive insurance. <br />
          • Analyzing the application of medical data to assess risk and determine appropriate coverage for policyholders.<br />
          • Developing and maintaining data monitoring tools and dashboards to support AXA entities conduct statistical analysis.<br />
          • Project planning, status reporting, and coordination of project activities, ensuring alignment with timelines and objectives.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'hsl(283, 91.30%, 45.10%)', color: '#fff', textAlign: 'left' }}
        contentArrowStyle={{ borderRight: '7px solid  hsl(283, 91.30%, 45.10%)' }}
        date="June 2023 - Aug 2023"
        iconStyle={{ background: 'hsl(283, 91.30%, 45.10%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0px' }}
        icon={<img src="/images/ocp_logo.png" alt="OCP Logo" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
      >
        <h3 className="vertical-timeline-element-title"> Data Scientist | Group OCP Maroc </h3>
        <h4 className="vertical-timeline-element-subtitle">Benguerir, Morocco</h4>
        <p>
          As a team of two, we followed the CRISP-DM (Cross-Industry Standard Process for Data Mining) methodology to develop a predictive model using LSTMs for forecasting production values at two phosphate stations. We then deployed the model in a user-friendly web application.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Experience;
