import React from "react";

function Badges() {
  // https://codesandbox.io/s/coderranks-summary-forked-nrrywg?file=/src/index.ts
  return (
    <div className="codersrank-summary-badges">
      <div className="codersrank-summary-badge codersrank-summary-badge-v1">
        <div className="codersrank-summary-badge-rank">Top 1</div>
        <div className="codersrank-summary-badge-technology">
          <div className="codersrank-summary-badge-technology-logo">
            <img src="https://icon-widget.codersrank.io/api/JavaScript" />
          </div>
          <span className="codersrank-summary-badge-name">JavaScript</span>
        </div>
        <div className="codersrank-summary-badge-location">Sweden</div>
      </div>

      <div className="codersrank-summary-badge codersrank-summary-badge-v1">
        <div className="codersrank-summary-badge-rank">Top 5</div>
        <div className="codersrank-summary-badge-technology">
          <div className="codersrank-summary-badge-technology-logo">
            <img src="https://icon-widget.codersrank.io/api/NextJS" />
          </div>
          <span className="codersrank-summary-badge-name">NextJS</span>
        </div>
        <div className="codersrank-summary-badge-location">Sweden</div>
      </div>

      <div className="codersrank-summary-badge codersrank-summary-badge-v2 codersrank-summary-badge-seniority">
        <div className="codersrank-summary-badge-image">
          <img src="https://profile.codersrank.io/static/badgesV2/Seniority/SeniorDeveloper.svg" />
        </div>
        <div className="codersrank-summary-badge-label">Senior Developer</div>
        <div className="codersrank-summary-badge-technology">
          <div className="codersrank-summary-badge-technology-logo">
            <img src="https://icon-widget.codersrank.io/api/JavaScript" />
          </div>
          <span className="codersrank-summary-badge-name">JavaScript</span>
        </div>
      </div>
    </div>
  );
}

export default Badges;
