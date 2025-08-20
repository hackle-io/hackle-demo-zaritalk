import Modal from "@/components/Modal";
import useHackleRemoteConfig from "@/hooks/useHackleRemoteConfig";

const DEFAULT_FALLBACK_MODAL_DATA = {
  header: "최대 450만원 환급",
  main_contents: ["정부가 세입자 위해 만든", "월세환급 제도 아시나요?"],
  sub_contents: [
    "월세 내역만 입력해주세요.",
    "자리톡이 환급액을 알려드립니다.",
  ],
  button_text: "내 환급액 알아보기",
};

export default function KakaoIntro() {
  const { header, main_contents, sub_contents, button_text } =
    useHackleRemoteConfig("zaritalk_intro_modal", DEFAULT_FALLBACK_MODAL_DATA);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Modal
        header={header}
        main_contents={main_contents}
        sub_contents={sub_contents}
        button={button_text}
      />
    </div>
  );
}
