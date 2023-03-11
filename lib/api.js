// export const sendContactForm = async (data) =>
//   fetch("/api/contact", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: { "Content-Type": "application/json", Accept: "application/json" },
//   }).then((res) => {
//     if (!res.ok) throw new Error("Failed to send message");
//     return res.json();
//   });


import axios from 'axios';

export const sendContactForm = async (data) => {
  try {
    const response = await axios.post('/api/contact', data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to send message");
  }
};
