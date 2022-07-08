import { useState } from "react"

import bugImageURL from '../../assets/Bug.svg'
import ideaImageURL from '../../assets/Idea.svg'
import thoughtImageURL from '../../assets/Thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"
import { FeedbackContenStep } from "./Steps/FeedbackContentStep"

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageURL,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageURL,
      alt: 'Imagem de um lâmpada'
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageURL,
      alt: 'Imagem de uma nuvem de pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm () {
  const [ feedbackType, setFeedbackType ] = useState<FeedbackType  | null>(null);

  function handleRestartFeedback(){
    setFeedbackType(null);
  }

  return (
    <div className="br-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {!feedbackType ? (
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
           ) : (
            <FeedbackContenStep onHandleRestartFeedback={handleRestartFeedback} feedbackType={feedbackType}/>
           )
      }
      
      <footer className="text-xs text-neutral-400">
        Feito com ♥ por <a className="underline underline-offset-2" href="https://www.github.com/evoney">Evoney</a>
      </footer>
    </div>
  )
}