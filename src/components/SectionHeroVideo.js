import React from "react";
import _ from "lodash";

import { toStyleObj, withPrefix, markdownify } from "../utils";
import CtaButtons from "./CtaButtons";

export default class SectionHeroVideo extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    return (
      <section id={_.get(section, "section_id", null)} className="block-hero-video">
        {_.get(section, "video", null) && (
          <div className="bg-video-container">
            <video className="bg-video" autoPlay="autoplay" loop="loop" preload="auto" muted="muted">
              <source src={_.get(section, "video", "No video")} type="video/mp4" />
            </video>
          </div>
        )}
        <div className="inner-sm">
          {_.get(section, "title", null) && (
            <div className="block-header">
              <h1 className="block-title">{_.get(section, "title", null)}</h1>
            </div>
          )}
          {_.get(section, "content", null) && <div className="block-content">{markdownify(_.get(section, "content", null))}</div>}
          {_.get(section, "actions", null) && (
            <div className="block-buttons">
              <CtaButtons {...this.props} actions={_.get(section, "actions", null)} />
            </div>
          )}
        </div>
      </section>
    );
  }