import cloudinary from "cloudinary";

console.log(process.env.CLOUD_NAME, process.env.CLOUDINARY_API_KEY,' =----> next')
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploads = (file: any, folder: any) => {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        resource_type: "auto",
        folder: folder
      },
      (error: any, result: any) => {
        if (error) {
          reject(error);
        } else {
          resolve({
            public_id: result.public_id,
            url: result.url,
          });
        }
      }
    );
  });
};

export { uploads, cloudinary };
