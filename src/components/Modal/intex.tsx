import { Close } from "@mui/icons-material";
import { motion } from "framer-motion";
import Button from "../Button";

interface ModalTypeProps {
  showModal: boolean;
  onClose?: () => void;
}

export default function Modal({ showModal, onClose }: ModalTypeProps) {
  return (
    <>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white pb-3 rounded-lg shadow-lg max-w-md w-full"
          >
            <div className="flex justify-end py-1 bg-custom-green text-white opacity-90 rounded-t-lg">
              <Close className="hover:cursor-pointer pe-2" onClick={onClose} />
            </div>

            <h2 className="font-poppins font-semibold p-5 text-xl text-gray-700">
              Contact me
            </h2>
            <form className="p-4 mt-4">
              <div className="flex justify-between items-center p-2">
                <div className="relative w-full">
                  <span className="absolute left-0 bottom-8 font-poppins text-xs">
                    Your Name
                  </span>
                  <input
                    className="border-b border-dashed border-custom-black focus:outline-none"
                    type="text"
                    required
                  />
                </div>
                <div className="relative w-full">
                  <span className="absolute left-0 bottom-8 font-poppins text-xs">
                    Your Email
                  </span>
                  <input
                    className="border-b border-dashed border-custom-black focus:outline-none"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="relative w-full mt-12 mb-8 p-2 pe-7">
                <span className="absolute left-2 top-[-20px] font-poppins text-xs">
                  Your Message
                </span>
                <textarea
                  rows={4}
                  className="border-b border-dashed border-custom-black w-full p-2 focus:outline-none resize-none"
                />
              </div>
              <div className="flex justify-end pe-4">
                <Button title="Send" />
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
