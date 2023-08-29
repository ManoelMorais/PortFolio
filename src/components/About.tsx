export default function About() {
  return (
    <div className="lg:mx-12 mx-4 flex-wrap" id="perfil">
      <div className="flex sm:flex-row md:gap-24 gap-12 items-center">
        <div className="sm:w-1/2">
          <img src="" alt="" />
        </div>
        <div>
          <div className=" pt-7 flex flex-col m-10 sm:w1/2">
            <h2 className="text-xl text-headingcolor font-semibold mb-5">
              My studies
            </h2>
            <h5>Scool</h5>
            <p>Complete at 17 december 2022</p>
            <br />
            <h5>University</h5>
            <p>system analysis and development</p>
          </div>
          <div className="flex flex-col m-10 ">
            <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
              My Expertise
            </h2>
            <p className="mt-8 md:pr-8 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              varius faucibus massa sollicitudin amet augue. Nibh metus a semper
              purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
              scelerisque ac adipiscing velit non nulla in amet pellentesque.
              <br /> <br />
              Sit turpis pretium eget maecenas. Vestibulum dolor mattis
              consectetur eget commodo vitae. Amet pellentesque sit pulvinar
              lorem mi a, euismod risus r.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
