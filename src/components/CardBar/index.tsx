import {
  DragHandleRounded,
  KeyboardDoubleArrowUpRounded,
} from "@mui/icons-material";
import Button from "../Button";

interface CardBarTypeProps {
  name: string;
  email: string;
}

export default function CardBar({ name, email }: CardBarTypeProps) {
  return (
    <>
      <div className="group h-[60px] absolute bottom-0 left-0 right-0 flex justify-between items-center backdrop-blur rounded-2xl transition-all duration-300 hover:h-[200px]">
        <div className="w-full mb-[-120px] transition-all duration-500 group-hover:mb-0">
          <div className="flex justify-between items-center pe-6">
            <div className="flex flex-col">
              <p className="text-white ps-8 font-bold font-poppins text-lg">
                {name}
              </p>
              <p className="text-white ps-8 font-poppins text-xs">{email}</p>
            </div>
            <div className="h-[25px] w-[25px] group-hover:rotate-180 transition-all duration-1000">
              <KeyboardDoubleArrowUpRounded
                className="animate-bounce"
                style={{ color: "#fff" }}
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-3 px-7 ">
            <p className="bg-custom-light-green h-fit p-1 m-1 rounded font-poppins text-xs">
              Design
            </p>
            <p className="bg-custom-light-pink h-fit p-1 m-1 rounded text-xs font-poppins">
              Development
            </p>
            <p className="bg-custom-light-yellow h-fit p-1 m-1 rounded font-poppins text-xs">
              Software Engineer
            </p>
            <p className="bg-custom-light-blue h-fit p-1 m-1 rounded text-xs font-poppins">
              UI/UX
            </p>
            <p className="bg-custom-light-purple h-fit p-1 m-1 rounded font-poppins text-xs">
              React
            </p>
            <p className="bg-custom-light-green h-fit p-1 m-1 rounded text-xs font-poppins">
              Vue
            </p>
            <p className="bg-custom-light-blue h-fit p-1 m-1 rounded font-poppins text-xs">
              Node
            </p>
          </div>
          <div className="flex justify-around items-center mt-4">
            <Button title="Message" />
            <Button title="Hire" />
          </div>
        </div>
      </div>
    </>
  );
}
