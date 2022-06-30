const ContentCard = (props) => {
  return (
    <div class="card shadow-xl bg-white">
      <figure class="rounded sm:h-96 md:h-60 lg:h-48 xl:h-72 2xl:h-96 w-full">
        <img
          class="object-cover object-center h-full w-full"
          src={props.card.image}
          alt={props.card.title}
        />
      </figure>
      <div class="justify-end card-body bg-neutral">
        <h2 class="card-title text-primary prose lg:prose-xl">
          {props.card.title}
        </h2>
        <p class="text-sm text-neutral-content prose-sm">
          {props.card.description}
        </p>
      </div>
      <div class="card-actions flex justify-between p-4 gap-1 content-center">
        <a
          class="btn btn-sm btn-outline sm:btn-md btn-secondary gap-2 md:btn-sm lg:btn-sm xl:btn-sm 2xl:btn-md"
          href={props.card.link}
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          Visit
        </a>
        <div class="tech_stack flex flex-wrap self-center gap-1">
          <For each={props.card.tags}>
            {(tag, i) => (
              <span class="badge badge-accent badge-sm hover:bg-accent-focus shadow-xl">
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
