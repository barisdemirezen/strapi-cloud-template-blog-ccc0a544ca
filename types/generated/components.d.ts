import type { Schema, Struct } from '@strapi/strapi';

export interface CourseCurriculumItem extends Struct.ComponentSchema {
  collectionName: 'components_course_curriculum_items';
  info: {
    displayName: 'Curriculum Item';
    icon: 'book';
  };
  attributes: {
    duration_minute: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface CourseCurriculumSection extends Struct.ComponentSchema {
  collectionName: 'components_course_curriculum_sections';
  info: {
    displayName: 'Curriculum Section';
  };
  attributes: {
    description: Schema.Attribute.String;
    items: Schema.Attribute.Component<'course.curriculum-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface CourseOutcome extends Struct.ComponentSchema {
  collectionName: 'components_course_outcomes';
  info: {
    displayName: 'Outcome';
    icon: 'bullseye';
  };
  attributes: {
    career_outcomes: Schema.Attribute.Component<'shared.single-text', true>;
    description: Schema.Attribute.Text;
    skill_outcomes: Schema.Attribute.Component<'shared.single-text', true>;
  };
}

export interface CourseOverview extends Struct.ComponentSchema {
  collectionName: 'components_course_overviews';
  info: {
    displayName: 'Overview';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    features: Schema.Attribute.Component<'shared.single-text', true>;
    what_to_learns: Schema.Attribute.Component<'shared.single-text', true>;
  };
}

export interface CourseRequirement extends Struct.ComponentSchema {
  collectionName: 'components_course_requirements';
  info: {
    displayName: 'Requirement';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text;
    pre_requirement: Schema.Attribute.Component<'shared.single-text', true>;
    technical_requirement: Schema.Attribute.Component<
      'shared.single-text',
      true
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSingleText extends Struct.ComponentSchema {
  collectionName: 'components_shared_single_texts';
  info: {
    displayName: 'Single Text';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'course.curriculum-item': CourseCurriculumItem;
      'course.curriculum-section': CourseCurriculumSection;
      'course.outcome': CourseOutcome;
      'course.overview': CourseOverview;
      'course.requirement': CourseRequirement;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.single-text': SharedSingleText;
      'shared.slider': SharedSlider;
    }
  }
}
