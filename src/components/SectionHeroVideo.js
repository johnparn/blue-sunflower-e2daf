import React from 'react';
import _ from 'lodash';

import {toStyleObj, withPrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionHeroVideo extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="block block-hero has-gradient outer">
              {_.get(section, 'video', null) && (
                <video class="bg-video" autoplay="autoplay" loop="" preload="auto" muted="muted"><source src={withPrefix(_.get(section, 'video', null)) } type="video/mp4"></video>
              )}
              <div className="inner-sm">
                {_.get(section, 'title', null) && (
                <div className="block-header">
                  <h1 className="block-title">{_.get(section, 'title', null)}</h1>
                </div>
                )}
                
              </div>
            </section>
        );
    }
}
