import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  return (
    <section className="skills grid md:grid-cols-2 gap-1 container mx-auto max-w-screen-lg px-4 py-20">
      <div className="coding-skills bg-ediboy-primary rounded-lg py-16 px-4 bg-opacity-50">
        <div className="flex justify-center">
          <div className="border-solid border-white border-2 p-2 inline-block rounded-full w-16 h-16 flex items-center justify-center">
            <FontAwesomeIcon icon="code" size="2x" />
          </div>
        </div>

        <div className="text-3xl font-medium mt-4">Skills</div>
        <div className="text-xl font-thin mb-5 text-gray-200">
          acquired skills during my journey
        </div>

        <div>Laravel</div>
        <div>Flutter</div>
        <div>ReactJS</div>
        <div>VueJS</div>
        <div>TailwindCSS</div>
        <div>JavaScript</div>
        <div>jQuery</div>
        <div>HTML</div>
        <div>CSS</div>
        <div>Ionic</div>
        <div>MySQL</div>
        <div>Firebase</div>
      </div>

      <div className="tools bg-ediboy-primary rounded-lg py-16 px-4 bg-opacity-50">
        <div className="flex justify-center">
          <div className="border-solid border-white border-2 p-2 inline-block rounded-full w-16 h-16 flex items-center justify-center">
            <FontAwesomeIcon icon="tools" size="2x" />
          </div>
        </div>

        <div className="text-3xl font-medium mt-4">Tools</div>
        <div className="text-xl font-thin mb-5 text-gray-200">
          some tools I use for work
        </div>

        <div>VS Code</div>
        <div>Git</div>
        <div>Docker</div>
        <div>Jira</div>
        <div>Trello</div>
        <div>Photoshop</div>
        <div>Illustrator</div>
        <div>Audition</div>
        <div>XP</div>
        <div>Flash</div>
        <div>
          {" "}
          <FontAwesomeIcon icon="mug-hot" /> Coffee
        </div>
      </div>
    </section>
  );
};

export default Skills;
