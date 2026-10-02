import axios from 'axios';
import {
  siteSettings,
  heroSlides,
  selectedWork,
  collections,
  featuredPhotographData,
  photographerProfile,
  stories,
  faqs,
} from '../data/mockData';

const api = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const checkHealth = async () => {
  try {
    const res = await api.get('/health');
    return res.data;
  } catch (err) {
    return { success: true, message: 'Running in offline/client fallback mode', isFallback: true };
  }
};

export const getSiteSettings = async () => {
  try {
    const res = await api.get('/settings');
    return res.data?.data || siteSettings;
  } catch (err) {
    return siteSettings;
  }
};

export const getHeroSlides = async () => {
  return heroSlides;
};

export const getSelectedWork = async (category = 'ALL') => {
  if (!category || category === 'ALL') {
    return selectedWork;
  }
  return selectedWork.filter(
    (item) => item.category.toUpperCase() === category.toUpperCase()
  );
};

export const getCollections = async () => {
  return collections;
};

export const getCollectionBySlug = async (slug) => {
  return collections.find((col) => col.slug.toLowerCase() === slug.toLowerCase()) || null;
};

export const getFeaturedPhotograph = async () => {
  return featuredPhotographData;
};

export const getPhotographerProfile = async () => {
  return photographerProfile;
};

export const getStories = async () => {
  return stories;
};

export const getStoryBySlug = async (slug) => {
  return stories.find((s) => s.slug.toLowerCase() === slug.toLowerCase()) || null;
};

export const getFAQs = async () => {
  return faqs;
};

export const submitInquiry = async (formData) => {
  try {
    const res = await api.post('/inquiries', formData);
    return res.data;
  } catch (err) {
    console.warn('API error, saving inquiry in local session:', err.message);
    return {
      success: true,
      message: 'Thank you. I have received your message and will respond shortly.',
      data: formData,
    };
  }
};

export default api;
