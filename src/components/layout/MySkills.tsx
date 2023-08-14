const MySkills = () => {
  return (
    <section className="mt-10">
      <div id="skills" ></div>
      <div className="my-2 mx-4 px-10 flex max-sm:flex-col max-sm:items-center max-sm:justify-center flex-row justify-between gap-6 whitespace-normal">
        <div className="rounded-[2vh] border-cyan-500 w-[40%] my-2 text-justify">
          <h4 className="text-2xl">Programming languages or Tech Knowlegde</h4>
          <ul>
            <li>C++ (main)</li>
            <li>C</li>{" "}
            <li>
              Full stack (MERN with Typescript (Mongodb, Express, React,
              Nodejs)){" "}
            </li>{" "}
            <li>Firebase (database)</li>{" "}
            <li>Microsoft Office (Word, Excel & Powerpoint)</li>{" "}
            <li>Video editing (Vegas pro or any)</li>{" "}
          </ul>
        </div>
        <div className="rounded-[2vh] border-cyan-500 my-2 text-justify">
          <h4 className="text-2xl">Languages</h4>
          <ul>
            <li>Spanish: Native</li>
            <li>
              <div>
                <p>English</p>
                <div className="w-full border rounded-[2vh] h-8 my-1 overflow-hidden">
                  <div className="bg-cyan-500 h-8 w-[90%]"></div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <p>German</p>
                <div className="w-full my-1 overflow-hidden h-8 border rounded-[2vh]">
                  <div className="bg-cyan-500 h-8 w-[65%]"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="rounded-[2vh] border-cyan-500 my-2 text-justify">
          <h4 className="text-2xl">skills</h4>
          <ul>
            <li>Problem solving</li>
            <li>Leaderships</li>
            <li>Communication</li>
            <li>Team work</li>
            <li>Scheduling</li>
            <li>Analytical thinking</li>
            <li>Work Independently</li>
            <li>Flexibility</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
