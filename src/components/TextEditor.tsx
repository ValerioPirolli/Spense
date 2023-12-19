import TextE from "../assets/Text Editor.png";
export const TextEditor = () => {
  return (
    <div className="p-10 flex flex-col gap-4">
      <h3 className="font-semibold text-4xl">A text editor like no other.</h3>
      <p>
        Our text editor pulls you into focus mode with it's simplistic design
        and usability so you can put out your best writings.
      </p>
      <a href="#" className="underline">
        Text Editor Live Demo
      </a>
      <img src={TextE} alt="" />
    </div>
  );
};
