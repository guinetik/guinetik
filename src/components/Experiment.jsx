import { useSite } from "../SiteStore";
import { onMount, onCleanup, createSignal, Show } from "solid-js";
const ExperimentItem = (props) => {
  //console.log("ExperimentItem", props.exp);
  return (
    <div class="w-full h-full sm:h-[400px] md:h-[500px] lg:h-[580px] xl:h-[600px] 2xl:h-[680px] bg-neutral">
      <Show when={props.exp.type}>
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
        <Show when={props.exp.type === "img"}>
          <img
            class="w-full h-full sm:h-[400px] md:h-[500px] lg:h-[580px] xl:h-[600px] 2xl:h-[680px]"
            src={props.exp.url}
          />
        </Show>
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
    //console.log("randomExperiment", randomExperiment);
    setExperiment(randomExperiment);
  });
  return (
    <section id="section_experiment" class="w-full relative group">
      <ExperimentItem exp={getExperiment()} />
    </section>
  );
};
export default Experiment;
