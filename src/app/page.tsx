import Feedbacks from "@/components/Feedbacks";
import PostFeedback from "@/components/PostFeedback";
import IntroFrase from "@/components/layout/IntroFrase";
import MainTitle from "@/components/layout/MainTitle";
import MyProfileShown from "@/components/layout/MyProfileShown";
import MySkills from "@/components/layout/MySkills";
import Proyexx from "@/components/layout/Proyexx";

export default function Home() {
  return (
    <div className="bg-inherit flex justify-center items-center">
      <div className="flex flex-col mx-auto my-8">
        <MainTitle />
        <MyProfileShown />
        <IntroFrase />
        <Proyexx />
        <MySkills />
        <PostFeedback />
        {/* @ts-ignore */}
        <Feedbacks />
      </div>
    </div>
  );
}
