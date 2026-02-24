import { motion } from 'motion/react'

export default function LoadingAnimation () {
  const palette = {
    bg: "#000001",       // Pitch black background
    darkBlue: "#07145B", // Deep shadows
    medBlue: "#0C25A2",  // Inner glow
    brightBlue: "#1434CE" // Neon highlights
  };

  const faces = [
    { rotateX: 0, rotateY: 0 },
    { rotateX: 0, rotateY: 180 },
    { rotateX: 0, rotateY: -90 },
    { rotateX: 0, rotateY: 90 },
    { rotateX: 90, rotateY: 0 },
    { rotateX: -90, rotateY: 0 },
  ];

  return (
    <motion.div 
        style={{width: "100%",height: "100vh",display: "flex",justifyContent: "center",alignItems: "center",backgroundColor: palette.bg,perspective: "1000px", overflow: "hidden",position:'absolute'}}
        initial={{opacity:1}}
        transition={{duration:0,delay:4}}
        animate={{width:0,height:0}}
    >
      <motion.div
        style={{width: "100px",height: "100px",position: "relative",transformStyle: "preserve-3d"}}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}>
        {faces.map((face, index) => (
          <motion.div
            key={index}
            style={{position: "absolute",width: "100%",height: "100%",background: "rgba(12, 37, 162, 0.15)", border: `2px solid ${palette.brightBlue}`,boxShadow: `0 0 20px ${palette.medBlue}, inset 0 0 20px ${palette.darkBlue}`,backdropFilter: "blur(5px)",WebkitBackdropFilter: "blur(5px)"}}
            animate={{
              transform: [
                `rotateX(${face.rotateX}deg) rotateY(${face.rotateY}deg) translateZ(50px)`,
                `rotateX(${face.rotateX}deg) rotateY(${face.rotateY}deg) translateZ(80px)`,
                `rotateX(${face.rotateX}deg) rotateY(${face.rotateY}deg) translateZ(50px)`,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}/>
        ))}
      </motion.div>
    </motion.div>
  );
};

