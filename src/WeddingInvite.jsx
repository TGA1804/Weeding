export default function WeddingInvite() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center text-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold text-pink-600 mb-2">The Wedding of Ân & Huyền</h1>
        <p className="text-gray-700 text-lg mb-6">Trân trọng kính mời Quý vị đến dự lễ thành hôn của chúng tôi:</p>

        <div className="mb-4">
          <p className="text-xl font-semibold text-gray-800">Chú rể: Trình Gia Ân</p>
          <p className="text-xl font-semibold text-gray-800">Cô dâu: Võ Nguyễn Ngọc Huyền</p>
        </div>

        <div className="mb-4">
          <p className="text-lg text-gray-700">🗓 Thời gian: <strong>9 giờ sáng, Chủ Nhật, ngày 13 tháng 7 năm 2025</strong></p>
          <p className="text-lg text-gray-700">📍 Địa điểm: <strong>Tại tư gia</strong></p>
        </div>

        <p className="text-gray-700 mt-4 mb-2">Sự hiện diện của Quý vị là niềm vinh hạnh và hạnh phúc lớn lao của gia đình chúng tôi.</p>
        <p className="text-pink-600 font-semibold">Rất hân hạnh được đón tiếp!</p>

        <div className="mt-6 text-gray-800">
          <p>Gia đình hai họ</p>
          <p><strong>Trình</strong> & <strong>Võ</strong></p>
        </div>
      </div>
    </div>
  );
}