import React from 'react';
import TemplateDefault from '../../components/TemplateDefault';

function Depth() {
  return (
    <TemplateDefault
      pageTitle="Depth"
      activeParent="design"
      activeChild="depth">

      <article style={{marginBottom: "56px"}}>
        <h2 tabIndex="0" className="h2">Landed</h2>
        <div style={{margin: "-16px 0 24px 0"}}>e.g., Ordinary gridded-content information</div>

        <div className="row">
          <div className="col col-sm-4 col-12">
            <div className="depth depth--landed border_radius border_radius--default" style={{height: "120px"}}></div>
          </div>
        </div>
      </article>

      <article style={{marginBottom: "56px"}}>
        <h2 tabIndex="0" className="h2">Emboss</h2>
        <div style={{margin: "-16px 0 24px 0"}}>e.g., Listing Card</div>

        <div className="row">
          <div className="col col-sm-4 col-12">
            <div className="depth depth--emboss border_radius border_radius--default" style={{height: "120px"}}></div>
          </div>
        </div>
      </article>

      <article style={{marginBottom: "56px"}}>
        <h2 tabIndex="0" className="h2">Standed Out</h2>
        <div style={{margin: "-16px 0 24px 0"}}>e.g., Filter Dropdown</div>

        <div className="row">
          <div className="col col-sm-4 col-12">
            <div className="depth depth--standed_out border_radius border_radius--default" style={{height: "120px"}}></div>
          </div>
        </div>
      </article>

      <article style={{marginBottom: "56px"}}>
        <h2 tabIndex="0" className="h2">Above All</h2>
        <div style={{margin: "-16px 0 24px 0"}}>e.g., Listing Card Preview on search map</div>

        <div className="row">
          <div className="col col-sm-4 col-12">
            <div className="depth depth--above_all border_radius border_radius--default" style={{height: "120px"}}></div>
          </div>
        </div>
      </article>

    </TemplateDefault>
  );
}

export default Depth;
