import {
  DragHandleRounded,
  Email,
  GitHub,
  Instagram,
  KeyboardDoubleArrowUpRounded,
  LinkedIn,
} from "@mui/icons-material";
import Button from "../Button";
import Link from "next/link";

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
            {/* <Button title="Message" /> */}
            {/* <Link href={"/"}> */}
            {/* </Link> */}
            <div className="flex items-center justify-center">
              <Link
                target="_blank"
                href={`https://instagram.com/engluanoliv`}
                className="hover:cursor-pointer text-white px-2 hover:scale-110"
              >
                <Instagram />
              </Link>
              <Link
                target="_blank"
                href={`https://linkedin.com/in/engluanoliv`}
                className="hover:cursor-pointer text-white px-2 hover:scale-110"
              >
                <LinkedIn />
              </Link>
              <Link
                target="_blank"
                href={`https://github.com/engluanoliv`}
                className="hover:cursor-pointer text-white px-2 hover:scale-110"
              >
                <GitHub />
              </Link>
              <Link
                target="_blank"
                href={`mailto:engluanoliv@gmail.com`}
                className="hover:cursor-pointer text-white px-2 hover:scale-110"
              >
                <Email />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
