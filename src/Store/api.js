import axios from 'axios';

// Base URL from Postman variable
const BASE_URL = 'https://api.postman.com/collections/21192250-a50e1277-1ba5-4391-8937-80b388c049d9?access_key=PMAT-01HEAST02Z383GF562ABYFR5RX';

// Get Settings API
export const fetchSettings = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/settings/fetch-frontend-details`);
    return response.data;
  } catch (error) {
    console.error('Error fetching settings:', error);
    throw error;
  }
};

// Get All Blogs API
export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/blog/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

// Contact Form API
export const sendContactForm = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/contact/send`, formData);
    return response.data;
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw error;
  }
};
