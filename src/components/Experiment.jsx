const Experiment = () => {
  return (
    <section id="section_experiment" class="w-full relative group">
      <a href="https://codepen.io/guinetik/pen/dymyydy" target="_blank">
        <kbd
          class="text-white text-sm kbd glass absolute 
										-top-10 transition-all group-hover:top-2 left-5 right-6 
										justify-between shadow-md"
        >
          <span class="drop-shadow-md">Experiment name</span>
          <aside class="drop-shadow-md float-right">💻View Source</aside>
        </kbd>
      </a>

      <img
        class="w-full h-full sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]"
        src="https://github.com/guinetik/guinetik/raw/master/header.svg"
      />
    </section>
  );
};
export default Experiment;
