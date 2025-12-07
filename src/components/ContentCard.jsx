import { FiExternalLink } from "solid-icons/fi";
import { trackCardLaunch } from "../lib/analytics";

const ContentCard = (props) => {
  const handleLaunch = () => {
    trackCardLaunch(props.card, props.section || 'unknown');
  };

  return (
    <div class="card">
      <figure class="sm:h-96 md:h-60 lg:h-48 xl:h-72 2xl:h-96 w-full" style="aspect-ratio: 5/3;">
        <img
          width="320"
          height="192"
          decoding="async"
          loading="lazy"
          class="object-cover object-center h-full w-full"
          src={props.card.image}
          alt={props.card.title}
          style="aspect-ratio: 5/3;"
        />
      </figure>
      <div class="justify-end card-body bg-neutral">
        <h2 class="card-title text-primary prose lg:prose-xl bg-opacity-30">
          {props.card.title}
        </h2>
        <p class="text-sm text-neutral-content prose-sm">
          {props.card.description}
        </p>
      </div>
      <div class="card-actions flex justify-between p-4 gap-1 content-center bg-white bg-opacity-30">
        <a
          class="btn btn-secondary btn-sm sm:btn-md gap-2 md:btn-sm lg:btn-sm xl:btn-sm 2xl:btn-md"
          href={props.card.link}
          target="_blank"
          onClick={handleLaunch}
        >
          <FiExternalLink size={16} />
          LAUNCH
        </a>
        <div class="tech_stack flex flex-wrap self-center gap-1 float-right">
          <For each={props.card.tags}>
            {(tag, i) => (
              <span class="badge badge-accent badge-sm hover:bg-accent-focus shadow-xl float-right">
                <a href={tag.link} target="_blank">
                  {tag.name}
                </a>
              </span>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};
export default ContentCard;
