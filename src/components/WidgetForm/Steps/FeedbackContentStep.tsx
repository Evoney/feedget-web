import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "..";
import { ArrowLeft } from "phosphor-react";

interface FeedContentStepProps {
  feedbackType: FeedbackType;
  onHandleRestartFeedback: () => void;
}
export function FeedbackContenStep({feedbackType, onHandleRestartFeedback}: FeedContentStepProps) {

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
    <header>
      <button 
      type="button" 
      className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
      onClick={onHandleRestartFeedback}
      >
        <ArrowLeft weight="bold" className="w-4 h-4"/>
      </button>
      <span className="text-xl leading-6 flex items-center gap-2">
        <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
        {feedbackTypeInfo.title}
      </span>
      <CloseButton/>
     </header>

    <div className="flex py-8 gap-2 w-full">
     
    </div> 
    </>
  );
}