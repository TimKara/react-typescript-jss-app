import * as React from 'react';
import SectionTitle from './GridSectionTitle';
import { getFieldValue, withPlaceholder, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import { HeadingLevel } from '../../components/HeadingLevel';

const GridSectionComponent: React.StatelessComponent<any> = (props) => {
    const title = getFieldValue(props.fields, 'title');
    const headingLevel = getFieldValue(props.fields, 'headingLevel') as HeadingLevel;
    return (
        <section className={`m-section`}>
                { title && (typeof title === 'string') && headingLevel &&
                    <SectionTitle title={title} headingLevel={headingLevel} />
                }
                {props.sectionPlaceholder}
            </section>
    );
};

const sectionComponentWithPlaceholderInjected : any = withPlaceholder({
    placeholder: 'jss-grid-section',
    prop: 'sectionPlaceholder',
  })(GridSectionComponent);

  // We need to know if experience editor is active, to disable the dynamic tab behavior for editing.
  // Using the same technique as injecting the placeholder, we wrap the component again to inject the
  // `sitecoreContext` prop.
const GridSection = withSitecoreContext()(
    sectionComponentWithPlaceholderInjected
  );

export default GridSection;
