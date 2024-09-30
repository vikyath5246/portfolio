export function Education() {
  return (
    <div id="education" className={"shadow p-3"}>
      <h1 className={"primary-text text-center"}>Education</h1>
      <College
        degree={"Master of Data Science"}
        university={"SUNY - Stony Brook University"}
        duration={"2023-2025"}
        content={""}
        logo={
          "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Stony_Brook_University_seal.svg/800px-Stony_Brook_University_seal.svg.png"
        }
      />
      <College
        degree={"Bachelor of Technology, Computer Science"}
        university={"IIT Guwahati"}
        duration={"2018-2022"}
        content={"Ranked top 7 in the program."}
        logo={
          "https://upload.wikimedia.org/wikipedia/en/1/12/IIT_Guwahati_Logo.svg"
        }
      />
    </div>
  );
}

interface Props {
  degree: string;
  university: string;
  duration: string;
  logo: string;
  content?: string;
}
function College(props: Props) {
  return (
    <div className={"shadow p-3 mb-3 d-flex flex-column align-items-center"}>
      <h3 className={"tertiary-text text-center"}>{props.degree}</h3>
      <h4 className={"tertiary-text"}>{props.university}</h4>
      <h6 className={"tertiary-text"}>{props.duration}</h6>
      <img
        src={props.logo}
        alt={"uni-logo img-circular"}
        width={150}
        height={150}
        style={{ borderRadius: 100 }}
      />
      {!!props.content && (
        <p className={"primary-text pt-4 text-center"}>{props.content}</p>
      )}
    </div>
  );
}
