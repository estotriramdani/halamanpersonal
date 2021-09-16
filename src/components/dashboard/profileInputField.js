import {
  validateEmail,
  validateName,
  validateUsername,
} from '../../utils/helpers/formValidator';
const profileInputField = [
  {
    id: 1,
    label: 'Full Name',
    name: 'name',
    placeholder: 'Your full name',
    type: 'text',
    validator: validateName,
    icon: 'file-earmark-person-fill',
  },
  {
    id: 2,
    label: 'Username',
    name: 'username',
    placeholder: 'Your username',
    type: 'text',
    validator: validateUsername,
    icon: 'person-fill',
  },
  {
    id: 3,
    label: 'Email',
    name: 'email',
    placeholder: 'Your email',
    type: 'text',
    validator: validateEmail,
    icon: 'envelope-fill',
  },
  {
    id: 4,
    label: 'Headline',
    name: 'headline',
    placeholder: 'Contoh: Software Engineer di PT Amerta Indah Otsuka',
    type: 'text',
    validator: undefined,
    icon: 'briefcase-fill',
  },
  {
    id: 5,
    label: 'Facebook',
    name: 'facebook',
    placeholder: 'Your facebook username',
    type: 'text',
    validator: undefined,
    icon: 'facebook',
  },
  {
    id: 6,
    label: 'Instagram',
    name: 'instagram',
    placeholder: 'Your instagram username',
    type: 'text',
    validator: undefined,
    icon: 'instagram',
  },
  {
    id: 7,
    label: 'Linkedin',
    name: 'linkedin',
    placeholder: 'Your LinkedIn username',
    type: 'text',
    validator: undefined,
    icon: 'linkedin',
  },
  {
    id: 8,
    label: 'Github',
    name: 'github',
    placeholder: 'Your GitHub username',
    type: 'text',
    validator: undefined,
    icon: 'github',
  },
];

const profileFieldInitialValueGenerator = (userInfo) => {
  return {
    name: userInfo.name || '',
    username: userInfo.username || '',
    email: userInfo.email || '',
    photo: userInfo.photo || '',
    headline: userInfo.headline || '',
    facebook: userInfo.facebook || '',
    instagram: userInfo.instagram || '',
    linkedin: userInfo.linkedin || '',
    github: userInfo.github || '',
    theme_id: userInfo.theme_id || '',
  };
};

export { profileInputField, profileFieldInitialValueGenerator };
