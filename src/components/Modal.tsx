interface ModalProps {
  header: string;
  main_contents: string[];
  sub_contents: string[];
  button: string;
  onButtonClick?: () => void;
}

export default function Modal({
  header,
  main_contents,
  sub_contents,
  button,
  onButtonClick,
}: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 max-w-sm w-full mx-4 shadow-xl rounded-lg">
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-3 py-1 text-sm font-bold text-gray-700 mb-4 text-[16px]">
            {header}
          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-lg font-bold text-gray-900 leading-tight mb-4">
            {main_contents.map((content, index) => (
              <span key={index}>
                {content}
                {index < main_contents.length - 1 && <br />}
              </span>
            ))}
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed">
            {sub_contents.map((content, index) => (
              <span key={index}>
                {content}
                {index < sub_contents.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        <hr className="my-4" />

        <div className="mb-6">
          <label className="flex items-center justify-center space-x-2 cursor-pointer ">
            <span className="text-xs text-gray-500 leading-relaxed">
              다음 화면에서 카카오인증을 완료해주세요
            </span>
          </label>
        </div>

        {/* 버튼 */}
        <button
          onClick={onButtonClick}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-4 rounded-lg transition-colors duration-200"
        >
          {button}
        </button>
      </div>
    </div>
  );
}
