// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function BackgroundSpiral() {
//   return (
//     <div className="fixed w-screen h-screen overflow-hidden">
//       {/* Main rotating container */}
//       <motion.div
//         className="absolute inset-0"
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 25,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       >
//         <Image
//           src="/circular-swirling.svg"
//           alt="Swirling Background"
//           fill
//           className="object-cover opacity-80"
//           priority
//         />
//       </motion.div>

//       {/* Additional layer with different speed for depth */}
//       <motion.div
//         className="absolute inset-0"
//         animate={{ rotate: -360 }}
//         transition={{
//           duration: 35,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       >
//         <Image
//           src="/circular-swirling.svg"
//           alt="Swirling Background Layer 2"
//           fill
//           className="object-cover opacity-40 scale-75"
//           priority
//         />
//       </motion.div>

//       {/* Third layer for complex animation */}
//       <motion.div
//         className="absolute inset-0"
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       >
//         <Image
//           src="/circular-swirling.svg"
//           alt="Swirling Background Layer 3"
//           fill
//           className="object-cover opacity-20 scale-110"
//           priority
//         />
//       </motion.div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import bg from "@/public/images/spiral_clean_reverse.gif"; // Đặt ảnh nền trong thư mục public

export default function BackgroundSpiral() {
  return (
    <div className="pointer-events-non fixed w-full h-screen">
      <Image
        src={bg} // Đặt ảnh trong thư mục public
        alt="Rotating"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
