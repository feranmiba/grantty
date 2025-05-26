// utils/cloudinaryUpload.ts

export const uploadToCloudinary = async (file: File): Promise<string | null> => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
  
    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });
  
      const data = await res.json();
      return data.secure_url;
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      return null;
    }
  };
  