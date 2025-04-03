import { useSite } from "../SiteStore";
import { onMount, onCleanup, createSignal, Show } from "solid-js";

const ExperimentItem = (props) => {
  return (
    <div class="w-full h-full sm:h-[400px] md:h-[500px] lg:h-[580px] xl:h-[600px] 2xl:h-[680px] bg-neutral">
      <Show when={props.exp.type}>
        <Show when={props.exp.type === "img"}>
          <img
            alt={props.exp.title}
            width="960"
            height="500"
            decoding="async"
            class="w-full h-full sm:h-[400px] md:h-[500px] lg:h-[580px] xl:h-[600px] 2xl:h-[680px] object-cover"
            src={props.exp.url}
          />
        </Show>

        <Show when={props.exp.type === "codepen"}>
          <div class="relative h-full overflow-hidden overscroll-none">
            <iframe
              height="100%"
              width="100%"
              class="absolute top-[-68px] w-full h-[calc(100%+68px)] border-none overflow-hidden overscroll-none"
              scrolling="no"
              title={props.exp.title}
              src={props.exp.url}
              loading="lazy"
              allowfullscreen
            ></iframe>
          </div>
        </Show>
        <a href={props.exp.link} target="_blank">
          <kbd
            class="text-white text-sm kbd glass absolute 
                      -top-10 transition-all group-hover:top-2 left-5 right-6 
                      justify-between shadow-md"
          >
            <span class="drop-shadow-md">{props.exp.title}</span>
            <aside class="drop-shadow-md float-right">💻View Source</aside>
          </kbd>
        </a>
      </Show>
    </div>
  );
};

const Experiment = () => {
  const Site = useSite();
  const [getExperiment, setExperiment] = createSignal({});

  onMount(() => {
    const exps = Site.data().experiments;
    const randomIndex = Math.floor(Math.random() * exps.length);
    const randomExperiment = exps[randomIndex];
    setExperiment(randomExperiment);
  });

  return (
    <section id="section_experiment" class="w-full relative group">
      <ExperimentItem exp={getExperiment()} />
    </section>
  );
};

export default Experiment;
