import type { Schema, Struct } from '@strapi/strapi';

export interface CourseBanner extends Struct.ComponentSchema {
  collectionName: 'components_course_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primaryButtonLink: Schema.Attribute.Text & Schema.Attribute.Required;
    primaryButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryButtonLink: Schema.Attribute.Text;
    secondaryButtonText: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface CourseCourseCategory extends Struct.ComponentSchema {
  collectionName: 'components_course_course_categories';
  info: {
    displayName: 'CourseCategory';
  };
  attributes: {};
}

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

export interface CourseEnrollmentOption extends Struct.ComponentSchema {
  collectionName: 'components_course_enrollment_options';
  info: {
    displayName: 'EnrollmentOption';
  };
  attributes: {
    available: Schema.Attribute.Boolean;
    discount: Schema.Attribute.Integer;
    features: Schema.Attribute.Component<'shared.single-text', true>;
    originalPrice: Schema.Attribute.Decimal;
    popular: Schema.Attribute.Boolean;
    price: Schema.Attribute.Decimal;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['in-person', 'live-zoom', 'online']>;
  };
}

export interface CourseFeaturedCourseItem extends Struct.ComponentSchema {
  collectionName: 'components_course_featured_course_items';
  info: {
    displayName: 'FeaturedCourseItem';
  };
  attributes: {
    courses: Schema.Attribute.Relation<'oneToMany', 'api::course.course'>;
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
      'course.banner': CourseBanner;
      'course.course-category': CourseCourseCategory;
      'course.curriculum-item': CourseCurriculumItem;
      'course.curriculum-section': CourseCurriculumSection;
      'course.enrollment-option': CourseEnrollmentOption;
      'course.featured-course-item': CourseFeaturedCourseItem;
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
