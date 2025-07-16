
const PhotoGallery = () => (
  <section>
    <h2 className="text-2xl font-bold mb-6">フォトギャラリー</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* 写真ギャラリーを掲載予定 */}
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <img
          src="https://day1-images.schoolrave.net/cdn-cgi/image/f=webp,fit=cover/DSC_0029%20(1).JPG"
          alt="ガッコウレイヴ2024の様子"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <img
          src="https://day1-images.schoolrave.net/cdn-cgi/image/f=webp,fit=cover/DSC_0029%20(1).JPG"
          alt="ガッコウレイヴ2024の様子"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <img
          src="https://day1-images.schoolrave.net/cdn-cgi/image/f=webp,fit=cover/DSC_0029%20(1).JPG"
          alt="ガッコウレイヴ2024の様子"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);

export default PhotoGallery;
